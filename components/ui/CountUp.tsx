"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string;
  durationMs?: number;
  className?: string;
}

function parseValue(input: string) {
  const match = input.match(/^([\s\S]*?)([\d\s.,\u00A0]+)([\s\S]*)$/);
  if (!match) {
    return { prefix: "", target: 0, suffix: input, decimals: 0, raw: input };
  }
  const [, prefix, numeric, suffix] = match;
  const normalized = numeric.replace(/[\s\u00A0]/g, "").replace(",", ".");
  const target = Number.parseFloat(normalized);
  if (!Number.isFinite(target)) {
    return { prefix: "", target: 0, suffix: input, decimals: 0, raw: input };
  }
  const dot = normalized.indexOf(".");
  const decimals = dot === -1 ? 0 : normalized.length - dot - 1;
  return { prefix, target, suffix, decimals, raw: input };
}

function formatNumber(value: number, decimals: number) {
  const fixed = value.toFixed(decimals);
  const [int, dec] = fixed.split(".");
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
  return dec ? `${grouped},${dec}` : grouped;
}

export function CountUp({ value, durationMs = 1400, className }: CountUpProps) {
  const { prefix, target, suffix, decimals, raw } = parseValue(value);
  const [display, setDisplay] = useState<string>(
    target > 0 ? `${prefix}${formatNumber(0, decimals)}${suffix}` : raw
  );
  const ref = useRef<HTMLSpanElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (target <= 0) {
      setDisplay(raw);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setDisplay(`${prefix}${formatNumber(target, decimals)}${suffix}`);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || startedRef.current) return;
          startedRef.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / durationMs);
            const eased = 1 - Math.pow(1 - t, 3);
            const current = target * eased;
            setDisplay(`${prefix}${formatNumber(current, decimals)}${suffix}`);
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, decimals, durationMs, prefix, suffix, raw]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

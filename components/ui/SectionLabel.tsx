type Props = {
  children: React.ReactNode;
  tone?: "light" | "dark" | "on-accent";
};

export function SectionLabel({ children, tone = "light" }: Props) {
  const toneClass =
    tone === "dark"
      ? "text-fg-muted"
      : tone === "on-accent"
        ? "text-bg"
        : "text-accent";
  return (
    <span
      className={`eyebrow ${toneClass}`}
    >
      {children}
    </span>
  );
}

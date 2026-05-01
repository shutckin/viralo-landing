import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-2": "var(--bg-2)",
        "bg-3": "var(--bg-3)",
        panel: "var(--panel)",
        "panel-2": "var(--panel-2)",
        fg: {
          DEFAULT: "var(--fg)",
          soft: "var(--fg-soft)",
          muted: "var(--fg-muted)",
          faint: "var(--fg-faint)",
          line: "var(--line)",
          "line-strong": "var(--line-strong)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          2: "var(--accent-2)",
          dim: "var(--accent-dim)",
        },
        alert: "var(--alert)",
        paper: "var(--paper)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        shell: "1440px",
        "shell-tight": "1200px",
      },
      borderRadius: {
        xs: "var(--radius-1)",
        sm: "var(--radius-2)",
        DEFAULT: "var(--radius-2)",
        md: "var(--radius-3)",
        lg: "var(--radius-4)",
        xl: "var(--radius-4)",
        "2xl": "var(--radius-4)",
        "3xl": "var(--radius-4)",
        full: "var(--radius-4)",
      },
      transitionTimingFunction: {
        "out-cuberto": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;

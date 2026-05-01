type Props = {
  name: string;
  className?: string;
};

const paths: Record<string, React.ReactNode> = {
  arrow: (
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  arrowUpRight: (
    <path
      d="M7 17L17 7M9 7h8v8"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  play: (
    <path d="M8 5.5v13l11-6.5-11-6.5z" fill="currentColor" />
  ),
  music: (
    <>
      <path
        d="M9 17V7l11-2v10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="7" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.8" fill="none" />
      <circle cx="18" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.8" fill="none" />
    </>
  ),
  camera: (
    <>
      <rect
        x="3"
        y="6"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
      />
      <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.8" fill="none" />
      <path
        d="M8 6l1.5-2h5L16 6"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinejoin="round"
      />
    </>
  ),
  cap: (
    <>
      <path
        d="M2 9l10-4 10 4-10 4L2 9z"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M6 11v4c0 1.7 2.7 3 6 3s6-1.3 6-3v-4"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
      />
    </>
  ),
  book: (
    <path
      d="M4 5a2 2 0 012-2h12v16H6a2 2 0 00-2 2V5zm2 14h11"
      stroke="currentColor"
      strokeWidth="1.8"
      fill="none"
      strokeLinejoin="round"
    />
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" fill="none" />
      <path
        d="M4 20c1.5-4 4.5-6 8-6s6.5 2 8 6"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
      />
    </>
  ),
  fire: (
    <path
      d="M12 3s5 4 5 9a5 5 0 11-10 0c0-2 1-3 1-5 0 2 2 3 2 3s-1-3 2-7z"
      stroke="currentColor"
      strokeWidth="1.8"
      fill="none"
      strokeLinejoin="round"
    />
  ),
  trending: (
    <>
      <path
        d="M3 17l6-6 4 4 7-7"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 8h6v6"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  sparkles: (
    <>
      <path
        d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M19 15l0.8 2.2L22 18l-2.2 0.8L19 21l-0.8-2.2L16 18l2.2-0.8L19 15z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinejoin="round"
      />
    </>
  ),
  send: (
    <path
      d="M4 12L20 5l-5 15-3-7-8-1z"
      stroke="currentColor"
      strokeWidth="1.8"
      fill="none"
      strokeLinejoin="round"
    />
  ),
  download: (
    <path
      d="M12 4v12m0 0l-5-5m5 5l5-5M5 20h14"
      stroke="currentColor"
      strokeWidth="1.8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  heart: (
    <path
      d="M12 20s-7-4.5-7-10a4 4 0 017-2.7A4 4 0 0119 10c0 5.5-7 10-7 10z"
      stroke="currentColor"
      strokeWidth="1.8"
      fill="none"
      strokeLinejoin="round"
    />
  ),
};

export function Icon({ name, className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}

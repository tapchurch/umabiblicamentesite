const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  viewBox: "0 0 24 24",
};

export const Seta = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} {...base}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const SetaExterna = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} {...base}>
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

export const Mao = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} {...base}>
    <path d="M7 11V6a2 2 0 0 1 4 0v4M11 10V4a2 2 0 0 1 4 0v6M15 10V6a2 2 0 0 1 4 0v8a6 6 0 0 1-6 6h-1a6 6 0 0 1-5-3l-2.5-4a1.8 1.8 0 0 1 3-2L7 13" />
  </svg>
);

export const Inclusao = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12h8M12 8v8" />
  </svg>
);

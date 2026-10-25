import type { IconName } from "@/types";

/**
 * ICON SET
 * Inline SVGs so nothing depends on an external icon library or network request.
 * To add an icon: extend IconName in types/index.ts then add a case below.
 */

interface IconProps {
  name: IconName;
  className?: string;
}

/** Shared stroked path, keeps every icon visually consistent. */
function Stroke({ d }: { d: string }) {
  return (
    <path
      d={d}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

export function Icon({ name, className = "h-5 w-5" }: IconProps) {
  const svg = { viewBox: "0 0 24 24", className };

  switch (name) {
    case "code":
      return (
        <svg {...svg}>
          <Stroke d="M8 6l-5 6 5 6M16 6l5 6-5 6M14 4l-4 16" />
        </svg>
      );

    case "server":
      return (
        <svg {...svg}>
          <rect x="3" y="4" width="18" height="6" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <rect x="3" y="14" width="18" height="6" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <Stroke d="M7 7h.01M7 17h.01" />
        </svg>
      );

    case "photoshop":
      return (
        <svg {...svg}>
          <rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <Stroke d="M8 17V8h3a2.5 2.5 0 0 1 0 5H8M15.5 15.5c1.5.8 3 .3 3-.8 0-1.6-3-1-3-2.6 0-1 1.4-1.5 2.8-.8" />
        </svg>
      );

    case "motion":
      return (
        <svg {...svg}>
          <Stroke d="M5 19c4-14 10-14 14 0" />
          <circle cx="5" cy="19" r="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="19" cy="19" r="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );

    case "pen":
      return (
        <svg {...svg}>
          <Stroke d="M12 3l7 7-9 9-4 1 1-4 5-13zM9.5 8.5l6 6" />
        </svg>
      );

    case "typescript":
      return (
        <svg {...svg}>
          <rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <Stroke d="M7 11h4M9 11v6M14 17c2 .8 3.6 0 3.6-1.3 0-1.8-3.4-1.2-3.4-3 0-1.2 1.6-1.9 3.3-1.1" />
        </svg>
      );

    case "javascript":
      return (
        <svg {...svg}>
          <rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <Stroke d="M11 10v5a2 2 0 0 1-3.2 1.6M14.5 16.2c1.8.9 3.5.2 3.5-1.1 0-1.8-3.3-1.3-3.3-3 0-1.2 1.5-1.8 3.1-1" />
        </svg>
      );

    case "python":
      return (
        <svg {...svg}>
          <Stroke d="M12 3c-3 0-4 1.2-4 3v2h8v1H7c-2 0-3 1.4-3 4s1 4 3 4h1v-3c0-1.8 1-3 4-3h4c1.8 0 3-1 3-3V6c0-1.8-1.2-3-4-3h-3z" />
          <circle cx="10" cy="6" r="0.9" fill="currentColor" />
        </svg>
      );

    case "node":
      return (
        <svg {...svg}>
          <Stroke d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
          <Stroke d="M9.5 14.5c.5 1 1.6 1.4 2.8 1.4 1.6 0 2.6-.7 2.6-1.8 0-2.2-5-1.2-5-3.6 0-1.1 1-1.9 2.6-1.9 1.2 0 2.2.4 2.6 1.3" />
        </svg>
      );

    case "search":
      return (
        <svg {...svg}>
          <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <Stroke d="M20 20l-3.6-3.6" />
        </svg>
      );

    case "menu":
      return (
        <svg {...svg}>
          <Stroke d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );

    case "close":
      return (
        <svg {...svg}>
          <Stroke d="M6 6l12 12M18 6L6 18" />
        </svg>
      );

    case "spark":
      return (
        <svg {...svg}>
          <Stroke d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" />
        </svg>
      );

    default:
      return (
        <svg {...svg}>
          <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
  }
}

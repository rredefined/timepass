import type { SocialName } from "@/types";

/**
 * BRAND LOGOS
 * Filled SVG marks for the social links. Kept separate from Icon.tsx because
 * these are solid brand shapes rather than stroked interface icons.
 */

const PATHS: Record<SocialName, string> = {
  Discord:
    "M19.3 5.3A16 16 0 0 0 15.4 4l-.3.5c1.4.4 2.6 1 3.7 1.7a13 13 0 0 0-11.6 0A12 12 0 0 1 11 4.5L10.7 4a16 16 0 0 0-4 1.3C2.6 11.2 3.4 16 3.4 16a16 16 0 0 0 4.8 2.4l1-1.5c-.8-.3-1.6-.7-2.3-1.2l.5-.4a11.4 11.4 0 0 0 9.4 0l.5.4c-.7.5-1.5.9-2.3 1.2l1 1.5A16 16 0 0 0 20.7 16s.8-4.8-1.4-10.7zM9.3 14c-.8 0-1.5-.8-1.5-1.8S8.5 10.5 9.3 10.5s1.5.8 1.5 1.7-.7 1.8-1.5 1.8zm5.4 0c-.8 0-1.5-.8-1.5-1.8s.7-1.7 1.5-1.7 1.5.8 1.5 1.7-.7 1.8-1.5 1.8z",
  Github:
    "M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z",
  Youtube:
    "M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8A26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3L10 15z",
};

export function SocialIcon({ name, className = "h-5 w-5" }: { name: SocialName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d={PATHS[name]} />
    </svg>
  );
}

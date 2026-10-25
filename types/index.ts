/**
 * SHARED TYPES
 * Used by the config file and the components that consume it.
 */

/** Key of an icon defined in components/ui/Icon.tsx. */
export type IconName =
  | "typescript"
  | "javascript"
  | "python"
  | "node"
  | "photoshop"
  | "motion"
  | "pen"
  | "code"
  | "server"
  | "search"
  | "menu"
  | "close"
  | "spark";

export type SocialName = "Discord" | "Github" | "Youtube";

export interface NavLink {
  label: string;
  href: string;
  /** Controls whether the link appears in the mobile slide up menu. */
  showOnMobile: boolean;
}

export interface Social {
  name: SocialName;
  href: string;
  /** Secondary line shown under the name in the mobile menu. */
  handle: string;
}

export interface Stat {
  label: string;
  value: string;
}

/** Expandable card used by the Skills and Design Tools sections. */
export interface Card {
  title: string;
  body: string;
  icon: IconName;
}

export interface Tech {
  name: string;
  icon: IconName;
}

"use client";

import { Icon } from "@/components/ui/Icon";
import { callToAction, navLinks, socials } from "@/config/site";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  activeLink: string;
  onSelectLink: (label: string) => void;
}

/**
 * Full screen glassmorphism panel that slides up from the bottom on phones.
 * Items fade in one after another, controlled by the staggered delay below.
 */
export function MobileMenu({ open, onClose, activeLink, onSelectLink }: MobileMenuProps) {
  const links = navLinks.filter((link) => link.showOnMobile);

  /** Each row enters slightly after the previous one. */
  const delay = (index: number) => (open ? `${100 + index * 70}ms` : "0ms");

  return (
    <div
      className={`glass-overlay fixed inset-0 z-50 flex flex-col transform-gpu transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
        open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="flex justify-end p-5">
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="rounded-full border border-white/30 bg-white/10 p-2.5 text-white backdrop-blur-xl transition hover:bg-white/20 active:scale-95"
        >
          <Icon name="close" className="h-7 w-7" />
        </button>
      </div>

      {/* Centred navigation and social links. */}
      <nav className="flex flex-1 flex-col items-center justify-center gap-6">
        {links.map((link, index) => (
          <button
            key={link.label}
            type="button"
            onClick={() => {
              onSelectLink(link.label);
              onClose();
            }}
            style={{ transitionDelay: delay(index) }}
            className={`text-3xl font-extrabold uppercase tracking-wide transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            } ${
              activeLink === link.label
                ? "text-cyan-300 drop-shadow-[0_0_18px_rgba(120,220,255,0.6)]"
                : "text-white"
            }`}
          >
            {link.label}
          </button>
        ))}

        {socials.map((social, index) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            style={{ transitionDelay: delay(links.length + index) }}
            className={`text-3xl font-extrabold uppercase tracking-wide text-white transition-all duration-500 hover:text-cyan-300 ${
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {social.name}
          </a>
        ))}
      </nav>

      {/* Bottom button with the rotating gradient border. */}
      <div className="px-6 pb-12">
        <a
          href={callToAction.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          style={{ transitionDelay: open ? "520ms" : "0ms" }}
          className={`gradient-border block w-full rounded-full p-[2px] shadow-[0_10px_40px_rgba(120,220,255,0.35)] transition-all duration-500 active:scale-[0.98] ${
            open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <span className="block w-full rounded-full bg-[#06253a]/85 py-4 text-center text-sm font-extrabold uppercase tracking-[0.15em] text-white backdrop-blur-xl">
            {callToAction.mobileLabel}
          </span>
        </a>
      </div>
    </div>
  );
}

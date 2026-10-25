"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navLinks, socials } from "@/config/site";

/**
 * Top bar. Shows tabs and social buttons on desktop, and a hamburger that
 * opens the full screen MobileMenu on small screens.
 */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(navLinks[0]?.label ?? "");

  /** Stop the page behind the menu from scrolling while it is open. */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="relative z-40 w-full">
      <div className="mx-auto flex max-w-[1400px] items-center gap-3 px-4 py-4 sm:px-6 lg:px-10">
        <Logo />

        {/* Desktop tabs with the sliding underline. */}
        <nav className="ml-4 hidden items-center gap-6 md:flex lg:ml-10 lg:gap-9">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => setActiveLink(link.label)}
              className={`relative text-[15px] font-semibold tracking-wide transition lg:text-lg ${
                activeLink === link.label ? "text-white" : "text-sky-100/75 hover:text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-[2px] rounded-full bg-gradient-to-r from-sky-200 to-cyan-400 transition-all ${
                  activeLink === link.label ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          {/* Social buttons, wide screens only. */}
          <div className="mr-1 hidden items-center gap-1.5 md:flex">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className="glass rounded-full p-2 text-sky-50 transition hover:bg-white/25 hover:text-white"
              >
                <SocialIcon name={social.name} />
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="glass rounded-full p-2 text-white md:hidden"
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeLink={activeLink}
        onSelectLink={setActiveLink}
      />
    </header>
  );
}

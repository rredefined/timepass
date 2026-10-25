"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import type { Card } from "@/types";

/**
 * Glass card with an icon, a title and a body that is clamped to three lines
 * until the user taps it. Used by both the Skills and Design Tools sections.
 */
export function ExpandableCard({ card }: { card: Card }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setExpanded((value) => !value)}
      aria-expanded={expanded}
      className="glass w-full rounded-2xl p-3 text-left transition hover:bg-white/15 sm:p-4"
    >
      <div className="flex gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-sky-200/40 to-cyan-500/30 text-white ring-1 ring-white/30 sm:h-11 sm:w-11">
          <Icon name={card.icon} />
        </span>

        <div className="min-w-0">
          <h4 className="text-sm font-bold text-white sm:text-[15px]">{card.title}</h4>

          <p className={`mt-1 text-[11px] leading-relaxed text-sky-50/80 sm:text-xs ${expanded ? "" : "line-clamp-3"}`}>
            {card.body}
          </p>

          <span className="mt-1 inline-block text-[10px] font-semibold uppercase tracking-wider text-cyan-200/80">
            {expanded ? "Show less" : "Read more"}
          </span>
        </div>
      </div>
    </button>
  );
}

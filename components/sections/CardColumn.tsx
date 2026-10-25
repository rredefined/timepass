import { ExpandableCard } from "@/components/ui/ExpandableCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { Card } from "@/types";

/** A right hand column section: a right aligned heading plus a stack of cards. */
export function CardColumn({ title, cards }: { title: string; cards: Card[] }) {
  return (
    <section>
      <SectionTitle align="right" className="mb-3">
        {title}
      </SectionTitle>

      <div className="flex flex-col gap-3">
        {cards.map((card) => (
          <ExpandableCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}

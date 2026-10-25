import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { assets, profile, sections, stats } from "@/config/site";

/**
 * Main panel: name, role, stat cards and the About paragraph, with the
 * artwork floating on the right from the small breakpoint upwards.
 */
export function Hero({ className = "" }: { className?: string }) {
  return (
    <section className={`panel relative flex flex-col overflow-hidden p-5 sm:p-7 ${className}`}>
      {/* Artwork, tablet and desktop. */}
      <div className="pointer-events-none absolute -right-6 bottom-0 hidden h-[95%] w-[46%] sm:block">
        <div className="relative h-full w-full animate-floaty">
          <Image
            src={assets.avatar}
            alt={profile.name}
            fill
            priority
            className="object-contain object-bottom drop-shadow-[0_10px_40px_rgba(0,60,110,0.55)]"
          />
        </div>
      </div>

      <div className="relative z-10 sm:max-w-[58%]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="font-garesin text-4xl font-normal tracking-wide text-white drop-shadow-[0_2px_10px_rgba(0,60,110,0.7)] sm:text-5xl">
              {profile.name.toUpperCase()}
            </h2>
            <p className="font-garesin text-xl font-normal tracking-wide text-sky-100/80 sm:text-2xl">
              {profile.title}
            </p>
          </div>

          <span className="glass grid h-9 w-9 shrink-0 place-items-center rounded-full text-cyan-100 sm:hidden">
            <Icon name="spark" />
          </span>
        </div>

        {/* Artwork, phones only. */}
        <div className="relative mx-auto my-4 h-56 w-full sm:hidden">
          <Image src={assets.avatar} alt={profile.name} fill className="object-contain" />
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <div className="grid flex-1 grid-cols-2 gap-2 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-xl px-2.5 py-1.5 text-center">
                <p className="text-[9px] uppercase tracking-wider text-sky-100/70">{stat.label}</p>
                <p className="text-xs font-bold text-white sm:text-sm">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <h3 className="mt-6 text-lg font-bold text-white sm:text-xl">{sections.about}</h3>
        <p className="mt-2 max-h-56 overflow-y-auto pr-2 text-[12px] leading-relaxed text-sky-50/85 sm:text-[13px]">
          {profile.about}
        </p>
      </div>
    </section>
  );
}

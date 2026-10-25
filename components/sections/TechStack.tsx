import { Icon } from "@/components/ui/Icon";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { sections, techStack } from "@/config/site";

/** Icon grid: three columns on phones, six from the small breakpoint up. */
export function TechStack({ className = "" }: { className?: string }) {
  return (
    <section className={`panel flex flex-col p-5 sm:p-6 ${className}`}>
      <SectionTitle className="mb-4">{sections.techStack}</SectionTitle>

      <div className="grid flex-1 grid-cols-3 content-center gap-3 sm:grid-cols-6">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            title={tech.name}
            className="glass group flex flex-col items-center gap-2 rounded-2xl p-3 transition hover:bg-white/20"
          >
            <span className="text-cyan-50 transition group-hover:scale-110">
              <Icon name={tech.icon} className="h-8 w-8" />
            </span>
            <span className="text-center text-[10px] font-semibold leading-tight text-sky-100/80">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

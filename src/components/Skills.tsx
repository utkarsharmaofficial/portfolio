import { skills } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading index="04" title="Skills" />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.05}>
              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="mb-3 font-mono text-xs tracking-wide text-accent uppercase">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
                {group.note && <p className="mt-3 text-sm text-muted italic">{group.note}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

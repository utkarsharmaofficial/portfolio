import { experience } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading index="02" title="Experience" />
        </Reveal>

        <div className="relative space-y-12 border-l border-border pl-8">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${job.period}`} delay={i * 0.08}>
              <div className="relative">
                <span className="absolute top-1.5 -left-[calc(2rem+5px)] h-2.5 w-2.5 rounded-full border-2 border-accent bg-background" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {job.role} <span className="text-muted">· {job.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted">{job.period}</span>
                </div>
                <p className="mb-3 font-mono text-xs text-muted">{job.location}</p>
                <ul className="space-y-2">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

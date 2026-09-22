import { GraduationCap } from "lucide-react";
import Image from "next/image";
import { education, profile } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading index="01" title="About" />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal delay={0.05}>
            <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-xl border border-border bg-surface">
              <Image
                src="/photo.jpg"
                alt={profile.name}
                fill
                sizes="(min-width: 1024px) 320px, 60vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6">
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              {profile.summary}
            </p>
            <div className="flex items-start gap-3 rounded-lg border border-border bg-surface px-4 py-3">
              <GraduationCap className="mt-0.5 shrink-0 text-accent" size={20} />
              <div>
                <p className="text-sm font-medium text-foreground">{education.school}</p>
                <p className="font-mono text-xs text-muted">
                  {education.degree} · {education.period}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

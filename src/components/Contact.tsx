import { Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

const links = [
  { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "linkedin.com/in/utkarsh-sharma3112", href: profile.linkedin, icon: LinkedinIcon },
  { label: "github.com/utkarsharmaofficial", href: profile.github, icon: GithubIcon },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading index="05" title="Contact" />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="rounded-xl border border-border bg-surface p-8 sm:p-10">
            <p className="max-w-lg text-base text-muted sm:text-lg">
              I&apos;m open to interesting conversations about distributed systems, AI
              infrastructure, and everything in between. Reach out through any of these.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              {links.map(({ label, href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-lg border border-border px-4 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon width={16} height={16} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

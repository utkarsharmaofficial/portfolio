"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

const lines = [
  { prompt: "whoami", output: profile.name },
  { prompt: "role --current", output: profile.role },
  { prompt: "location", output: profile.location },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center px-6 pt-24 pb-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 font-mono text-sm text-accent"
            >
              Hi, I&apos;m
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="glow-text text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              {profile.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 max-w-xl text-lg text-muted"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="rounded-md bg-accent px-4 py-2 font-mono text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-md border border-border px-4 py-2 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Get in touch
              </a>
              <div className="ml-1 flex items-center gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-muted transition-colors hover:text-accent"
                >
                  <GithubIcon width={20} height={20} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-muted transition-colors hover:text-accent"
                >
                  <LinkedinIcon width={20} height={20} />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  className="text-muted transition-colors hover:text-accent"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/40"
          >
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
              <span className="ml-3 font-mono text-xs text-muted">bash — 80x24</span>
            </div>
            <div className="space-y-2.5 px-5 py-6 font-mono text-sm">
              {lines.map((line, i) => (
                <motion.div
                  key={line.prompt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.25 }}
                >
                  <p className="text-muted">
                    <span className="text-accent">➜</span> ~ {line.prompt}
                  </p>
                  <p className="pl-4 text-foreground">{line.output}</p>
                </motion.div>
              ))}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-muted"
              >
                <span className="text-accent">➜</span> ~{" "}
                <span className="cursor-blink text-foreground">▍</span>
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-accent"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}

import Section from "./Section";
import Reveal from "./Reveal";
import { about } from "@/data/content";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Good code means good business.">
      <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            <p className="text-foreground">{about.intro}</p>
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
            {about.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-2xl border border-border bg-surface p-5"
              >
                <div className="text-3xl font-bold text-accent">{h.value}</div>
                <div className="mt-1 text-sm text-muted">{h.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

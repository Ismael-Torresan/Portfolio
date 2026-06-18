import Section from "./Section";
import Reveal from "./Reveal";
import { experiences } from "@/data/content";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked.">
      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-[calc(33%+7px)]" />
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company + exp.period} delay={i * 0.08}>
              <div className="relative grid gap-3 pl-8 md:grid-cols-[33%_1fr] md:gap-8 md:pl-0">
                <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-background md:left-[33%]" />
                <div className="md:pr-8 md:text-right">
                  <div className="flex items-center gap-2 md:justify-end">
                    <span className="text-sm font-medium text-muted">
                      {exp.period}
                    </span>
                    {exp.current && (
                      <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-medium text-accent">
                        Now
                      </span>
                    )}
                  </div>
                </div>
                <div className="md:pl-8">
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.role}{" "}
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-accent underline-offset-4 hover:underline"
                      >
                        @ {exp.company}
                      </a>
                    ) : (
                      <span className="text-accent">@ {exp.company}</span>
                    )}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">
                    {exp.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

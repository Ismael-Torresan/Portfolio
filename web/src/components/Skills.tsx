import Section from "./Section";
import Reveal from "./Reveal";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I work with.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, gi) => (
          <Reveal key={group.group} delay={gi * 0.08}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
                {group.group}
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {group.items.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <li
                      key={skill.name}
                      className="group flex items-center gap-2.5 rounded-lg border border-transparent px-2 py-1.5 transition-colors hover:border-border hover:bg-surface-2"
                    >
                      <Icon
                        size={20}
                        className="text-muted transition-colors group-hover:text-accent"
                      />
                      <span className="text-sm text-foreground">
                        {skill.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

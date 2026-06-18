import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Reveal from "./Reveal";
import { profile } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-20 md:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-16 text-center md:px-12">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full blur-[100px]"
            style={{ background: "var(--glow)" }}
          />
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Contact
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build something together.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            Have a project, a role, or just want to say hi? My inbox is always
            open.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <FiMail /> {profile.email}
          </a>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <FiGithub size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <FiLinkedin size={18} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

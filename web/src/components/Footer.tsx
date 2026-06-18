import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &
          Tailwind.
        </p>
        <p>
          <a
            href="#home"
            className="transition-colors hover:text-foreground"
          >
            Back to top ↑
          </a>
        </p>
      </div>
    </footer>
  );
}

"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden  text-[var(--foreground)]"
    >
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-[var(--muted-foreground)] to-transparent opacity-50"
      />

      <div className="relative mx-auto max-w-[1320px] px-5 pb-8 pt-20 sm:px-8 lg:px-12 lg:pt-24">
        {/* Top section */}
        <div className="max-w-[760px]">
          {/* Small label */}
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.055] px-5 py-3">
            <InfoIcon />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]/85 sm:text-sm">
              Let&apos;s Connect
            </span>
          </div>

          {/* Heading */}
          <h2 className="max-w-[700px] text-[44px] font-semibold leading-[0.98] tracking-[-0.045em] text-[var(--foreground)] sm:text-[58px] lg:text-[72px]">
            Let&apos;s Build
            <br />
            Something Great
          </h2>

          {/* Description */}
          <div className="mt-7 flex max-w-[680px] gap-4">
            <div className="w-px shrink-0 bg-white/20" />

            <p className="text-[15px] leading-7 text-[var(--muted-foreground)] sm:text-[17px]">
              I&apos;m open to new opportunities, freelance projects,
              <br className="hidden sm:block" />
              and collaborations. Let&apos;s create something amazing together.
            </p>
          </div>

          {/* Contact actions */}
          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            {/* Email card */}
            <a
              href="mailto:haghighikia32@gmail.com"
              className="group flex min-w-[300px] items-center gap-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.035] px-5 py-4 transition hover:border-white/20 hover:bg-white/[0.08]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-white/[0.07] text-white/80">
                <MailIcon />
              </div>

              <div>
                <div className="text-[15px] font-semibold text-[var(--foreground)]">
                  haghighikia32@gmail.com
                </div>
                <div className="mt-1 text-xs text-[var(--subtle-foreground)]">
                  Gmail me
                </div>
              </div>
            </a>

            {/* Get in touch */}
            <a
              href="mailto:hello@abolfazl.dev"
              className="inline-flex h-[58px] items-center justify-center gap-3 rounded-lg bg-[var(--foreground)] px-7 text-sm font-semibold text-[var(--background)] transition duration-300 hover:bg-white/85"
            >
              Get In Touch
              <ExternalLinkIcon />
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[58px] items-center justify-center gap-3 rounded-lg border border-white/25 bg-transparent px-7 text-sm font-semibold text-[var(--foreground)] transition duration-300 hover:border-white/50 hover:bg-white/[0.05]"
            >
              View Resume
              <FileIcon />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px w-full bg-white/10 lg:mt-16" />

        {/* Footer columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.15fr] lg:gap-14">
          {/* Navigation */}
          <FooterColumn
            icon={<CompassIcon />}
            title="Navigation"
            links={[
              { label: "Home", href: "#home" },
              { label: "Projects", href: "#projects" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" },
            ]}
          />

          {/* Services */}
          <FooterColumn
            icon={<BriefcaseIcon />}
            title="Services"
            links={[
              { label: "Web Development", href: "#skills" },
              { label: "Mobile Development", href: "#skills" },
              { label: "NextJS Development", href: "#skills" },
              { label: "Flutter Development", href: "#skills" },
            ]}
          />

          {/* Socials */}
          <FooterColumn
            icon={<LinkIcon />}
            title="Socials"
            links={[
              {
                label: "GitHub",
                href: "https://github.com/abolfazl-hqq",
                external: true,
              },
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/yourusername",
                external: true,
              },
              {
                label: "Email",
                href: "mailto:hello@abolfazl.dev",
              },
              {
                label: "Twitter / X",
                href: "https://x.com/yourusername",
                external: true,
              },
            ]}
          />

          {/* Quality block */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <SparklesIcon />
              <h3 className="text-xs font-semibold uppercase tracking-[0.17em] text-[var(--muted-foreground)] sm:text-sm">
                Focused on Quality
              </h3>
            </div>

            <p className="max-w-[280px] text-sm leading-7 text-[var(--muted-foreground)] sm:text-[15px]">
              Clean code, thoughtful design, and performant solutions that
              deliver real value.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] px-5 py-3">
              <CheckCircleIcon />
              <span className="text-xs font-medium text-[var(--foreground)] sm:text-sm">
                Quality First. User Focused.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mb-7 mt-12 h-px w-full bg-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a
              href="#home"
              aria-label="Go to home"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-sm text-white/80 transition hover:border-white/30 hover:text-white"
            >
              N
            </a>

            <p className="text-xs text-[var(--subtle-foreground)] sm:text-sm">
              © {new Date().getFullYear()} Abolfazl Haghighi. All rights
              reserved.
            </p>
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex w-fit items-center gap-4 text-sm text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]"
          >
            Back to Top

            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 transition group-hover:border-white/35 group-hover:bg-white/[0.05]">
              <ArrowUpIcon />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ icon, title, links }) {
  return (
    <div>
      <div className="mb-5 flex items-center gap-3">
        <span className="text-white/55">{icon}</span>

        <h3 className="text-xs font-semibold uppercase tracking-[0.17em] text-[var(--muted-foreground)] sm:text-sm">
          {title}
        </h3>
      </div>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="text-sm text-[var(--muted-foreground)] transition-colors duration-200 hover:text-[var(--foreground)] sm:text-[15px]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- ICONS ---------------- */

function InfoIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="text-[var(--foreground)]/85"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2.3 4.7-4.7 2.3 2.3-4.7 4.7-2.3Z" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
      <path d="M10 12v2h4v-2" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[var(--muted-foreground)]"
    >
      <path d="m12 3-1.2 3.2a6 6 0 0 1-3.6 3.6L4 11l3.2 1.2a6 6 0 0 1 3.6 3.6L12 19l1.2-3.2a6 6 0 0 1 3.6-3.6L20 11l-3.2-1.2a6 6 0 0 1-3.6-3.6L12 3Z" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[var(--foreground)]/80"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.3 2.3 4.8-5" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}
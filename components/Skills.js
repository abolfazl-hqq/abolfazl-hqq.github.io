function MobileIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden="true">
      <rect x="18" y="8" width="28" height="48" rx="6" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="32" cy="46" r="2.2" fill="currentColor" />
      <rect x="24" y="15" width="16" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function BrowserIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden="true">
      <rect x="12" y="16" width="40" height="30" rx="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M16 25h32M23 18v7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="25" cy="20" r="1.5" fill="currentColor" />
      <circle cx="31" cy="20" r="1.5" fill="currentColor" />
      <circle cx="37" cy="20" r="1.5" fill="currentColor" />
    </svg>
  );
}

function NextIcon() {
  return <span className="text-[64px] font-black leading-none tracking-[-0.08em]">N</span>;
}

function FlutterIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden="true">
      <path d="M39 10 16 33l8 8 23-23h-8Z" fill="currentColor" opacity="0.95" />
      <path d="M18 33l17 17h10L28 33h-10Z" fill="currentColor" opacity="0.95" />
      <path d="M24 39 38 53h9L33 39h-9Z" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

const skills = [
  {
    title: "Mobile\nDevelopment",
    description: "Building performant and beautiful mobile apps for Android and iOS platforms.",
    icon: <MobileIcon />,
  },
  {
    title: "Web\nDevelopment",
    description: "Creating responsive, user-friendly websites and web applications with modern technologies.",
    icon: <BrowserIcon />,
  },
  {
    title: "NextJS",
    description: "Building fast, SEO-friendly and scalable applications with Next.js.",
    icon: <NextIcon />,
  },
  {
    title: "Flutter",
    description: "Crafting cross-platform mobile applications with a single codebase using Flutter.",
    icon: <FlutterIcon />,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[700px]">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-white/70">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-white/20 text-[9px] text-white/80">
                i
              </span>
              My Skills
            </div>

            <h2>
              Skills I Bring
              <span className="mt-1 block">to the Table</span>
            </h2>
          </div>

          <div className="max-w-[420px] text-[15px] leading-[1.7] text-white/55 sm:text-[18px] lg:pb-3">
            Technologies and tools I use to build clean, scalable and efficient applications.
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {skills.map((skill) => (
            <article
              key={skill.title}
              className="skill-card rounded-[30px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(18,18,18,0.92),rgba(10,10,10,0.92))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-6"
            >
              <div className="skill-icon-panel mb-8 flex h-[150px] items-center justify-center rounded-[22px] border border-white/[0.05] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),rgba(255,255,255,0.02)_50%,transparent_100%)] text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <div className="skill-icon flex items-center justify-center text-white/90">{skill.icon}</div>
              </div>

              <h3 className="text-white font-bold text-3xl">
                {skill.title}
              </h3>

              <p className="mt-4 text-[13px] leading-[1.7] text-white/50 sm:text-[14px]">
                {skill.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

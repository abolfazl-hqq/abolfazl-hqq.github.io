// components/project/ProjectDetails.jsx

import Image from "next/image";
import Link from "next/link";

function TechnologyIcon({ name }) {
  const normalizedName = name.toLowerCase();

  if (normalizedName.includes("flutter")) {
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <path d="M28.2 7 10 25.2l6.3 6.3L34.5 13.3H28.2Z" fill="#54C5F8" />
        <path d="m16.3 25.2 13.3 13.3h8.9L25.2 25.2h-8.9Z" fill="#39B9F3" />
        <path d="m22.3 31.2 10.4 10.4h8.9L31.2 31.2h-8.9Z" fill="#027DFD" />
      </svg>
    );
  }

  if (normalizedName.includes("next")) {
    return (
      <span
        className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-xl font-bold text-white ring-1 ring-white/20"
        aria-hidden="true"
      >
        N
      </span>
    );
  }

  if (normalizedName.includes("django")) {
    return (
      <span
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#092e20] text-xl font-bold text-[#44b78b]"
        aria-hidden="true"
      >
        dj
      </span>
    );
  }

  if (normalizedName.includes("tailwind")) {
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <path
          d="M10 24c2.7-7.1 6.8-10.7 12.2-10.7 8.1 0 8.9 6.1 13.8 6.1 1.3 0 2.6-.3 4-.9-2.7 7.1-6.8 10.7-12.2 10.7-8.1 0-8.9-6.1-13.8-6.1-1.3 0-2.6.3-4 .9Z"
          fill="#38BDF8"
        />
        <path
          d="M10 35c2.7-7.1 6.8-10.7 12.2-10.7 8.1 0 8.9 6.1 13.8 6.1 1.3 0 2.6-.3 4-.9-2.7 7.1-6.8 10.7-12.2 10.7-8.1 0-8.9-6.1-13.8-6.1-1.3 0-2.6.3-4 .9Z"
          fill="#0EA5E9"
        />
      </svg>
    );
  }

  if (normalizedName.includes("firebase")) {
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <path d="m10 36 4.6-27 7.1 13.2L10 36Z" fill="#FFA000" />
        <path d="m14.6 9 7.1 13.2 3.1-5.7L14.6 9Z" fill="#F57C00" />
        <path d="M10 36 27.2 6l2.5 13.2L38 36H10Z" fill="#FFCA28" />
        <path d="M10 36h28L27.2 41 10 36Z" fill="#F9A825" />
      </svg>
    );
  }

  if (normalizedName.includes("dart")) {
    return (
      <span
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0175C2] text-sm font-bold text-white"
        aria-hidden="true"
      >
        dart
      </span>
    );
  }

  if (normalizedName.includes("figma")) {
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <path d="M16 4h8v13h-8a6.5 6.5 0 1 1 0-13Z" fill="#F24E1E" />
        <path d="M24 4h8a6.5 6.5 0 1 1 0 13h-8V4Z" fill="#FF7262" />
        <circle cx="30.5" cy="23.5" r="6.5" fill="#1ABCFE" />
        <path d="M16 30h8v7.5a6.5 6.5 0 1 1-8-6.3V30Z" fill="#0ACF83" />
        <path d="M16 17h8v13h-8a6.5 6.5 0 1 1 0-13Z" fill="#A259FF" />
      </svg>
    );
  }

  if (normalizedName.includes("hive")) {
    return (
      <span
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFC107] text-xl font-bold text-[#422006]"
        aria-hidden="true"
      >
        H
      </span>
    );
  }

  return null;
}

export default function ProjectDetails({ project }) {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 ">

        {/* ========================================
            HERO
        ======================================== */}

        <section className="grid min-h-[650px] items-center gap-12 pt-32 pb-16 mt-24 lg:grid-cols-[0.9fr_1.1fr] lg:py-12">

          {/* Left */}
          <div>
            {project.featured && (
              <div className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-white/50">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/30">
                  i
                </span>

                Featured Project
              </div>
            )}

            <h1 className="text-6xl font-semibold tracking-[-0.06em] sm:text-7xl lg:text-[88px] lg:leading-[0.9]">
              {project.title}
            </h1>

            <p className="mt-7 text-lg text-white/60">
              {project.subtitle}
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/45 sm:text-[15px]">
              {project.description}
            </p>


            {/* Tags */}

            <div className="mt-7 flex flex-wrap gap-2">
              {project.tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/[0.08] bg-white/[0.045] px-3 py-2 text-xs text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>


            {/* Buttons */}

            <div className="mt-8 flex flex-wrap gap-3">

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white/85"
                >
                  View Live Demo

                  <ExternalIcon />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-lg border border-white/25 px-6 py-3.5 text-sm font-semibold transition hover:bg-white/[0.06]"
                >
                  View Source Code

                  <GithubIcon />
                </a>
              )}

            </div>
          </div>


          {/* Hero image */}

          <div className="relative flex items-center justify-center">

            <div className="absolute h-[300px] w-[300px] rounded-full bg-white/[0.035] blur-[100px]" />

            <div className="relative w-full">
              <Image
                src={project.heroImage}
                alt={`${project.title} project`}
                width={1000}
                height={850}
                priority
                className="h-auto w-full object-contain"
              />
            </div>

          </div>

        </section>


        <Divider />


        {/* ========================================
            OVERVIEW
        ======================================== */}

        <section className="py-12">

          <SectionHeader
            number="01"
            title={project.overview?.title || "Project Overview"}
            description={project.overview?.description}
          />

          {project.overview?.image && (
            <div className="mt-12 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03]">
              <Image
                src={project.overview.image}
                width={1600}
                height={900}
                alt={`${project.title} overview`}
                className="w-full object-cover"
              />
            </div>
          )}

        </section>


        <Divider />


        {/* ========================================
            FEATURES
        ======================================== */}

        {project.features?.length > 0 && (
          <>
            <section className="py-20">

              <SectionHeader
                number="02"
                title="Key Features"
                description="A set of powerful features designed to create a better user experience."
              />

              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {project.features.map((feature) => (
                  <FeatureCard
                    key={feature.title}
                    feature={feature}
                  />
                ))}
              </div>

            </section>

            <Divider />
          </>
        )}


        {/* ========================================
            TECH
        ======================================== */}

        {project.technologies?.length > 0 && (
          <>
            <section className="py-20">

              <SectionHeader
                number="03"
                title="Tech Stack"
                description="Technologies used to build this project."
              />

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {project.technologies.map((technology) => (
                  <div
                    key={technology.name}
                    className="tech-card flex items-center gap-4 rounded-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.055] to-transparent px-6 py-5"
                  >
                    <span className="tech-card-icon flex h-10 w-10 shrink-0 items-center justify-center">
                      {TechnologyIcon({ name: technology.name }) ||
                        (technology.logo && (
                          <Image
                            src={technology.logo}
                            alt={technology.name}
                            width={40}
                            height={40}
                            className="h-9 w-9 object-contain"
                          />
                        ))}
                    </span>

                    <span className="font-medium">
                      {technology.name}
                    </span>
                  </div>
                ))}
              </div>

            </section>

            <Divider />
          </>
        )}


        {/* ========================================
            CHALLENGES
        ======================================== */}

        {(project.challenges?.length > 0 ||
          project.learnings?.length > 0) && (
          <>
            <section className="py-20">

              <SectionHeader
                number="04"
                title="Challenges & Learnings"
                description="Every project is a learning opportunity. Here are some of the key challenges and lessons from this project."
              />

              <div className="mt-12 grid gap-5 lg:grid-cols-2">

                <InfoCard
                  icon="△"
                  title="Challenges"
                  items={project.challenges}
                />

                <InfoCard
                  icon="♧"
                  title="What I Learned"
                  items={project.learnings}
                />

              </div>

            </section>

            <Divider />
          </>
        )}


        {/* ========================================
            RESULTS
        ======================================== */}

        {project.results?.length > 0 && (
          <>
            <section className="py-20">

              <SectionHeader
                number="05"
                title="Results"
                description="Some of the results and outcomes achieved through this project."
              />

              <div className="mt-10 grid gap-4 md:grid-cols-3">

                {project.results.map((result) => (
                  <div
                    key={result.label}
                    className="flex items-center gap-5 rounded-xl border border-white/[0.08] bg-white/[0.035] p-6"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.06]">
                      ✦
                    </div>

                    <div>
                      <div className="text-2xl font-semibold">
                        {result.value}
                      </div>

                      <div className="mt-1 text-sm text-white/45">
                        {result.label}
                      </div>
                    </div>

                  </div>
                ))}

              </div>

            </section>

            <Divider />
          </>
        )}


        {/* ========================================
            RELATED PROJECTS
        ======================================== */}

        <section className="py-20">

          <SectionHeader
            number="06"
            title="Related Projects"
            description="Check out some of my other work."
          />

          <RelatedProjects currentSlug={project.slug} />

        </section>

      </div>
    </main>
  );
}



/* ========================================
   RELATED PROJECTS
======================================== */

import { projects } from "@/data/projects";

function RelatedProjects({ currentSlug }) {
  const relatedProjects = projects
    .filter((project) => project.slug !== currentSlug)
    .slice(0, 3);

  return (
    <div className="mt-12 grid gap-4 md:grid-cols-3">
      {relatedProjects.map((project) => (
        <Link
          key={project.slug}
          href={`/${project.slug}`}
          className="group rounded-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.07]"
        >
          <span className="inline-block rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] text-white/50">
            {project.tags?.[0] || "Project"}
          </span>

          <h3 className="mt-7 text-xl font-semibold">
            {project.title}
          </h3>

          <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/40">
            {project.subtitle}
          </p>

          <div className="mt-7 text-sm text-white/70 transition group-hover:text-white">
            View Project →
          </div>
        </Link>
      ))}
    </div>
  );
}



/* ========================================
   SECTION HEADER
======================================== */

function SectionHeader({ number, title, description }) {
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/35">
        <div className="flex shrink-0 items-center gap-3">
          {number}
          <span className="h-px w-6 bg-white/30" />
        </div>

        {description && (
          <p className="max-w-2xl text-sm leading-6 text-white/45">
            {description}
          </p>
        )}
      </div>

      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}



/* ========================================
   FEATURE
======================================== */

function FeatureCard({ feature }) {
  const icons = {
    list: "☷",
    devices: "▣",
    users: "♧",
    moon: "◒",
  };

  return (
    <div className="rounded-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent p-6">

      <div className="mb-8 text-3xl text-white/80">
        {icons[feature.icon] || "✦"}
      </div>

      <h3 className="text-lg font-semibold">
        {feature.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-white/40">
        {feature.description}
      </p>

    </div>
  );
}



/* ========================================
   CHALLENGES CARD
======================================== */

function InfoCard({ title, icon, items = [] }) {
  if (!items.length) return null;

  return (
    <div className="rounded-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent p-7">

      <div className="flex items-center gap-3">

        <span className="text-xl">
          {icon}
        </span>

        <h3 className="font-semibold">
          {title}
        </h3>

      </div>

      <ul className="mt-5 space-y-3">

        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm text-white/45"
          >
            <span className="text-white/70">•</span>

            {item}
          </li>
        ))}

      </ul>

    </div>
  );
}



/* ========================================
   NAV
======================================== */

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.12em] text-white/45 transition hover:bg-white/[0.05] hover:text-white"
    >
      {children}
    </Link>
  );
}



/* ========================================
   DIVIDER
======================================== */

function Divider() {
  return <div className="h-px bg-white/[0.09]" />;
}



/* ========================================
   ICONS
======================================== */

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="17"
      height="17"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
    >
      <path d="M12 .7a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.25 1.85 1.25 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.3c0 .32.22.7.82.58A12 12 0 0 0 12 .7Z" />
    </svg>
  );
}
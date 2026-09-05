import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path d="m12 2 1.8 7.1L21 11l-7.2 1.9L12 20l-1.8-7.1L3 11l7.2-1.9L12 2Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path d="M12 3.5a8.5 8.5 0 0 0-2.7 16.6c.4.1.5-.2.5-.4v-1.6c-2.2.5-2.7-1-2.7-1-.4-1-1-1.2-1-1.2-.8-.6.1-.6.1-.6.9.1 1.3.9 1.3.9.8 1.3 2 1 2.5.8.1-.6.3-1 .5-1.2-1.8-.2-3.7-.9-3.7-4a3.1 3.1 0 0 1 .9-2.2c-.1-.2-.4-1.1.1-2.2 0 0 .7-.2 2.3.9a7.7 7.7 0 0 1 4.2 0c1.6-1.1 2.3-.9 2.3-.9.5 1.1.2 2 .1 2.2a3.1 3.1 0 0 1 .9 2.2c0 3.1-1.9 3.8-3.7 4 .3.2.5.7.5 1.4v2.1c0 .2.1.5.5.4A8.5 8.5 0 0 0 12 3.5Z" fill="currentColor" />
    </svg>
  );
}

function ProjectCard({ project }) {
  return (
    <Link href={`/${project.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.12] bg-[#090a0a] transition duration-300 hover:-translate-y-1 hover:border-white/25">
      <div className="aspect-[1.5/1] overflow-hidden border-b border-white/[0.08] p-3"><div className="relative h-full overflow-hidden rounded-lg border border-white/[0.08] shadow-2xl transition duration-500 group-hover:scale-[1.02]"><Image src={project.image} alt={`${project.title} project preview`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" /></div></div>
      <div className="flex flex-1 flex-col justify-between gap-5 p-4 sm:p-5"><div><div className="mb-2 text-[11px] text-white/35">{project.number}</div><h3 className="text-[18px] font-semibold tracking-[-0.03em] text-white sm:text-[19px]">{project.title}</h3></div><p className="min-h-[48px] text-[13px] leading-[1.5] text-white/50">{project.description}</p><div className="flex min-h-7 flex-wrap gap-1.5">{project.tags.map((tag) => <span key={tag} className="rounded bg-white/[0.07] px-2 py-1 text-[10px] text-white/60">{tag}</span>)}</div><div className="grid grid-cols-2 gap-2"><span className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-white text-[12px] font-semibold text-black transition group-hover:bg-white/85">{project.primary}<ArrowIcon /></span><span className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-white/35 text-[12px] font-semibold text-white transition group-hover:border-white group-hover:bg-white group-hover:text-black">{project.secondary}{project.secondary === 'GitHub' ? <GithubIcon /> : <span className="text-sm">▧</span>}</span></div></div>
    </Link>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-6 pb-24 text-white sm:px-10 lg:px-16 lg:py-32">
      <div className="relative mx-auto max-w-[1200px]
        ">
        <div className="mb-10 max-w-[680px] sm:mb-12"><div className="mb-4 inline-flex items-center gap-3 rounded-lg border border-white/[0.1] bg-white/[0.05] px-3 py-2 text-[12px] text-white/60"><span className="text-white/80">◉</span> Projects</div><h2>Selected Work</h2><p className="mt-5 max-w-[560px] text-[15px] leading-[1.55] text-white/50 sm:text-[16px]">A curated selection of professional and personal projects.<br className="hidden sm:block" /> Each one built with a focus on performance, usability, and clean code.</p></div>
        <div className="grid gap-6 lg:grid-cols-3">{projects.map((project, index) => <ProjectCard key={project.slug} project={{ ...project, number: String(index + 1).padStart(2, "0"), image: project.cardImage || project.heroImage, description: project.cardDescription || project.description, primary: "View Project", secondary: "Case Study" }} />)}</div>
        <div className="mx-auto mt-8 flex max-w-[420px] items-center gap-3 rounded-2xl border border-white/[0.1] bg-white/[0.045] px-5 py-4 text-[13px] text-white/75"><span className="text-white"><SparkleIcon /></span><div><strong className="block text-white">Clean Code. Purposeful Design. Real Impact.</strong><span className="text-[12px] text-white/45">I build digital products that solve problems and create value.</span></div></div>
      </div>
    </section>
  );
}
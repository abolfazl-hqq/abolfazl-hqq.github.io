import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import ProjectDetails from "@/components/project/ProjectDetails";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Abolfazl Haghighi`,
    description: project.subtitle,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}
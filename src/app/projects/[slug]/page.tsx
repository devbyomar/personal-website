import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { ProjectPage } from "./project-page";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject(params.slug);
  if (!project) return {};

  return {
    title: `${project.title} - Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} - Case Study`,
      description: project.description,
      type: "article",
    },
  };
}

export default function Page({ params }: Props) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return <ProjectPage project={project} />;
}

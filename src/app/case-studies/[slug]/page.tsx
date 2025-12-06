import CaseStudyPageComponent from "@/components/home/case-studies/case-study-page-component";
import { caseStudies } from "@/lib/case-studies";
import { notFound } from "next/navigation";
import type { CaseStudy } from "@/types/case-studies";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug
  }));
}

export default async function CaseStudyPage({ params }: { params: Params }) {
  const { slug } = await params;

  const caseStudy: CaseStudy | undefined = caseStudies.find(
    (study) => study.slug === slug
  );

  if (!caseStudy) return notFound();

  return <CaseStudyPageComponent caseStudy={caseStudy} />;
}

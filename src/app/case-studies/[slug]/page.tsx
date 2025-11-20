import CaseStudyPageComponent from "@/components/home/case-studies/case-study-page-component";
import { caseStudies } from "@/lib/case-studies";
import { notFound } from "next/navigation";
import type { CaseStudy } from "@/types/case-studies";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: String(c.id) }));
}

export default function CaseStudyPage({ params }: Params) {
  const caseStudy: CaseStudy | undefined = caseStudies.find(
    (c) => String(c.id) === params.slug
  );

  if (!caseStudy) return notFound();

  return <CaseStudyPageComponent caseStudy={caseStudy} />;
}

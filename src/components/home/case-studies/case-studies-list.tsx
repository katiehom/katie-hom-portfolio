import CaseStudyCard from "./case-study-card";
import { caseStudies } from "@/lib/case-studies";
import type { CaseStudy } from "@/types/case-studies";

export default function CaseStudiesList() {
  return (
    <section
      id="case-studies"
      className="flex flex-col items-center justify-center gap-10 py-20 text-white"
    >
      <h3 className="text-2xl text-indigo-100">Case Studies</h3>
      <div className="flex flex-wrap justify-center gap-10">
        {caseStudies.map((study: CaseStudy) => (
          <CaseStudyCard
            key={study.id}
            title={study.title}
            briefDescription={study.briefDescription}
            imageUrl={study.imageUrl}
            slug={study.slug} />
        ))}
      </div>
    </section>
  );
}

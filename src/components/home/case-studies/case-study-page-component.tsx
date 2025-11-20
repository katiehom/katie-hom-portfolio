import type { CaseStudy } from "@/types/case-studies";

export default function CaseStudyPageComponent({ caseStudy }: { caseStudy: CaseStudy }) {
    const {
    title,
    briefDescription,
    imageUrl,
    fullDescription,
    challenge,
    solution,
    results,
    techStack,
    screenshots
  } = caseStudy;

  return (
    <main className="mx-auto max-w-4xl p-6">
      <article>
        <div className="mb-6">
          <img src={imageUrl} alt={title} className="w-full rounded-md" />
        </div>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-gray-700">{briefDescription}</p>
      </article>
    </main>
  );
}

import Image from "next/image";
import type { CaseStudy } from "@/types/case-studies";

export default function CaseStudyPageComponent({ caseStudy }: { caseStudy: CaseStudy }) {
    const {
    title,
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
          <Image src={imageUrl} alt={title} className="w-full rounded-md" width={300} height={300} />
        </div>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        {fullDescription && <p className="text-lg text-gray-700 mb-4">{fullDescription}</p>}
        {challenge && <p className="text-normal text-gray-900 mb-4">{challenge}</p>}
        {solution && <p className="text-normal text-gray-900 mb-4">{solution}</p>}
        {results && <p className="text-normal text-gray-900 mb-4">{results}</p>}
        {techStack && <p className="text-normal text-gray-900 mb-4">{techStack}</p>}
        {screenshots && screenshots.length > 0 && (
          screenshots.map((screenshot) => (
            <div key={screenshot.imageUrl} className="mb-6">
              <Image
                src={screenshot.imageUrl}
                alt={screenshot.alt}
                className="w-full rounded-md"
                width={150}
                height={150}
              />
              {screenshot.caption && <p className="text-sm text-gray-500 mt-2">{screenshot.caption}</p>}
            </div>
          ))
        )}


      </article>
    </main>
  );
}

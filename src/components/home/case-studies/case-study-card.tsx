import Link from "next/link";
import type { CaseStudyCardProps } from "@/types/case-studies";

export default function CaseStudyCard(props: CaseStudyCardProps) {
  const { title, briefDescription, imageUrl, slug } = props;
  return (
    <Link href={`/case-studies/${slug}`}>
      <article className="flex h-84 w-72 flex-col items-center rounded-2xl bg-indigo-400 text-indigo-900 shadow-lg">
        <div className="h-48 w-full rounded-t-2xl bg-indigo-800">{imageUrl}</div>
        <h3 className="mt-4 text-lg font-bold">{title}</h3>
        <p className="mx-4 mt-2 text-sm text-center">{briefDescription}</p>
      </article>
    </Link>
  );
}

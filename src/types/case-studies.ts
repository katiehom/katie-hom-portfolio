export interface CaseStudyCardProps {
	title: string;
	briefDescription?: string;
	imageUrl: string;
	slug: string;
}

export interface CaseStudy {
	id: number;
  title: string;
  briefDescription: string;
  imageUrl: string;
  slug: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string;
  techStack: string[];
  screenshots: string[];
}

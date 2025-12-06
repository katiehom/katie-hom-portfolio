export interface CaseStudyCardProps {
	title: string;
	briefDescription?: string;
	imageUrl: string;
	slug: string;
}

export interface Screenshot {
  imageUrl: string;
  alt: string;
  caption?: string;
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
  screenshots: Screenshot[];
}

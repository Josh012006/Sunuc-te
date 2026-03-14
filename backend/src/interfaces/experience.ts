export interface Experience {
  id: string;
  title: string;
  location: string;
  category: string;
  price: number;
  duration: string;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  highlights: string[];
  includedItems: string[];
  guideId: string;
  maxGroupSize: number;
  language: string[];
  difficulty?: string;
}
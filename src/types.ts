export enum ProductCategory {
  BUSINESS = "BUSINESS",
  FASHION = "FASHION",
  FUNCTIONAL = "FUNCTIONAL",
}

export interface ProductItem {
  id: string;
  category: ProductCategory;
  name: string; // e.g. 정장 · 장목 양말
  englishName?: string; // Business Socks, etc.
  tagline: string; // e.g. 실용적인 요소와 디자인 요소를 모두 담다
  needleType: string; // e.g. 200N Computer
  materials: {
    name: string;
    percentage: number;
  }[];
  weight: number; // in grams
  features: string[]; // detailed features
  description: string; // descriptive text
  image: string; // Unsplash image matching PDF perfectly
}

export interface ProcessStep {
  id: number;
  title: string;
  guideTitle: string;
  description: string;
  details: string;
  image: string;
}

export interface BrandColor {
  id: string;
  name: string;
  englishName: string;
  hex: string;
  meaning: string;
  mks: string; // e.g. M 10 K 90
  description: string;
}

export interface TechItem {
  id: string;
  title: string;
  englishTitle: string;
  description: string;
  details: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface OEMInquiry {
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  category: ProductCategory;
  needleType: string;
  quantity: number;
  materials: string[];
  additionalDetails: string;
}

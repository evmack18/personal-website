import { getProjectSlides } from "../lib/projectSlides";

export type CaseStudySlide = {
  src: string;
  alt: string;
  type: "image" | "video";
};

export type CaseStudy = {
  headline: string;
  paragraphs: string[];
  metadata: string;
  slides: CaseStudySlide[];
};

function buildSlides(slug: string, title: string): CaseStudySlide[] {
  return getProjectSlides(slug).map((slide, index) => ({
    ...slide,
    alt: `${title} case study slide ${index + 1}`,
  }));
}

const caseStudyContent = [
  {
    headline: "Transforming a Design System into a product-building platform",
    paragraphs: [
      "As a Design Director at Carta, I lead the systems, strategy, and partnerships that shape how teams build products. My work helps teams move faster, collaborate more effectively, and deliver more cohesive, high-quality experiences at scale.",
    ],
    metadata: "CARTA | 2024–2026",
    slug: "carta",
    slideLabel: "Carta",
  },
  {
    headline: "Building the system that helped Zillow scale",
    paragraphs: [
      "As the founder and leader of Zillow's first design system, I built and scaled it from the ground up — growing the team, driving cross-platform consistency, and shaping how the world's largest digital real estate platform designs and builds product experiences.",
    ],
    metadata: "ZILLOW | 2016–2022",
    slug: "zillow-design-system",
    slideLabel: "Zillow design system",
  },
  {
    headline: "Turning brand vision into product reality",
    paragraphs: [
      "At Zillow, I led the design systems strategy for bringing a new visual identity into the product experience. By translating brand vision into scalable, accessible patterns, I helped bridge brand and product to create a more cohesive experience across web and mobile.",
    ],
    metadata: "ZILLOW | 2016–2022",
    slug: "zillow-rebrand",
    slideLabel: "Zillow rebrand",
  },
  {
    headline: "Designing ultrasound. From concept to clinical reality.",
    paragraphs: [
      "Leading the end-to-end design of ultrasound devices across hardware, interface, and visual experience. I partnered with global engineering and human factors teams to bring intuitive, clinically focused products from concept through production.",
    ],
    metadata: "SONOSITE | 2010–2014",
    slug: "sonosite",
    slideLabel: "Sonosite",
  },
] as const;

export function getCaseStudies(): CaseStudy[] {
  return caseStudyContent.map(({ slug, slideLabel, ...study }) => ({
    ...study,
    slides: buildSlides(slug, slideLabel),
  }));
}

export const caseStudies = getCaseStudies();

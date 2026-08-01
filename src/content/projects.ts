import { getProjectSlides } from "../lib/projectSlides";

export type CaseStudySlide = {
  src: string;
  alt: string;
  type: "image" | "video";
};

export type CaseStudy = {
  title: string;
  paragraphs: string[];
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
    title: "Carta",
    paragraphs: [
      "Since joining Carta in August 2024 as a Design Director, I've led a broad transformation of the systems, practices, and partnerships that shape how teams build products. My work spans design strategy, experience quality, and organizational operations—from translating Carta's evolving brand into cohesive product experiences to strengthening collaboration across Brand, Product Design, Product, and Engineering. By establishing clearer standards, scalable platforms, and more effective ways of working, I've helped teams improve decision-making, accelerate delivery, and raise the quality and consistency of product development across the organization.",
    ],
    slug: "carta",
    slideLabel: "Carta",
  },
  {
    title: "Zillow",
    paragraphs: [
      "As the founder and leader of Zillow's first design system, I built and scaled it from the ground up — growing the team, driving cross-platform consistency, and shaping how the world's largest digital real estate platform designs and builds product experiences.",
    ],
    slug: "zillow-design-system",
    slideLabel: "Zillow design system",
  },
  {
    title: "Zillow",
    paragraphs: [
      "At Zillow, I led the design systems perspective on a strategic visual rebrand initiative, partnering with Brand and an external agency to extend a new visual language across the product ecosystem. Rather than treating it as a surface-level exercise, I focused on how the rebrand would translate into the web and mobile experiences where customers actually spend their time — developing frameworks and scalable patterns that balanced brand expression with usability, accessibility, and engineering realities. The work positioned Design Systems as the bridge between brand strategy and product execution.",
    ],
    slug: "zillow-rebrand",
    slideLabel: "Zillow rebrand",
  },
] as const;

export function getCaseStudies(): CaseStudy[] {
  return caseStudyContent.map(({ slug, slideLabel, ...study }) => ({
    ...study,
    slides: buildSlides(slug, slideLabel),
  }));
}

export const caseStudies = getCaseStudies();

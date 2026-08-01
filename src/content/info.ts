export type ExperienceImage = {
  src: string;
  alt: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  description: string;
  images?: ExperienceImage[];
};

export const experienceIntro =
  "From startups to enterprise, my experience spans fintech, biotech, healthcare, real estate, and marketplaces. Across every role, I’ve focused on building scalable products, design systems, and teams that create lasting impact.";

export const experience: ExperienceEntry[] = [
  {
    company: "Carta",
    role: "Director, Product Design",
    description:
      "Lead the evolution of Carta's end-to-end product experience through the Ink Design System, defining a cohesive system and interaction model across a complex financial platform. Built and led a high-performing team of designers and technologists focused on systems, visual language, and scalable design infrastructure. Partner closely with Product, Engineering, and Brand to ensure consistency, craft, and alignment from marketing through product. Driving forward AI-powered experiences by establishing patterns, components, documentation, and visual frameworks for AI-assisted workflows, conversational interfaces, and system feedback—ensuring clarity, trust, and usability in emerging Copilot-like interactions.",
    images: [
      {
        src: "/images/experience/carta/02-logo.png",
        alt: "Carta logo on a black background",
      },
      {
        src: "/images/experience/carta/01-ink-design-system.png",
        alt: "Carta Ink Design System website displayed on a desktop monitor",
      },
      {
        src: "/images/experience/carta/03-lp-vips-campaign.png",
        alt: "Carta marketing campaign with the headline Make your LPs feel like VIPs",
      },
    ],
  },
  {
    company: "Benchling",
    role: "Senior Manager, Product Design",
    description:
      "Built and led a design team supporting multiple product pillars within a fast-scaling enterprise SaaS platform. Strengthened visual and interaction consistency by evolving foundational systems including color, layout, and component frameworks. Partnered closely with Product and Engineering to deliver scalable, user-centered solutions aligned to complex scientific workflows. Elevated design quality and team effectiveness through improved tooling, onboarding, and cross-functional collaboration.",
    images: [
      {
        src: "/images/experience/benchling/01-logo.png",
        alt: "Benchling logo on a blue background",
      },
      {
        src: "/images/experience/benchling/02-color-palette.png",
        alt: "Benchling extended color palette and contrast checker from the design system",
      },
      {
        src: "/images/experience/benchling/03-product-ui.png",
        alt: "Benchling product interface showing data catalog and entry workflows",
      },
    ],
  },
  {
    company: "Zillow",
    role: "Senior Manager, Product Design",
    description:
      "Founded and scaled Zillow's first centralized Design Systems team, building and mentoring a cross-functional group of 18+ designers, engineers, and DPMs. Defined and evolved a cohesive visual and interaction language used across the company's digital ecosystem, partnering deeply with Product, Engineering, and Brand. Established the systems, patterns, and infrastructure that enabled teams to deliver consistent, high-quality experiences at scale. Grew the system from 0→1 into a company-wide foundation, shaping how thousands of employees design and build Zillow's products.",
    images: [
      {
        src: "/images/experience/zillow/01-logo.png",
        alt: "Zillow logo on a blue and purple gradient background",
      },
      {
        src: "/images/experience/zillow/02-design-system.png",
        alt: "Zillow Constellation Design Systems homepage and component documentation",
      },
      {
        src: "/images/experience/zillow/03-mobile-app.png",
        alt: "Zillow mobile app property detail screen on a smartphone",
      },
    ],
  },
  {
    company: "Lish",
    role: "Co founder & Lead Designer",
    description:
      "Led the full creative vision for a direct-to-consumer startup, spanning product design, brand identity, marketing, packaging, and storytelling. Built a cohesive visual system across digital and physical experiences, ensuring consistency and quality at every customer touchpoint. Balanced hands-on design craft with scalable systems thinking to support rapid iteration and growth.",
    images: [
      {
        src: "/images/experience/lish/01-logo.png",
        alt: "Lish logo on a green background",
      },
      {
        src: "/images/experience/lish/02-mobile-app.png",
        alt: "Lish mobile app menu displayed on a smartphone",
      },
      {
        src: "/images/experience/lish/03-product-ui.png",
        alt: "Lish product interface shown on a laptop and smartphone",
      },
    ],
  },
  {
    company: "Sonosite",
    role: "Lead Visual & Industrial Designer",
    description:
      "Led visual and industrial design for medical devices used globally, shaping experiences across hardware, software interfaces, and brand expression. Designed end-to-end user experiences spanning physical interaction, digital UI, and supporting materials. Worked cross-functionally with engineering, research, and marketing to deliver highly usable, reliable, and visually coherent products in a regulated environment. This work established a foundation in systems thinking across complex, multidisciplinary ecosystems.",
    images: [
      {
        src: "/images/experience/sonosite/01-logo.png",
        alt: "Fujifilm SonoSite logo on a turquoise background",
      },
      {
        src: "/images/experience/sonosite/02-iviz-tablet.png",
        alt: "SonoSite iViz tablet interface being used in a clinical setting",
      },
      {
        src: "/images/experience/sonosite/03-ultrasound-system.png",
        alt: "SonoSite ultrasound system with imaging display and control interface",
      },
    ],
  },
];

export type ExperienceEntry = {
  company: string;
  dates: string;
  role: string;
  description: string;
};

export type ContactField = {
  label: string;
  value: string;
  href?: string;
};

export const experience: ExperienceEntry[] = [
  {
    company: "Carta",
    dates: "2024 - 2026",
    role: "Director, Design Systems",
    description:
      "Lead the evolution of Carta's end-to-end product experience through the Ink Design System, defining a cohesive system and interaction model across a complex financial platform. Built and led a high-performing team of designers and technologists focused on systems, accessibility, and scalable design infrastructure. Partner closely with Product, Engineering, and Brand to ensure consistency, craft, and alignment from marketing through product. Driving forward AI-powered experiences by establishing patterns, components, documentation, and visual frameworks for AI-assisted workflows, conversational interfaces, and system feedback—ensuring clarity, trust, and usability in emerging Copilot-like interactions.",
  },
  {
    company: "Benchling",
    dates: "2022 - 2024",
    role: "Sr. Manager, Design Systems & Platform",
    description:
      "Built and led a design team supporting multiple product pillars within a fast-scaling enterprise SaaS platform. Strengthened visual and interaction consistency by evolving foundational systems including color, layout, and component frameworks. Partnered closely with Product and Engineering to deliver scalable, user-centered solutions aligned to complex scientific workflows. Elevated design quality and team effectiveness through improved tooling, onboarding, and cross-functional collaboration.",
  },
  {
    company: "Zillow",
    dates: "2016 - 2022",
    role: "Sr. Manager, Design Systems & Platform",
    description:
      "Founded and scaled Zillow's first centralized Design Systems team, building and mentoring a cross-functional group of 18+ designers, engineers, and DPMs. Defined and evolved a cohesive visual and interaction language used across the company's digital ecosystem, partnering deeply with Product, Engineering, and Brand. Established the systems, patterns, and infrastructure that enabled teams to deliver consistent, high-quality experiences at scale. Grew the system from 0→1 into a company-wide foundation, shaping how thousands of employees design and build Zillow's products.",
  },
  {
    company: "Lish",
    dates: "2014 - 2016",
    role: "Co founder & Lead Designer",
    description:
      "Led the full creative vision for a direct-to-consumer startup, spanning product design, brand identity, marketing, packaging, and storytelling. Built a cohesive visual system across digital and physical experiences, ensuring consistency and quality at every customer touchpoint. Balanced hands-on design craft with scalable systems thinking to support rapid iteration and growth.",
  },
  {
    company: "Sonosite FUJIFILM",
    dates: "2010 - 2015",
    role: "Lead Designer",
    description:
      "Led visual and industrial design for medical devices used globally, shaping experiences across hardware, software interfaces, and brand expression. Designed end-to-end user experiences spanning physical interaction, digital UI, and supporting materials. Worked cross-functionally with engineering, research, and marketing to deliver highly usable, reliable, and visually coherent products in a regulated environment. This work established a foundation in systems thinking across complex, multidisciplinary ecosystems.",
  },
];

export const contactFields: ContactField[] = [
  {
    label: "Email",
    value: "e.mack18@gmail.com",
    href: "mailto:e.mack18@gmail.com",
  },
  {
    label: "Phone",
    value: "425.269.5124",
    href: "tel:+14252695124",
  },
];

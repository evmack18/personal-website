export const leadership = {
  hero:
    "Great products are built by great teams. Leadership is about creating the conditions for both to thrive.",
  tabs: [
    { id: "values", label: "Values", path: "/leadership" },
    { id: "operations", label: "Operations", path: "/leadership/operations" },
    { id: "goals-framework", label: "Goals Framework", path: "/leadership/goals-framework" },
  ],
  values: {
    intro:
      "These values guide how I lead teams, make decisions, and create environments where people can do their best work.",
    items: [
      {
        title: "Prioritize People",
        description:
          "Great work comes from great people. To consistently deliver high-quality outcomes, individuals need to be able to bring their best selves to work each day. I believe leadership is fundamentally about enabling others to succeed. That means understanding individual strengths, creating opportunities for growth, delegating effectively, and building a team environment where people feel supported, challenged, and fulfilled. Sustainable success starts with people.",
      },
      {
        title: "Build Trust",
        description:
          "No one has all the answers. Strong teams are built on trust, mutual respect, and a willingness to learn from one another. I strive to lead with a positive intent, remain open-minded, and always respect disciplines outside my own expertise. Trust doesn't mean a lack of conviction. It means being confident enough to share strong opinions when necessary, while remaining open to new information and better ideas.",
      },
      {
        title: "Align on Purpose",
        description:
          "People do their best work when they understand why it matters. I believe leaders must continually connect day-to-day work to customer needs, business outcomes, and broader organizational goals. When teams understand the purpose behind their work, they become more engaged, motivated, and empowered to make better decisions. A leader's role is to provide clarity, define direction, remove obstacles, and create the conditions for others to succeed.",
      },
      {
        title: "Emphasize Process",
        description:
          "Quality outcomes are rarely accidental. As teams grow, impact becomes less about individual effort and more about repeatable systems and processes. Strong processes help teams make better decisions, collaborate effectively, and consistently deliver high-quality work at scale. Process should enable great work—not constrain it.",
      },
    ],
  },
  operations: {
    intro:
      "These pillars define how I think about building and operating high-performing design organizations.",
    items: [
      {
        titlePrefix: "How We Work",
        titleEmphasis: "Together",
        tagline: "People and collaboration come first.",
        description:
          "This pillar focuses on team health, cross-functional partnerships, communication, and creating an environment where individuals can do their best work. It's about building strong relationships, fostering trust, and creating a human-centered team culture.",
        focusAreas: [
          "Team building",
          "Collaboration",
          "Communication",
          "Cross-functional partnerships",
          "Team health and engagement",
        ],
      },
      {
        titlePrefix: "How We Get Work",
        titleEmphasis: "Done",
        tagline: "Execution requires clarity, consistency, and the right tools.",
        description:
          "This pillar focuses on the systems, processes, and workflows that help teams operate effectively. From design systems and design process to AI tooling and operational excellence, the goal is to reduce friction and improve quality.",
        focusAreas: [
          "Design process",
          "Design systems",
          "Operational excellence",
          "AI and emerging tools",
          "Workflow optimization",
        ],
      },
      {
        titlePrefix: "How Our Work Creates",
        titleEmphasis: "Impact",
        tagline: "Design only matters when it creates meaningful outcomes.",
        description:
          "This pillar focuses on measuring, communicating, and improving the impact of our work. It ensures we're solving the right problems, delivering quality experiences, and connecting our efforts to customer and business success.",
        focusAreas: [
          "Outcomes and measurement",
          "Design quality",
          "Business impact",
          "Customer value",
          "Organizational influence",
        ],
      },
    ],
  },
  goalsFramework: {
    intro:
      "I encourage individuals to think about career growth across multiple dimensions.",
    items: [
      {
        titlePrefix: "1. Improve",
        titleEmphasis: "Yourself",
        tagline: "How are you becoming better at your craft?",
        description:
          "These goals focus on developing your individual skills, expertise, and capabilities as a designer. Whether it's visual design, systems thinking, research, storytelling, strategy, or leadership, the objective is continuous personal growth.",
        question: "How am I becoming a stronger practitioner?",
      },
      {
        titlePrefix: "2. Improve",
        titleEmphasis: "The Team",
        tagline: "How are you helping others succeed?",
        description:
          "These goals focus on elevating the people around you. This might include mentoring, improving team processes, creating tools and resources, strengthening collaboration, or helping establish better ways of working.",
        question: "How am I making my team more effective than it would be without me?",
      },
      {
        titlePrefix: "3. Improve",
        titleEmphasis: "The Business",
        tagline: "How are you creating value for the organization?",
        description:
          "These goals focus on business outcomes and organizational impact. They connect design work to customer value, strategic opportunities, growth, efficiency, and long-term success.",
        question: "How am I helping the business achieve better outcomes?",
      },
    ],
  },
} as const;

import type { HeroContent } from "./types";
import { personalInfo } from "./personal";

export const heroContent: HeroContent = {
  greeting: "Hi, I'm",
  roles: [
    "AI Engineer",
    "LLM Developer",
    "RAG Architect",
    "Problem Solver",
  ],
  description: `Building production-grade AI systems with LLMs, RAG pipelines, and agentic workflows.`,
  ctaButtons: {
    primary: {
      text: "Download CV",
      href: personalInfo.resumeUrl,
      icon: "Download",
    },
  },
};

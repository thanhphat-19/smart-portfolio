import type { SEOConfig } from "./types";
import { personalInfo } from "./personal";

export const seoConfig: SEOConfig = {
  siteName: `${personalInfo.fullName} Portfolio`,
  siteUrl: "https://phatngo.vercel.app",
  description:
    "AI Engineer specializing in LLMs, RAG systems, and AI agents. Building production-grade AI backends with FastAPI, LangChain, and LangGraph.",
  keywords: [
    "AI Engineer",
    "LLM",
    "RAG",
    "LangChain",
    "LangGraph",
    "FastAPI",
    "Python",
    "MLOps",
    "AI Agent",
    personalInfo.fullName,
  ],
  author: {
    name: personalInfo.fullName,
    url: personalInfo.website,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${personalInfo.fullName} - ${personalInfo.title}`,
    description:
      "AI Engineer building production-grade LLM systems, RAG pipelines, and AI agents.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${personalInfo.fullName} - ${personalInfo.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.fullName} - ${personalInfo.title}`,
    description:
      "AI Engineer building production-grade LLM systems, RAG pipelines, and AI agents.",
    images: ["/og-image.png"],
    creator: "@thphat19",
  },
};

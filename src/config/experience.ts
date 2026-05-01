import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    id: "vietnam-silicon-2025",
    company: "Vietnam Silicon",
    role: "AI Engineer",
    period: "Jun 2025 - Present",
    startDate: "Jun 2025",
    endDate: "Present",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "Building AI-powered backend services and data processing pipelines. Working with LLMs, agentic workflows, and cloud infrastructure to deliver intelligent enterprise solutions.",
    achievements: [
      "Maintained and developed AI chatbot backend with FastAPI",
      "Built agentic workflows using LangGraph for report and dashboard generation",
      "Developed data ingestion and anomaly detection pipeline with Apache Airflow",
    ],
    tech: ["Python", "FastAPI", "LangGraph", "AWS Bedrock", "Apache Airflow", "Docker"],
    type: "fulltime",
  },
  {
    id: "delta-cognition-2023",
    company: "Delta Cognition",
    role: "AI Engineer",
    period: "Sep 2023 - Jun 2025",
    startDate: "Sep 2023",
    endDate: "Jun 2025",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "Designed and implemented AI systems for enterprise knowledge management and intelligent automation, leveraging LLMs, knowledge graphs, and semantic search.",
    achievements: [
      "Built AI Interview Agent with multi-stage pipeline and dynamic question generation",
      "Developed Knowledge Graph construction service using LLM-based graph transformers",
      "Implemented Semantic Search Engine achieving 0.90 precision@15 with ~1.5s latency",
    ],
    tech: ["Python", "LangChain", "LangGraph", "SBERT", "Neo4J", "FastAPI", "Docker"],
    type: "fulltime",
  },
  {
    id: "delta-cognition-intern-2023",
    company: "Delta Cognition",
    role: "AI Engineer Intern",
    period: "Jun 2023 - Sep 2023",
    startDate: "Jun 2023",
    endDate: "Sep 2023",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "Gained hands-on experience building AI microservices and information retrieval systems. Worked with NLP models and deployed services using containerized architectures.",
    achievements: [
      "Built intelligent research assistant with information retrieval and summarization",
      "Deployed AI microservices using FastAPI, Docker, Celery, and RabbitMQ",
    ],
    tech: ["Python", "FastAPI", "Docker", "Celery", "RabbitMQ", "SBERT", "BART"],
    type: "internship",
  },
];

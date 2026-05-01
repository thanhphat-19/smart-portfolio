import type { SkillCategory, VisualSkill } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    name: "AI / ML",
    icon: "Brain",
    skills: [
      { name: "LLMs", level: 90 },
      { name: "RAG", level: 88 },
      { name: "LangChain", level: 85 },
      { name: "LangGraph", level: 82 },
    ],
  },
  {
    name: "Backend",
    icon: "Server",
    skills: [
      { name: "Python", level: 92 },
      { name: "FastAPI", level: 88 },
      { name: "Celery", level: 78 },
      { name: "RabbitMQ", level: 75 },
    ],
  },
  {
    name: "Database",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 80 },
      { name: "Neo4J", level: 72 },
    ],
  },
  {
    name: "MLOps",
    icon: "Code2",
    skills: [
      { name: "Docker", level: 85 },
      { name: "GCP", level: 78 },
      { name: "AWS", level: 72 },
      { name: "Kubernetes", level: 70 },
    ],
  },
];

// Visual skills for skills grid display
export const visualSkills: VisualSkill[] = [
  { name: "Python", icon: "SiPython", color: "#3776AB" },
  { name: "FastAPI", icon: "SiFastapi", color: "#009688" },
  { name: "LangChain", icon: "SiLangchain", color: "#1C3C3C" },
  { name: "Docker", icon: "SiDocker", color: "#2496ED" },
  { name: "PostgreSQL", icon: "SiPostgresql", color: "#336791" },
  { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
  { name: "Neo4J", icon: "SiNeo4J", color: "#008CC1" },
  { name: "GCP", icon: "SiGooglecloud", color: "#4285F4" },
  { name: "AWS", icon: "SiAmazonwebservices", color: "#FF9900" },
  { name: "Kubernetes", icon: "SiKubernetes", color: "#326CE5" },
  { name: "Git", icon: "SiGit", color: "#F05032" },
  { name: "GitHub", icon: "SiGithub", color: "#181717" },
  { name: "OpenAI", icon: "SiOpenai", color: "#412991" },
  { name: "Hugging Face", icon: "SiHuggingface", color: "#FFD21E" },
];

// Plain skills list for RAG and SEO
export const skillsList: string[] = [
  "Python",
  "FastAPI",
  "LangChain",
  "LangGraph",
  "LLMs",
  "RAG",
  "NLP",
  "Hugging Face",
  "SBERT",
  "scikit-learn",
  "PostgreSQL",
  "MongoDB",
  "Neo4J",
  "Docker",
  "Kubernetes",
  "GCP",
  "AWS",
  "Celery",
  "RabbitMQ",
  "Apache Airflow",
  "MLflow",
  "Terraform",
  "Git",
  "C++",
];

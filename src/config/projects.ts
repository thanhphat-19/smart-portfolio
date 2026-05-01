import type { Project } from "./types";

export const projects: Project[] = [
  {
    name: "End-to-end MLOps Pipeline",
    description:
      "Full lifecycle MLOps pipeline on GCP for a card approval prediction model. Covers infrastructure provisioning, containerized ML services on Kubernetes, CI/CD, and observability.",
    status: "completed",
    url: "https://github.com/thanhphat-19/card-approval-prediction",
    tech: ["GCP", "Kubernetes", "Terraform", "Ansible", "Jenkins", "MLflow", "FastAPI", "Python", "Prometheus"],
    image: "/images/projects/mlops-pipeline.png",
  },
  {
    name: "OpenAI Agent Chatbot",
    description:
      "Two-service AI chat system with SSE streaming. chatbot-be handles session management and PostgreSQL persistence; chatbot-ai-service runs OpenAI Agents SDK with stateless execution and real-time streaming.",
    status: "completed",
    url: "https://github.com/thanhphat-19/openai-agent-chatbot",
    tech: ["OpenAI Agents SDK", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Docker", "SSE"],
    image: "/images/projects/openai-agent-chatbot.png",
  },
  {
    name: "News Article Processing Service",
    description:
      "Distributed service for processing and analyzing news articles using LLMs. Event-driven architecture with RabbitMQ and Celery for async task processing. Supports OpenAI, Anthropic, Gemini, Cohere, and Ollama.",
    status: "completed",
    url: "https://github.com/thanhphat-19/news-article-processing-ml-service",
    tech: ["Python", "RabbitMQ", "Celery", "Redis", "FastAPI", "Gradio", "Docker"],
    image: undefined,
  },
];

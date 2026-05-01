import type { Education, Certification } from "./types";

export const education: Education[] = [
  {
    id: "uit-2020",
    institution: "University of Information Technology",
    degree: "Bachelor of Computer Science",
    startDate: "Sep 2020",
    endDate: "Dec 2024",
    description:
      "GPA: 7.7. Relevant coursework: Computer Vision, Natural Language Processing, Image Processing, Pattern Recognition, Data Structures and Algorithms, OOP, and Math for Computer Science.",
  },
];

export const certifications: Certification[] = [
  {
    name: "Problem Solving Using Computational Thinking",
    issuer: "Coursera",
    date: "2023",
    description: "Algorithmic problem solving and computational thinking fundamentals.",
  },
  {
    name: "ChatGPT Prompt Engineering for Developers",
    issuer: "DeepLearning.AI",
    date: "2023",
    description: "Advanced prompt engineering techniques for LLM-powered applications.",
  },
  {
    name: "Knowledge Graphs for RAG",
    issuer: "DeepLearning.AI",
    date: "2024",
    description: "Integrating knowledge graphs with retrieval-augmented generation pipelines.",
  },
  {
    name: "Quantization Fundamentals with Hugging Face",
    issuer: "DeepLearning.AI",
    date: "2024",
    description: "Model quantization techniques to optimize LLMs for production deployment.",
  },
  {
    name: "Machine Learning with Python",
    issuer: "Coursera",
    date: "2023",
    description: "Core machine learning algorithms and implementations using Python and scikit-learn.",
  },
  {
    name: "Supervised Machine Learning: Regression and Classification",
    issuer: "Coursera",
    date: "2023",
    description: "Foundations of supervised learning including linear/logistic regression and neural networks.",
  },
];

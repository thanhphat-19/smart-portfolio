import type { PersonalInfo } from "./types";

export const personalInfo: PersonalInfo = {
  firstName: "Phát",
  lastName: "Ngô",
  fullName: "Ngô Thành Phát",
  email: "thanhphat352@gmail.com",
  location: {
    city: "Ho Chi Minh City",
    country: "Vietnam",
    display: "Ho Chi Minh City, Vietnam",
  },
  title: "AI Engineer",
  availability: {
    status: "available",
    message: "Open to opportunities",
  },
  resumeUrl: "/Ngo Thanh Phat-AI_Engineer.pdf",
  profileImage: "/images/profile.jpg",
  website: "https://phatngo.vercel.app",
  summary:
    "AI Engineer specializing in LLMs, RAG systems, and AI agents. Experienced in building production-grade AI backends with FastAPI, LangChain, and LangGraph. Passionate about applying AI to solve real-world problems.",
};

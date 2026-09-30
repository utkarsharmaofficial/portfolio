export const profile = {
  name: "Utkarsh Sharma",
  role: "Software Engineer",
  location: "Bangalore, India",
  email: "hello@utkarsharmaofficial.in",
  github: "https://github.com/utkarsharmaofficial",
  linkedin: "https://www.linkedin.com/in/utkarsh-sharma3112/",
  resumeUrl: "/resume.pdf",
  tagline: "Building distributed systems, data pipelines, and AI-native infrastructure.",
  summary:
    "Software Engineer with production experience across payments infrastructure, big-data pipelines, and applied AI. I've re-architected batch systems processing millions of transactions, replaced legacy ingestion pipelines with modern connectors, and designed multi-agent AI systems using the Model Context Protocol. I care about systems that are fast, observable, and hard to break.",
} as const;

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Visa",
    role: "Software Engineer",
    location: "Bangalore, India",
    period: "Aug 2025 — May 2026",
    bullets: [
      "Led the migration of a Java/Spring Boot batch processing service from V1 to V2 APIs, re-architecting the core application to support the new contract across 25+ integration points while processing 2M+ transaction records per batch cycle.",
      "Refactored the core application codebase, cutting duplicated logic by 40% and reducing end-to-end batch runtime by 30%.",
      "Validated the migrated service across dev environments and automated deployment through a Jenkins CI/CD pipeline, reducing release time from 45 minutes to 12 minutes.",
      "Engineered a Sqoop-to-Apache SeaTunnel migration for a Hive-based Hadoop pipeline, building a custom SeaTunnel source, SQL connector, and sink that replaced the legacy ingestion path for 35+ jobs and improved ingestion throughput by 45%.",
    ],
    stack: ["Java", "Spring Boot", "Hadoop", "Hive", "Apache SeaTunnel", "Jenkins"],
  },
  {
    company: "Samsung Research and Development Institute",
    role: "Software Engineer — Language AI Framework & MDE",
    location: "Bangalore, India",
    period: "Jul 2024 — Jul 2025",
    bullets: [
      "Key contributor to a multi-agent POC for Bixby enhancement in Python, integrating external capabilities over the Model Context Protocol (MCP) via a WhatsApp MCP server.",
      "Managed and optimized Bixby capsules using JavaScript; added training data that improved command recognition accuracy by 35%.",
      "Designed Bixby agents using established software design patterns (Factory, Observer), reducing code redundancy by 40%.",
    ],
    stack: ["Python", "JavaScript", "MCP", "Bixby"],
  },
  {
    company: "Samsung Research and Development Institute",
    role: "Software Engineer Intern — Real Time Communication",
    location: "Bangalore, India",
    period: "Jun 2023 — Aug 2023",
    bullets: [
      "Architected an Android benchmarking application using Kotlin and Jetpack Compose, enabling comprehensive analysis of the throughput efficiency of scheduler and non-scheduler algorithms and leading to 15% faster algorithm selection.",
      "Researched video encoding standards (H.264/H.265) through academic papers, implementing optimal encoding parameters that improved processing efficiency by 10%.",
      "Architected a performance testing framework using the MediaRecorder API and CameraX, achieving 30 FPS sustained capture throughput.",
      "Optimized throughput efficiency by 60% through scheduler algorithm workflows.",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Android", "CameraX", "MediaRecorder API", "H.264/H.265"],
  },
];

export type Project = {
  name: string;
  description: string;
  bullets: string[];
  stack: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    name: "Job Tracker",
    description:
      "A local-first dashboard that reads Gmail (read-only), uses an on-device LLM to detect job application emails, and tracks each application from Applied to Offer.",
    bullets: [
      "Sync pipeline searches Gmail for ATS and job-platform emails (Greenhouse, Lever, Workday, LinkedIn, …) and classifies each one with a local Ollama model into Zod-validated structured output — email content never leaves the machine.",
      "Groups emails into applications by thread and normalized company/role, with forward-only status rules, manual status locks, ghosting detection, and resumable 6-hourly background auto-sync.",
      "Benchmarked 5 local models on a 100-email test suite (including prompt-injection and non-application emails); selected ministral-3:8b at 99% end-to-end accuracy.",
      "Overview analytics (response rate, calendar heatmap, weekly/monthly trends) and a drag-and-drop Kanban board, backed by SQLite via Node's built-in node:sqlite.",
    ],
    stack: ["TypeScript", "Next.js", "React", "SQLite", "Ollama", "Gmail API", "OAuth 2.0", "Tailwind CSS"],
    links: [{ label: "GitHub", href: "https://github.com/utkarsharmaofficial/job-tracker" }],
  },
  {
    name: "Aperture — Governed MCP Gateway",
    description:
      "A governed gateway for the Model Context Protocol that aggregates multiple upstream MCP servers behind a single OAuth 2.1-authenticated endpoint.",
    bullets: [
      "Implemented Streamable HTTP transport with session resumption and protocol version negotiation.",
      "Capability-level authorization with OPA/Rego policies and a KMS-backed credential broker — upstream credentials are never exposed to AI clients, mitigating confused-deputy and token-passthrough attacks.",
      "Rug-pull detection via cryptographic pinning of tool definitions, plus bidirectional scanning that redacts PII and instruction-injection patterns from tool outputs.",
      "Provisioned the full AWS footprint (EKS, RDS, KMS, IRSA, Route53) as modular Terraform, with a Java Kubernetes operator exposing MCPServer CRDs for GitOps-managed server registration.",
    ],
    stack: ["Java", "Spring Boot", "Kubernetes", "Terraform", "AWS", "OAuth 2.1", "OPA"],
  },
  {
    name: "ProjectThor",
    description:
      "A distributed pub-sub messaging system built for high availability and consistent state management under load.",
    bullets: [
      "Apache ZooKeeper for automated leader election and topic synchronization.",
      "Aerospike for rate limiting (500+ requests/sec) and RabbitMQ with the Akka actor model for concurrent message processing — 40% throughput improvement while maintaining fault tolerance.",
      "Lightweight real-time messaging via MQTT, reducing latency to 5ms for IoT devices across heterogeneous systems.",
    ],
    stack: ["Java", "Apache ZooKeeper", "Aerospike", "MQTT", "RabbitMQ", "Akka"],
  },
];

export type SkillGroup = { label: string; items: string[]; note?: string };

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Java", "Python", "C++", "Kotlin", "TypeScript"],
    note: "Language is no longer a barrier, thanks to Large Language Models.",
  },
  { label: "Backend & Frameworks", items: ["Spring Boot", "Akka", "Next.js", "React", "Jetpack Compose"] },
  {
    label: "Data & Messaging",
    items: ["Hadoop", "Hive", "Sqoop", "Apache SeaTunnel", "Apache ZooKeeper", "RabbitMQ", "MQTT", "Aerospike"],
  },
  { label: "AI / ML", items: ["Model Context Protocol", "LangChain", "ChromaDB", "Ollama", "RAG Pipelines"] },
  { label: "DevOps & Tools", items: ["Docker", "Jenkins", "Git/GitHub", "SQL"] },
  {
    label: "Cloud & Infra",
    items: [
      "AWS (EKS, RDS, KMS, IAM/IRSA, S3, Secrets Manager)",
      "Terraform",
      "Kubernetes",
      "CRDs/Operators",
      "Helm",
      "ArgoCD",
      "OPA",
      "Prometheus",
      "Grafana",
      "OpenTelemetry",
      "GitHub Actions",
    ],
  },
  { label: "Core CS", items: ["Data Structures & Algorithms", "OOP", "Operating Systems", "System Design"] },
];

export const education = {
  school: "Indian Institute of Technology (ISM) Dhanbad",
  degree: "B.Tech in Electronics and Communication Engineering",
  period: "Dec 2020 — May 2024",
  location: "India",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

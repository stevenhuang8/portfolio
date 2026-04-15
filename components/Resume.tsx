"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

const experience = [
  {
    role: "Engineer Intern",
    company: "Wistron Neweb Corporation",
    period: "Aug 2022 — Dec 2022",
    bullets: [
      "Installed and configured a Linux-hosted MediaWiki system with SQL database support, supporting user authentication, data persistence, and system reliability",
      "Troubleshot configuration and integration issues across OS, database, and application layers to ensure stable system operation",
      "Collaborated with engineers to understand system requirements and improve reliability of internal tools",
    ],
    color: "var(--neon-yellow)",
  },
  {
    role: "Full-Stack Developer",
    company: "Projects & Learning",
    period: "Dec 2024 — Jan 2025",
    bullets: [
      "Built Flaskr CRUD blog app with Flask, SQLite, Jinja2 templating, and auth",
      "Developed stevebnb2 housing application with full CRUD and user flows",
      "Gained proficiency in Python, REST APIs, and relational databases",
    ],
    color: "var(--neon-orange)",
  },
  {
    role: "Agent Engineering Bootcamp",
    company: "Agent Lab / Maven",
    period: "Sep 2025 — Oct 2025",
    bullets: [
      "Completed intensive engineering program focused on system design, software implementation, testing, and iterative improvement",
      "Built and deployed full-stack AI capstone using Next.js, Supabase, and GPT-5 with real-time context reasoning",
      "Implemented function-calling patterns and scalable agent lifecycle designs aligned with production AI system best practices",
    ],
    color: "var(--neon-pink)",
  },
  {
    role: "AI Engineer",
    company: "Independent",
    period: "2025 — Present",
    bullets: [
      "Built FF15: multi-agent AI food & fitness platform with 9 subagents and 27 tools",
      "Built DegenGPT: sports betting AI with RAG, web search, and MCP integrations",
      "Shipped production Next.js 15 apps with AI SDK 5, Supabase, and GPT-4o",
    ],
    color: "var(--neon-green)",
  },
];

const education = [
  {
    degree: "San Jose State University",
    school: "B.S. Management Information Systems",
    period: "Aug 2019 — May 2024",
    gpa: "3.6 / 4.0",
    coursework: "Data Structures & Algorithms, Database Management, Data Analytics",
    color: "var(--neon-blue)",
  },
];

export default function Resume() {
  return (
    <section id="resume" className="relative py-24 px-6 overflow-hidden pitch-bg">
      <div className="section-number" style={{ color: "var(--neon-blue)" }}>04</div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-start justify-between mb-16 flex-wrap gap-4"
        >
          <div>
            <p className="text-[var(--neon-blue)] text-xs tracking-widest mb-2">// CAREER LOG</p>
            <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)]">
              Resume<span className="text-[var(--neon-pink)]">.</span>
            </h2>
          </div>
          <a
            href="/Steven_Huang_Resume.pdf"
            download
            className="flex items-center gap-2 px-5 py-3 rounded-full border border-[var(--neon-green)]/40 text-[var(--neon-green)] text-sm font-bold tracking-wider hover:bg-[var(--neon-green)]/10 transition-colors"
          >
            <Download size={16} />
            DOWNLOAD PDF
          </a>
        </motion.div>

        {/* Experience */}
        <div className="mb-12">
          <p className="text-xs text-[var(--text-muted)] tracking-widest mb-6">EXPERIENCE</p>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--border-color)]" />

            <div className="space-y-10 pl-8">
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-10 top-1 w-3 h-3 rounded-full border-2 border-[var(--bg-primary)]"
                    style={{ background: exp.color }}
                  />

                  <div className="flex flex-wrap items-baseline gap-3 mb-1">
                    <h3 className="font-bold text-[var(--text-primary)]">{exp.role}</h3>
                    <span className="text-sm" style={{ color: exp.color }}>{exp.company}</span>
                    <span className="text-xs text-[var(--text-muted)] ml-auto">{exp.period}</span>
                  </div>
                  <ul className="space-y-1">
                    {exp.bullets.map((b) => (
                      <li key={b} className="text-sm text-[var(--text-muted)] flex gap-2">
                        <span style={{ color: exp.color }}>▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <p className="text-xs text-[var(--text-muted)] tracking-widest mb-6">EDUCATION</p>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--border-color)]" />
            <div className="pl-8 space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative"
                >
                  <div
                    className="absolute -left-10 top-1 w-3 h-3 rounded-full border-2 border-[var(--bg-primary)]"
                    style={{ background: edu.color }}
                  />
                  <div className="flex flex-wrap items-baseline gap-3 mb-1">
                    <h3 className="font-bold text-[var(--text-primary)]">{edu.degree}</h3>
                    <span className="text-sm" style={{ color: edu.color }}>{edu.school}</span>
                    <span className="text-xs text-[var(--text-muted)] ml-auto">{edu.period}</span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)]">
                    GPA: <span className="text-[var(--text-primary)]">{edu.gpa}</span>
                    <span className="mx-2">·</span>
                    {edu.coursework}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

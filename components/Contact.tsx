"use client";

import { motion } from "framer-motion";
import { GitFork, Mail, Link, ExternalLink } from "lucide-react";

const links = [
  {
    icon: GitFork,
    label: "GitHub",
    handle: "@stevenhuang8",
    href: "https://github.com/stevenhuang8",
    color: "var(--neon-green)",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "steven.t.huang8gmail.com",
    href: "mailto:steven.t.huang8@gmail.com",
    color: "var(--neon-orange)",
  },
  {
    icon: Link,
    label: "LinkedIn",
    handle: "Steven Huang",
    href: "https://linkedin.com/in/steven-huang8",
    color: "var(--neon-blue)",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 bg-[var(--bg-secondary)] overflow-hidden">
      <div className="section-number" style={{ color: "var(--neon-pink)" }}>05</div>

      {/* Background decorations */}
      <div className="absolute top-10 right-10 text-6xl float opacity-20 pointer-events-none select-none">📬</div>
      <div className="absolute bottom-10 left-10 text-5xl float-delay opacity-20 pointer-events-none select-none">🕹️</div>

      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[var(--neon-pink)] text-xs tracking-widest mb-2">// MULTIPLAYER MODE</p>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] mb-4">
            Let&apos;s Connect<span className="text-[var(--neon-green)]">.</span>
          </h2>
          <p className="text-[var(--text-muted)] max-w-md mx-auto mb-12 text-sm leading-relaxed">
            Open to new projects, collaborations, or just talking AI, soccer, or food.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-5 rounded-2xl border bg-[var(--bg-card)] flex flex-col items-center gap-3 group transition-colors"
                style={{ borderColor: `${link.color}20` }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${link.color}50`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${link.color}20`)}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${link.color}15` }}
                >
                  <Icon size={20} style={{ color: link.color }} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--text-primary)]">{link.label}</p>
                  <p className="text-xs text-[var(--text-muted)]">{link.handle}</p>
                </div>
                <ExternalLink size={12} className="text-[var(--text-muted)] group-hover:text-[var(--neon-green)] transition-colors" />
              </motion.a>
            );
          })}
        </div>

        {/* Availability status */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[var(--neon-green)]/20 bg-[var(--neon-green)]/5"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--neon-green)] pulse-glow" />
          <span className="text-sm text-[var(--text-muted)]">
            Currently <span className="text-[var(--neon-green)] font-bold">available</span> for new opportunities
          </span>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mt-20 pt-8 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-4 text-xs text-[var(--text-muted)]"
      >
        <span>Built with Next.js 16 + Framer Motion</span>
        <span className="gradient-green-orange font-bold">Steven Huang © 2026</span>
        <span>⚽ 🎮 🍜</span>
      </motion.div>
    </section>
  );
}

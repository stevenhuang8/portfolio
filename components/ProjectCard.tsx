"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Project {
  title: string;
  emoji: string;
  tagline: string;
  description: string;
  tags: string[];
  accentColor: string;
  glowClass: string;
  gradientClass: string;
  github?: string;
  live?: string;
  video?: string;
}

function VideoModal({ src, accentColor, onClose }: { src: string; accentColor: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl rounded-2xl overflow-hidden border"
          style={{ borderColor: `${accentColor}40` }}
          onClick={(e) => e.stopPropagation()}
        >
          <video
            src={src}
            controls
            autoPlay
            className="w-full block"
            style={{ maxHeight: "70vh" }}
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-black/60 hover:bg-black/80 transition-colors text-white"
          >
            ✕
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15, duration: 0.5 }}
        className="card-scene h-96"
      >
        <div className="card-inner">
          {/* Front */}
          <div
            className={`card-face rounded-2xl border bg-[var(--bg-card)] flex flex-col justify-between p-6 overflow-hidden relative`}
            style={{ borderColor: `${project.accentColor}30` }}
          >
            {/* Background glow */}
            <div
              className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: project.accentColor }}
            />

            <div>
              <div className="text-5xl mb-4">{project.emoji}</div>
              <h3
                className={`text-2xl font-black mb-2 ${project.gradientClass}`}
              >
                {project.title}
              </h3>
              <p className="text-[var(--text-muted)] text-sm">{project.tagline}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-md border"
                  style={{ borderColor: `${project.accentColor}40`, color: project.accentColor }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="absolute bottom-3 right-4 text-xs text-[var(--text-muted)] opacity-50">
              hover to flip →
            </div>
          </div>

          {/* Back */}
          <div
            className="card-back card-face rounded-2xl border bg-[var(--bg-secondary)] flex flex-col justify-between p-6 overflow-hidden relative"
            style={{ borderColor: `${project.accentColor}40` }}
          >
            <div
              className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full blur-3xl opacity-15 pointer-events-none"
              style={{ background: project.accentColor }}
            />

            <div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">{project.title}</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ background: `${project.accentColor}15`, color: project.accentColor }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {project.video && (
                <button
                  onClick={() => setShowVideo(true)}
                  className="flex-1 text-center py-2 rounded-lg text-xs font-bold tracking-wider text-[var(--bg-primary)] transition-opacity hover:opacity-80"
                  style={{ background: project.accentColor }}
                >
                  ▶ DEMO
                </button>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 rounded-lg border text-xs font-bold tracking-wider transition-colors"
                  style={{ borderColor: `${project.accentColor}50`, color: project.accentColor }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = `${project.accentColor}20`)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  GITHUB
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 rounded-lg text-xs font-bold tracking-wider text-[var(--bg-primary)] transition-opacity hover:opacity-80"
                  style={{ background: project.accentColor }}
                >
                  LIVE DEMO
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {showVideo && project.video && (
        <VideoModal
          src={project.video}
          accentColor={project.accentColor}
          onClose={() => setShowVideo(false)}
        />
      )}
    </>
  );
}

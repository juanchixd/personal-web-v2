// src/components/React/ProjectDashboard.jsx
import React, { useState } from "react";
import { projects as PROJECTS } from "../data/projects.js";

export default function ProjectDashboard() {
  const [activeTab, setActiveTab] = useState("all"); // 'all', 'hardware', 'software'

  const filteredProjects =
    activeTab === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.type === activeTab);

  return (
    <div className="w-full">
      {/* --- CONTROLES / SWITCH --- */}
      <div className="flex justify-center mb-12">
        <div className="bg-tech-surface p-1 rounded-lg border border-gray-800 inline-flex">
          {["all", "hardware", "software"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-6 py-2 rounded-md font-mono text-sm transition-all duration-300
                ${
                  activeTab === tab
                    ? "bg-gray-700 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }
              `}
            >
              {tab === "all" && "ALL SYSTEMS"}
              {tab === "hardware" && "HARDWARE"}
              {tab === "software" && "SOFTWARE"}
            </button>
          ))}
        </div>
      </div>

      {/* --- GRILLA DE TARJETAS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className={`
              group relative bg-tech-surface border rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300
              ${
                project.type === "hardware"
                  ? "border-copper/20 hover:border-copper"
                  : "border-mate-green/20 hover:border-mate-green"
              }
            `}
          >
            {/* Encabezado de la tarjeta */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                {/* Icono dinámico según tipo */}
                <span
                  className={`text-xl ${
                    project.type === "hardware"
                      ? "text-copper"
                      : "text-mate-green"
                  }`}
                >
                  {project.type === "hardware" ? "⚙️" : "💻"}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-opacity-100">
                  {project.title}
                </h3>
              </div>
              <span className="text-xs font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded">
                {project.status}
              </span>
            </div>

            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Footer de la tarjeta: Tags y Link */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-auto">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-gray-400 bg-black/30 px-2 py-1 rounded border border-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={`/proyectos/${project.id}`}
                className={`text-sm font-bold flex items-center gap-1 ${
                  project.type === "hardware"
                    ? "text-copper hover:underline"
                    : "text-mate-green hover:underline"
                }`}
              >
                Ver detalles
                <span>→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

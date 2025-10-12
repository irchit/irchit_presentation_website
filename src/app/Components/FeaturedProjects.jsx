"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import styles from "@/app/Styles/projects.module.css";
import ProjectPolaroid from "./ProjectPolaroid";

export default function FeaturedProjects() {
  const searchParams = useSearchParams();
  const [content, setContent] = useState({
    title: "Projects",
    text: "Here are some of my featured projects. Click on the project to view more details.",
    text2: "See more on this page: ",
  });
  const [projects, setProjects] = useState([]);

  // 🌍 Detect language from ?lang=
  useEffect(() => {
    const lang = searchParams.get("lang") || "en";
    if (lang === "ro") {
      setContent({
        title: "Proiecte",
        text: "Iată câteva dintre proiectele mele de referință. Faceți clic pe proiect pentru a vedea mai multe detalii.",
        text2: "Vezi mai multe pe această pagină: ",
      });
    } else if (lang === "de") {
      setContent({
        title: "Projekte",
        text: "Hier sind einige meiner vorgestellten Projekte. Klicken Sie auf das Projekt, um mehr Details zu sehen.",
        text2: "Mehr auf dieser Seite sehen: ",
      });
    } else {
      setContent({
        title: "Projects",
        text: "Here are some of my featured projects. Click on the project to view more details.",
        text2: "See more on this page: ",
      });
    }
  }, [searchParams]);

  // 🧩 Fetch projects and display latest 3
  useEffect(() => {
    async function fetchProjects() {
      try {
        const baseUrl =
          process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
        const res = await fetch(`${baseUrl}/api/projects`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to fetch projects");

        const data = await res.json();

        // Sort by date descending using English date
        const sorted = data
          .sort(
            (a, b) =>
              new Date(b.en?.date || "1900-01-01") -
              new Date(a.en?.date || "1900-01-01")
          )
          .slice(0, 3);

        setProjects(sorted);
      } catch (err) {
        console.error("❌ Error fetching projects:", err);
      }
    }

    fetchProjects();
  }, []);

  const lang = searchParams.get("lang") || "en";

  return (
    <div id="projects" className={styles.featuredProjectsContainer}>
      <h1>{content.title}</h1>

      <div
        style={{
          alignSelf: "flex-start",
          display: "block",
          height: "2px",
          width: "20vw",
          background:
            "linear-gradient(to right, #91c29c80 0%, #91c29cFF 10%, #91c29c80 30%, #91c29c00 100%)",
          borderRadius: "25%",
          marginBottom: "2vh",
        }}
      />

      <p>{content.text}</p>

      <div
        style={{
          display: "flex",
          gap: "2vh",
          justifyContent: "center",
          flexWrap: "wrap",
          alignContent: "center",
        }}
      >
        {projects.length === 0 ? (
          <p>Loading projects...</p>
        ) : (
          projects.map((proj, index) => {
            const projectLang = proj[lang] || proj.en; // fallback to English
            return (
              <ProjectPolaroid
                key={projectLang.title}
                contentAllLang={proj} // 👈 Pass all languages directly
                rotation={index === 1 ? 45 : 0}
              />
            );
          })
        )}
      </div>

      <p>
        {content.text2}
        <a href={`/projects?lang=${lang}`} style={{ color: "#d7bee5" }}>
          {content.title}
        </a>
        .
      </p>
    </div>
  );
}

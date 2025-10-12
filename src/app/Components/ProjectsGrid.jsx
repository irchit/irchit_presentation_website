"use client";

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import styles from "@/app/Styles/projects.module.css";
import ProjectPolaroid from "../Components/ProjectPolaroid";


export default function ProjectsGrid() {
  const [projects, setProjects] = useState([]);
  const [searchedName, setSearchedName] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const searchParams = useSearchParams();
  const [content, setContent] = useState({
    title: "Projects",
    search_placeholder: "Search...",
    type: "Project Type",
    all: "All",
    other: "Other",
  });

  // Fetch projects from MongoDB
  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects", { cache: "no-store" });
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("❌ Error fetching projects:", error);
      }
    }
    fetchProjects();
  }, []);

  // Handle search
  const handleSearchChange = (e) => setSearchedName(e.target.value);
  const handleTypeChange = (e) => setSelectedType(e.target.value);

  // Handle language switch
  useEffect(() => {
    const lang = searchParams.get("lang");
    if (lang === "ro") {
      setContent({
        title: "Proiecte",
        search_placeholder: "Căutare...",
        type: "Tip Proiect",
        all: "Toate",
        other: "Altele",
      });
    } else if (lang === "de") {
      setContent({
        title: "Projekte",
        search_placeholder: "Suche...",
        type: "Projekttyp",
        all: "Alle",
        other: "Andere",
      });
    } else {
      setContent({
        title: "Projects",
        search_placeholder: "Search...",
        type: "Project Type",
        all: "All",
        other: "Other",
      });
    }
  }, [searchParams]);

  // Filter results by search or type
  const filteredProjects = projects.filter((proj) => {
    const lang = searchParams.get("lang") || "en";
    const name = proj.shortDescription?.[lang] || "";
    return (
      name.toLowerCase().includes(searchedName.toLowerCase()) &&
      (selectedType === "all" || proj.type === selectedType)
    );
  });

  return (
    <>
      <Header />
      <div className={styles.projectFeed}>
        <div className={styles.projectsFeedHeader}>
          <div>
            <h2>{content.title}</h2>
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
          </div>
          {/* Search and Filter */}
        </div>

        <div className={styles.gridProjects}>
          {filteredProjects.map((proj, index) => (
            <ProjectPolaroid
              key={proj._id || index}
              contentAllLang={proj}
              rotation={(Math.random() - 0.7) * 10}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
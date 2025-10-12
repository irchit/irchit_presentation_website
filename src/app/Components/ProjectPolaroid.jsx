import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import styles from "@/app/Styles/projects.module.css";

export default function ProjectPolaroid({ index, contentAllLang }) {
  const searchParams = useSearchParams();
  const [content, setContent] = useState(contentAllLang.en);
  const [lang, setLang] = useState("en");

  const colors = [
  "#bfefc7d1", // greenish
  "#ffe4b5d1", // beige
  "#add8e6d1", // light blue
  "#ffc0cbd1", // pink
  "#d1b3ffd1", // purple
  "#fffacdd1", // pale yellow
  "#c1e1ffd1", // sky blue
  "#d3f8e2d1", // mint
  "#ffd6a5d1", // peach
];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  useEffect(() => {
    const currentLang = searchParams.get("lang") || "en";
    setLang(currentLang);

    const openViewText = {
      en: "Click to open view",
      ro: "Click pentru a deschide view-ul",
      de: "Klicken Sie, um die Ansicht zu öffnen",
    };

    let selectedContent = contentAllLang[currentLang] || contentAllLang.en;
    selectedContent = {
      ...selectedContent,
      openView: openViewText[currentLang] || openViewText.en,
      color: selectedContent.color || randomColor,
    };

    setContent(selectedContent);
  }, [searchParams, contentAllLang]);

  const handleClick = () => {
    window.location.href = `/project/${content.title}?lang=${lang}`;
  };

  return (
    <div
      className={styles.projectPolaroid}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div
        className={styles.projectPolaroidContent}
        style={{ backgroundColor: content.color }}
      >
        <img
          src={content.logo}
          alt={content.title}
          className={styles.projectPolaroidLogo}
        />
        <p>
          {content.description}
          <br />
          <span
            style={{
              padding: "0.5vh 0",
              textDecoration: "underline",
              cursor: "pointer",
              color: "#002507ff",
            }}
          >
            {content.openView}
          </span>
        </p>
      </div>

      <div className={styles.projectPolaroidFooter}>
        <h3>{content.title}</h3>
        <p>{content.date}</p>
      </div>
    </div>
  );
}

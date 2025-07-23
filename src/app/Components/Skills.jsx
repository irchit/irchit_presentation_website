"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "@/app/Styles/aboutme.module.css";

export default function Skills() {
  const searchParams = useSearchParams();

  const [content, setContent] = useState({
    title: "My Skills",
    codingLanguages: [
        "Python",
        "JavaScript",
        "HTML",
        "CSS",
        "C#",
        "Java",
        "C++",
        "SQL"
    ],
    platforms: [
        "React",
        "Next.js",
        "Node.js",
        "Flask",
        "Spring",
        "JavaFX",
        "Unity",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "QT C++",
        "Greenfoot"
    ],
    technologies: [
        "Web Development",
        "Restful APIs",
        "Client-Server Architecture",
        "Game Development",
        "AI-based Analysis Tools",
        "Object-Oriented Programming",
        "Data Structures and Algorithms",
        "Database Management for SQL and NoSQL",
        "Version Control (Git)"
    ]
  });

  useEffect(() => {
    const lang = searchParams.get("lang") || "en";

    if (lang === "ro") {
      setContent({
        title: "Abilitățile Mele",
        codingLanguages: [
            "Python",
            "JavaScript",
            "HTML",
            "CSS",
            "C#",
            "Java",
            "C++",
            "SQL"
        ],
        platforms: [
            "React",
            "Next.js",
            "Node.js",
            "Flask",
            "Spring",
            "JavaFX",
            "Unity",
            "MongoDB",
            "PostgreSQL",
            "MySQL",
            "QT C++",
            "Greenfoot"
        ],
        technologies: [
            "Dezvoltare Web",
            "APIs Restful",
            "Arhitectură Client-Server",
            "Dezvoltare Jocuri",
            "Instrumente de Analiză Bazate pe AI",
            "Programare Orientată pe Obiecte",
            "Structuri de Date și Algoritmi",
            "Gestionarea Bazelor de Date pentru SQL și NoSQL",
            "Controlul Versiunilor (Git)"
        ]
      });
    } else if (lang === "de") {
      setContent({
        title: "Meine Fähigkeiten",
        codingLanguages: [
          "Python", 
          "JavaScript", 
          "HTML", 
          "CSS", 
          "C#", 
          "Java", 
          "C++", 
          "SQL"
        ],
        platforms: [
          "React", 
          "Next.js", 
          "Node.js", 
          "Flask", 
          "Spring", 
          "JavaFX", 
          "Unity", 
          "MongoDB", 
          "PostgreSQL", 
          "MySQL", 
          "QT C++", 
          "Greenfoot"
        ],
        technologies: [
          "Webentwicklung", 
          "Restful APIs", 
          "Client-Server-Architektur", 
          "Spieleentwicklung", 
          "KI-basierte Analysetools", 
          "Objektorientierte Programmierung", 
          "Datenstrukturen und Algorithmen", 
          "Datenbankmanagement für SQL und NoSQL", 
          'Versionskontrolle (Git)'
        ]
      });
    } else {
      setContent({
        title: "My Skills",
        codingLanguages: [
            "Python", 
            "JavaScript", 
            "HTML", 
            "CSS", 
            "C#", 
            "Java", 
            "C++", 
            "SQL"
            ],
        platforms: [
            "React",
            "Next.js",
            "Node.js",
            "Flask",
            "Spring",
            "JavaFX",
            "Unity",
            "MongoDB",
            "PostgreSQL",
            "MySQL",
            "QT C++",
            "Greenfoot"
        ],
        technologies: [
            "Web Development",
            "Restful APIs",
            "Client-Server Architecture",
            "Game Development",
            "AI-based Analysis Tools",
            "Object-Oriented Programming",
            "Data Structures and Algorithms",
            "Database Management for SQL and NoSQL",
            "Version Control (Git)"
        ]
        });
        }
    }, [searchParams]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                padding: "2em 0"
            }}
        >
            <h2
                style={{
                    alignSelf: "flex-end",
                    color: "white",
            fontSize: "4vh",
            marginRight: "10vw",
                }}
            >{content.title}</h2>
            <div style={{ 
                    alignSelf: "flex-end",
            marginRight: "10vw",
            display: "block",
            height: "2px",
            width: "40%",
            background: "linear-gradient(to right, #91c29c80 0%, #91c29cFF 10%, #91c29c80 30%, #91c29c00 100%)",
            borderRadius: "25%",
            marginBottom: "2em",
            transform: "scaleX(-1)"
       }} />
            <div className={styles.skillsContainer}>
                <div className={styles.cardTraits}>
                    <h3>{
                        searchParams.get("lang") === "ro" ? "Limbi de Programare" :
                        searchParams.get("lang") === "de" ? "Programmiersprachen" :
                        "Coding Languages"
                    }
                    </h3>
                    <ul>
                    {content.codingLanguages.map((lang, idx) => (
                        <li key={idx}>{lang}</li>
                    ))}
                    </ul>
                </div>
                <div className={styles.cardTraits}>
                    <h3>{
                        searchParams.get("lang") === "ro" ? "Platforme" :
                        searchParams.get("lang") === "de" ? "Plattformen" :
                        "Platforms"
                    }</h3>
                    <ul>
                    {content.platforms.map((platform, idx) => (
                        <li key={idx}>{platform}</li>
                    ))}
                    </ul>
                </div>
                <div className={styles.cardTraits}>
                    <h3>{
                        searchParams.get("lang") === "ro" ? "Tehnologii" :
                        searchParams.get("lang") === "de" ? "Technologien" :
                        "Technologies"
                    }</h3>
                    <ul>
                    {content.technologies.map((tech, idx) => (
                        <li key={idx}>{tech}</li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
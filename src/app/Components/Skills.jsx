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
    ],
    languages: [
        "Language proficiency",
        ["Language", "Level", "Diploma"],
        ["Romanian", "Native", "Native Language"],
        ["English", "C2", "UBB Language Diploma"],
        ["German", "B2", "Goethe Language Diploma"]
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
        ],
        languages: [
            "Competenţe Lingvistice",
            ["Limbă", "Nivel", "Diplomă"],
            ["Română", "Nativ", "Limbă Maternă"],
            ["Engleză", "C2", "UBB, Diploma Lingvistică"],
            ["Germană", "B2", "Goethe, Diploma Lingvistică"]
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
        ],
        languages: [
            "Sprachkompetenzen",
            ["Sprache", "Niveau", "Diploma"],
            ["Rumänisch", "Nativ","Muttersprache"],
            ["Englisch", "C2", "UBB, Sprachdiplom"],
            ["Deutsch", "B2", "Goethe, Sprachdiplom"]
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
        ],
    languages: [
            "Language proficiency",
            ["Language", "Level", "Diploma"],
            ["Romanian", "Native", "Native Language"],
            ["English", "C2", "UBB Language Diploma"],
            ["German", "B2", "Goethe Language Diploma"]
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
            <div style={{
                display: "flex",
                flexDirection: "column",
                width: "70%",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <h5
                    style={{
                        fontSize: "3vh",
                        fontWeight: "500",
                        alignSelf: "flex-start",
                        color: "white",
                        marginBottom: "2vh"
                    }}
                >{content.languages[0]}</h5>
                 <div style={{ 
                    alignSelf: "flex-start",
                    marginRight: "10vw",
                    display: "block",
                    height: "1px",
                    width: "20%",
                    background: "linear-gradient(to right, #91c29c80 0%, #91c29cFF 10%, #91c29c80 30%, #91c29c00 100%)",
                    borderRadius: "25%",
                    marginBottom: "2em"
                }} />
                <div className={styles.langTable}>
                    <div>                        
                        <p>{content.languages[1][0]}</p>
                        <p>{content.languages[1][1]}</p>
                        <p>{content.languages[1][2]}</p>
                    </div>
                    <div>                        
                        <p>{content.languages[2][0]}</p>
                        <p><em>{content.languages[2][1]}</em></p>
                        <p>{content.languages[2][2]}</p>
                    </div>
                    <div 
                        title="Open"
                        onClick = {
                        () => {
                            window.open("/UBB-English.pdf")
                        }
                    }
                        className={styles.langTableLink}
                    >                        
                        <p>{content.languages[3][0]}</p>
                        <p><em>{content.languages[3][1]}</em></p>
                        <p>{content.languages[3][2]}</p>
                    </div>
                    <div
                        title="Open"
                        onClick = {
                        () => {
                            window.open("/Goethe-Deutsch.pdf")
                        }
                    }
                        className={styles.langTableLink}
                    >                        
                        <p>{content.languages[4][0]}</p>
                        <p><em>{content.languages[4][1]}</em></p>
                        <p>{content.languages[4][2]}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
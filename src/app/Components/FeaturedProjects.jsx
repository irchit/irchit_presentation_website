import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams} from "next/navigation";
import styles from "@/app/Styles/projects.module.css";
import ProjectPolaroid from "./ProjectPolaroid";

export default function FeaturedProjects() {
    const searchParams = useSearchParams();
    const [content, setContent] = useState({
        title: "Projects",
        text: "Here are some of my featured projects. Click on the project to view more details.",
        text2: "See more on this page: "
    });

    useEffect(() => {
        const lang = searchParams.get("lang") || "en";
        if (lang === "ro") {
            setContent({
                title: "Proiecte",
                text: "Iată câteva dintre proiectele mele de referință. Faceți clic pe proiect pentru a vedea mai multe detalii.",
                text2: "Vezi mai multe pe această pagină: "
            });
        } else if (lang === "de") {
            setContent({
                title: "Projekte",
                text: "Hier sind einige meiner vorgestellten Projekte. Klicken Sie auf das Projekt, um mehr Details zu sehen.",
                text2: "Mehr auf dieser Seite sehen: "
            });
        } else {
            setContent({
                title: "Projects",
                text: "Here are some of my featured projects. Click on the project to view more details.",
                text2: "See more on this page: "
            });
        }
    }, [searchParams]);

    return (
        <div id="projects" className={styles.featuredProjectsContainer}>
            <h1>{content.title}</h1>
            <div style={{ 
                    alignSelf: "flex-start",
                    display: "block",
                    height: "2px",
                    width: "20vw",
                    background: "linear-gradient(to right, #91c29c80 0%, #91c29cFF 10%, #91c29c80 30%, #91c29c00 100%)",
                    borderRadius: "25%",
                    marginBottom: "2vh"
            }} />
            <p>{content.text}</p>
            <div style={{ display: "flex", gap: "2vh", justifyContent: "center", flexWrap: "wrap", alignContent: "center" }}>
                <ProjectPolaroid contentAllLang={{
        en: {
          title: "Portofolio Website",
          description: "A personal portfolio website built with Next.js, featuring a modern UI and multilingual support. The project includes a backend Flask API connected to a MongoDB database for dynamic data management and secure contact form submissions.",
          date: "2025",
          logo: "/project-logo.png",
          link: "https://example.com",
          color: "#bfefc7d1"
        },
        ro: {
          title: "Titlul Proiectului",
          description: "Un website portofoliu personal construit cu Next.js, cu interfață modernă și suport multilingv. Proiectul include un API Flask conectat la o bază de date MongoDB pentru gestionarea dinamică a datelor și trimiterea securizată a formularului de contact.",
          date: "2025",
          logo: "/project-logo.png",
          link: "https://example.com",         
          color: "#bfefc7d1"

        },
        de: {
          title: "Projekt Titel",
          description: "Eine persönliche Portfolio-Website mit Next.js, modernem UI und Mehrsprachigkeit. Das Projekt beinhaltet eine Flask-API mit einer MongoDB-Datenbank für dynamische Datenverwaltung und sichere Kontaktformular-Übermittlung.",
          date: "2025",
          logo: "/project-logo.png",
          link: "https://example.com",
          color: "#bfefc7d1"
        }
      }} /><ProjectPolaroid contentAllLang={{
        en: {
          title: "Portofolio Website",
          description: "A personal portfolio website built with Next.js, featuring a modern UI and multilingual support. The project includes a backend Flask API connected to a MongoDB database for dynamic data management and secure contact form submissions.",
          date: "2025",
          logo: "/project-logo.png",
          link: "https://example.com",
          color: "#bdf5ffd1"
        },
        ro: {
          title: "Titlul Proiectului",
          description: "Un website portofoliu personal construit cu Next.js, cu interfață modernă și suport multilingv. Proiectul include un API Flask conectat la o bază de date MongoDB pentru gestionarea dinamică a datelor și trimiterea securizată a formularului de contact.",
          date: "2025",
          logo: "/project-logo.png",
          link: "https://example.com",
          color: "#bdf5ffd1"
        },
        de: {
          title: "Projekt Titel",
          description: "Eine persönliche Portfolio-Website mit Next.js, modernem UI und Mehrsprachigkeit. Das Projekt beinhaltet eine Flask-API mit einer MongoDB-Datenbank für dynamische Datenverwaltung und sichere Kontaktformular-Übermittlung.",
          date: "2025",
          logo: "/project-logo.png",
          link: "https://example.com",
          color: "#bdf5ffd1"
        }
      }} rotation={45} /><ProjectPolaroid contentAllLang={{
        en: {
          title: "Portofolio Website",
          description: "A personal portfolio website built with Next.js, featuring a modern UI and multilingual support. The project includes a backend Flask API connected to a MongoDB database for dynamic data management and secure contact form submissions.",
          date: "2025",
          logo: "/project-logo.png",
          link: "https://example.com",
          color: "#e5ffb9d1"
        },
        ro: {
          title: "Titlul Proiectului",
          description: "Un website portofoliu personal construit cu Next.js, cu interfață modernă și suport multilingv. Proiectul include un API Flask conectat la o bază de date MongoDB pentru gestionarea dinamică a datelor și trimiterea securizată a formularului de contact.",
          date: "2025",
          logo: "/project-logo.png",
          link: "https://example.com",
          color: "#e5ffb9d1"
        },
        de: {
          title: "Projekt Titel",
          description: "Eine persönliche Portfolio-Website mit Next.js, modernem UI und Mehrsprachigkeit. Das Projekt beinhaltet eine Flask-API mit einer MongoDB-Datenbank für dynamische Datenverwaltung und sichere Kontaktformular-Übermittlung.",
          date: "2025",
          logo: "/project-logo.png",
          link: "https://example.com",
          color: "#e5ffb9d1"
        }
      }} />
            </div>
            <p>{content.text2} <a href="/projects"
            
            style={{color: "#d7bee5"}}
            
            >{content.title}</a>.</p>
        </div>
    );

}
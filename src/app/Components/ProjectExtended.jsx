"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import styles from "@/app/Styles/projects.module.css"
import ImageGridElement from "./ImageGridElement";
import BookmarksProject from "./BookmarksProject";

export default function ProjectExtended({ data }) {
    const [isMobile, setIsMobile] = useState(false);
    
      useEffect(() => {
        // Funcție care actualizează starea în funcție de lățimea ecranului
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); // apel inițial
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || "en";
const [translation, setTranslation] = useState({
    openApp: "Open Application",
    viewCode: "View Code",
    viewPresentation: "View Demo on Youtube",
    links: "Links:",
    target: "Purpose of Project",
    description: "Description",
    technologies: "Technologies",
    concepts: "Concepts",
    gallery: "Gallery"
});

useEffect(() => {
    if (lang === "ro") {
        setTranslation({
            openApp: "Deschide aplicația",
            viewCode: "Vezi codul",
            viewPresentation: "Vezi prezentarea pe Youtube",
            links: "Link-uri:",
            target: "Scopul Proiectului",
            description: "Descriere",
            technologies: "Tehnologii",
            concepts: "Concepte",
            gallery: "Galerie"
        });
    } else if (lang === "de") {
        setTranslation({
            openApp: "Anwendung öffnen",
            viewCode: "Code anzeigen",
            viewPresentation: "Demo auf Youtube ansehen",
            links: "Links:",
            target: "Ziel des Projekts",
            description: "Darstellung",
            technologies: "Technologien",
            concepts: "Konzepte",
            gallery: "Galerie"
        });
    } else {
        setTranslation({
            openApp: "Open Application",
            viewCode: "View Code",
            viewPresentation: "View Demo on Youtube",
            links: "Links:",
            target: "Purpose of Project",
            description: "Description",
            technologies: "Technologies",
            concepts: "Concepts",
            gallery: "Gallery"
        });
    }
}, [lang]);
  const [content, setContent] = useState({
    title: data.title,
    shortDescription: data.shortDescription.en,
    longDescription: data.longDescription.en,
    purpose: data.purpose.en,
    concepts: data.concepts.en
  });

  useEffect(() => {
    if (lang === "ro") {
      setContent({
        title: data.title,
        date: data.date ? data.date.split("-").reverse().join("/")
            : "",
        shortDescription: data.shortDescription.ro,
        longDescription: data.longDescription.ro,
        purpose: data.purpose.ro,
        concepts: data.concepts.ro
      });
    } else if (lang === "de") {
      setContent({
        title: data.title,
        date: data.date? data.date.split("-").reverse().join("/")
            : "",
        shortDescription: data.shortDescription.de,
        longDescription: data.longDescription.de,
        purpose: data.purpose.de,
        concepts: data.concepts.de
      });
    } else {
      setContent({
        title: data.title,
        date: data.date
            ? data.date.split("-").reverse().join("/")
            : "",
        shortDescription: data.shortDescription.en,
        longDescription: data.longDescription.en,
        purpose: data.purpose.en,
        concepts: data.concepts.en
      });
    }
  }, [lang, data]);

return (
    <div className={styles.projectExtended}>
        {isMobile ? null : 
        <BookmarksProject />}
        <div className={styles.contentHeader} id="title">
                <div className={styles.imgContainerLogo}>
                    <img src={data.images.logo} alt={`${data.title} Logo`} />
                </div>
                <div className={styles.contentTitle}>
                        <h1>{content.title}</h1>
                        <h5>{content.date}</h5>
                        <p>
                            {content.shortDescription.split("~").map((part, idx) => (
                                <span key={idx}>
                                    {part.trim()}
                                    {idx < content.shortDescription.split("~").length - 1 && <br />}
                                </span>
                            ))}
                        </p>
                        <div style={{alignSelf: "flex-start", textAlign: "left"}}>
                            <h3>{translation.links}</h3>
                            <ul>
                                {data.application ?<li> <a href={data.application} target="_blank"> {translation.openApp} </a> </li>: null}
                                {data.github ? <li><a href={data.github} target="_blank"> {translation.viewCode} </a></li> : null}
                                {data.youtube ? <li> <a href={data.youtube} target="_blank"> {translation.viewPresentation} </a> </li>: null}
                            </ul>
                        </div>
                </div>
        </div>
        <div className={styles.contentPurpose} id="purpose">
            <div className={styles.purposeText}>
                <h2>{translation.target}:</h2>
                <p>{content.purpose}</p>
            </div>
            <img src="/target.png" />
        </div>
        <div className={styles.contnentDescription} id="description">
            <div className={styles.longDescription}>
                <h2>{translation.description}:</h2>
                {content.longDescription.split("~").map((paragraph, idx) => (
                    <p key={idx}>{paragraph.trim()}</p>
                ))}
            </div>
            <div className={styles.technologiesConcepts} id="technologies">
                <div className={styles.technologies}>
                    <h3>{translation.technologies}:</h3>
                    <ul>
                        {data.technologies.map((tech, idx) => (
                            <li key={idx}>{tech}</li>
                        ))}
                    </ul>
                </div>
                <img src="/code_png.png"/>
                <div className={styles.concepts}>
                    <h3>{translation.concepts}:</h3>
                    <ul>
                        {content.concepts.map((concept, idx) => (
                            <li key={idx}>{concept}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        <h1 style={{color: "white", fontSize: "5vh", marginBottom: "1vh"}} id="gallery">{translation.gallery}</h1>
        
        <div style={{ 
                    display: "block",
                    height: "2px",
                    width: "100%",
                    background: "linear-gradient(90deg,rgba(44, 56, 41, 0) 0%, rgba(101, 117, 106, 1) 30%, rgba(121, 164, 134, 1) 50%, rgba(98, 114, 101, 1) 70%, rgba(93, 110, 93, 0) 100%)",
                    borderRadius: "25%",
                    marginBottom: "2vh"
            }} />

        <div className={styles.gallery}>
            {data.images.views.map((img, idx) => {
                const parts = img.split('/');
                const fileName = parts[parts.length - 1];
                const fileDir = parts.slice(0, parts.length - 1).join('/');
                return (
                    <ImageGridElement isMobile={isMobile} key={idx} idx={idx} img={img} fileName={fileName} fileDir={fileDir} />
                );
            })}
        </div>
    </div>
);
}

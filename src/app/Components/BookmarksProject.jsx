"use client";
import { useState, useEffect, use } from "react";
import { useSearchParams } from "next/navigation";
import styles from "@/app/Styles/projects.module.css"

export default function BookmarksProject() {

    const searchParams = useSearchParams();
    const lang = searchParams.get("lang") || "en";
    const [translation, setTranslation] = useState({
        title: "Title",
        target: "Purpose",
        description: "Description",
        technologies: "Technologies",
        gallery: "Gallery"
    });

    useEffect(() => {
        if (lang === "ro") {
            setTranslation({
                title: "Titlu",
                target: "Scop",
                description: "Descriere",
                technologies: "Tehnologii",
                gallery: "Galerie"
            });
        } else if (lang === "de") {
            setTranslation({
                title: "Titel",
                target: "Ziel des Projekts",
                description: "Darstellung",
                technologies: "Technologien",
                gallery: "Galerie"
            });
        } else {
            setTranslation({
                title: "Title",
                target: "Purpose",
                description: "Description",
                technologies: "Technologies",
                gallery: "Gallery"
            });
        }
    }, [lang]);

    return(
        <div className={styles.bookmarksProject}>
            <a href="#header">
                <div className={styles.bookmark}>{translation.title}</div>
            </a>
            <a href="#purpose">
                <div className={styles.bookmark}>{translation.target}</div>
            </a>
            <a href="#description">
                <div className={styles.bookmark}>{translation.description}</div>
            </a>
            <a href="#technologies">
                <div className={styles.bookmark}>{translation.technologies}</div>
            </a>
            <a href="#gallery">
                <div className={styles.bookmark}>{translation.gallery}</div>
            </a>
        </div>
    )

}
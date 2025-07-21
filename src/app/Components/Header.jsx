"use client";
import React, {useState, useEffect} from "react";
import { useRouter, useSearchParams} from "next/navigation";
import styles from "@/app/Styles/header.module.css";

export default function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", lang);
    router.push(`?${params.toString()}`);
  };

  const [content, setContent] = useState({
    aboutme: "About Me",
    cv: "CV",
    projects: "Projects",
    contact: "Contact"
  })

  useEffect(() => {
    const lang = searchParams.get("lang") || "en";

    if (lang === "ro") {
      setContent({
        aboutme: "Despre mine",
        cv: "CV",
        projects: "Proiecte",
        contact: "Contact"
      });
    } else if (lang === "de") {
      setContent({
        aboutme: "Über mich",
        cv: "CV",
        projects: "Projekte",
        contact: "Kontakt"
      });
    } else {
      setContent({
        aboutme: "About Me",
        cv: "CV",
        projects: "Projects",
        contact: "Contact"
      });
    }
  }, [searchParams]);

  return (
    <div className={styles.header}>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
            <img src="./logo.png" alt="Logo" className={styles.logo} />
        </div>
        <nav className={styles.nav}>
          <a href="#home" className={styles.navLink}>{content.aboutme}</a>
          <a href="#about" className={styles.navLink}>{content.cv}</a>
          <a href="#projects" className={styles.navLink}>{content.projects}</a>
          <a href="#contact" className={styles.navLink}>{content.contact}</a>

          <select className={styles.langSelector} onChange={handleLanguageChange} defaultValue={searchParams.get("lang") || "en"}>
            <option value="en">English</option>
            <option value="ro">Română</option>
            <option value="de">Deutsch</option>
          </select>
        </nav>
        </div>
        <div className={styles.title}>
            <h1>
                Chiţea Răzvan ~ irchit
            </h1>
            <img src="./munte_cut.png" className={styles.mountainCut} 
                style={{
                    bottom: 0,
                    left: "-3vw"
                }}
            />
            <img src="./munte_cut.png" className={styles.mountainCut} 
                style={{
                    bottom: 0,
                    left: "5vw"
                }}
            />
            <img src="./munte_cut.png" className={styles.mountainCut} 
                style={{
                    bottom: 0,
                    left: "10vw",
                    transform: "scaleX(-1)"
                }}
            />
            <img src="./munte_cut.png" className={styles.mountainCut} 
                style={{
                    bottom: 0,
                    right: "-3vw",
                    transform: "scaleX(-1)"
                }}
            />
            <img src="./munte_cut.png" className={styles.mountainCut} 
                style={{
                    bottom: 0,
                    right: "6vw",
                }}
            />
            <img src="./munte_cut.png" className={styles.mountainCut} 
                style={{
                    bottom: 0,
                    right: "11vw",
                    transform: "scaleX(-1)"
                }}
            />
        </div>
    </div>
  );
}

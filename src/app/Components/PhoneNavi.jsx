"use client";
import React, {useState, useEffect} from "react";
import { useRouter, useSearchParams} from "next/navigation";
import styles from "@/app/Styles/header.module.css";

export default function PhoneNavi() {
  const [domain, setDomain] = useState("");
  useEffect(() => {
    setDomain(window.location.origin);
  }, []);
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
        <div className={styles.phoneNav} id="phoneNav">
            <a href={"/?lang=" + (searchParams.get("lang") || "en")} className={styles.navLink}>{content.aboutme}</a>
            <a href={"/cv?lang=" + (searchParams.get("lang") || "en")} className={styles.navLink}>{content.cv}</a>
            <a href={"/projects?lang=" + (searchParams.get("lang") || "en")} className={styles.navLink}>{content.projects}</a>
            <a href={domain + "?lang=" + (searchParams.get("lang") || "en") + "/#contact"} className={styles.navLink}>{content.contact}</a>

            <select className={styles.langSelector} onChange={handleLanguageChange} defaultValue={searchParams.get("lang") || "en"}>
                <option value="en">English</option>
                <option value="ro">Română</option>
                <option value="de">Deutsch</option>
            </select>
            <button className={styles.menuButton} onClick={() => {
                const nav = document.getElementById("phoneNav");
                if (nav) {
                    nav.style.left = "100%";
                }
            }}>✕</button>
        </div>
    )

}

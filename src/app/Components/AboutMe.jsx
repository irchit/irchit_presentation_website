"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "@/app/Styles/aboutme.module.css";

export default function AboutMe() {
  const searchParams = useSearchParams();

    const [content, setContent] = useState({
        title: "Who Am I?",
        description: "\tAs a Computer Science graduate, my expertise lies in harnessing cutting-edge technologies to develop dynamic applications, such as websites and engaging games.\n\tProficient in a suite of development tools, including Next.js and React for front-end innovation, Flask and Spring for robust back-end solutions, as well as JavaFX and Unity for creating applications and immersive gaming experiences.\n\tI have also started to integrate AI-based analysis tools into my projects, enhancing content understanding and delivering smarter digital products.\n\tBeyond my technical skills, I bring a strong passion for technology and a commitment to delivering high-quality, impactful solutions."

    });

    useEffect(() => {
        const lang = searchParams.get("lang") || "en";

        if (lang === "ro") {
            setContent({
                title: "Cine Sunt Eu?",
                description: "\tCa absolvent de Informatică, expertiza mea constă în utilizarea tehnologiilor de ultimă generație pentru a dezvolta aplicații dinamice, precum site-uri web și jocuri captivante.\n\tSunt experimentat într-o suită de instrumente de dezvoltare, inclusiv Next.js și React pentru inovație în front-end, Flask și Spring pentru soluții robuste de back-end, precum și JavaFX și Unity pentru crearea de aplicații și experiențe de joc imersive.\n\tAm început, de asemenea, să integrez instrumente de analiză bazate pe inteligență artificială în proiectele mele, îmbunătățind înțelegerea conținutului și livrând produse digitale mai inteligente.\n\tDincolo de abilitățile mele tehnice, aduc cu mine o puternică pasiune pentru tehnologie și un angajament ferm pentru livrarea de soluții de calitate și cu impact."
            });
        } else if (lang === "de") {
            setContent({
                title: "Wer Bin Ich?",
                description: "\tAls Absolvent der Informatik liegt meine Expertise in der Nutzung modernster Technologien zur Entwicklung dynamischer Anwendungen wie Websites und spannender Spiele.\n\tIch beherrsche eine Reihe von Entwicklungstools, darunter Next.js und React für innovative Front-End-Lösungen, Flask und Spring für stabile Back-End-Systeme sowie JavaFX und Unity zur Erstellung von Anwendungen und fesselnden Spielerlebnissen.\n\tZudem habe ich begonnen, KI-basierte Analysetools in meine Projekte zu integrieren, um das Inhaltsverständnis zu verbessern und intelligentere digitale Produkte bereitzustellen.\n\tNeben meinen technischen Fähigkeiten bringe ich eine große Leidenschaft für Technologie und das Bestreben mit, qualitativ hochwertige und wirkungsvolle Lösungen zu liefern."
            });
        } else {
            setContent({
                title: "Who Am I?",
                description: "\tAs a Computer Science graduate, my expertise lies in harnessing cutting-edge technologies to develop dynamic applications, such as websites and engaging games.\n\tProficient in a suite of development tools, including Next.js and React for front-end innovation, Flask and Spring for robust back-end solutions, as well as JavaFX and Unity for creating applications and immersive gaming experiences.\n\tI have also started to integrate AI-based analysis tools into my projects, enhancing content understanding and delivering smarter digital products.\n\tBeyond my technical skills, I bring a strong passion for technology and a commitment to delivering high-quality, impactful solutions."
            });
        }
    }, [searchParams]);


    return (
        <div className={styles.aboutmeMain}>
            <div className={styles.aboutmeContainer}>
                <div className={styles.textAboutMeContainer}>
                    {
                        <h2>
                            {content.title.split(" ").map((word, index) => (
                                <React.Fragment key={index}>
                                <span>{word.charAt(0)}</span>{word.slice(1)}{" "}
                                </React.Fragment>
                            ))}
                        </h2>
                    } 
                    {content.description.split("\n").map((line, index) => (
                    <p key={index} style={{margin: "0.75em 0.75em" }}>
                        {line.split("\t").map((tab, tabIndex) => (
                        <span
                            key={tabIndex}
                            style={{
                                fontWeight: "300",
                                fontSize: "2vh",
                                display: "inline-block",
                                color: "white"
                                }}
                        >
                            {tab}
                        </span>
                        ))}
                    </p>
                    ))}
                </div>
                <img src="./me_fac.jpg" className={styles.photoPolaroid} />
            </div>
        </div>
    )

}
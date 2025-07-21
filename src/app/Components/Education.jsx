"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "@/app/Styles/aboutme.module.css";

export default function Education() {
  const searchParams = useSearchParams();

  const [content, setContent] = useState({
    title: "Education",
    masters: {
      title: "Master's Degree in Advanced Information Systems",
      institution: "University of Babes-Bolyai FMI, Cluj-Napoca",
      date: "2025 - Present",
      language: "German",
      description:
        "Currently pursuing a Master's degree in Advanced Information Systems, focusing on the latest advancements in computer science and information technology.",
    },
    bachelor: {
      title: "Bachelor's Degree in Computer Science",
      institution: "University of Babes-Bolyai FMI, Cluj-Napoca",
      date: "2022 - 2025",
      language: "Romanian",
      description:
        "Graduated with a Bachelor's degree in Computer Science, gaining a solid foundation in programming, algorithms, and software development.",
    },
    highSchool: {
      title: "High School Diploma - Bacalaureate",
      institution: "National College Andrei Şaguna, Braşov",
      date: "2018 - 2022",
      language: "Romanian",
      description:
        "Completed high school with a focus on mathematics and computer science, achieving a Bacalaureate diploma with a score of 9.48.",
    },
    artsSchool: {
      title: "Arts School Diploma - Acting Diploma",
      institution: 'Arts School of Braşov "Tiberiu Brediceanu", Braşov',
      date: "2018 - 2020",
      language: "Romanian",
      description:
        "Completed an Acting Diploma at the Arts School of Braşov, enhancing my communication skills and creativity.",
    },
  });

  useEffect(() => {
    const lang = searchParams.get("lang") || "en";

    if (lang === "ro") {
      setContent({
        title: "Educație",
        masters: {
          title: "Master în Sisteme Informatice Avansate",
          institution: "Universitatea Babeș-Bolyai FMI, Cluj-Napoca",
          date: "2025 - Prezent",
          language: "Germană",
          description:
            "În prezent urmez un program de master în Sisteme Informatice Avansate, axat pe cele mai noi tendințe din informatică și tehnologia informației.",
        },
        bachelor: {
          title: "Licență în Informatică",
          institution: "Universitatea Babeș-Bolyai FMI, Cluj-Napoca",
          date: "2022 - 2025",
          language: "Română",
          description:
            "Am absolvit programul de licență în Informatică, dobândind o bază solidă în programare, algoritmi și dezvoltare software.",
        },
        highSchool: {
          title: "Liceu şi Diplomă de Bacalaureat",
          institution: "Colegiul Național Andrei Șaguna, Brașov",
          date: "2018 - 2022",
          language: "Română",
          description:
            "Am finalizat liceul cu profil matematică-informatică, obținând diploma de Bacalaureat cu media 9.48.",
        },
        artsSchool: {
          title: "Diplomă în Actorie",
          institution: 'Școala Populară de Arte Brașov "Tiberiu Brediceanu"',
          date: "2018 - 2020",
          language: "Română",
          description:
            "Am urmat cursurile de actorie la Școala de Arte din Brașov, dezvoltându-mi abilitățile de comunicare și creativitate.",
        },
      });
    } else if (lang === "de") {
      setContent({
        title: "Ausbildung",
        masters: {
          title: "Masterabschluss in Fortgeschrittenen Informationssystemen",
          institution: "Universität Babeș-Bolyai FMI, Cluj-Napoca",
          date: "2025 - Gegenwart",
          language: "Deutsch",
          description:
            "Derzeit absolviere ich ein Masterstudium in Fortgeschrittenen Informationssystemen mit Fokus auf modernen Entwicklungen in der Informatik und Informationstechnologie.",
        },
        bachelor: {
          title: "Bachelorabschluss in Informatik",
          institution: "Universität Babeș-Bolyai FMI, Cluj-Napoca",
          date: "2022 - 2025",
          language: "Rumänisch",
          description:
            "Ich habe mein Bachelorstudium in Informatik abgeschlossen und fundierte Kenntnisse in Programmierung, Algorithmen und Softwareentwicklung erworben.",
        },
        highSchool: {
          title: "Lyzeum und Abitur",
          institution: "Nationalkolleg Andrei Șaguna, Brașov",
          date: "2018 - 2022",
          language: "Rumänisch",
          description:
            "Ich habe das Gymnasium mit Schwerpunkt Mathematik und Informatik abgeschlossen und mein Abitur mit der Note 9,48 erhalten.",
        },
        artsSchool: {
          title: "Diplom in Schauspielkunst",
          institution: 'Kunstschule Brașov "Tiberiu Brediceanu"',
          date: "2018 - 2020",
          language: "Rumänisch",
          description:
            "Ich habe die Schauspielschule in Brașov abgeschlossen, wodurch ich meine Kommunikationsfähigkeit und Kreativität weiterentwickeln konnte.",
        }
      });}
      else {
        setContent(
            {
                title: "Education",
                masters: {
                title: "Master's Degree in Advanced Information Systems",
                institution: "University of Babes-Bolyai FMI, Cluj-Napoca",
                date: "2025 - Present",
                language: "German",
                description:
                    "Currently pursuing a Master's degree in Advanced Information Systems, focusing on the latest advancements in computer science and information technology.",
                },
                bachelor: {
                title: "Bachelor's Degree in Computer Science",
                institution: "University of Babes-Bolyai FMI, Cluj-Napoca",
                date: "2022 - 2025",
                language: "Romanian",
                description:
                    "Graduated with a Bachelor's degree in Computer Science, gaining a solid foundation in programming, algorithms, and software development.",
                },
                highSchool: {
                title: "High School Diploma - Bacalaureate",
                institution: "National College Andrei Şaguna, Braşov",
                date: "2018 - 2022",
                language: "Romanian",
                description:
                    "Completed high school with a focus on mathematics and computer science, achieving a Bacalaureate diploma with a score of 9.48.",
                },
                artsSchool: {
                title: "Arts School Diploma - Acting Diploma",
                institution: 'Arts School of Braşov "Tiberiu Brediceanu", Braşov',
                date: "2018 - 2020",
                language: "Romanian",
                description:
                    "Completed an Acting Diploma at the Arts School of Braşov, enhancing my communication skills and creativity.",
                },
            });
        }
  }, [searchParams]);

  return (
    <div className={styles.educationSection}>
      <h2 style={{
            alignSelf: "flex-start",
            marginLeft: "10vw",
            fontSize: "4vh",
        }}>{content.title}</h2>
      <div style={{ 
            alignSelf: "flex-start",
            display: "block",
            height: "2px",
            width: "40%",
            background: "linear-gradient(to right, #91c29c80 0%, #91c29cFF 10%, #91c29c80 30%, #91c29c00 100%)",
            borderRadius: "25%",
            marginLeft: "10vw"
       }} />
       <div className={styles.list}>
            <div className={styles.card}>
                <img src="./learning.png" style={{ width: "10vw", filter: "brightness(0) invert(1)", marginLeft: "2vw"}} />
                <div className={styles.activeEduCard}>
                    <h3>{content.masters.title}</h3>
                    <p><strong>{content.masters.institution}</strong> ({content.masters.date})</p>
                    <p><em>{content.masters.language}</em></p>
                    <p>{content.masters.description}</p>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.activeEduCard}>
                    <h3>{content.bachelor.title}</h3>
                    <p><strong>{content.bachelor.institution}</strong> ({content.bachelor.date})</p>
                    <p><em>{content.bachelor.language}</em></p>
                    <p>{content.bachelor.description}</p>
                </div>
                <img src="./diploma.png" style={{ width: "10vw", filter: "brightness(0) invert(1)", marginRight: "2vw"}} />
            </div>
            
            <div className={styles.card}>
                <img src="./study.png" style={{ width: "10vw", filter: "brightness(0) invert(1)", marginLeft: "2vw"}} />
                <div className={styles.activeEduCard}>
                    <h3>{content.highSchool.title}</h3>
                    <p><strong>{content.highSchool.institution}</strong> ({content.highSchool.date})</p>
                    <p><em>{content.highSchool.language}</em></p>
                    <p>{content.highSchool.description}</p>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.activeEduCard}>
                    <h3>{content.artsSchool.title}</h3>
                    <p><strong>{content.artsSchool.institution}</strong> ({content.artsSchool.date})</p>
                    <p><em>{content.artsSchool.language}</em></p>
                    <p>{content.artsSchool.description}</p>
                </div>
                <img src="./theater.png" style={{ width: "10vw", filter: "brightness(0) invert(1)", marginRight: "2vw"}} />
            </div>
       </div>
    </div>
  );
}

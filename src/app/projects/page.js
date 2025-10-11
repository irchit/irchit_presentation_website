"use client"
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import React, {useState, useEffect, Suspense} from "react";
import { useRouter, useSearchParams} from "next/navigation";
import styles from "@/app/Styles/projects.module.css";
import ProjectPolaroid from "../Components/ProjectPolaroid";

export default function Home() {

    
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
        const projects = [
  {
    en: {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with Next.js, featuring a modern UI and multilingual support. The project includes a backend Flask API connected to a MongoDB database for dynamic data management and secure contact form submissions.",
      date: "2025",
      logo: "/project-logo.png",
      link: "/project/1",
      color: "#bfefc7d1",
    },
    ro: {
      title: "Website Portofoliu",
      description:
        "Un website portofoliu personal construit cu Next.js, cu interfață modernă și suport multilingv. Proiectul include un API Flask conectat la o bază de date MongoDB pentru gestionarea dinamică a datelor și trimiterea securizată a formularului de contact.",
      date: "2025",
      logo: "/project-logo.png",
      link: "/project/1",
      color: "#bfefc7d1",
    },
    de: {
      title: "Portfolio Webseite",
      description:
        "Eine persönliche Portfolio-Website mit Next.js, modernem UI und Mehrsprachigkeit. Das Projekt beinhaltet eine Flask-API mit einer MongoDB-Datenbank für dynamische Datenverwaltung und sichere Kontaktformular-Übermittlung.",
      date: "2025",
      logo: "/project-logo.png",
      link: "/project/1",
      color: "#bfefc7d1",
    },
  },
  {
    en: {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce application built with Next.js and Node.js, supporting real-time cart updates and secure payments via Stripe integration.",
      date: "2025",
      logo: "/project-logo.png",
      link: "/project/2",
      color: "#ffe4b5d1",
    },
    ro: {
      title: "Platformă E-Commerce",
      description:
        "O aplicație e-commerce modernă construită cu Next.js și Node.js, care oferă actualizări în timp real ale coșului și plăți sigure prin Stripe.",
      date: "2025",
      logo: "/project-logo.png",
      link: "/project/2",
      color: "#ffe4b5d1",
    },
    de: {
      title: "E-Commerce Plattform",
      description:
        "Eine moderne E-Commerce-Anwendung mit Next.js und Node.js, mit Echtzeit-Warenkorbaktualisierungen und sicheren Stripe-Zahlungen.",
      date: "2025",
      logo: "/project-logo.png",
      link: "/project/2",
      color: "#ffe4b5d1",
    },
  },
  {
    en: {
      title: "Mobile Fitness Tracker",
      description:
        "A React Native fitness tracking app allowing users to monitor workouts, calories, and progress with data synced via Firebase.",
      date: "2024",
      logo: "/project-logo.png",
      link: "/project/3",
      color: "#add8e6d1",
    },
    ro: {
      title: "Aplicație Fitness Mobilă",
      description:
        "O aplicație React Native pentru urmărirea antrenamentelor, caloriilor și progresului, cu date sincronizate prin Firebase.",
      date: "2024",
      logo: "/project-logo.png",
      link: "/project/3",
      color: "#add8e6d1",
    },
    de: {
      title: "Mobile Fitness App",
      description:
        "Eine React-Native-Fitness-App zur Überwachung von Workouts, Kalorien und Fortschritt, mit Synchronisierung über Firebase.",
      date: "2024",
      logo: "/project-logo.png",
      link: "/project/3",
      color: "#add8e6d1",
    },
  },
  {
    en: {
      title: "Desktop Note Manager",
      description:
        "A cross-platform Electron app for managing notes and tasks offline, featuring markdown support and local data storage.",
      date: "2024",
      logo: "/project-logo.png",
      link: "/project/4",
      color: "#ffc0cbd1",
    },
    ro: {
      title: "Manager de Note Desktop",
      description:
        "O aplicație Electron multiplatformă pentru gestionarea notelor și sarcinilor offline, cu suport markdown și stocare locală a datelor.",
      date: "2024",
      logo: "/project-logo.png",
      link: "/project/4",
      color: "#ffc0cbd1",
    },
    de: {
      title: "Desktop Notizmanager",
      description:
        "Eine plattformübergreifende Electron-App zur Offline-Verwaltung von Notizen und Aufgaben, mit Markdown-Unterstützung und lokaler Datenspeicherung.",
      date: "2024",
      logo: "/project-logo.png",
      link: "/project/4",
      color: "#ffc0cbd1",
    },
  },
  {
    en: {
      title: "AI Chatbot",
      description:
        "An AI-powered chatbot built with Flask and OpenAI API, capable of handling customer queries and providing personalized responses.",
      date: "2025",
      logo: "/project-logo.png",
      link: "/project/5",
      color: "#d1b3ffd1",
    },
    ro: {
      title: "Chatbot AI",
      description:
        "Un chatbot bazat pe inteligență artificială, construit cu Flask și OpenAI API, capabil să gestioneze întrebările clienților și să ofere răspunsuri personalizate.",
      date: "2025",
      logo: "/project-logo.png",
      link: "/project/5",
      color: "#d1b3ffd1",
    },
    de: {
      title: "KI Chatbot",
      description:
        "Ein KI-gestützter Chatbot mit Flask und OpenAI API, der Kundenanfragen verarbeitet und personalisierte Antworten liefert.",
      date: "2025",
      logo: "/project-logo.png",
      link: "/project/5",
      color: "#d1b3ffd1",
    },
  },
  {
    en: {
      title: "Game Prototype",
      description:
        "A 2D puzzle-platformer developed with Unity, featuring original assets and physics-based gameplay.",
      date: "2024",
      logo: "/project-logo.png",
      link: "/project/6",
      color: "#fffacdd1",
    },
    ro: {
      title: "Prototip de Joc",
      description:
        "Un joc 2D de tip puzzle-platformă dezvoltat în Unity, cu elemente originale și mecanici bazate pe fizică.",
      date: "2024",
      logo: "/project-logo.png",
      link: "/project/6",
      color: "#fffacdd1",
    },
    de: {
      title: "Spielprototyp",
      description:
        "Ein 2D-Puzzle-Plattformer, entwickelt mit Unity, mit originalen Assets und physikbasiertem Gameplay.",
      date: "2024",
      logo: "/project-logo.png",
      link: "/project/6",
      color: "#fffacdd1",
    },
  },
  {
    en: {
      title: "Music Streaming Dashboard",
      description:
        "A dashboard for visualizing streaming analytics, built with React and Chart.js, integrating Spotify API data.",
      date: "2025",
      logo: "/project-logo.png",
      link: "/project/7",
      color: "#c1e1ffd1",
    },
    ro: {
      title: "Dashboard Streaming Muzical",
      description:
        "Un dashboard pentru vizualizarea analizelor de streaming, construit cu React și Chart.js, integrând date din API-ul Spotify.",
      date: "2025",
      logo: "/project-logo.png",
      link: "/project/7",
      color: "#c1e1ffd1",
    },
    de: {
      title: "Musik-Streaming-Dashboard",
      description:
        "Ein Dashboard zur Visualisierung von Streaming-Analysen, entwickelt mit React und Chart.js, integriert mit der Spotify API.",
      date: "2025",
      logo: "/project-logo.png",
      link: "/project/7",
      color: "#c1e1ffd1",
    },
  },
  {
    en: {
      title: "Weather Forecast App",
      description:
        "A web application providing weather forecasts using the OpenWeather API, with location-based suggestions and adaptive UI.",
      date: "2024",
      logo: "/project-logo.png",
      link: "/project/8",
      color: "#d3f8e2d1",
    },
    ro: {
      title: "Aplicație Meteo",
      description:
        "O aplicație web care oferă prognoze meteo folosind OpenWeather API, cu sugestii bazate pe locație și interfață adaptivă.",
      date: "2024",
      logo: "/project-logo.png",
      link: "/project/8",
      color: "#d3f8e2d1",
    },
    de: {
      title: "Wettervorhersage-App",
      description:
        "Eine Webanwendung, die Wettervorhersagen über die OpenWeather API liefert, mit standortbasierten Empfehlungen und adaptivem Design.",
      date: "2024",
      logo: "/project-logo.png",
      link: "/project/8",
      color: "#d3f8e2d1",
    },
  },
  {
    en: {
      title: "Task Management Tool",
      description:
        "A collaborative task manager built with Next.js and MongoDB, allowing teams to organize projects efficiently.",
      date: "2025",
      logo: "/project-logo.png",
      link: "/project/9",
      color: "#ffd6a5d1",
    },
    ro: {
      title: "Instrument de Management al Sarcinilor",
      description:
        "Un manager de sarcini colaborativ construit cu Next.js și MongoDB, care permite echipelor să organizeze proiectele eficient.",
      date: "2025",
      logo: "/project-logo.png",
      link: "/project/9",
      color: "#ffd6a5d1",
    },
    de: {
      title: "Aufgabenmanagement-Tool",
      description:
        "Ein kollaboratives Aufgabenmanagement-Tool mit Next.js und MongoDB, das Teams hilft, Projekte effizient zu organisieren.",
      date: "2025",
      logo: "/project-logo.png",
      link: "/project/9",
      color: "#ffd6a5d1",
    },
  },
];

    const [searchedName, setSearchedName] = useState("");
    const [selectedType, setSelectedType] = useState(null);

    
    const handleSearchChange = (e) => {
        setSearchedName(e.target.value);
    };

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
    };

    const searchParams = useSearchParams();
    const [content, setContent] = useState({
        title: "Projects",
        search_placeholder: "Search...",
        type: "Project Type",
        all: "All",
        other: "Other"
    });

    // Handle language switch
    useEffect(() => {
        const lang = searchParams.get("lang");
        if (lang === "ro") {
            setContent({
                title: "Proiecte",
                search_placeholder: "Căutare...",
                type: "Tip Proiect",
                all: "Toate",
                other: "Altele"
            });
        } else if (lang === "de") {
            setContent({
                title: "Projekte",
                search_placeholder: "Suche...",
                type: "Projekttyp",
                all: "Alle",
                other: "Andere"
            });
        } else {
            setContent({
                title: "Projects",
                search_placeholder: "Search...",
                type: "Project Type",
                all: "All",
                other: "Other"
            });
        }   

    }, [searchParams]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <div className={styles.projectFeed}>
                <div className={styles.projectsFeedHeader}>
                    <div>
                        <h2>{content.title}</h2>
                        <div style={{ 
                            alignSelf: "flex-start",
                            display: "block",
                            height: "2px",
                            width: "20vw",
                            background: "linear-gradient(to right, #91c29c80 0%, #91c29cFF 10%, #91c29c80 30%, #91c29c00 100%)",
                            borderRadius: "25%",
                            marginBottom: "2vh"
                        }} />
                    </div>
                    <div className={styles.projectsFeedSearch}>
                        Search: 
                        <input type="text" placeholder={content.search_placeholder} onChange={handleSearchChange} />
                        &nbsp; &nbsp; Filter: 
                        <select onChange={handleTypeChange}>
                            <option value="all">{content.all}</option>
                            <option value="web">Web App</option>
                            <option value="mobile">Mobile App</option>
                            <option value="desktop">Desktop App</option>
                            <option value="game">Game</option>
                            <option value="other">{content.other}</option>
                        </select>
                    </div>
                </div>
                <div className={styles.gridProjects}>
                    {projects.map((proj, index) => (
                        <ProjectPolaroid 
                        key={index} 
                        contentAllLang={proj} 
                        rotation={(Math.random() - 0.7) * 10}  
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </Suspense>
    )
}

import Footer from "@/app/Components/Footer";
import Header from "../../Components/Header";
import styles from "@/app/Styles/projects.module.css";
import ProjectExtended from "@/app/Components/ProjectExtended";
import { Suspense } from "react";

export const runtime = "edge";

export default function Home(){

    const project = {
        _id: { $oid: "6881eea5ba60be6e473dc3b3" },
        title: "PoemSociety",
        date: "2025-06-14",
        shortDescription: {
            en: "Bachelor Degree Project~Social Media Platform for poetry~Next.js, Flask, MongoDB",
            de: "Bachelorarbeit~Soziale Medienplattform für Gedichte~Next.js, Flask, MongoDB",
            ro: "Proiect de licență~Platformă de social media pentru poezie~Next.js, Flask, MongoDB"
        },
        longDescription: {
            en: "PoemSociety is a social media platform dedicated to poetry enthusiasts and creators, developed as a Bachelor Degree project.~ Built with Next.js for the front-end, Flask for the back-end, and MongoDB for data storage, the platform offers an engaging space for users to share, read, and interact with poems.~ Its core innovation lies in a hybrid recommendation system that combines collaborative filtering with content-based filtering, allowing personalized suggestions based on user behavior, poem themes, languages, and emotional tones.~ PoemSociety integrates semantic text analysis to automatically extract the main emotions and topics from each poem, providing meaningful recommendations and enhancing user experience.~ The platform’s clean UI/UX design ensures intuitive navigation, while its modular architecture supports scalability and continuous improvement.~ Through this project, the traditional art of poetry meets modern digital interaction, aiming to revive interest in literature by adapting it to the habits of today’s social media users.",
            de: "PoemSociety ist eine soziale Plattform für Poesie-Liebhaber und Autoren, entwickelt als Bachelorarbeit.~ Die Plattform wurde mit Next.js für das Frontend, Flask für das Backend und MongoDB für die Datenspeicherung erstellt und bietet einen interaktiven Raum zum Teilen, Lesen und Diskutieren von Gedichten.~ Die Kerninnovation liegt in einem hybriden Empfehlungssystem, das kollaboratives Filtern mit inhaltsbasierten Methoden kombiniert, um personalisierte Vorschläge auf Grundlage von Benutzerverhalten, Gedichtthemen, Sprachen und emotionalen Tönen zu ermöglichen.~ PoemSociety integriert eine semantische Textanalyse, die automatisch die wichtigsten Emotionen und Themen aus jedem Gedicht extrahiert, um bedeutungsvolle Empfehlungen zu liefern und die Benutzererfahrung zu verbessern.~ Das klare UI/UX-Design gewährleistet eine intuitive Navigation, während die modulare Architektur Skalierbarkeit und kontinuierliche Weiterentwicklung unterstützt.~ Dieses Projekt verbindet die traditionelle Kunst der Poesie mit moderner digitaler Interaktion und will das Interesse an Literatur wiederbeleben, indem es sie an die Gewohnheiten heutiger Social-Media-Nutzer anpasst.",
            ro: "PoemSociety este o platformă de social media dedicată pasionaților și creatorilor de poezie, dezvoltată ca proiect de licență.~ Construită cu Next.js pentru interfața de utilizator, Flask pentru backend și MongoDB pentru stocarea datelor, platforma oferă un spațiu interactiv unde utilizatorii pot publica, citi și interacționa cu poezii.~ Inovația centrală constă într-un sistem hibrid de recomandare care îmbină filtrarea colaborativă cu cea bazată pe conținut, generând sugestii personalizate în funcție de comportamentul utilizatorilor, temele, limbile și emoțiile predominante din poezii.~ PoemSociety integrează analiza semantică automată a textelor pentru a extrage principalele emoții și teme ale fiecărei poezii, oferind recomandări relevante și îmbunătățind experiența utilizatorului.~ Designul UI/UX curat și intuitiv facilitează navigarea, iar arhitectura modulară sprijină scalabilitatea și dezvoltarea continuă.~ Prin acest proiect, arta tradițională a poeziei întâlnește interacțiunea digitală modernă, având scopul de a readuce literatura în atenția publicului contemporan."
        },
        technologies: [
            "Next.js",
            "Flask",
            "MongoDB",
            "Javascript",
            "HTML",
            "CSS",
            "Python"
        ],
        concepts: {
            en: [
            "Hybrid Recommendation System",
            "Collaborative Filtering",
            "Content-Based Filtering",
            "Semantic Text Analysis",
            "Emotion Detection",
            "Topic Extraction",
            "Multilingual Support",
            "Responsive UI/UX",
            "Modular Architecture"
            ],
            de: [
            "Hybrides Empfehlungssystem",
            "Kollaboratives Filtern",
            "Inhaltsbasiertes Filtern",
            "Semantische Textanalyse",
            "Emotionserkennung",
            "Themenextraktion",
            "Mehrsprachigkeit",
            "Responsives UI/UX",
            "Modulare Architektur"
            ],
            ro: [
            "Sistem hibrid de recomandare",
            "Filtrare colaborativă",
            "Filtrare bazată pe conținut",
            "Analiză semantică a textului",
            "Detectarea emoțiilor",
            "Extracția temelor",
            "Suport multilingv",
            "UI/UX responsiv",
            "Arhitectură modulară"
            ]
        },
        github: "https://github.com/irchit/PoemSocietyBachelor",
        youtube: "https://youtu.be/YuCZJKPJakM",
        application: "",
        images: {
            logo: "/projects/PoemSociety/poemSocietyLogo.png",
            views: [
            "/projects/PoemSociety/HomeMenuFeed.png",
            "/projects/PoemSociety/userPage.png"
            ]
        },
        purpose: {
            en: "The purpose of this project was to create a social platform for poets and poetry enthusiasts, addressing the decline in interest for reading poems and the increasing difficulty for poets to gain visibility. Another motivation came from my own experience as a writer: I often wished for a dedicated social space for people passionate about writing and reading poems, as I rarely felt that my creations were truly heard.",
            de: "Das Ziel dieses Projekts war es, eine soziale Plattform für Dichter und Poesiebegeisterte zu schaffen, um dem rückläufigen Interesse am Lesen von Gedichten und der zunehmenden Schwierigkeit für Dichter, bekannt zu werden, entgegenzuwirken. Eine weitere Motivation stammte aus meiner eigenen Erfahrung als Autor: Ich habe mir oft eine dedizierte soziale Plattform für Menschen gewünscht, die leidenschaftlich gerne Gedichte schreiben und lesen, da ich selten das Gefühl hatte, dass meine Werke wirklich gehört wurden.",
            ro: "Scopul acestui proiect a fost să creez o platformă socială pentru poeți și pasionații de poezie, răspunzând astfel scăderii interesului pentru citirea poeziilor și dificultății crescânde a poeților de a deveni cunoscuți. O altă motivație a venit din propria mea experiență ca scriitor: mi-am dorit mereu să existe un spațiu social dedicat oamenilor pasionați de scris și citit poeme, deoarece rareori am simțit că creațiile mele au fost cu adevărat auzite."
        }
        };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <ProjectExtended data={project} />
            <Footer />
        </Suspense>
    )

}
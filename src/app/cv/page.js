"use client"
import PdfViewer from "../Components/CV";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import React, {useState, useEffect} from "react";
import { useRouter, useSearchParams} from "next/navigation";

export default function Home() {

    const searchParams = useSearchParams();
    const [content, setContent] = useState({
        title: "My Curriculum Vitae",
        download: "Download",
        text: "Here you can see my Resume"
    });

    // Handle language switch
    useEffect(() => {
        const lang = searchParams.get("lang");
        if (lang === "de") {
            setContent({
                title: "Mein Lebenslauf",
                download: "Herunterladen",
                text: "Hier können Sie meinen Lebenslauf sehen"
            });
        } else if (lang === "ro") {
            setContent({
                title: "Curriculum Vitae",
                download: "Descarcă",
                text: "Aici puteți vedea CV-ul meu"
            });
        } else {
            setContent({
                title: "My Curriculum Vitae",
                download: "Download",
                text: "Here you can see my Resume"
            });
        }

    }, [searchParams]);

    // --- DOWNLOAD BUTTON LOGIC ---
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/CV.pdf";    // file must be in public/ folder
        link.download = "CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <Header />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    margin: "1.5vh 0",
                    color: "white"
                }}
            >
                <h1>{content.title}</h1>
                <p>{content.text}</p>
                <button onClick={handleDownload}>{content.download}</button>
            </div>

            <PdfViewer file={"CV.pdf"} />
            <Footer />
        </div>
    )
}

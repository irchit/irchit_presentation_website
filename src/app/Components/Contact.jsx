import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams} from "next/navigation";
import styles from "@/app/Styles/contact.module.css";
import EmailSender from "./mail";

export default function Contact() {
    const searchParams = useSearchParams();
    const [content, setContent] = useState({
        title: "Contact",
        text: "Feel free to reach out via email or through the other methods listed below.",
        text2: "I will get back to you as soon as possible.",
    });

    useEffect(() => {
        const lang = searchParams.get("lang") || "en";
        if (lang === "ro") {
            setContent({
                title: "Contact",
                text: "Nu ezitați să mă contactați prin e-mail sau prin alte metode enumerate mai jos.",
                text2: "Voi răspunde cât mai curând posibil.",
            });
        } else if (lang === "de") {
            setContent({
                title: "Kontakt",
                text: "Zögern Sie nicht, mich per E-Mail oder über die unten aufgeführten Methoden zu kontaktieren.",
                text2: "Ich werde so schnell wie möglich antworten.",
            });
        } else {
            setContent({
                title: "Contact",
                text: "Feel free to reach out via email or through the other methods listed below.",
                text2: "I will get back to you as soon as possible.",
            });
        }
    }, [searchParams]);

    return (
        <div id="contact" className={styles.contactContainer}>
            <div className={styles.contactInfo}>
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
                <div className={styles.contactText}>
                    <p>{content.text}</p>
                    <ul style={{
                        display: "flex",
                        flexDirection: "column",
                        listStyleType: "none",
                        width: "70%",
                    }}>
                        <li>Linkedin: <a href="https://www.linkedin.com/in/irchitdev" target="blank">irchitdev</a></li>
                        <li>Email: <a href="mailto:rchitea@gmail.com">rchitea@gmail.com</a></li>
                        <li>Github: <a href="https://www.github.com/irchit" target="blank">irchit</a></li>
                        <li>Instagram: <a href="https://www.instagram.com/irchit.cs" target="blank">irchit.cs</a></li>
                    </ul>
                    <p>{content.text2}</p>
                </div>
            </div>
            <EmailSender />
        </div>
    )
}
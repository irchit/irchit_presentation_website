import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams} from "next/navigation";
import styles from "@/app/Styles/contact.module.css";

export default function EmailSender() {
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const searchParams = useSearchParams();
  
    const [content, setContent] = useState({
      title: "Write me an email at",
      buttonText: "Send Email",
      placeholder: "Write your message here...",
      subjectPlaceholder: "Subject of the email",
      namePlaceholder: "Your first and last name"
    });

    useEffect(() => {
    const lang = searchParams.get("lang") || "en";
    if (lang === "ro") {
      setContent({
        title: "Scrieţi-mi un email la",
        buttonText: "Trimiteţi Emailul",
        placeholder: "Scrieţi mesajul dvs. aici...",
        subjectPlaceholder: "Subiectul emailului",
        namePlaceholder: "Numele și prenumele dvs."
      });
    } else if (lang === "de") {
      setContent({
        title: "Schreiben Sie mir eine E-Mail an",
        buttonText: "E-Mail senden",
        placeholder: "Schreiben Sie Ihre Nachricht hier...",
        subjectPlaceholder: "Betreff der E-Mail",
        namePlaceholder: "Ihr Vor- und Nachname"
      });
    } else {
      setContent({
        title: "Write me an email at",
        buttonText: "Send Email",
        placeholder: "Write your message here...",
        subjectPlaceholder: "Subject of the email",
        namePlaceholder: "Your first and last name"
      });
    }
    }, [searchParams]);

  const handleSendEmail = () => {
    const email = "rchitea@gmail.com";
    const body = encodeURIComponent(message + `\n\nName: ${name}\nDate: ${new Date().toLocaleDateString()}\n\nSent from irchitDev website`);
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div className={styles.emailContainer}>
      <img src="/stamp.png"/>
      <h2>{content.title}</h2>
      <input
      onChange={(e) => setSubject(e.target.value)} 
        type="text" 
        placeholder={content.subjectPlaceholder} 
        style={{ width: "100%", padding: "0.5em", marginBottom: "0.5em" }} 
      />
      <input
        onChange={(e) => setName(e.target.value)} 
        type="text" 
        placeholder={content.namePlaceholder} 
        style={{ width: "100%", padding: "0.5em", marginBottom: "0.5em" }} 
      />
      <textarea
        rows={6}
        cols={40}
        placeholder={content.placeholder}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ resize: "vertical", width: "100%", padding: "0.5em", minHeight: "20vh"}}
      />
      <button onClick={handleSendEmail} style={{ marginTop: "1em"}}>
        {content.buttonText}
      </button>
    </div>
  );
}

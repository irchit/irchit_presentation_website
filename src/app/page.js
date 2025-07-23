"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

export default function Home() {

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center",}}>
      <Header />
      <AboutMe />
      <Skills />
      <Education />
      <Contact />
      <div style={{height: "7vh", width: "100vw", backgroundColor: "#041c0333", marginTop: "3vh", padding: "2vh 0"}}>
        <p style={{color: "white", textAlign: "center"}}>© 2025 irchitDev</p>
      </div>
    </div>
  );
}

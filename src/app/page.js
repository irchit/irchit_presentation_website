"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import FeaturedProjects from "./Components/FeaturedProjects";
import Footer from "./Components/Footer";

export default function Home() {

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center",}}>
      <Header />
      <AboutMe />
      <FeaturedProjects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

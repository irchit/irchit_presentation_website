"use client";
import { useState, useEffect } from "react";
import styles from "@/app/Styles/projects.module.css"

export default function ImageGridElement({img, fileName, idx, fileDir}) {
    const [rotation, setRotation] = useState(0);

  useEffect(() => {
    setRotation((Math.floor(Math.random() * 4) + 1) * (idx % 2 == 0 ? -1 : 1));
  }, []);

  return (
    <div key={idx}
      title="View Image"
      className={styles.galleryItem} 
      style={{ "--rotation": `${rotation}deg`, cursor: "pointer" }}
      onClick = {() => window.open(window.location.origin + fileDir + "/" + fileName)}
    >
      <img src={img} alt={fileName} />
      <div>{fileName}</div>
    </div>
  );
}
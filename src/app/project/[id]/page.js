"use client";

import { use, useEffect, useState, Suspense } from "react";
import Footer from "@/app/Components/Footer";
import Header from "../../Components/Header";
import styles from "@/app/Styles/projects.module.css";
import ProjectExtended from "@/app/Components/ProjectExtended";

export const runtime = 'edge';

export default function ProjectPage({ params }) {
  // ✅ Unwrap params Promise using React.use()
  const { id } = use(params);

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      try {
        const baseUrl =
          process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
        const res = await fetch(`${baseUrl}/api/projects/${id}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          console.error("❌ Failed to fetch project:", res.statusText);
          setProject(null);
        } else {
          const data = await res.json();
          setProject(data);
        }
      } catch (error) {
        console.error("❌ Error fetching project:", error);
        setProject(null);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchProject();
  }, [id]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <main className={styles.projectPage}>
        {loading ? (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "58vh" }}>Loading project...</div>
        ) : project ? (
          <ProjectExtended data={project} />
        ) : (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "58vh" }}>
            <h2>Error: Project not found</h2>
          </div>
        )}
      </main>
      <Footer />
    </Suspense>
  );
}

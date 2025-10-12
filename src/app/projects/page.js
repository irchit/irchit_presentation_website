import React, { Suspense } from "react";
import ProjectsGrid from "../Components/ProjectsGrid";

export const runtime = "nodejs";

export default function Home() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectsGrid />
    </Suspense>
  );
}

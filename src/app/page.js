"use client";
import { useEffect, useState, Suspense } from "react";

export const runtime = "nodejs";

export default function Home() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", }}>
        <h1>Update is in progress</h1>
      </div>
    </Suspense>
  );
}

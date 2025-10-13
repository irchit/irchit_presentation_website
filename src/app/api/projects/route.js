import clientPromise from "@/lib/mongodb";

export const runtime = 'nodejs';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("irchitCV");
    const projects = (
      await db
      .collection("projects")
      .find({})
      .toArray()
    ).sort((a, b) => new Date(b.date || "1900-01-01") - new Date(a.date || "1900-01-01"));

    // 🎨 Pastel color palette
    const colors = [
      "#bfefc7d1", // greenish
      "#ffe4b5d1", // beige
      "#add8e6d1", // light blue
      "#ffc0cbd1", // pink
      "#d1b3ffd1", // purple
      "#fffacdd1", // pale yellow
      "#c1e1ffd1", // sky blue
      "#d3f8e2d1", // mint
      "#ffd6a5d1", // peach
    ];

    // 🎯 Transform each MongoDB document to the multilingual UI format
    const formattedProjects = projects.map((proj) => {
      const color = colors[Math.floor(Math.random() * colors.length)];

      // choose a valid link (prefer application, then github, then youtube)
      const link = proj.application || proj.github || proj.youtube || "#";

      return {
        en: {
          title: proj.title || "Untitled",
          description: (proj.shortDescription?.en || "").replace(/~/g, "\n"),
          date: proj.date ? new Date(proj.date).getFullYear() : "2025",
          logo: proj.images?.logo || "",
          link,
          color,
        },
        ro: {
          title: proj.title || "Titlu necunoscut",
          description: (proj.shortDescription?.ro || "").replace(/~/g, "\n"),
          date: proj.date ? new Date(proj.date).getFullYear() : "2025",
          logo: proj.images?.logo || "",
          link,
          color,
        },
        de: {
          title: proj.title || "Unbekannter Titel",
          description: (proj.shortDescription?.de || "").replace(/~/g, "\n"),
          date: proj.date ? new Date(proj.date).getFullYear() : "2025",
          logo: proj.images?.logo || "",
          link,
          color,
        },
      };
    });

    return new Response(JSON.stringify(formattedProjects), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Error fetching projects:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch projects" }), {
      status: 500,
    });
  }
}

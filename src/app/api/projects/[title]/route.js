import clientPromise from "@/lib/mongodb";

export const runtime = "nodejs";

export async function GET(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("irchitCV");

    // Extract title from the URL
    const { title } = params;

    const project = await db
      .collection("projects")
      .findOne({ title: { $regex: `^${title}$`, $options: "i" } });

    if (!project) {
      return new Response(JSON.stringify({ error: "Project not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(project), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Error fetching project:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch project" }), {
      status: 500,
    });
  }
}

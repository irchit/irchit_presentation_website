import { Geist, Geist_Mono, Exo_2 } from "next/font/google";
import "../../globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const exo2 = Exo_2({
  variable: "--font-Exo-2-sans",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});


function formatTitle(str) {
  return decodeURIComponent(str)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function generateMetadata({ params }) {
  const title = params?.id || "Project";

  let projectData = null;
  try {
    const res = await fetch(`https://www.irchit.cv/api/projects/${title}`, {
      next: { revalidate: 60 }, // cache for 1 minute
    });
    if (res.ok) projectData = await res.json();
  } catch (err) {
    console.error("Error fetching project metadata:", err);
  }

  const imageUrl =
    projectData?.images?.logo && projectData.images.logo.startsWith("/")
      ? `https://www.irchit.cv${projectData.images.logo}`
      : projectData?.images?.logo || "https://www.irchit.cv/logo.png";


  return {
    title: `irchit | ${formatTitle(title)}`,
    description: `${formatTitle(title)} — detailed presentation. Check out the technologies used, concepts applied, and view the project gallery.`,
    openGraph: {
      title: `irchit | ${formatTitle(title)}`,
      description: `${formatTitle(title)} — detailed presentation. Check out the technologies used, concepts applied, and view the project gallery.`,
      url: `https://www.irchit.cv/project/${title}`,
      siteName: `irchit | ${formatTitle(title)}`,
      images: [{
        url: imageUrl,
        width: 800,
        height: 800
      }],
      locale: "en_US",
      alternateLocale: ["ro_RO", "de_DE"],
      type: "website",
    },
    robots: {
      index: true, // permite indexarea
      follow: true, // permite urmărirea linkurilor
      googleBot: {
        index: true,
        follow: true,
      }
    },
    authors: [{ name: "Chiţea Răzvan", url: "https://www.irchit.cv" }],
    creator: "Chiţea Răzvan",
    publisher: "irchit",
    keywords: [
      "irchit",
      "Chiţea Răzvan",
      title,
      `${title} Project`,
      `${title} Application`,
      `${title} Software`,
      `${title} Development`,
      `${title} Coding`,
      `${title} Technologies`,
      `${title} Concepts`,
      `${title} Gallery`,
      `${title} Chitea Răzvan`,
      `${title} Răzvan Chitea`,
      `${title} Razvan Chitea`,
      `${title} Chitea Razvan`,
      `${title} Răzvan Chiţea`,
      `${title} Chiţea Răzvan`,
      `${title} irchit`,
      `${title} irchitDev`,
      `${title} irchit dev`,
    ],
  };
}
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta name="geo.region" content="RO" />
        <meta name="geo.placename" content="Cluj-Napoca, Romania" />
        <meta name="geo.position" content="46.7712;23.6236" />
        <meta name="ICBM" content="46.7712;23.6236" />
      </head>
      <body className={`${exo2.variable}`}>
        {children}
      </body>
    </html>
  );
}

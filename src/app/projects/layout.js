import { Geist, Geist_Mono, Exo_2 } from "next/font/google";
import "../globals.css";


const exo2 = Exo_2({
  variable: "--font-Exo-2-sans",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: "irchit | Chiţea Răzvan Projects",
  description: "A showcase of projects by Chiţea Răzvan, featuring detailed descriptions, technologies used, and links to live applications and source code repositories.",
  openGraph: {
    title: "irchit | Chiţea Răzvan Projects",
    description: "A showcase of projects by Chiţea Răzvan, featuring detailed descriptions, technologies used, and links to live applications and source code repositories.",
    url: "https://www.irchit.cv/projects",
    siteName: "irchit | Chiţea Răzvan Projects",
    images: [{
      url: "https://www.irchit.cv/logo.png",
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
    "Răzvan Chiţea",
    "Chitea Răzvan",
    "Razvan Chiţea",
    "Chitea Razvan",
    "Razvan Chitea",
    "Razvan Chitea Projects",
    "Răzvan Chiţea Projects",
    "Chiţea Răzvan Projects",
    "Răzvan Chiţea Portfolio",
    "Chiţea Răzvan Portfolio",
    "Răzvan Chiţea Work",
    "Chiţea Răzvan Work",
    "Răzvan Chiţea Applications",
    "Chiţea Răzvan Applications",
    "Răzvan Chiţea Software",
    "Chiţea Răzvan Software",
    "Răzvan Chiţea Development",
    "Chiţea Răzvan Development",
    "Răzvan Chiţea Coding",
    "Chiţea Răzvan Coding",
    "irchit Projects",
    "irchit Portfolio",
    "irchit Work",
    "irchit Applications",
    "irchit Software",
    "irchit Development",
    "irchit Coding",
    "irchitDev",
    "irchit Games",
    "irchit dev",
    "irchit-dev",
  ],
};

export default function RootLayout({ children }) {
  return (
      <html>
        <head>
          <meta name="geo.region" content="RO" />
          <meta name="geo.placename" content="Cluj-Napoca, Romania" />
          <meta name="geo.position" content="46.7712;23.6236" />
          <meta name="ICBM" content="46.7712;23.6236" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://www.irchit.cv/projects" />
          <link rel="alternate" href="https://www.irchit.cv/projects?lang=en" hrefLang="en" />
          <link rel="alternate" href="https://www.irchit.cv/projects?lang=ro" hrefLang="ro" />
          <link rel="alternate" href="https://www.irchit.cv/projects?lang=de" hrefLang="de" />
          <link rel="alternate" href="https://www.irchit.cv/projects" hrefLang="x-default" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
        </head>
        <body className={`${exo2.variable}`}>
          {children}
        </body>
      </html>
  );
}

import { Geist, Geist_Mono, Exo_2 } from "next/font/google";
import "../globals.css";


const exo2 = Exo_2({
  variable: "--font-Exo-2-sans",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: "irchit | Chiţea Răzvan CV",
  description: "The CV of Chiţea Răzvan, a software developer specializing in web and mobile applications. Explore his skills, experience, education, and contact information.",
  openGraph: {
    title: "irchit | Chiţea Răzvan CV",
    description: "The CV of Chiţea Răzvan, a software developer specializing in web and mobile applications. Explore his skills, experience, education, and contact information.",
    url: "https://www.irchit.cv/cv",
    siteName: "irchit | Chiţea Răzvan CV",
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
    "Razvan Chitea CV",
    "Răzvan Chiţea CV",
    "Chiţea Răzvan CV",
    "Răzvan Chiţea Resume",
    "Chiţea Răzvan Resume",
    "Răzvan Chiţea Curriculum Vitae",
    "Chiţea Răzvan Curriculum Vitae",
    "Răzvan Chiţea Skills",
    "Chiţea Răzvan Skills",
    "Răzvan Chiţea Experience",
    "Chiţea Răzvan Experience",
    "Răzvan Chiţea Education",
    "Chiţea Răzvan Education",
    "Răzvan Chiţea Contact",
    "Chiţea Răzvan Contact",
    "irchit CV",
    "irchit Resume",
    "irchit Curriculum Vitae",
    "cv"
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
          <link rel="canonical" href="https://www.irchit.cv/cv" />
          <link rel="alternate" href="https://www.irchit.cv/cv?lang=en" hrefLang="en" />
          <link rel="alternate" href="https://www.irchit.cv/cv?lang=ro" hrefLang="ro" />
          <link rel="alternate" href="https://www.irchit.cv/cv?lang=de" hrefLang="de" />
          <link rel="alternate" href="https://www.irchit.cv/cv" hrefLang="x-default" />
      </head>
      <body className={`${exo2.variable}`}>
        {children}
      </body>
    </html>
  );
}

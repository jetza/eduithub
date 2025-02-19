import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import React from "react";
import Head from "next/head";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    weight: "400",
});

export const metadata: {
    keywords: string;
    author: string;
    meta: ({ name: string; content: string })[];
    description: string;
    robots: string;
    title: string;
    openGraph: {
        images: { width: number; url: string; height: number }[];
        description: string;
        siteName: string;
        title: string;
        type: string;
        url: string
    }
} = {
    title: "Lrnium - Znanje za sve generacije",
    description: "Pridružite se Lrniumu i proširite svoje znanje kroz visokokvalitetne edukativne sadržaje.",
    keywords: "kurs, kursevi, matematika, instrukcije, instrukcije iz matematike, instrukcije iz informatike, instrukcije iz programiranja, programiranje, obrazovanje, učenje, matematika razred, zadaci rješenja, zadaci iz matematike, izrada web stranica, izrada web stranica, web dizajn, web programiranje, web development, web developer, web dizajner, web stranica, web sajt, web sajtovi, web aplikacije, web aplikacija, web aplikacije cijena, web aplikacija cijena, web aplikacija izrada",
    author: "Jelena Miodragovic",
    robots: "index, follow",
    openGraph: {
        title: "Lrnium - Edukacije za sve generacije",
        description: "Proširite svoje znanje kroz visokokvalitetne edukativne sadržaje.",
        url: "https://www.lrnium.com",
        siteName: "Learnium",
        images: [
            {
                url: "https://www.lrnium.com/og-image-sr.jpg",
                width: 800,
                height: 600,
            },
        ],
        type: "website",
    },
    meta: [
        { name: 'og:image', content: 'https://www.lernium.com/og-image-sr.jpg' },
        { name: 'og:image:width', content: '800' },
        { name: 'og:image:height', content: '600' },
        { name: 'og:image:type', content: 'image/jpeg' },
        { name: 'og:url', content: 'https://www.lernium.com' },
        { name: 'og:locale', content: 'sr_RS' },
    ],
};




export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <Head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta name="keywords" content={metadata.keywords} />
            <meta name="author" content={metadata.author} />
            <meta name="robots" content={metadata.robots} />
            {metadata.meta.map((metaItem, index) => (
                <meta key={index} name={metaItem.name} content={metaItem.content} />
            ))}
            <meta property="og:title" content={metadata.openGraph.title} />
            <meta property="og:description" content={metadata.openGraph.description} />
            <meta property="og:url" content={metadata.openGraph.url} />
            <meta property="og:site_name" content={metadata.openGraph.siteName} />
            {metadata.openGraph.images.map((image, index) => (
                <meta key={index} property="og:image" content={image.url} />
            ))}
        </Head>
        <body className={`${montserrat.variable}`}>
        {children}
        </body>
        </html>
    );
}

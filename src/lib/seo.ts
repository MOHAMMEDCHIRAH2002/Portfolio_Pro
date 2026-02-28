import { profile } from "@/data/resume";
import type { Metadata } from "next";

const siteUrl = "https://mohammedchirah.com"; // [UPDATE WITH YOUR DOMAIN]

export const siteMetadata = {
    title: `${profile.name} — ${profile.title}`,
    description: profile.summary,
    url: siteUrl,
    ogImage: `${siteUrl}/og-image.png`,
};

export function generatePageMetadata(
    title: string,
    description: string,
    path: string = ""
): Metadata {
    const fullTitle =
        path === "" ? siteMetadata.title : `${title} — ${profile.name}`;
    return {
        title: fullTitle,
        description,
        metadataBase: new URL(siteUrl),
        openGraph: {
            title: fullTitle,
            description,
            url: `${siteUrl}${path}`,
            siteName: profile.name,
            images: [
                {
                    url: siteMetadata.ogImage,
                    width: 1200,
                    height: 630,
                    alt: profile.name,
                },
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description,
            images: [siteMetadata.ogImage],
        },
        robots: {
            index: true,
            follow: true,
        },
        alternates: {
            canonical: `${siteUrl}${path}`,
        },
    };
}

export function generatePersonJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: profile.name,
        jobTitle: profile.title,
        email: profile.email,
        telephone: profile.phone,
        url: siteUrl,
        sameAs: [profile.linkedinUrl, profile.githubUrl],
        address: {
            "@type": "PostalAddress",
            addressLocality: "Casablanca",
            addressCountry: "Morocco",
        },
    };
}

export function generateWebSiteJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: `${profile.name} — Portfolio`,
        url: siteUrl,
        description: profile.summary,
        author: {
            "@type": "Person",
            name: profile.name,
        },
    };
}

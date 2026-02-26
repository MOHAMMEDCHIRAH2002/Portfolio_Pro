import { Metadata } from 'next';
import { resumeData } from '@/data/resume';

const baseUrl = 'https://portfolio-mohammed-chirah.vercel.app';

type SEOProps = {
    title?: string;
    description?: string;
    image?: string;
    route?: string;
};

export function constructMetadata({
    title,
    description = resumeData.summary,
    image = "/Portfolio.png",
    route = "",
}: SEOProps = {}): Metadata {
    const metaTitle = title ? `${title} | ${resumeData.name}` : `${resumeData.name} | ${resumeData.title}`;

    return {
        title: metaTitle,
        description,
        openGraph: {
            title: metaTitle,
            description,
            url: `${baseUrl}${route}`,
            siteName: `${resumeData.name} Portfolio`,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: metaTitle
                }
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: metaTitle,
            description,
            images: [image],
        },
        alternates: {
            canonical: `${baseUrl}${route}`,
        }
    };
}

export function generatePersonSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": resumeData.name,
        "jobTitle": resumeData.title,
        "url": baseUrl,
        "image": `${baseUrl}${resumeData.profileImage}`,
        "sameAs": [
            resumeData.linkedin,
            resumeData.github !== "[ADD LINK]" ? resumeData.github : undefined
        ].filter(Boolean),
        "knowsAbout": [...resumeData.skills.frontend, ...resumeData.skills.backend, ...resumeData.skills.industrial]
    };
}

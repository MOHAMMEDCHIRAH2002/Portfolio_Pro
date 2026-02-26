import { MetadataRoute } from 'next';
import { resumeData } from '@/data/resume';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://portfolio-mohammed-chirah.vercel.app'; // Replace with actual URL

    const staticRoutes = [
        '',
        '/projects',
        '/about',
        '/services',
        '/blog',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const projectRoutes = resumeData.projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    const blogRoutes = resumeData.blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}

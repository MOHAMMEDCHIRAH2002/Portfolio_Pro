import { resumeData } from '@/data/resume';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, ExternalLink, Github, Monitor, Layers, ShieldCheck } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';

// Static params generation
export function generateStaticParams() {
    return resumeData.projects.map((project) => ({
        slug: project.slug,
    }));
}

// Dynamic metadata
export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const project = resumeData.projects.find((p) => p.slug === params.slug);
    if (!project) return {};

    return constructMetadata({
        title: project.title,
        description: project.description,
        route: `/projects/${project.slug}`
    });
}

export default async function ProjectDetailPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const project = resumeData.projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <article className="container mx-auto px-4 py-24 max-w-4xl">
            {/* Back Button */}
            <div className="mb-12">
                <Button href="/projects" variant="ghost" className="pl-0 hover:bg-transparent -ml-2">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Systems
                </Button>
            </div>

            {/* Header */}
            <header className="mb-16 border-b border-border/50 pb-12 relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                    {project.category.map(cat => (
                        <span key={cat} className="text-xs uppercase font-mono tracking-widest text-accent border border-accent/20 bg-accent/10 px-3 py-1 rounded-sm">
                            {cat}
                        </span>
                    ))}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold font-sans text-foreground mb-6 relative z-10">
                    {project.title}
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-sans max-w-3xl relative z-10">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-4 mt-8 relative z-10">
                    {project.liveUrl && project.liveUrl !== "[ADD LINK]" && (
                        <Button href={project.liveUrl} className="group">
                            <Monitor className="w-4 h-4 mr-2" /> Live System <ExternalLink className="w-3 h-3 ml-2 opacity-50 group-hover:opacity-100" />
                        </Button>
                    )}
                    {project.githubUrl && project.githubUrl !== "[ADD LINK]" && (
                        <Button href={project.githubUrl} variant="outline" className="group">
                            <Github className="w-4 h-4 mr-2" /> Source Code <ExternalLink className="w-3 h-3 ml-2 opacity-50 group-hover:opacity-100" />
                        </Button>
                    )}
                </div>
            </header>

            {/* Content Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

                {/* Left Column - Main Content */}
                <div className="md:col-span-2 space-y-16">

                    {/* Context & Problem */}
                    <section>
                        <h2 className="text-2xl font-bold font-sans text-foreground mb-6 flex items-center">
                            <div className="w-8 h-px bg-accent mr-4"></div> The Challenge
                        </h2>
                        <div className="prose prose-invert prose-lg max-w-none text-muted-foreground border-l-2 border-border/50 pl-6 py-2">
                            <p>
                                {project.details?.context || "This system was engineered to solve complex operational challenges..."}
                            </p>
                            <p className="mt-4">
                                {project.details?.problem || "The main barrier to success involved establishing reliable data streams, ensuring high availability, and creating a seamless interface for end-users."}
                            </p>
                        </div>
                    </section>

                    {/* Architecture / Solution */}
                    <section>
                        <h2 className="text-2xl font-bold font-sans text-foreground mb-6 flex items-center">
                            <div className="w-8 h-px bg-accent mr-4"></div> Architecture & Solution
                        </h2>
                        <div className="prose prose-invert prose-lg max-w-none text-muted-foreground mb-8">
                            <p>
                                {project.details?.solution || "We designed a robust, scalable architecture focusing on separation of concerns. The backend handles high-throughput data processing while the frontend ensures real-time updates without compromising performance."}
                            </p>
                        </div>

                        {/* Architecture Diagram Placeholder */}
                        <div className="w-full aspect-video premium-glass rounded-xl border border-border/50 flex flex-col items-center justify-center text-muted-foreground overflow-hidden group relative">
                            {/* Decorative Grid SVG */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

                            <Layers className="w-12 h-12 mb-4 text-accent/50 group-hover:text-accent transition-colors group-hover:scale-110 duration-500" />
                            <span className="font-mono text-sm uppercase tracking-widest text-accent/80">Architecture Diagram</span>
                            <span className="text-xs mt-2 opacity-50">[ADD SCREENSHOTS] in src/data/resume.ts</span>
                        </div>
                    </section>

                    {/* Key Features */}
                    {project.details?.keyFeatures && project.details.keyFeatures.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold font-sans text-foreground mb-6 flex items-center">
                                <div className="w-8 h-px bg-accent mr-4"></div> Core Capabilities
                            </h2>
                            <ul className="space-y-4">
                                {project.details.keyFeatures.map((feature, i) => (
                                    <li key={i} className="flex items-start premium-glass p-4 rounded-lg border border-border/30">
                                        <ShieldCheck className="w-5 h-5 text-accent mr-4 shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                </div>

                {/* Right Column - Meta Data */}
                <div className="md:col-span-1 border-t md:border-t-0 md:border-l border-border/50 pt-8 md:pt-0 md:pl-8 space-y-12">

                    {/* Tech Stack */}
                    <div>
                        <h3 className="text-sm font-mono text-foreground mb-4 uppercase tracking-widest border-b border-border/50 pb-2">Technology Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map(tech => (
                                <Badge key={tech} className="bg-neutral-900/50 border-border">{tech}</Badge>
                            ))}
                        </div>
                    </div>

                    {/* Results / Metrics */}
                    <div>
                        <h3 className="text-sm font-mono text-foreground mb-4 uppercase tracking-widest border-b border-border/50 pb-2">Business Impact</h3>

                        {project.details?.results && project.details.results.length > 0 && project.details.results[0] !== "[ADD METRICS]" ? (
                            <ul className="space-y-3">
                                {project.details.results.map((result, i) => (
                                    <li key={i} className="text-sm text-muted-foreground flex items-start">
                                        <span className="text-accent mr-2 mt-1">✓</span> {result}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="p-4 bg-accent/5 border border-accent/20 rounded-md text-sm text-accent/80 font-mono">
                                <div className="flex items-center mb-2 font-bold text-accent">
                                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse mr-2"></span> System Metrics
                                </div>
                                <p className="opacity-80">Awaiting production telemetry.</p>
                                <p className="opacity-50 mt-1 text-xs">[ADD METRICS] in data</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </article>
    );
}

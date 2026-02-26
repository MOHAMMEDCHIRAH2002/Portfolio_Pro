import { resumeData } from "@/data/resume";
import { TerminalHero } from "@/components/ui/TerminalHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";
import { Download, ChevronRight, Award, MessageSquare } from "lucide-react";

export default function Home() {
  const terminalOutput = (
    <div className="space-y-4">
      <div>
        <span className="text-accent">Name:</span> {resumeData.name}
      </div>
      <div>
        <span className="text-accent">Title:</span> {resumeData.title}
      </div>
      <div>
        <span className="text-accent">Focus:</span> {resumeData.focus.join(", ")}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center w-full relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center min-h-[90vh] px-4 pt-24 pb-24 relative z-10">
        <div className="container mx-auto max-w-5xl flex flex-col items-center justify-center space-y-12">

          {/* Profile Photo */}
          <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden border-2 border-accent/30 box-glow z-10 mx-auto group">
            <Image
              src={resumeData.profileImage}
              alt={resumeData.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] pointer-events-none"></div>
          </div>

          <TerminalHero command="cat ~/profile.json" output={terminalOutput} />

          <div className="flex flex-col sm:flex-row items-center gap-4 z-10 w-full sm:w-auto mt-8">
            <Button href="/contact" className="w-full sm:w-auto text-base px-8 py-6">
              Hire Me
            </Button>
            <Button href={resumeData.resumePdf} variant="outline" className="w-full sm:w-auto group px-8 py-6">
              <Download className="w-4 h-4 mr-3 group-hover:-translate-y-1 transition-transform" /> Download CV
            </Button>
            <Button href="/projects" variant="ghost" className="w-full sm:w-auto group px-8 py-6">
              Explore Projects <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* What I Do / Summary */}
      <div className="w-full bg-neutral-950/60 border-y border-border backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4">
          <Section title="System Overview">
            <div className="relative p-8 md:p-12 premium-glass rounded-xl border border-border/50">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl font-sans">
                {resumeData.summary}
              </p>
            </div>
          </Section>
        </div>
      </div>

      <div className="container mx-auto px-4 w-full relative z-10">
        {/* Featured Projects */}
        <Section title="Featured Architectures">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resumeData.projects.filter(p => p.featured).slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button href="/projects" variant="outline" className="px-8">
              Analyze All Systems
            </Button>
          </div>
        </Section>

        {/* Tech Stack Matrix */}
        <Section title="Technology Matrix">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            <div className="space-y-10 p-8 premium-glass rounded-xl border border-border/50">
              <h3 className="text-foreground font-sans font-bold text-xl mb-6 flex items-center border-b border-border pb-4">
                <span className="text-accent underline decoration-accent/50 underline-offset-4 mr-3">01.</span> Core Development
              </h3>

              <div>
                <h4 className="text-muted-foreground font-mono text-sm mb-4 uppercase tracking-wider">Frontend Engine</h4>
                <div className="flex flex-wrap gap-2.5">
                  {resumeData.skills.frontend.map(skill => (
                    <Badge key={skill} className="bg-neutral-900 border-border text-foreground hover:border-accent hover:text-accent transition-colors py-1.5 px-3">{skill}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-muted-foreground font-mono text-sm mb-4 uppercase tracking-wider">Backend Systems</h4>
                <div className="flex flex-wrap gap-2.5">
                  {resumeData.skills.backend.map(skill => (
                    <Badge key={skill} className="bg-neutral-900 border-border text-foreground hover:border-accent hover:text-accent transition-colors py-1.5 px-3">{skill}</Badge>
                  ))}
                  {resumeData.skills.realtime.map(skill => (
                    <Badge key={skill} className="bg-neutral-900 border-border text-foreground hover:border-accent hover:text-accent transition-colors py-1.5 px-3">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-10 p-8 premium-glass rounded-xl border border-border/50">
              <h3 className="text-foreground font-sans font-bold text-xl mb-6 flex items-center border-b border-border pb-4">
                <span className="text-accent underline decoration-accent/50 underline-offset-4 mr-3">02.</span> Infrastructure & Data
              </h3>

              <div>
                <h4 className="text-muted-foreground font-mono text-sm mb-4 uppercase tracking-wider">Industrial Integration (AVEVA)</h4>
                <div className="flex flex-wrap gap-2.5">
                  {resumeData.skills.industrial.map(skill => (
                    <Badge key={skill} className="bg-accent/10 border-accent/20 text-accent hover:bg-accent hover:text-black transition-colors py-1.5 px-3">{skill}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-muted-foreground font-mono text-sm mb-4 uppercase tracking-wider">Databases & Tools</h4>
                <div className="flex flex-wrap gap-2.5">
                  {resumeData.skills.database.map(skill => (
                    <Badge key={skill} className="bg-neutral-900 border-border text-foreground hover:border-accent hover:text-accent transition-colors py-1.5 px-3">{skill}</Badge>
                  ))}
                  {resumeData.skills.tools.map(skill => (
                    <Badge key={skill} className="bg-neutral-900 border-border text-foreground hover:border-accent hover:text-accent transition-colors py-1.5 px-3">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </Section>

        {/* Credentials */}
        <Section title="System Credentials">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.certifications.map((cert, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center p-6 premium-glass border border-border rounded-xl hover:border-accent/40 transition-all group">
                <div className="bg-neutral-900 p-4 rounded-xl mb-4 sm:mb-0 sm:mr-6 text-accent border border-border group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-foreground font-bold font-sans text-lg">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2 font-mono flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> {cert.issuer}
                    <span className="opacity-40 ml-1">[{cert.date}]</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Sticky Mobile CTA */}
        <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] pointer-events-none">
          <Button href="/contact" className="w-full shadow-[0_10px_40px_rgba(0,255,65,0.3)] pointer-events-auto h-12 text-base">
            Initiate Contact sequence
          </Button>
        </div>

      </div>
    </div>
  );
}

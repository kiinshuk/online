import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl text-muted-foreground"
                delay={BLUR_FADE_DELAY * 2}
                text="Building web applications with Django, learning to build with AI."
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-36 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of AI/ML projects, from memory
                  systems to workflow automation platforms. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
<section id="hackathons">
  <div className="space-y-12 w-full py-12">
    <BlurFade delay={BLUR_FADE_DELAY * 13}>
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            Problem Solving & DSA
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Sharpening Algorithmic Skills
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Demonstrating technical proficiency through consistent practice. 76+ LeetCode problems solved, HackerRank 4-star Python rating, and maintaining a 50-day coding streak.
          </p>
        </div>
      </div>
    </BlurFade>
    
    {/* Updated to match work experience layout */}
    <BlurFade delay={BLUR_FADE_DELAY * 14}>
      <div className="relative">
        <div className="absolute left-0 top-0 flex w-full justify-center">
          <div className="h-full w-px bg-border" />
        </div>
        <ol className="grid grid-cols-1 gap-8">
          {DATA.hackathons.map((project, id) => (
            <BlurFade
              key={project.title + project.dates}
              delay={BLUR_FADE_DELAY * 15 + id * 0.05}
            >
              <li className="relative flex gap-6">
                {/* Timeline dot */}
                <div className="relative mt-1.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-background shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-white/10 dark:ring-white/10">
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                </div>
                
                {/* Content card */}
                <div className="flex flex-auto flex-col">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold leading-none">
                        {project.title}
                      </h3>
                    </div>
                    
                    {/* Add achievement badges here */}
                    {project.title.includes("HackerRank") && (
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="inline-flex items-center rounded-md bg-yellow-50 dark:bg-yellow-900/30 px-2 py-1 text-xs font-medium text-yellow-800 dark:text-yellow-200 ring-1 ring-inset ring-yellow-600/20">
                          ⭐⭐⭐⭐ Python
                        </span>
                        <span className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-800 dark:text-blue-200 ring-1 ring-inset ring-blue-600/20">
                          ⭐⭐⭐ SQL
                        </span>
                        <span className="inline-flex items-center rounded-md bg-green-50 dark:bg-green-900/30 px-2 py-1 text-xs font-medium text-green-800 dark:text-green-200 ring-1 ring-inset ring-green-600/20">
                          Problem Solving Certified
                        </span>
                      </div>
                    )}
                    
                    {project.title.includes("LeetCode") && (
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="inline-flex items-center rounded-md bg-orange-50 dark:bg-orange-900/30 px-2 py-1 text-xs font-medium text-orange-800 dark:text-orange-200 ring-1 ring-inset ring-orange-600/20">
                          76 Problems Solved
                        </span>
                        <span className="inline-flex items-center rounded-md bg-purple-50 dark:bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-800 dark:text-purple-200 ring-1 ring-inset ring-purple-600/20">
                          50-Day Streak
                        </span>
                        <span className="inline-flex items-center rounded-md bg-red-50 dark:bg-red-900/30 px-2 py-1 text-xs font-medium text-red-800 dark:text-red-200 ring-1 ring-inset ring-red-600/20">
                          Java & Python
                        </span>
                      </div>
                    )}
                    
                    {project.description && (
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                    )}
                    
                    {/* Links */}
                    {project.links && project.links.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                          >
                            {link.icon}
                            {link.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </li>
            </BlurFade>
          ))}
        </ol>
      </div>
    </BlurFade>
  </div>
</section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 17 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}

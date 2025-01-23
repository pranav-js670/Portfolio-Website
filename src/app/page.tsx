"use client";
import { HackathonCard } from "@/components/hackathon-card";
// import BlurFade from "@/components/ui/blur-fade";
// import BlurFadeText from "@/components/ui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import React, { useState } from "react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const projectCategories = [
    "All",
    "Full-Stack Development",
    "Generative AI",
    "Data Analysis",
    "Machine Learning",
  ];

  const skillCategories = {
    "Full Stack Development": [
      "React",
      "Next.js",
      "Typescript",
      "Node.js",
      "MERN Stack",
      "SQL",
      "Supabase",
      "Docker",
      "Git",
      "GitHub Actions (CI/CD)",
    ],
    "Generative AI": ["Langchain", "CrewAI", "Phidata", "Langflow", "Python"],
    "Data Analysis": ["Python", "SQL", "Power BI"],
    "Programming Languages": ["Python", "C++", "Javascript"],
  };

  const allSkills = Object.values(skillCategories).flat();

  type Category = keyof typeof skillCategories | "All";

  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredSkills =
    activeCategory === "All"
      ? allSkills
      : skillCategories[activeCategory as keyof typeof skillCategories] || [];

  const [activeProjectCategory, setActiveProjectCategory] = useState("All");

  const filteredProjects =
    activeProjectCategory === "All"
      ? DATA.projects
      : DATA.projects.filter(
          (project) => project.category === activeProjectCategory
        );

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{`Hi, I'm Pranav J S 👋`}</h2>
              {/* <BlurFadeText
                delay={BLUR_FADE_DELAY}
                
                yOffset={8}
                text={`Hi, I'm Pranav J S `}
              /> */}
              <p>{DATA.description}</p>
              {/* <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              /> */}
            </div>
            {/* <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.url} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade> */}
          </div>
        </div>
      </section>
      <section id="about">
        {/* <BlurFade delay={BLUR_FADE_DELAY * 3}> */}
        <h2 className="text-xl font-bold">About</h2>
        {/* </BlurFade> */}
        {/* <BlurFade delay={BLUR_FADE_DELAY * 4}> */}
        <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {DATA.summary}
        </Markdown>
        {/* </BlurFade> */}
      </section>
      {/* <section id="work">
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
      </section> */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          {/* <BlurFade delay={BLUR_FADE_DELAY * 7}> */}
          <h2 className="text-xl font-bold">Education</h2>
          {/* </BlurFade> */}
          {DATA.education.map((education, id) => (
            // <BlurFade
            //   key={education.school}
            //   delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            // >
            <ResumeCard
              key={education.school}
              href={education.href}
              logoUrl={education.logoUrl}
              altText={education.school}
              title={education.school}
              subtitle={education.degree}
              period={`${education.start} - ${education.end}`}
            />
            // </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          {/* <BlurFade delay={BLUR_FADE_DELAY * 9}> */}
          <h2 className="text-xl font-bold">Skills</h2>
          {/* </BlurFade> */}
          <div className="flex flex-wrap gap-1 mb-4">
            {["All", ...Object.keys(skillCategories)].map((category) => (
              <Badge
                key={category}
                onClick={() => setActiveCategory(category as Category)}
                className={`cursor-pointer ${
                  activeCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-1">
            {filteredSkills.map((skill, id) => (
              <Badge key={id}>{skill}</Badge>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          {/* <BlurFade delay={BLUR_FADE_DELAY * 11}> */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                My Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check out my latest work
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;ve worked on a variety of projects, from simple websites
                to Generative AI applications. Here are a few of my favorites.
              </p>
            </div>
          </div>
          {/* </BlurFade> */}

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {projectCategories.map((category) => (
              <Badge
                key={category}
                onClick={() => setActiveProjectCategory(category)}
                className={`cursor-pointer ${
                  activeProjectCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Filtered Projects */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {filteredProjects.map((project, id) => (
              // <BlurFade
              //   key={project.title}
              //   delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              // >
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
              // </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Hackathons
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Transforming Ideas Into Reality
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hackathons have been an incredible avenue for me to push the
                limits of creativity and technology. During my time at
                university, I participated in {DATA.hackathons.length}+
                hackathons, collaborating with like-minded individuals. These
                events taught me the power of teamwork, innovation, and
                determination in turning ambitious ideas into reality within a
                short timeframe.
              </p>
            </div>
          </div>

          <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
            {DATA.hackathons.map((project, id) => (
              <HackathonCard
                key={id}
                title={project.title}
                description={project.description}
                location={project.location}
                dates={project.dates}
                links={project.links}
              />
            ))}
          </ul>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          {/* <BlurFade delay={BLUR_FADE_DELAY * 16}> */}
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Feel free to reach out to me via a direct message on{" "}
              <Link
                href="https://www.linkedin.com/in/pranav-j-s/"
                className="text-blue-500 hover:underline"
              >
                LinkedIn
              </Link>{" "}
              or by sending an email to{" "}
              <Link
                href="mailto:jspranav15@gmail.com"
                className="text-blue-500 hover:underline"
              >
                my email
              </Link>
              . I look forward to connecting and will respond as soon as
              possible.
            </p>
          </div>
          {/* </BlurFade> */}
        </div>
      </section>
    </main>
  );
}

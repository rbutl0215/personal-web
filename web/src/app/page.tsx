import ExperienceCard from "@/components/ExperienceCard";
import { dialogue, experiences, projects } from "./contants";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Dialogue from "@/components/Dialogue";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-2 h-screen">
      <div className="col-span-1 p-4 md:p-16 overflow-hidden">
        <h1 className="text-4xl font-bold mb-2">Reid Butler</h1>
        <h2 className="text-2xl mb-2">Full Stack Software Engineer</h2>
        <text className="text-lg text-slate-400	">
          Self-taught hacker at heart, fueled by a curiosity, supplemented with
          coffee, fascinated by physics, and endlessly motivated by the next
          great thing to build
        </text>
        <div className="flex gap-4 py-4">
          <Link href="https://github.com/rbutl0215">
            <FontAwesomeIcon icon={faGithub} className="w-10 h-10" />
          </Link>
          <Link href="https://www.linkedin.com/in/reid-butler-eng/">
            <FontAwesomeIcon icon={faLinkedin} className="w-10 h-10" />
          </Link>
        </div>
      </div>
      <div className="col-span-1 p-4 md:p-16  overflow-y-auto">
        <Section title="About">
          <div className="mb-8 whitespace-pre-line">
            {`Hi There!👋

              A few years ago, I received a call from a (very) risk-tolerant colleague of mine.
            `}
          </div>
          <Dialogue {...dialogue} />
          <div className="mb-8 whitespace-pre-line">
            {`Fast forward to today, and I've built mission critical software for Fortune 100 companies and YC-backed startups. Along the way, I've made countless friends, learned more than I could possibly imagine, and had a career I would not change for anything. If you found your way to this page and are questioning whether or not you should pursue a career in software development, let me give you an emphatic YES.

              These days I am focused on doing freelance work and building my own products. Reach out if you want to work together!
            `}
          </div>
        </Section>

        <Section title="Experiences">
          {experiences.map((experience, index) => {
            return <ExperienceCard key={index} {...experience} />;
          })}
        </Section>
        <Section title="Projects">
          {projects.map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
        </Section>
      </div>
    </main>
  );
}

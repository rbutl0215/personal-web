import ExperienceCard from "@/components/ExperienceCard";
import { experiences, projects } from "./contants";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid grid-cols-2 gap-2 h-screen">
      <div className="col-span-1 p-16 overflow-hidden">
        <h1 className="text-4xl font-bold mb-2">Reid Butler</h1>
        <h2 className="text-2xl mb-2">Full Stack Software Engineer</h2>
        <text className="text-lg text-slate-400	">
          Self-taught hacker at heart, blending creative problem-solving with
          diverse experiences from factory floors to software development,
          fueled by a curiosity
        </text>
        <div className="flex gap-4 py-4">
          <Link href="https://github.com/rbutl0215">
            <FontAwesomeIcon icon={faGithub} className="w-10 h-10"/>
          </Link>
          <Link href="https://www.linkedin.com/in/reid-butler-eng/">
            <FontAwesomeIcon icon={faLinkedin} className="w-10 h-10"/>
          </Link>
        </div>
      </div>
      <div className="col-span-1 p-16 overflow-y-auto">
        <Section title="About">
          <div className="mb-8">
            As a transformative Full Stack Software Engineer, I specialize in
            bringing ideas to life with precision and flair. My expertise lies
            in creating dynamic user experiences with React and powering
            feature-rich backend systems using Ruby on Rails. I am adept in
            TypeScript and JavaScript, with a mastery in building scalable
            applications leveraging GraphQL, Postgres, Docker, GitHub workflows,
            AWS, and Azure. I am not just about code; I am about creating
            seamless bridges between technology and business needs. Whether
            managing teams, architecting a pivotal service, or coding the next
            innovation, my goal remains constant: deliver with excellence. I’m
            on the lookout for challenges that push the envelope and allow me to
            leverage my diverse skill set for transformative results.
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

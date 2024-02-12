import ExperienceCard from "@/components/ExperienceCard";
import { experiences, projects } from "./contants";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="grid grid-cols-2 gap-2 h-screen">
      <div className="col-span-1 p-16 overflow-hidden">
        <h1 className="text-4xl font-bold mb-2">Reid Butler</h1>
        <h2 className="text-2xl mb-2">Full-stack Software Engineer</h2>
        <text className="text-lg text-slate-400	">
          Self-taught hacker at heart, blending creative problem-solving with
          diverse experiences from factory floors to software development,
          fueled by a curiosity
        </text>
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

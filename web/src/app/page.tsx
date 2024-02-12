import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "./contants";
import Section from "@/components/Section";

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
          About me
        </Section>
        <Section title="Experiences">
          {experiences.map((experience, index) => {
            return <ExperienceCard key={index} {...experience} />;
          })}
        </Section>
        <Section title="Projects">
          My projects
        </Section>
      </div>
    </main>
  );
}

import { ExperienceCardProps } from "@/components/ExperienceCard";
import { ProjectCardProps } from "@/components/ProjectCard";

export const experiences: ExperienceCardProps[] = [
  {
    title: "Founding Engineer | Confido",
    description:
      "In the bustling tech scene of New York, I juggled code and coffee as the Founding Engineer at Confido, where I led the development of a Ruby on Rails application that was as robust as it was scalable. My role involved refining deployment with Docker and Kubernetes, and navigating the complexities of a database migration to AWS with an eye for system integrity and performance. I was also deeply involved in enhancing user experience through intuitive UI design and took the lead on streamlining SQL queries, significantly boosting our system's responsiveness and efficiency.",
    skills: [
      "JavaScript",
      "TypeScript",
      "HTML & SCSS",
      "React",
      "Ruby on Rails",
      "AWS",
      "Postgres"
    ],
  },
  {
    title: "Senior Software Engineer | Anheuser-Busch",
    description: "As a Senior Software Engineer at Anheuser-Busch InBev, nestled in the heart of New York, I marshaled the frontend guild, juggling coding excellence with mentorship. My days were filled with translating complex tech solutions into compelling narratives for stakeholders and spearheading API performance breakthroughs that cut down response times dramatically. I championed a quality-first approach, leading an initiative that substantially improved our code testing coverage, underpinning our commitment to engineering excellence.",
    skills: [
        "Typescript",
        "React",
        "NodeJS",
        "NestJS",
        "GraphQL",
        "Azure",
        "Postgres"
    ]
  },
  {
    title: "Supply Network Planning Manager | Anheuser-Busch",
    description: "In St Louis, at Anheuser-Busch InBev, my tenure as a Supply Network Planning Manager had me orchestrating the annual production budget with precision, ensuring the gears of brewery operations ran smoothly. I was at the forefront, blending advanced business intelligence tools with strategic planning, all in the service of financial acumen and operational efficiency. It was a role that hinged on fostering continuous improvement and mastering the art of collaborative problem-solving.",
    skills: [
        "PowerBI",
        "Excel",
        "Python",
        "SAP"
    ]
  },
  {
    title: "Global Management Trainee | Anheuser-Busch",
    description: "Traversing through multiple locations as a Global Management Trainee with Anheuser-Busch InBev, I immersed myself in the nuances of brewery operations and wholesale management. My hands-on experience was complemented by collaborative projects that honed my industry knowledge and operational insights. One of my proud achievements was developing and deploying a user telemetry tool that not only streamlined sales recommendations but also showcased my knack for innovation and technical prowess.",
    skills: [
        "PowerBI",
        "Excel",
        "Six Sigma"
    ]
  }
];

export const projects: ProjectCardProps[] = [
    {
        title: "Describby",
        description: "AI based tooled to assist in content creation or real estate agents",
        imageUrl: "https://nlp7257gkjhtxzam.public.blob.vercel-storage.com/describby-4ZSDsxMbfbrXiNzL8zDVQeATLkWGTe.png",
        link: "https://broker-6m3pbq7gv-describby.vercel.app/"
    },
    {
        title: "Probability Trees",
        description: "A dinner table hypothetical that went too far",
        imageUrl: "https://nlp7257gkjhtxzam.public.blob.vercel-storage.com/probability-trees-QC1qugZzlZW1DEgm6AcoW8vbgEtrhp.png",
        link: "https://github.com/rbutl0215/probability-trees"
    },
    {
        title: "Brewery on Mars",
        description: "An internal training tool that went from Excel to full blown web app",
        imageUrl: "https://nlp7257gkjhtxzam.public.blob.vercel-storage.com/brewery-on-mars-AlLXXWESQD2LITqkGcFwscd6tN9U7T.png",
        link: "https://see6.ai/case-studies/ai-simulation-for-anheuser-busch"
    }
]

import {
  type IconType,
  SiCloudflare,
  SiDocker,
  SiFirebase,
  SiGit,
  SiGithubactions,
  SiGo,
  SiGrafana,
  SiGraphql,
  SiJavascript,
  SiJquery,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiOpenjdk,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiRadixui,
  SiReact,
  SiReactquery,
  SiRedis,
  SiSass,
  SiStorybook,
  SiSvelte,
  SiSymfony,
  SiTailwindcss,
  SiTauri,
  SiTrpc,
  SiTypescript,
  SiVuedotjs,
} from "@icons-pack/react-simple-icons";

import {
  Section,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "@repo/ui/components/section";

const skills: {
  name: string;
  description: string;
  icon: IconType;
}[] = [
  {
    name: "PHP",
    description: "",
    icon: SiPhp,
  },
  {
    name: "Laravel",
    description: "",
    icon: SiLaravel,
  },
  {
    name: "Next.js",
    description: "",
    icon: SiNextdotjs,
  },
  {
    name: "Tailwind CSS",
    description: "",
    icon: SiTailwindcss,
  },
  {
    name: "Typescript",
    description: "",
    icon: SiTypescript,
  },
  {
    name: "React",
    description: "",
    icon: SiReact,
  },
  {
    name: "Javascript",
    description: "",
    icon: SiJavascript,
  },
  {
    name: "Python",
    description: "",
    icon: SiPython,
  },
  {
    name: "Postgres",
    description: "",
    icon: SiPostgresql,
  },
  {
    name: "Java",
    description: "",
    icon: SiOpenjdk,
  },
  {
    name: "Vue.js",
    description: "",
    icon: SiVuedotjs,
  },
  {
    name: "GIT",
    description: "",
    icon: SiGit,
  },
  {
    name: "Docker",
    description: "",
    icon: SiDocker,
  },
  {
    name: "Redis",
    description: "",
    icon: SiRedis,
  },
  {
    name: "MySQL",
    description: "",
    icon: SiMysql,
  },
  {
    name: "GitHub Actions",
    description: "",
    icon: SiGithubactions,
  },
  {
    name: "Go",
    description: "",
    icon: SiGo,
  },
  {
    name: "TRPC",
    description: "",
    icon: SiTrpc,
  },
  {
    name: "Svelte",
    description: "",
    icon: SiSvelte,
  },
  {
    name: "React Query",
    description: "",
    icon: SiReactquery,
  },
  {
    name: "Cloudflare",
    description: "",
    icon: SiCloudflare,
  },
  {
    name: "Storybook",
    description: "",
    icon: SiStorybook,
  },
  {
    name: "Grafana",
    description: "",
    icon: SiGrafana,
  },
  {
    name: "SASS",
    description: "",
    icon: SiSass,
  },
  {
    name: "Tauri",
    description: "",
    icon: SiTauri,
  },
  {
    name: "Symfony",
    description: "",
    icon: SiSymfony,
  },
  {
    name: "JQuery",
    description: "",
    icon: SiJquery,
  },
  {
    name: "Radix UI",
    description: "",
    icon: SiRadixui,
  },
  {
    name: "Firebase",
    description: "",
    icon: SiFirebase,
  },
  {
    name: "GraphQL",
    description: "",
    icon: SiGraphql,
  },
];

export default function SkillsPage() {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>My Skills</SectionTitle>
        <SectionDescription>
          I am passionate about learning and using a variety of new technologies
          and languages that give me a better understanding of current world
          trends.
        </SectionDescription>
      </SectionHeader>

      <div className="grid grid-cols-2 gap-0.5 overflow-hidden md:grid-cols-3 -mx-6 sm:mx-0 sm:rounded-2xl">
        {skills.map(({ name, description, icon: Icon }) => (
          <div key="name" className="bg-muted/50 p-8 hover:bg-muted">
            <div className="flex items-center">
              <Icon className="size-10" />
              <h3 className="ml-4 text-xl font-semibold">{name}</h3>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

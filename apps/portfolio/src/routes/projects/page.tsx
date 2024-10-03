import {
  Section,
  SectionDescription,
  SectionHeader,
  SectionTagline,
  SectionTitle,
} from "@repo/ui/components/section";
import { Masonry } from "masonic";
import { ProjectCard } from "./ProjectCard";
import data from "./data";

export default function ProjectListPage() {
  return (
    <Section>
      <SectionHeader>
        <SectionTagline>Portfolio</SectionTagline>
        <SectionTitle>Projects & Works</SectionTitle>
        <SectionDescription>
          This might give you an idea of what I&apos;ve been up to.
          <br />
          <em className="text-sm">
            Please be aware that the order of the projects is not sorted by
            importance or time. Fine order would be added in the future.
          </em>
          <br />
          <em className="text-sm">
            Please also understand that most of the paid freelance projects are
            not shown below due to privacy and copyright issues. So far 5
            projects have been hidden below.
          </em>
        </SectionDescription>
      </SectionHeader>

      <Masonry
        maxColumnCount={3}
        columnGutter={24}
        items={data}
        render={({ index, data }) => <ProjectCard {...data} />}
      />
    </Section>
  );
}

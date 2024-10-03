import {
  Section,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "@repo/ui/components/section";
import HistorySection from "./HistorySection";
import TimelineSection from "./TImelineSection";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-5xl">
      <div className="grid grid-cols-1 lg:grid-rows-[auto_1fr] lg:grid-cols-2">
        <Section>
          <SectionHeader>
            <SectionTitle>About Me</SectionTitle>
            <SectionDescription>
              Discover more about me and my passion for programming.
            </SectionDescription>
          </SectionHeader>

          <div className="mx-auto prose prose-gray sm:max-w-3xl">
            <p className="lead">
              I am a self-taught and passionate full-stack developer who has
              been involved in programming for 6 years and has participated in
              several open-source projects on GitHub.
            </p>
            <h2>My Experience</h2>
            <p>
              I have experience in developing web applications (both monolithic
              and frontend-backend-separated) using various technologies such as
              Laravel framework, Next.js, React, and much more. I have also
              worked with Tailwind CSS and have experience in writing tests
              using Jest.
            </p>
            <h3>Currently Learning</h3>
            <p>
              I am currently investing my time in learning more about the
              architecture, including microservices and serverless, as well as
              DDD and TDD. I learnt a lot from DDD patterns, giving me the sight
              to see the big picture of large project and how to structure it.
            </p>
            <h3>Future Interests</h3>
            <p>
              Cloud-distributed systems and microservices are my next-up
              interests. I believe that the future of web development is in the
              cloud, and I am excited to learn more about it. I am also
              interested in learning more about the DevOps culture and how it
              can help me to improve my work.
            </p>
            <blockquote>
              <p>
                I am always looking to learn new things and improve my skills. I
                am open to new opportunities and challenges that can help me
                grow as a developer.
              </p>
            </blockquote>
          </div>
        </Section>
        <TimelineSection />
      </div>

      <HistorySection />
    </div>
  );
}

import { BackgroundBeamsWithCollision } from "@repo/ui/components/deco/background-beams-with-collision";
import { FlipWords } from "@repo/ui/components/deco/flip-words";
import { Button } from "@repo/ui/components/button";

const HeroSection = () => (
  <BackgroundBeamsWithCollision className="h-screen">
    <div className="mx-auto max-w-2xl text-center">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm text-muted-foreground leading-6 ring-1 ring-ring/20 hover:ring-ring/30">
          Hello, I&apos;m a passionate Full-Stack Developer with a focus on Web
          Development.
        </div>
      </div>
      <FlipWords
        className="mx-auto text-3xl text-foreground font-bold tracking-tight sm:text-6xl text-nowrap"
        words={[
          "Full-Stack developer",
          "PHP/Laravel developer",
          "PHP/Spiral developer",
          "React/Next.js developer",
          // 'DevOps engineer',
          // 'Svelte beginner',
          // 'Vue.js beginner',
          // 'DDD learner',
          // 'Architecture enthusiast',
        ]}
      />
      <p className="mt-6 text-pretty text-lg text-muted-foreground leading-8">
        I am a self-taught and passionate full-stack developer who has been
        involved in programming for 6 years and has participated in several
        open-source projects on GitHub, as well as multiple freelance projects.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-6 *:w-full sm:w-auto sm:flex-row">
        <Button asChild>
          <a href="/projects">View Projects</a>
        </Button>
        <Button variant="secondary" asChild>
          <a href="/about">Learn About Me</a>
        </Button>
      </div>
    </div>
  </BackgroundBeamsWithCollision>
);

const Index = () => <HeroSection />;

export default Index;

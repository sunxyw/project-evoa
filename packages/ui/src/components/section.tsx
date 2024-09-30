import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";

const Section = ({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"section">) => {
  return (
    <section
      className={cn("px-6 py-6 lg:px-8 mx-auto max-w-7xl space-y-6", className)}
      {...props}
    >
      {children}
    </section>
  );
};

const SectionHeader = ({
  className,
  children,
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={cn("sm:mx-auto sm:max-w-xl lg:max-w-3xl", className)}>
      {children}
    </div>
  );
};

const SectionTagline = ({ children }: PropsWithChildren) => {
  return (
    <h3 className="text-base text-primary font-semibold tracking-wide uppercase">
      {children}
    </h3>
  );
};

const SectionTitle = ({ children }: PropsWithChildren) => {
  return (
    <h2 className="text-wrap text-3xl font-extrabold tracking-tight sm:text-4xl">
      {children}
    </h2>
  );
};

const SectionDescription = ({ children }: PropsWithChildren) => {
  return (
    <p className="mt-2 text-pretty text-xl text-muted-foreground">{children}</p>
  );
};

export {
  Section,
  SectionHeader,
  SectionTagline,
  SectionTitle,
  SectionDescription,
};

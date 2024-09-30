import type { ReactNode } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { Button } from "@repo/ui/components/button";
import { Badge } from "@repo/ui/components/badge";

export interface ProjectCardProps {
  title: string;
  description: ReactNode;
  image?: string;
  links?: {
    href: string;
    text: string;
  }[];
  date?: string;
  tags?: string[];
}

const ProjectCard = ({
  title,
  description,
  image,
  links = [],
  date,
  tags = [],
}: ProjectCardProps) => {
  const imageSrc = image || `https://placehold.co/600x400.webp?text=${title}`;

  return (
    <Card className="border-none shadow-none">
      <CardHeader className="pb-0">
        <img
          src={imageSrc}
          alt={title}
          sizes="100vw"
          width={400}
          height={200}
          className="mb-4 aspect-video w-full rounded-2xl object-contain"
        />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col">
        <div className="w-full flex items-center space-x-2">
          {links.map((link) => (
            <Button variant="link" className="p-0" key={link.href} asChild>
              <a target="_blank" href={link.href} rel="noreferrer">
                {link.text}
              </a>
            </Button>
          ))}
          <div className="flex-grow flex-basis-0 text-right">
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>
        </div>

        <div className="w-full mt-2 flex flex-wrap gap-2 justify-end">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export { ProjectCard };

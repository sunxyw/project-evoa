"use client";

import LogoImage from "@/assets/logo.svg?react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/utils/ui";
import {
  BotMessageSquareIcon,
  CalendarFoldIcon,
  FileBoxIcon,
  HandshakeIcon,
  Link2Icon,
  type LucideIcon,
  PresentationIcon,
  SchoolIcon,
  ShapesIcon,
} from "lucide-react";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";

const features: {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "URL Shortening",
    href: "",
    description: "Shorten any long URL to a shorter version.",
    icon: Link2Icon,
  },
  {
    title: "ChatAI All-in-One",
    href: "",
    description: "Chat with any AI model in one place.",
    icon: BotMessageSquareIcon,
  },
  {
    title: "Timetable Managing & Sharing",
    href: "",
    description: "Manage and share your timetable with others.",
    icon: CalendarFoldIcon,
  },
  {
    title: "File Hosting & Sharing",
    href: "",
    description: "Upload any file and share it with others.",
    icon: FileBoxIcon,
  },
  {
    title: "Collaborative Whiteboard",
    href: "",
    description: "Draw and write with others in real-time.",
    icon: PresentationIcon,
  },
];

export default function DesktopNavigation() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {features.map((feature) => (
                <ListItem
                  key={feature.title}
                  title={feature.title}
                  href={feature.href}
                  icon={feature.icon}
                >
                  {feature.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Use cases</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 min-w-[400px] w-[75vw] max-w-screen-md lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <LogoImage className="size-8" />
                    <div className="my-2 text-lg font-medium">
                      Mase Platform
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Efficiency tools for your daily work. Designed with
                      simplicity in mind. Best for students and professionals.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="" title="Collaboration" icon={HandshakeIcon}>
                Collaborate with your team and clients, using our featured tools
                such as chat, whiteboard, and file sharing.
              </ListItem>
              <ListItem href="" title="Education" icon={SchoolIcon}>
                Manage your timetable, shorten URLs, and share files with your
                classmates and teachers.
              </ListItem>
              <ListItem href="" title="Personal" icon={ShapesIcon}>
                Use our tools to manage your daily tasks, chat with AI models,
                and share files with your friends.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <a href="/pricing">Pricing</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <a href="/pricing">Help</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <a href="/pricing">Blog</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = forwardRef<
  ElementRef<"a">,
  ComponentPropsWithoutRef<"a"> & { icon: LucideIcon }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "flex select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="ml-1 mr-4 flex-shrink-0 self-center text-primary">
            <Icon className="size-8" />
          </div>
          <div>
            <h2 className="text-sm font-medium">{title}</h2>
            <p className="text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

import "@/styles/globals.css";
import { Outlet } from "@modern-js/runtime/router";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@repo/ui/components/navbar-menu";
import { cn } from "@repo/ui/lib/utils";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <NavigationMenu setActive={setActive}>
        <NavigationMenuItem
          setActive={setActive}
          active={active}
          item="Portfolio"
        >
          <div className="flex flex-col space-y-4 text-sm">
            <NavigationMenuLink href="/projects">
              Projects & Work
            </NavigationMenuLink>
            <NavigationMenuLink href="/skills">
              Skills & Tools
            </NavigationMenuLink>
          </div>
        </NavigationMenuItem>
        <NavigationMenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <NavigationMenuLink href="/about">About Me</NavigationMenuLink>
            <NavigationMenuLink href="/contact">Contact Me</NavigationMenuLink>
          </div>
        </NavigationMenuItem>
      </NavigationMenu>
    </div>
  );
};

export default function Layout() {
  return (
    <div>
      <Navbar className="top-6" />
      <Outlet />
    </div>
  );
}

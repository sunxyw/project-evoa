import "@/styles/globals.css";
import { Outlet } from "@modern-js/runtime/router";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@repo/ui/components/navbar-menu";
import { cn } from "@repo/ui/lib/utils";
import { toast, Toaster } from "@repo/ui/components/sonner";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("sticky top-6 mt-6 max-w-2xl mx-auto z-50", className)}>
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

const UnderConstructionNotice = () => {
  useEffect(() => {
    toast.warning("This website is currently under construction.", {
      id: "under-construction",
      duration: Number.POSITIVE_INFINITY,
      closeButton: true,
    });
  }, []);

  return null;
};

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Toaster />
      <UnderConstructionNotice />
    </div>
  );
}

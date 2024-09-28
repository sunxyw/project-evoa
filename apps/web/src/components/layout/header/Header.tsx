import LogoImage from "@/assets/logo.svg?react";
import { Button } from "@repo/ui/components/button";
import { ArrowRightIcon, MenuIcon } from "lucide-react";
import DesktopNavigation from "./DesktopNavigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <nav
        className="m-3 flex items-center justify-between p-3 bg-background rounded-xl shadow-md"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="pl-3 text-primary inline-flex items-center">
            <LogoImage className="h-8 w-auto" />
            <span className="pl-2 text-lg font-medium tracking-tighter font-serif">
              Mase Platform
            </span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon className="size-6" />
          </button>
        </div>
        <DesktopNavigation />
        <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-2">
          <Button variant="outline">Log in</Button>
          <Button>
            Request access
            <ArrowRightIcon className="ml-2 size-4" />
          </Button>
        </div>
      </nav>
    </header>
  );
}

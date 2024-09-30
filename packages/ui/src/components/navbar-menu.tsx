import { motion } from "framer-motion";
import type { ReactNode } from "react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const NavigationMenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-foreground hover:opacity-[0.9]"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_0.5rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-popover text-popover-foreground rounded-2xl overflow-hidden border border-border/[0.2] shadow-lg"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

const NavigationMenu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full ring-1 ring-border backdrop-blur bg-background shadow-lg flex justify-center space-x-6 px-8 py-2 max-w-max mx-auto"
    >
      {children}
    </nav>
  );
};

const NavigationMenuLink = ({ children, ...rest }: any) => {
  return (
    <a {...rest} className="text-muted-foreground hover:text-foreground">
      {children}
    </a>
  );
};

export { NavigationMenuItem, NavigationMenu, NavigationMenuLink };

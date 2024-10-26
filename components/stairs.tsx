import React from "react";
import { motion } from "framer-motion";
// import { opacity, expand } from "./anim";

export default function Stairs({ children, backgroundColor }: { children: React.ReactNode; backgroundColor: string }) {
  const anim = (variants: any, custom: number | null | undefined = null) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      custom,
      variants,
    };
  };

  const nbOfColumns = 5;
  return (
    <div className="page stairs" style={{ backgroundColor }}>
      <motion.div {...anim(opacityVariants)} className="transition-background" />
      <div className="transition-container">
        {[...Array(nbOfColumns)].map((_, i) => {
          return <motion.div key={i} {...anim(expandVariants, i === 0 ? undefined : nbOfColumns - i)} />;
        })}
      </div>
      {children}
    </div>
  );
}

export const expandVariants = {
  initial: {
    top: 0,
  },
  enter: (i: number) => ({
    top: "100vh",
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
    transitionEnd: { height: "0", top: "0" },
  }),
  exit: (i: number) => ({
    height: "100vh",
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};
export const opacityVariants = {
  initial: {
    opacity: 0.5,
  },
  enter: {
    opacity: 0,
  },
  exit: {
    opacity: 0.5,
  },
};

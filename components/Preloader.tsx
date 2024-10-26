"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = [
  "Hello",       // English
  "Bonjour",     // French
  "Ciao",        // Italian
  "Olá",         // Portuguese
  "やあ",          // Japanese
  "Hallå",       // Swedish
  "Guten Tag",   // German
  "Hola",        // Spanish
  "Привет",      // Russian
  "안녕하세요",     // Korean
  "你好",          // Chinese (Mandarin)
  "مرحبا",        // Arabic
  "Hallo",       // Dutch
  "नमस्ते",       // Hindi
  "Merhaba",     // Turkish
];

export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};

export const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    // Ensure the last word stays visible for 1 second before stopping
    if (index >= words.length - 1) return;

    const timeout = setTimeout(
      () => setIndex(index + 1),
      index === 0 ? 1000 : 150
    );

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="introduction absolute inset-0"
    >
      {dimension.width > 0 && (
        <>
          <motion.p variants={opacity} initial="initial" animate="enter">
            <span></span>
            {words[index]}
          </motion.p>
          <svg>
            <motion.path variants={curve} initial="initial" exit="exit" />
          </svg>
        </>
      )}
    </motion.div>
  );
}

"use client"
import Preloader from "@/components/Preloader";
import { title } from "@/components/primitives";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])
  
  return (
    <main className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div>
        <h1 className={title()}>Contact Page</h1>

        <div className="flex justify-between gap-44">
          <div
            className="aspect-square w-72 bg-blue-700 "
            data-scroll
            data-scroll-speed="0"
          >
            123
          </div>
          <div
            className="aspect-square w-72 bg-blue-700 "
            data-scroll
            data-scroll-speed="0.8"
          >
            456
          </div>
        </div>
      </div>
    </main>
  );
}

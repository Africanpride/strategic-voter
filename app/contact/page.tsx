"use client";
import Preloader from "@/components/Preloader";
import { title } from "@/components/primitives";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main className="">
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 min-h-[calc(350dvh-60px)] ">
        <h1 className={title()}>Contact Page</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            className="aspect-square w-72 bg-blue-700 "
            data-scroll
            data-scroll-speed="0.1"
          ></div>
          <div
            className="aspect-square w-72 bg-blue-700 "
            data-scroll
            data-scroll-speed="0.2"
          ></div>
          <div
            className="aspect-square w-72 bg-blue-700 "
            data-scroll
            data-scroll-speed="0.3"
          ></div>
          <div
            className="aspect-square w-72 bg-blue-700 "
            data-scroll
            data-scroll-speed="0.4"
          ></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            className="aspect-square w-72 bg-blue-700 "
            data-scroll
            data-scroll-speed="0.1"
          ></div>
          <div
            className="aspect-square w-72 bg-blue-700 "
            data-scroll
            data-scroll-speed="0.2"
          ></div>
          <div
            className="aspect-square w-72 bg-blue-700 "
            data-scroll
            data-scroll-speed="0.3"
          ></div>
          <div
            className="aspect-square w-72 bg-blue-700 "
            data-scroll
            data-scroll-speed="0.4"
          ></div>
        </div>
      </div>
    </main>
  );
}

"use client";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.25"],
  });
  return (
    <div
      className="relative h-[900px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+900px)] -top-[100vh]">
        <div className="sticky top-[calc(100vh-900px)] h-[900px]">
          <main className="min-h-screen xl:px-10 flex items-center justify-center bg-[#1e1e1e]">
            <motion.section
              ref={ref}
              style={{
                opacity: scrollYProgress,
              }}
              className="flex flex-col items-center justify-center text-center gap-10"
            >
              <div>
                <h1 className="leading-tight xl:gap-5 xl:text-5xl md:text-3xl text-3xl font-semibold xl:px-36 md:px-20">
                  The transition CDN-dCDN
                </h1>
              </div>
              <div>
                <p className="xl:text-sm md:text-md text-sm xl:px-80 px-10">
                  FanCloud pioneers a new era of connectivity with its
                  decentralized content delivery network (dCDN), leveraging a
                  global network of community-powered nodes. By harnessing a
                  decentralized architecture, dCDN drastically reduces data
                  transfer and compute costs while enhancing load time. Join
                  FanCloud&apos;s dCDN network and experience the future of
                  seamless, secure and community-driven consumption.
                </p>
              </div>
            </motion.section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Footer;

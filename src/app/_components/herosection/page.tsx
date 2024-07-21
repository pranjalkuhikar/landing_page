"use client";
import { useScroll, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  return (
    <main
      className="min-h-screen px-10 pb-28"
      style={{ background: "radial-gradient(circle, #2a2944, #1f1f20)" }}
    >
      <section className="flex flex-col items-center justify-center gap-10 text-center">
        <div className="leading-tight flex flex-col xl:gap-5 xl:text-5xl text-3xl xl:mt-28 mt-20 font-bold text-gradient px-10">
          <h1>EMPOWERING THE DIGITAL ERA:</h1>
          <h1>DECENTRALIZING ENTERTAINMENT</h1>
        </div>
        <div className="xl:text-lg text-sm">
          <p>
            Join the world&apos;s first DeCDN: <br /> Revolutionizing Content
            Streaming with Faster Safer and Cheaper Access
          </p>
        </div>
        <div>
          <button className="hover:bg-[#5146cf9e] px-4 py-2 bg-[#6c5ff5] rounded-full overflow-hidden relative text-lg flex items-center justify-center gap-2">
            coming soon
            <div>
              <FaArrowCircleRight size={20} />
            </div>
          </button>
        </div>
      </section>
      <section className="flex items-center justify-center ">
        <Image
          src="/hero.png"
          alt="image"
          className="object-center bg-center mt-10 mb-10"
          width={1400}
          height={1400}
        />
      </section>
      <motion.section
        ref={ref}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
      >
        <div className="flex items-center justify-center gap-10 flex-wrap tracking-tighter leading-tight">
          <div
            className="bg-white md:w-[30rem] xl:w-[30rem] xl:h-[10rem] rounded-2xl text-black p-6"
            style={{
              backgroundImage:
                "radial-gradient(circle at top right, white, #d6bcfa)",
            }}
          >
            <h1 className="text-3xl font-bold flex justify-between">
              No. of Node Operators <span>✦</span>
            </h1>
            <p className="text-4xl font-extrabold leading-loose">2000</p>
          </div>
          <div
            className="bg-white xl:w-[30rem] xl:h-[10rem] rounded-2xl text-black p-6"
            style={{
              backgroundImage:
                "radial-gradient(circle at top right, white, #d6bcfa)",
            }}
          >
            <h1 className="text-3xl font-bold flex justify-around items-baseline">
              <div>
                Data Transferred in TB
                <span className="text-sm font-medium">(last 30 days)</span>
              </div>
              <span>✦</span>
            </h1>

            <p className="text-4xl font-extrabold leading-loose">12,000</p>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default HeroSection;

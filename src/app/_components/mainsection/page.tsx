"use client";

import Box from "../box/page";
import Image from "next/image";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";
import { ReactNode, useRef } from "react";

type Props = {
  title: string;
  description: string;
};

type WordProps = {
  children: ReactNode;
  range: [number, number];
  progress: MotionValue<number>;
};

const MainSection = ({ title, description }: Props) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 1"],
  });

  const wordTitle = title.split(" ");
  const wordDescription = description.split(" ");

  return (
    <main
      ref={ref}
      className="min-h-screen xl:px-10 pb-28 xl:pt-40 pt-20 bg-gradient-to-b from-[#2a2946] to-[#2A2A2B]"
    >
      <div className="xl:px-24 px-3 text-center mb-11">
        {wordTitle.map((word, i) => {
          const start = i / wordTitle.length;
          const end = start + 1 / wordTitle.length;
          return (
            <section
              key={i}
              className="inline-block xl:text-6xl text-3xl tracking-tighter px-3 text-center"
            >
              <div className="flex justify-center">
                <Word range={[start, end]} progress={scrollYProgress}>
                  {word}
                </Word>
              </div>
            </section>
          );
        })}
      </div>
      <br />
      <div className="xl:px-60 px-10 text-center">
        {wordDescription.map((word, i) => {
          const start = i / wordDescription.length;
          const end = start + 1 / wordDescription.length;
          return (
            <section key={i} className="inline-block">
              <div className="xl:text-lg md:text-md text-sm px-1 tracking-tighter">
                <Word range={[start, end]} progress={scrollYProgress}>
                  {word}
                </Word>
              </div>
            </section>
          );
        })}
      </div>
      <section className="flex items-center justify-center">
        <Image
          src="/main.png"
          alt="image"
          className="object-center bg-center mt-10 mb-10"
          width={1000}
          height={1000}
        />
      </section>
      <section className="flex justify-evenly items-center flex-wrap px-10 gap-7 mt-10">
        <Box
          title="Content Nodes"
          description="Content Nodes, Earn rewards for supplying other GPU, Storage and bandwidth for dCDN"
          comingSoon={false}
          BoxColor="#6b61ff"
          text="white"
          ButtonColor=""
        />
        <Box
          title="Orchestrators"
          description="Orchestrators will be responsible for connecting the client with the content node for seamless streaming. Traffic distribution will be based on multiple factors like job type, performance"
          comingSoon={true}
          BoxColor="#fe9bf3"
          ButtonColor="#7a186f"
          text="black"
        />
        <Box
          title="Validators"
          description="Validators will be responsible for validating the execution of dCDN Network. Validators will earn rewards from Staking and earn a cut on the executions validated."
          comingSoon={true}
          BoxColor="#adffe4"
          ButtonColor="#0a9b6b"
          text="black"
        />
      </section>
    </main>
  );
};

export default MainSection;

const Word = ({ children, range, progress }: WordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative inline-block">
      <span className="absolute opacity-[1]">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

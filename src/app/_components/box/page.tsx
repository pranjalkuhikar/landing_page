"use client";

import { FaArrowCircleRight } from "react-icons/fa";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

interface BoxProps {
  title: string;
  description: string;
  comingSoon: boolean;
  BoxColor: string;
  ButtonColor: string;
  text: string;
}

const Box = ({
  title,
  description,
  comingSoon,
  BoxColor,
  ButtonColor,
  text,
}: BoxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  return (
    <motion.div
      ref={ref}
      style={{
        backgroundColor: BoxColor,
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      className={` px-4 py-3 rounded-lg shadow-lg w-80 xl:h-44 text-${text}`}
    >
      <h3 className="text-2xl font-semibold mb-2 tracking-tighter">{title}</h3>
      <p className="text-sm xl:mb-2 tracking-tighter">{description}</p>
      <div className="flex items-center justify-end">
        {comingSoon ? (
          <span
            style={{ backgroundColor: ButtonColor }}
            className="text-sm font-semibold text-white px-4 py-2 rounded-full xl:-mt-2 -rotate-6"
          >
            Coming soon
          </span>
        ) : (
          <button className="flex items-center justify-center gap-2 text-sm font-bold bg-white text-black py-2 px-7 rounded-full">
            Deploy
            <span>
              <FaArrowCircleRight />
            </span>
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default Box;

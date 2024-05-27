"use client";

import {
  LazyMotion,
  domAnimation,
  useAnimation,
  useInView,
} from "framer-motion";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Section from "@/components/layouts/Section";
import { m } from "framer-motion";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { margin: "-100px", once: true });

  const animationControls = useAnimation();

  useEffect(() => {
    if (inView) {
      animationControls.start("animate");
    }
  }, [inView, animationControls]);

  return (
    <Section id="about">
      <div ref={sectionRef} className="relative">
        <LazyMotion features={domAnimation}>
          <m.div
            className="grid w-full grid-cols-10 place-content-center gap-y-8 md:min-h-[60dvh]"
            variants={{
              initial: { opacity: 0, y: 100 },
              animate: { opacity: 1, y: 0 },
            }}
            initial="initial"
            animate={animationControls}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          >
            <div className="col-[1/11] h-full w-full space-y-4 lg:col-[1/11]">
              <figure>
                <Image
                  src={
                    "https://bioedge.org/wp-content/uploads/2021/09/F1.large_.jpg"
                  }
                  alt="image of school of athens"
                  width={300}
                  height={300}
                  className="min-[400px] mask-image w-full rounded-xl"
                />
                <figcaption className="mt-2 text-end text-xs">
                  {"SCHOOLS OF ATHENS (1509~1511)"}
                </figcaption>
              </figure>
              <div>
                <h2 className="text-5xl font-bold">Once Upon a Time ...</h2>
              </div>
              <p className="font-sans">
                I used to be a philosophy student in University of Indonesia.
                Later on in my nearly graduate journey, I found my passion in
                Design and Web Development. The strong motivation and eagerness
                to learn drive me to pursue my dream as a tech talent in the
                future day. From day to day, month to month I spent my time
                learning, practicing, reading, and{" "}
                <span className="font-sans line-through">creating bugs</span>.
              </p>

              <code className="my-4 block w-fit bg-gray-900 px-2">
                <span className="text-sm italic">practice makes perfect</span>
              </code>

              <p className="font-sans">
                just like the wise man who said that. Mastering front end web
                development path is not an easy task. it require patience and
                dedication. Here is where my philosophical thinking used.
                Philosophy has taught me so many things especially about
                discipline and self-motivation. Being adaptive and dynamic
                despite an unpredictable situation {"'"}just like JavaScript
                framework nowadays{"'"} has helped me to get used with the
                dynamic environment of front end web development.
              </p>

              <p className="font-sans">
                As I have said before, im not from a tech-related background{" "}
                <span className="group relative line-through hover:cursor-pointer">
                  {"read: (computer science student)"}
                  <span className="invisible absolute -top-14 left-0 min-w-[40px] origin-bottom scale-0 rounded-lg bg-gray-900 p-2 text-xs transition-all duration-200 ease-in-out group-hover:visible group-hover:scale-100">
                    but i have a plan to take master degree in information
                    technology major :D
                  </span>
                </span>
                , but I could feel that computer related thing is part of my
                life. And to keep up with the latest technologies available, I
                am taking various courses and projects to challenge myself and
                learn new things.
              </p>
            </div>
          </m.div>
        </LazyMotion>
      </div>
    </Section>
  );
}

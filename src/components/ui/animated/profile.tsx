"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { useEffect, useState } from "react";
import { profileJson } from "@/constants/menu";

export default function Profile() {
  const [animatedText, setAnimatedText] = useState("");

  useEffect(() => {
    let currentText = "";
    const interval = setInterval(() => {
      if (currentText === profileJson) {
        clearInterval(interval);
      } else {
        currentText = profileJson.slice(0, currentText.length + 1);
        setAnimatedText(currentText);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <span className="font-bold">{animatedText}</span>
      <LazyMotion features={domAnimation}>
        <m.span
          animate={{
            opacity: [0, 1, 0, 1, 0],
            transition: {
              repeat: 20,
              duration: 1,
            },
          }}
        >
          |
        </m.span>
      </LazyMotion>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
      <motion.span
        animate={{
          opacity: [0, 1, 0, 1, 0],
          transition: {
            repeat: 20,
            duration: 1,
          },
        }}
      >
        |
      </motion.span>
    </>
  );
}

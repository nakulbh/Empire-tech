"use client"
import React, { useState } from 'react';
import styles from "@/styles/weprovide.module.css"

const Wepage = () => {
  const letters = "ABCDEFGHIJKLMNOPQRST";
  const originalText = "We provide web Services";
  const [text, setText] = useState(originalText);

  const handleMouseOver = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setText((prevText) => {
        return originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
      });

      iteration += 1 / 3;

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  };

  return (
    <div className={styles.container}>
      <h1 style={{ color: '#4AF626' }} onMouseOver={handleMouseOver}>{text}</h1>
    </div>
  );
};

export default Wepage;

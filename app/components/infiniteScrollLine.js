"use client";

import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiTypescript, SiShadcnui, SiSwr } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

export default function InfiniteScrollLine() {
  const innerRef = useRef(null);
  const position = useRef(0);
  const speedRef = useRef(2);
  const [isHover, setIsHover] = useState(false);

  const marqueeItems = [
    { icon: <FaReact />, href: "https://react.dev/" },
    {
      icon: <FaJs />,
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { icon: <SiTypescript />, href: "https://www.typescriptlang.org/" },
    { icon: <RiTailwindCssFill />, href: "https://tailwindcss.com/" },
    { icon: <SiShadcnui />, href: "https://ui.shadcn.com/" },
    { icon: <FaGitAlt />, href: "https://git-scm.com/" },
    { icon: <FaGithub />, href: "https://github.com/abdallahameer" },
    {
      icon: <FaHtml5 />,
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      icon: <FaCss3Alt />,
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    { icon: <SiSwr />, href: "https://swr.vercel.app/" },
    { icon: <FaReact />, href: "https://react.dev/" },
    {
      icon: <FaJs />,
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { icon: <SiTypescript />, href: "https://www.typescriptlang.org/" },
    { icon: <RiTailwindCssFill />, href: "https://tailwindcss.com/" },
    { icon: <SiShadcnui />, href: "https://ui.shadcn.com/" },
    { icon: <FaGitAlt />, href: "https://git-scm.com/" },
    { icon: <FaGithub />, href: "https://github.com/abdallahameer" },
    {
      icon: <FaHtml5 />,
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      icon: <FaCss3Alt />,
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    { icon: <SiSwr />, href: "https://swr.vercel.app/" },
  ];

  const repeatedItems = [...marqueeItems, ...marqueeItems]; // duplicate for seamless scroll

  useEffect(() => {
    let animationFrame;

    const animate = () => {
      const el = innerRef.current;
      if (!el) return;

      // Deceleration on hover
      if (isHover) {
        speedRef.current *= 0.9;
        if (speedRef.current < 0.05) speedRef.current = 0;
      } else {
        speedRef.current = 2;
      }

      position.current -= speedRef.current;

      const width = el.scrollWidth / 2;
      if (Math.abs(position.current) >= width) {
        position.current += width;
      }

      el.style.transform = `translateX(${position.current}px)`;

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isHover]);

  return (
    <div
      className="overflow-hidden relative flex items-center p-2 min-h-[30px] w-full mask-lr bg-gradient-to-r from-[#f0f1f2] via-transparent to-[#f0f1f2]"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="flex w-max" ref={innerRef}>
        {repeatedItems.map((item, index) => (
          <span
            key={index}
            className="mr-8 text-5xl inline-block transition-transform transition-opacity duration-300 ease-out hover:scale-110 hover:opacity-80 cursor-pointer"
          >
            <Link href={item.href}>{item.icon}</Link>
          </span>
        ))}
      </div>
    </div>
  );
}

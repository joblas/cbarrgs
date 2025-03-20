"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const socialIconVariants = {
  initial: { scale: 1, opacity: 0.8 },
  hover: { scale: 1.15, opacity: 1, rotate: [0, -5, 5, 0], transition: { duration: 0.3 } },
  tap: { scale: 0.95 }
};

const socialLinkVariants = {
  initial: { y: 20, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut"
    }
  })
};

export default function SocialLinks() {
  const socials = [
    {
      name: "Spotify",
      url: "https://open.spotify.com/artist/4qRI7BqjuKH3ulYQrEYnLa",
      icon: (
        <svg 
          className="h-7 w-7"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 12.857a7.6 7.6 0 0 1 8 0"></path>
          <path d="M9.5 9.857a5 5 0 0 1 5 0"></path>
          <path d="M6.5 15.857a10 10 0 0 1 11 0"></path>
        </svg>
      ),
      color: "#1DB954",
      label: "Listen on Spotify",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/cbarrgs/",
      icon: <Instagram className="h-7 w-7" />,
      color: "#E1306C",
      label: "Follow on Instagram",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@cbarrgs",
      icon: <Youtube className="h-7 w-7" />,
      color: "#FF0000",
      label: "Watch on YouTube",
    },
  ];

  return (
    <div className="w-full">
      <h2 className="text-xl font-mono text-center mb-6">Connect with CBARRGS</h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 py-4">
        {socials.map((social, index) => (
          <motion.div
            key={social.name}
            className="relative"
            custom={index}
            initial="initial"
            animate="animate"
            variants={socialLinkVariants}
          >
            <motion.div
              className="tooltip absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 pointer-events-none"
              animate={{ opacity: 0, y: 0 }}
              whileHover={{ opacity: 1, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {social.label}
            </motion.div>
            <Link 
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 rounded-full hover:bg-white/5 transition-colors duration-300"
              aria-label={social.name}
            >
              <motion.div
                className="text-white"
                variants={socialIconVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                style={{ color: social.color }}
              >
                {social.icon}
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

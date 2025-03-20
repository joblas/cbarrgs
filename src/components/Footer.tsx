"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Youtube, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const links = [
    { name: "HOME", href: "/" },
    { name: "STORE", href: "/store" },
    { name: "CONTACT", href: "/contact" },
  ];

  const socialLinks = [
    { 
      name: "Spotify", 
      href: "https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x",
      icon: (
        <svg 
          className="h-5 w-5"
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
    },
    { 
      name: "Instagram", 
      icon: <Instagram className="h-5 w-5" />, 
      href: "https://www.instagram.com/cbarrgs/",
      color: "#E1306C",
    },
    { 
      name: "YouTube", 
      icon: <Youtube className="h-5 w-5" />, 
      href: "https://www.youtube.com/channel/UCX5XYfHmLxcPdOOJNTbUaJA",
      color: "#FF0000",
    },
  ];

  return (
    <footer className="border-t border-white/10 py-12 mt-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="mb-8 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/" 
              className="text-2xl font-mono tracking-wider mb-4 block hover:opacity-80 transition-opacity"
            >
              CBARRGS
            </Link>
            <p className="text-sm text-white/60 max-w-md">
              Minimalist music for a complex world.
            </p>
          </motion.div>
          
          <div className="flex flex-col items-center md:items-end">
            <nav className="mb-6">
              <ul className="flex space-x-8">
                {links.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-sm font-mono text-white/70 hover:text-white transition-colors duration-200 nav-link"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200"
                  aria-label={link.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1 + 0.5,
                    type: "spring",
                    stiffness: 300
                  }}
                  viewport={{ once: true }}
                  style={{ color: link.color }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-10 pt-6 border-t border-white/10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-white/40">
            {new Date().getFullYear()} CBARRGS. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import VideoSection from "@/components/VideoSection";
import SocialLinks from "@/components/SocialLinks";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import AnimatedArrow from "@/components/AnimatedArrow";
import { ExternalLink, ShoppingBag, Music, Youtube } from "lucide-react";

// Framer Motion animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut" 
    }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Start animations when page loads
    controls.start("animate");
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  const parallaxOffset = -scrollY * 0.15;

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            transform: `translateY(${parallaxOffset}px)`,
            transition: "transform 0.1s ease-out"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black z-10" />
          <div className="w-full h-full bg-black" />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <motion.div 
            className="flex flex-col items-center justify-center gap-10"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div 
              className="max-w-sm mx-auto"
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/cbarrgs-cartoon.png"
                alt="CBARRGS"
                width={400}
                height={400}
                className="brand-image"
                priority
              />
            </motion.div>

            <motion.a
              href="https://open.spotify.com/artist/4qRI7BqjuKH3ulYQrEYnLa"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 rounded-full font-mono tracking-wider text-sm transition-all duration-300 hover:scale-105"
              variants={fadeIn}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Music className="w-5 h-5 mr-2 inline" />
              LISTEN ON SPOTIFY
              <ExternalLink className="w-4 h-4 ml-2 inline" />
            </motion.a>

            <motion.a
              href="/store"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 rounded-full font-mono tracking-wider text-sm transition-all duration-300 hover:scale-105"
              variants={fadeIn}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <ShoppingBag className="w-5 h-5 mr-2 inline" />
              OFFICIAL STORE
            </motion.a>

            <motion.a
              href="https://www.youtube.com/@cbarrgs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 rounded-full font-mono tracking-wider text-sm transition-all duration-300 hover:scale-105"
              variants={fadeIn}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Youtube className="w-5 h-5 mr-2 inline" />
              YOUTUBE
              <ExternalLink className="w-4 h-4 ml-2 inline" />
            </motion.a>

            <motion.button
              onClick={handleScrollDown}
              className="mt-10 arrow-down"
              aria-label="Scroll down"
              variants={fadeIn}
              whileHover={{ y: 5 }}
            >
              ↓
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <motion.div 
        className="container mx-auto px-4 pt-20 pb-24 max-w-5xl space-y-20"
        initial="initial"
        animate={controls}
        variants={staggerContainer}
      >
        {/* Videos Section */}
        <div className="flex flex-col items-center justify-center gap-8 p-8 w-full max-w-4xl mx-auto">
          <AnimatedArrow size={48} />
          <div className="w-full bg-gray-900 p-4 rounded-lg border border-white/10 shadow-xl">
            <VideoSection />
          </div>
        </div>

        {/* Spotify Embed Section */}
        <div className="flex flex-col items-center justify-center gap-8 p-8 mb-12 w-full max-w-4xl mx-auto">
          <AnimatedArrow size={48} />
          <div className="w-full max-w-3xl bg-gray-900 p-4 rounded-lg border border-white/10 shadow-xl">
            <iframe
              src="https://open.spotify.com/embed/artist/4qRI7BqjuKH3ulYQrEYnLa?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-lg shadow-xl"
            ></iframe>
          </div>
        </div>

        {/* Social Links */}
        <motion.div variants={fadeIn} className="w-full mb-12">
          <SocialLinks />
        </motion.div>
      </motion.div>
    </main>
  );
}

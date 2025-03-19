"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  const latestAlbum = {
    title: "LATEST ALBUM",
    name: "HORSIE (DELUXE)"
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center mt-12 px-4"
      >
        {/* Band Logo */}
        <div className="mb-12 w-full max-w-md mx-auto">
          <img 
            src="/cbarrgs-logo.svg" 
            alt="CBARRGS" 
            className="brand-image w-full h-auto"
          />
        </div>

        {/* Album Cover */}
        <div className="mb-8 w-full max-w-lg mx-auto">
          <img 
            src="/album-cover.svg" 
            alt="Album Cover" 
            className="w-full h-auto"
          />
        </div>

        {/* Album Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-dark">
          {latestAlbum.name}
        </h2>

        {/* Down Arrow */}
        <div className="my-8">
          <p className="arrow-down">↓</p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full mb-16">
          <Link 
            href="https://open.spotify.com/artist/example" 
            target="_blank"
            className="bg-dark text-white py-3 px-6 text-center hover:bg-black transition-colors"
          >
            LISTEN/DOWNLOAD
          </Link>
          <Link 
            href="/store" 
            className="bg-dark text-white py-3 px-6 text-center hover:bg-black transition-colors"
          >
            OFFICIAL STORE
          </Link>
          <Link 
            href="https://bandcamp.com/example" 
            target="_blank"
            className="bg-dark text-white py-3 px-6 text-center hover:bg-black transition-colors"
          >
            BANDCAMP
          </Link>
          <Link 
            href="https://soundcloud.com/example" 
            target="_blank"
            className="bg-dark text-white py-3 px-6 text-center hover:bg-black transition-colors"
          >
            STREAM
          </Link>
        </div>

        {/* Videos Section */}
        <VideoSection />
      </motion.div>
    </main>
  );
}

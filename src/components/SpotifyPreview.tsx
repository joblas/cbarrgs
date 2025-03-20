"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, X } from "lucide-react";

interface SpotifyPreviewProps {
  artistId: string;
  showInitially?: boolean;
}

export default function SpotifyPreview({ 
  artistId = "4qRI7BqjuKH3ulYQrEYnLa", 
  showInitially = false 
}: SpotifyPreviewProps) {
  const [isVisible, setIsVisible] = useState(showInitially);
  const [mounted, setMounted] = useState(false);

  // Make sure component only renders on client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Toggle Button */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="fixed bottom-6 right-6 z-[100]"
      >
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="spotify-trigger"
          aria-label={isVisible ? "Close Spotify player" : "Open Spotify player"}
        >
          {isVisible ? (
            <X className="w-6 h-6" />
          ) : (
            <Music className="w-6 h-6" />
          )}
        </button>
      </motion.div>

      {/* Spotify Embed */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="spotify-player"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="spotify-container fixed bottom-20 right-6 z-[99] max-w-sm w-[330px] shadow-2xl rounded-lg overflow-hidden"
          >
            <div className="bg-black p-3 rounded-t-lg flex justify-between items-center border border-white/10 border-b-0">
              <span className="text-white text-sm font-medium flex items-center">
                <svg 
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24" 
                  fill="#1DB954" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                CBARRGS on Spotify
              </span>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Close Spotify player"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <iframe
              src={`https://open.spotify.com/embed/artist/${artistId}?utm_source=generator&theme=0`}
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="border border-white/10 border-t-0"
              style={{ borderRadius: "0 0 8px 8px" }}
            ></iframe>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

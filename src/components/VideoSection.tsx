"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface Video {
  id: string;
  youtubeId: string;
  title: string;
  description?: string;
  date?: string;
}

export default function VideoSection() {
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  const videos: Video[] = [
    {
      id: "1",
      youtubeId: "RYiWRG_CLq0",
      title: "CBARRGS - Fight",
      description: "OFFICIAL MUSIC VIDEO",
      date: "Nov 6, 2024"
    },
    {
      id: "2",
      youtubeId: "NkJYCwuA2Zo",
      title: "CBARRGS - Is It Her?",
      description: "Heal",
      date: "Dec 12,2023"
    },
    {
      id: "3",
      youtubeId: "lJllyb9Cw7E",
      title: "CBARRGS - Fall",
      description: "OFFICIAL MUSIC VIDEO",
      date: "May 16,2020"
    },
    {
      id: "4",
      youtubeId: "IQamxsBpzmw",
      title: "CBARRGS - Bit",
      description: "Beach show promotion video",
      date: "Aug 29,2022"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-16">
      <div className="flex flex-col space-y-16">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div
              className="aspect-video w-full relative cursor-pointer"
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              {hoveredVideo === video.id ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=1&controls=1&modestbranding=1&showinfo=0&rel=0`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              ) : (
                <div className="absolute inset-0 bg-black">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // If the first source fails, try a different thumbnail size
                      const target = e.target as HTMLImageElement;
                      if (target.src.includes('hqdefault')) {
                        target.src = `https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`;
                      } else if (target.src.includes('mqdefault')) {
                        target.src = `https://img.youtube.com/vi/${video.youtubeId}/sddefault.jpg`;
                      } else if (target.src.includes('sddefault')) {
                        target.src = `https://img.youtube.com/vi/${video.youtubeId}/default.jpg`;
                      }
                    }}
                  />
                </div>
              )}
            </div>

            <div className="pl-0 pt-2">
              {index > 0 && <div className="w-8 h-px bg-white/20 mb-3"></div>}
              <h3 className="text-md sm:text-lg tracking-wider font-light uppercase letter-spacing-wide">{video.title}</h3>
              <div className="flex text-xs text-white/60 mt-1 space-x-4">
                {video.description && <span className="uppercase letter-spacing-wide">{video.description}</span>}
                {video.date && <span>{video.date}</span>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
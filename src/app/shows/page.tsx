"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const showDates = [
  {
    date: "2025-04-15",
    venue: "The Echo",
    location: "Los Angeles, CA",
    ticketLink: "#",
  },
  {
    date: "2025-04-18",
    venue: "Great American Music Hall",
    location: "San Francisco, CA",
    ticketLink: "#",
  },
  {
    date: "2025-04-22",
    venue: "Mississippi Studios",
    location: "Portland, OR",
    ticketLink: "#",
  },
  {
    date: "2025-04-25",
    venue: "The Crocodile",
    location: "Seattle, WA",
    ticketLink: "#",
  },
];

export default function ShowsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navigation />
      
      <motion.section 
        className="container mx-auto px-4 pt-32 pb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">UPCOMING SHOWS</h1>
        
        <div className="max-w-3xl mx-auto">
          {showDates.map((show, index) => (
            <motion.div
              key={index}
              className="border-b border-white/10 py-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex-1">
                  <div className="text-xl md:text-2xl font-mono mb-1">
                    {new Date(show.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-1">{show.venue}</h3>
                  <p className="text-white/70">{show.location}</p>
                </div>
                <div>
                  <a 
                    href={show.ticketLink} 
                    className="inline-block bg-white text-black px-5 py-2 font-medium transition-transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TICKETS
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/70 mb-6">For booking inquiries, please contact:</p>
          <a 
            href="mailto:booking@cbarrgs.com" 
            className="text-xl hover:text-accent transition-colors"
          >
            booking@cbarrgs.com
          </a>
        </div>
      </motion.section>
      
      <Footer />
    </main>
  );
}

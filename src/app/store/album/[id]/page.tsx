"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { HoverLink } from "@/components/ui/hover-link";
import { ArrowLeft, Download, Music, ShoppingBag } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

// Album catalog data - in a real app this would come from a database or API
const albumCatalog = {
  "let-me-know-ep": {
    id: "let-me-know-ep",
    name: "Let Me Know - EP",
    price: "$8.99",
    vinylPrice: "$24.99",
    cdPrice: "$12.99",
    image: "/let-me-know-cover.jpg",
    releasedAt: "2023",
    description: "Let Me Know is the debut EP from CBARRGS, featuring the singles 'After Party' and 'Unrequited Love'.",
    tracks: [
      { id: "1", title: "Let Me Know", duration: "3:24", price: "$1.49" },
      { id: "2", title: "After Party (feat. urbanation)", duration: "4:12", price: "$1.49" },
      { id: "3", title: "Unrequited Love", duration: "3:55", price: "$1.49" },
      { id: "4", title: "Alone", duration: "3:10", price: "$1.49" },
      { id: "5", title: "Night Drive", duration: "4:27", price: "$1.49" }
    ]
  },
  "heal": {
    id: "heal",
    name: "Heal",
    price: "$9.99",
    vinylPrice: "$27.99",
    cdPrice: "$14.99",
    image: "/heal-cover.jpg",
    releasedAt: "2024", 
    description: "The latest release from CBARRGS, featuring 'Cadena' and 'Be With Me'.",
    tracks: [
      { id: "1", title: "Be With Me", duration: "3:42", price: "$1.49" },
      { id: "2", title: "Cadena", duration: "3:35", price: "$1.49" },
      { id: "3", title: "CURAR", duration: "4:15", price: "$1.49" },
      { id: "4", title: "Embers", duration: "3:18", price: "$1.49" },
      { id: "5", title: "Healing", duration: "5:22", price: "$1.49" },
      { id: "6", title: "Tomorrow", duration: "3:47", price: "$1.49" }
    ]
  }
};

export default function AlbumDetailPage({ params }: { params: { id: string } }) {
  const albumId = params.id;
  const album = albumCatalog[albumId as keyof typeof albumCatalog];
  
  if (!album) {
    return (
      <main className="flex min-h-screen flex-col">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl mb-4">Album not found</h1>
          <Button asChild>
            <HoverLink href="/store">Return to Store</HoverLink>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
        className="container mx-auto px-4 py-16"
      >
        <motion.div variants={fadeIn} className="mb-8">
          <Button 
            variant="link"
            className="p-0 h-auto mb-4"
            asChild
          >
            <HoverLink 
              href="/store"
              className="flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Store
            </HoverLink>
          </Button>
          
          <h1 className="section-title">{album.name}</h1>
          <p className="text-gray-400">Released: {album.releasedAt}</p>
        </motion.div>
        
        <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="aspect-square relative overflow-hidden rounded-md shadow-lg mb-6">
              <img
                src={album.image}
                alt={album.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-medium mb-2">Purchase Options</h3>
              
              <div className="bg-gray-900/30 p-4 rounded-md hover:bg-gray-900/50 transition-colors">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Music className="w-4 h-4 mr-2 text-green-500" />
                    <span>Digital Download (MP3)</span>
                  </div>
                  <span className="font-medium text-green-500">{album.price}</span>
                </div>
                <Button 
                  variant="spotify"
                  className="w-full mt-3 flex items-center justify-center"
                  asChild
                >
                  <HoverLink 
                    href={`/store/album/${album.id}/digital`}
                    className="text-white"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    BUY DIGITAL
                  </HoverLink>
                </Button>
              </div>
              
              <div className="bg-gray-900/30 p-4 rounded-md hover:bg-gray-900/50 transition-colors">
                <div className="flex justify-between items-center">
                  <span>Vinyl 1×LP</span>
                  <span className="font-medium">{album.vinylPrice}</span>
                </div>
                <p className="text-sm text-gray-400 my-2">Black vinyl with full artwork</p>
                <Button 
                  variant="dark"
                  className="w-full mt-1 flex items-center justify-center"
                  asChild
                >
                  <HoverLink 
                    href={`/store/album/${album.id}/vinyl`}
                    className="text-white"
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    BUY VINYL
                  </HoverLink>
                </Button>
              </div>
              
              <div className="bg-gray-900/30 p-4 rounded-md hover:bg-gray-900/50 transition-colors">
                <div className="flex justify-between items-center">
                  <span>CD</span>
                  <span className="font-medium">{album.cdPrice}</span>
                </div>
                <p className="text-sm text-gray-400 my-2">Digipak with full artwork</p>
                <Button 
                  variant="dark"
                  className="w-full mt-1 flex items-center justify-center"
                  asChild
                >
                  <HoverLink 
                    href={`/store/album/${album.id}/cd`}
                    className="text-white"
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    BUY CD
                  </HoverLink>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="bg-gray-900/20 p-6 rounded-lg">
              <h2 className="text-xl font-medium mb-6 pb-2 border-b border-gray-800">Album Description</h2>
              <p className="mb-6 text-gray-300">{album.description}</p>
              
              <h2 className="text-xl font-medium mb-4 pb-2 border-b border-gray-800">Tracklist</h2>
              <div className="space-y-1">
                {album.tracks.map((track) => (
                  <div 
                    key={track.id}
                    className="flex justify-between items-center p-3 hover:bg-gray-800/30 rounded-md transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="mr-3 text-gray-500">{track.id}.</span>
                      <span>{track.title}</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-gray-400">{track.duration}</span>
                      <div className="flex items-center">
                        <span className="font-medium text-green-500 mr-3">{track.price}</span>
                        <Button 
                          variant="outline"
                          size="sm"
                          className="flex items-center text-sm"
                          asChild
                        >
                          <HoverLink 
                            href={`/store/album/${album.id}/track/${track.id}`}
                          >
                            Buy Track
                          </HoverLink>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}

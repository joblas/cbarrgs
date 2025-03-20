"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { HoverLink } from "@/components/ui/hover-link";
import { ArrowLeft, Download, Music, ShoppingBag } from "lucide-react";
import React, { useState } from "react";

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
    highResPrice: "$10.99",
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
    highResPrice: "$11.99",
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

export default function DigitalProductPage({ params }: { params: { id: string } }) {
  const albumId = params.id;
  const album = albumCatalog[albumId as keyof typeof albumCatalog];
  const [formatSelected, setFormatSelected] = useState<string>("mp3");
  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  
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

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

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
              href={`/store/album/${album.id}`}
              className="flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Album
            </HoverLink>
          </Button>
          
          <h1 className="section-title">{album.name}</h1>
          <p className="text-gray-400">Digital Download</p>
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
          </div>
          
          <div className="md:col-span-2">
            <div className="bg-gray-900/20 p-6 rounded-lg">
              <h2 className="text-xl font-medium mb-6 pb-2 border-b border-gray-800">Digital Album</h2>
              <p className="mb-6 text-gray-300">{album.description}</p>
              
              <div className="mb-8">
                <h3 className="font-medium mb-3">Select Format:</h3>
                <div className="flex flex-col space-y-3">
                  <label className="flex items-center p-3 bg-gray-800/30 rounded-md cursor-pointer hover:bg-gray-800/50 transition-colors">
                    <input 
                      type="radio" 
                      name="format" 
                      value="mp3" 
                      checked={formatSelected === "mp3"} 
                      onChange={() => setFormatSelected("mp3")}
                      className="mr-3"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">MP3</span>
                        <span className="text-green-500">{album.price}</span>
                      </div>
                      <p className="text-sm text-gray-400">320 kbps, LAME-encoded</p>
                    </div>
                  </label>
                  
                  <label className="flex items-center p-3 bg-gray-800/30 rounded-md cursor-pointer hover:bg-gray-800/50 transition-colors">
                    <input 
                      type="radio" 
                      name="format" 
                      value="flac" 
                      checked={formatSelected === "flac"} 
                      onChange={() => setFormatSelected("flac")}
                      className="mr-3"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">FLAC / WAV</span>
                        <span className="text-green-500">{album.highResPrice}</span>
                      </div>
                      <p className="text-sm text-gray-400">24-bit Lossless</p>
                    </div>
                  </label>
                </div>
              </div>
              
              <h3 className="font-medium mb-3">Includes:</h3>
              <ul className="list-disc pl-5 mb-6 text-gray-300 space-y-1">
                <li>Unlimited streaming via the CBARRGS app</li>
                <li>DRM-free downloads in the format of your choice</li>
                <li>Immediate download of all {album.tracks.length} tracks</li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="spotify"
                  size="lg"
                  className="flex-1 flex items-center justify-center"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  {formatSelected === "mp3" ? `ADD TO CART - ${album.price}` : `ADD TO CART - ${album.highResPrice}`}
                </Button>
                
                <Button 
                  variant="dark"
                  size="lg"
                  className="flex-1 flex items-center justify-center"
                  asChild
                >
                  <HoverLink href="#" className="text-white">
                    GIFT ALBUM
                  </HoverLink>
                </Button>
              </div>
              
              {addedToCart && (
                <div className="mt-4 p-3 bg-green-900/30 border border-green-500 rounded-md text-green-500 flex items-center justify-between">
                  <span>Album added to cart!</span>
                  <Button 
                    variant="link" 
                    size="sm"
                    className="text-green-500 p-0 h-auto"
                    asChild
                  >
                    <HoverLink href="/cart">View Cart</HoverLink>
                  </Button>
                </div>
              )}
            </div>
            
            <div className="mt-8 bg-gray-900/20 p-6 rounded-lg">
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
                    <span className="text-gray-400">{track.duration}</span>
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

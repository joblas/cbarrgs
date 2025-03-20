"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { HoverLink } from "@/components/ui/hover-link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Music, ShoppingBag } from "lucide-react";
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

export default function StorePage() {
  const albums = [
    {
      id: "let-me-know-ep",
      name: "Let Me Know - EP",
      price: "$8.99",
      vinylPrice: "$24.99",
      cdPrice: "$12.99",
      image: "/let-me-know-cover.jpg",
      releasedAt: "2023",
      description: "Let Me Know is the debut EP from CBARRGS, featuring the singles 'After Party' and 'Unrequited Love'."
    },
    {
      id: "heal",
      name: "Heal",
      price: "$9.99",
      vinylPrice: "$27.99",
      cdPrice: "$14.99",
      image: "/heal-cover.jpg",
      releasedAt: "2024",
      description: "The latest release from CBARRGS, featuring 'Cadena' and 'Be With Me'."
    }
  ];

  const merch = [
    {
      id: "tshirt-black",
      name: "CBARRGS Logo T-Shirt - Black",
      price: "$29.99",
      image: "/cbarrgs-front-black-tee.jpeg",
      description: "100% organic cotton black t-shirt with CBARRGS logo."
    },
    {
      id: "tshirt-white",
      name: "CBARRGS Logo T-Shirt - White",
      price: "$29.99",
      image: "/cbarrgs-white-logo.jpeg",
      description: "100% organic cotton white t-shirt with CBARRGS logo."
    },
    {
      id: "poster",
      name: "Tour Poster",
      price: "$15.99",
      image: "/cbarrgs-black-logo.jpeg",
      description: "18\" x 24\" premium matte poster featuring tour artwork."
    },
    {
      id: "totebag",
      name: "Canvas Tote Bag",
      price: "$19.99",
      image: "/cbarrgs-dog.png",
      description: "Durable canvas tote bag with CBARRGS logo."
    }
  ];

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
        <motion.h1
          className="section-title mb-8"
          variants={fadeIn}
        >
          CBARRGS STORE
        </motion.h1>

        <motion.div variants={fadeIn} className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-800 pb-2">MUSIC</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {albums.map((album) => (
              <motion.div
                key={album.id}
                className="flex flex-col md:flex-row gap-6 bg-gray-900/30 rounded-lg p-6 hover:bg-gray-900/50 transition-colors"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="w-full md:w-1/3 aspect-square relative overflow-hidden rounded-md">
                  <img
                    src={album.image}
                    alt={album.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-medium mb-2">{album.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{album.releasedAt}</p>
                  <p className="mb-4 text-gray-300">{album.description}</p>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-800">
                      <span className="flex items-center">
                        <Music className="w-4 h-4 mr-2 text-green-500" />
                        Digital Download
                      </span>
                      <div className="flex items-center">
                        <span className="font-medium text-green-500 mr-3">{album.price}</span>
                        <Button
                          variant="spotify"
                          size="sm"
                          className="flex items-center gap-1"
                          asChild
                        >
                          <HoverLink
                            href={`/store/album/${album.id}/digital`}
                            className="text-white"
                          >
                            <Download className="w-3 h-3 mr-1" />
                            BUY
                          </HoverLink>
                        </Button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center py-2 border-b border-gray-800">
                      <span>Vinyl 1×LP</span>
                      <div className="flex items-center">
                        <span className="font-medium mr-3">{album.vinylPrice}</span>
                        <Button
                          variant="dark"
                          size="sm"
                          className="flex items-center gap-1"
                          asChild
                        >
                          <HoverLink
                            href={`/store/album/${album.id}/vinyl`}
                            className="text-white"
                          >
                            <ShoppingBag className="w-3 h-3 mr-1" />
                            BUY
                          </HoverLink>
                        </Button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center py-2 border-b border-gray-800">
                      <span>CD</span>
                      <div className="flex items-center">
                        <span className="font-medium mr-3">{album.cdPrice}</span>
                        <Button
                          variant="dark"
                          size="sm"
                          className="flex items-center gap-1"
                          asChild
                        >
                          <HoverLink
                            href={`/store/album/${album.id}/cd`}
                            className="text-white"
                          >
                            <ShoppingBag className="w-3 h-3 mr-1" />
                            BUY
                          </HoverLink>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="link"
                    className="mt-4 text-green-500 p-0 h-auto"
                    asChild
                  >
                    <HoverLink
                      href={`/store/album/${album.id}`}
                      className="flex items-center"
                    >
                      View Details
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </HoverLink>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeIn}>
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-800 pb-2">MERCH</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {merch.map((item) => (
              <motion.div
                key={item.id}
                className="card group bg-gray-900/30 rounded-lg overflow-hidden hover:bg-gray-900/50 transition-colors"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-medium mb-1 line-clamp-1">{item.name}</h3>
                  <p className="mb-4 text-green-500 font-medium">{item.price}</p>

                  <Button
                    variant="dark"
                    className="w-full flex items-center justify-center gap-2"
                    asChild
                  >
                    <HoverLink
                      href={`/store/merch/${item.id}`}
                      className="text-white"
                    >
                      <ShoppingBag className="w-4 h-4 mr-1" />
                      BUY NOW
                    </HoverLink>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}

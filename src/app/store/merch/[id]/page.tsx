"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { HoverLink } from "@/components/ui/hover-link";
import { ArrowLeft, Minus, Plus, ShoppingBag } from "lucide-react";
import React, { useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

// Merch catalog data - in a real app this would come from a database or API
const merchCatalog = {
  "tshirt-black": {
    id: "tshirt-black",
    name: "CBARRGS Logo T-Shirt - Black",
    price: "$29.99",
    image: "/tshirt-black.jpg",
    description: "100% organic cotton black t-shirt with CBARRGS logo.",
    details: [
      "100% organic cotton",
      "Screen printed graphics",
      "Unisex fit",
      "Machine washable, cold water. Tumble dry low.",
      "Designed in Los Angeles, ethically produced"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  "tshirt-white": {
    id: "tshirt-white",
    name: "CBARRGS Logo T-Shirt - White",
    price: "$29.99",
    image: "/tshirt-white.jpg",
    description: "100% organic cotton white t-shirt with CBARRGS logo.",
    details: [
      "100% organic cotton",
      "Screen printed graphics",
      "Unisex fit",
      "Machine washable, cold water. Tumble dry low.",
      "Designed in Los Angeles, ethically produced"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  "poster": {
    id: "poster",
    name: "Tour Poster",
    price: "$15.99",
    image: "/poster.jpg",
    description: "18\" x 24\" premium matte poster featuring tour artwork.",
    details: [
      "18\" x 24\" (45.7cm x 61cm)",
      "Premium matte finish",
      "Acid-free, archival quality paper",
      "Ships in protective tube",
      "Limited edition"
    ],
    sizes: []
  },
  "totebag": {
    id: "totebag",
    name: "Canvas Tote Bag",
    price: "$19.99",
    image: "/totebag.jpg",
    description: "Durable canvas tote bag with CBARRGS logo.",
    details: [
      "100% heavy-duty canvas",
      "Screen printed graphics",
      "15\" x 16\" (38.1cm x 40.6cm)",
      "Interior pocket",
      "Reinforced straps"
    ],
    sizes: []
  }
};

export default function MerchDetailPage({ params }: { params: { id: string } }) {
  const merchId = params.id;
  const item = merchCatalog[merchId as keyof typeof merchCatalog];
  const [selectedSize, setSelectedSize] = useState<string>(item?.sizes?.length ? item.sizes[1] : "");
  const [quantity, setQuantity] = useState<number>(1);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  
  if (!item) {
    return (
      <main className="flex min-h-screen flex-col">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl mb-4">Product not found</h1>
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

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
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
              href="/store"
              className="flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Store
            </HoverLink>
          </Button>
        </motion.div>
        
        <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="aspect-square relative overflow-hidden rounded-md shadow-lg mb-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div>
            <div className="bg-gray-900/20 p-6 rounded-lg">
              <h1 className="text-2xl font-bold mb-2">{item.name}</h1>
              <p className="text-2xl font-medium text-green-500 mb-4">{item.price}</p>
              
              <p className="mb-6 text-gray-300">{item.description}</p>
              
              {item.sizes.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border ${
                          selectedSize === size 
                            ? 'border-green-500 bg-green-500/20 text-white' 
                            : 'border-gray-700 bg-gray-800/30 text-gray-300'
                        } rounded-md hover:bg-gray-800/50 transition-colors`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Quantity</h3>
                <div className="flex items-center">
                  <button
                    onClick={decrementQuantity}
                    className="w-10 h-10 flex items-center justify-center border border-gray-700 bg-gray-800/30 text-gray-300 rounded-l-md hover:bg-gray-800/50 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <div className="w-16 h-10 flex items-center justify-center border-t border-b border-gray-700 bg-gray-800/10 text-white">
                    {quantity}
                  </div>
                  <button
                    onClick={incrementQuantity}
                    className="w-10 h-10 flex items-center justify-center border border-gray-700 bg-gray-800/30 text-gray-300 rounded-r-md hover:bg-gray-800/50 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col space-y-4">
                <Button 
                  variant="spotify"
                  size="lg"
                  className="flex items-center justify-center"
                  onClick={handleAddToCart}
                  disabled={item.sizes.length > 0 && !selectedSize}
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  ADD TO CART
                </Button>
                
                {addedToCart && (
                  <div className="p-3 bg-green-900/30 border border-green-500 rounded-md text-green-500 flex items-center justify-between">
                    <span>Item added to cart!</span>
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
              
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-3">Product Details</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                  {item.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-800">
                <p className="text-sm text-gray-400">
                  All orders typically ship within 1-2 business days. International shipping available.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}

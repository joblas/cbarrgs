"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { HoverLink } from "@/components/ui/hover-link";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash } from "lucide-react";
import React, { useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

// Dummy cart data - in a real app would come from a state management solution
const initialCartItems = [
  {
    id: "1",
    name: "Let Me Know - EP (Digital)",
    variant: "MP3",
    price: "$8.99",
    quantity: 1,
    image: "/let-me-know-cover.jpg"
  },
  {
    id: "2",
    name: "CBARRGS Logo T-Shirt - Black",
    variant: "Size M",
    price: "$29.99",
    quantity: 1,
    image: "/tshirt-black.jpg"
  }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  
  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };
  
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  const subtotal = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 
    0
  ).toFixed(2);
  
  const shipping = 5.99;
  const total = (parseFloat(subtotal) + shipping).toFixed(2);

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
              Continue Shopping
            </HoverLink>
          </Button>
          
          <h1 className="section-title mb-8">YOUR CART</h1>
          
          {cartItems.length === 0 ? (
            <div className="bg-gray-900/20 p-8 rounded-lg text-center">
              <p className="text-xl mb-6">Your cart is empty</p>
              <Button 
                variant="spotify"
                asChild
              >
                <HoverLink 
                  href="/store"
                  className="flex items-center"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Browse Store
                </HoverLink>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-gray-900/20 rounded-lg overflow-hidden">
                  <div className="grid grid-cols-12 p-4 border-b border-gray-800 text-gray-400">
                    <div className="col-span-7">Item</div>
                    <div className="col-span-2 text-center">Quantity</div>
                    <div className="col-span-2 text-right">Price</div>
                    <div className="col-span-1"></div>
                  </div>
                  
                  {cartItems.map(item => (
                    <div key={item.id} className="grid grid-cols-12 p-4 border-b border-gray-800 items-center">
                      <div className="col-span-7 flex items-center gap-4">
                        <div className="w-16 h-16 overflow-hidden rounded">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-400">{item.variant}</p>
                        </div>
                      </div>
                      
                      <div className="col-span-2 flex justify-center">
                        <div className="flex items-center">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center border border-gray-700 bg-gray-800/30 text-gray-300 rounded-l-md hover:bg-gray-800/50 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <div className="w-10 h-8 flex items-center justify-center border-t border-b border-gray-700 bg-gray-800/10 text-white">
                            {item.quantity}
                          </div>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center border border-gray-700 bg-gray-800/30 text-gray-300 rounded-r-md hover:bg-gray-800/50 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="col-span-2 text-right font-medium">
                        {`$${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}`}
                      </div>
                      
                      <div className="col-span-1 flex justify-end">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-gray-900/20 p-6 rounded-lg">
                  <h2 className="text-xl font-medium mb-4 pb-2 border-b border-gray-800">Order Summary</h2>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-3 border-t border-gray-800 text-lg font-medium">
                    <span>Total</span>
                    <span>${total}</span>
                  </div>
                  
                  <Button
                    variant="spotify"
                    className="w-full mt-6"
                  >
                    CHECKOUT
                  </Button>
                  
                  <p className="text-sm text-gray-400 mt-4 text-center">
                    Secure checkout powered by Stripe
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </main>
  );
}

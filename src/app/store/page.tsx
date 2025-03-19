"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function StorePage() {
  const products = [
    {
      id: "1",
      name: "Album - Vinyl",
      price: "$25.00",
      image: "/album-cover.svg"
    },
    {
      id: "2",
      name: "Album - CD",
      price: "$15.00",
      image: "/album-cover.svg"
    },
    {
      id: "3",
      name: "T-Shirt",
      price: "$30.00",
      image: "/album-cover.svg"
    },
    {
      id: "4",
      name: "Poster",
      price: "$10.00",
      image: "/album-cover.svg"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center">CBARRGS STORE</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="border border-dark p-4">
              <div className="aspect-square relative mb-4 bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="mb-4">{product.price}</p>
              
              <Link 
                href={`/store/${product.id}`}
                className="block w-full bg-dark text-white py-2 px-4 text-center hover:bg-black transition-colors"
              >
                BUY NOW
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

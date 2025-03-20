"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorVariant = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for interactive elements
      const isInteractive = 
        target.tagName.toLowerCase() === 'a' || 
        !!target.closest('a') || 
        target.tagName.toLowerCase() === 'button' || 
        !!target.closest('button') || 
        target.getAttribute('role') === 'button' || 
        target.classList.contains('button') ||
        target.classList.contains('video-thumbnail') ||
        !!target.closest('.video-thumbnail');
      
      setCursorVariant(isInteractive ? "pointer" : "default");
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Add event listeners
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mousemove', updateCursorVariant);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Clean up
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mousemove', updateCursorVariant);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Cursor variants
  const variants = {
    default: {
      x: position.x - 3,
      y: position.y - 3,
      height: 22,
      width: 22,
      backgroundColor: "transparent",
      transition: {
        type: "spring",
        mass: 0.3,
        stiffness: 800,
        damping: 30
      }
    },
    pointer: {
      x: position.x - 8,
      y: position.y - 8,
      height: 38,
      width: 38,
      backgroundColor: "transparent",
      rotate: 15,
      transition: {
        type: "spring",
        mass: 0.5,
        stiffness: 400,
        damping: 28
      }
    }
  };

  // Click animation
  const clickAnimation = isClicking ? {
    scale: 0.85,
    transition: { duration: 0.1 }
  } : { 
    scale: 1,
    transition: { duration: 0.1 } 
  };

  return (
    <>
      {/* Default cursor that's always visible */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full flex items-center justify-center"
        variants={variants}
        animate={cursorVariant}
        style={{ mixBlendMode: "difference" }}
      >
        <motion.div
          className="guitar-cursor relative"
          style={{
            backgroundImage: `url('/guitar-cursor.svg')`,
            backgroundSize: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100%',
            width: '100%',
          }}
          animate={clickAnimation}
        />
      </motion.div>

      {/* System cursor hider */}
      <style jsx global>{`
        body {
          cursor: none;
        }
        
        @media (max-width: 768px) {
          body {
            cursor: auto;
          }
          .guitar-cursor {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}

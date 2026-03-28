import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6983e88ebd9a77b9810df7db/a8b597fb9_fotor-20250201195419.png";

const PARTICLES = [
  { left: 10, top: 20, duration: 3.5, delay: 0 },
  { left: 25, top: 60, duration: 4, delay: 0.3 },
  { left: 40, top: 10, duration: 3, delay: 0.8 },
  { left: 55, top: 75, duration: 4.5, delay: 0.2 },
  { left: 70, top: 30, duration: 3.8, delay: 1 },
  { left: 85, top: 55, duration: 3.2, delay: 0.5 },
  { left: 15, top: 85, duration: 4.2, delay: 0.7 },
  { left: 90, top: 15, duration: 3.6, delay: 1.2 },
];

export default function SplashScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-gradient-to-br from-[#2D1F1C] via-[#3D2C29] to-[#2D1F1C] flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#C77169]/30 rounded-full"
            style={{ left: `${p.left}%`, top: `${p.top}%` }}
            animate={{ y: [0, -80, 0], opacity: [0, 0.8, 0], scale: [0, 1.5, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Logo Container */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1], delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-[#C77169] rounded-full blur-3xl"
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Logo */}
          <motion.div
            className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl"
            animate={{
              boxShadow: [
                "0 0 20px rgba(199, 113, 105, 0.3)",
                "0 0 40px rgba(199, 113, 105, 0.6)",
                "0 0 20px rgba(199, 113, 105, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={LOGO_URL}
              alt="CaprichaPam"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Brand name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 text-center w-full"
        >
          <h1 className="text-3xl font-light text-white tracking-wide mb-2">
            CaprichaPam
          </h1>
          <motion.div
            className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-[#C77169] to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          />
          <p className="text-[#E9B8B0] text-sm font-light mt-3">
            Papelaria Personalizada
          </p>
        </motion.div>

        {/* Loading indicator */}
        <motion.div
          className="mt-12 flex justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-[#C77169] rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
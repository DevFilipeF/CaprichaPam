import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LOGO_SRC = '/icon/fotor-20250201195419.png';

function useLightSplash() {
  const [light, setLight] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(max-width: 767px), (prefers-reduced-motion: reduce)').matches
  );
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px), (prefers-reduced-motion: reduce)');
    const update = () => setLight(mq.matches);
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return light;
}

export default function SplashScreen({ onComplete }) {
  const light = useLightSplash();

  useEffect(() => {
    const ms = light ? 1600 : 2200;
    const timer = setTimeout(onComplete, ms);
    return () => clearTimeout(timer);
  }, [onComplete, light]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#2D1F1C] via-[#3D2C29] to-[#2D1F1C]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: light ? 0.35 : 0.5, ease: 'easeOut' }}
    >
      <div className="relative z-10 flex flex-col items-center px-6">
        <div
          className={`relative flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center rounded-full border-4 border-white/10 shadow-xl overflow-hidden splash-logo-in ${light ? '' : 'splash-logo-glow'}`}
        >
          <img
            src={LOGO_SRC}
            alt="CaprichaPam"
            width={128}
            height={128}
            decoding="async"
            fetchPriority="high"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="mt-8 text-center splash-fade-up">
          <h1 className="text-3xl font-light tracking-wide text-white mb-2">
            CaprichaPam
          </h1>
          <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[#C77169] to-transparent" />
          <p className="mt-3 text-sm font-light text-[#E9B8B0]">Papelaria Personalizada</p>
        </div>

        <div className="mt-10 flex justify-center gap-2 splash-dots" aria-hidden>
          <span className="splash-dot" />
          <span className="splash-dot splash-dot-delay-1" />
          <span className="splash-dot splash-dot-delay-2" />
        </div>
      </div>
    </motion.div>
  );
}

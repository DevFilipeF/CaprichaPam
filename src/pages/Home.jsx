import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Gift, Star, ShoppingBag, Palette, Scissors, Package, ArrowRight, ChevronDown, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SplashScreen from '../components/SplashScreen';
import { createPageUrl } from '@/utils';

const SHOPEE_URL = "https://shopee.com.br/caprichapam";
const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6983e88ebd9a77b9810df7db/a8b597fb9_fotor-20250201195419.png";
const PAMELA_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6983e9ae10a7bb6a76ce0afc/6e051fcf5_FPredimension.jpg";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingParticles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 6,
    size: 4 + Math.random() * 8,
  }));

  const products = [
    { 
      name: "Caixinhas Personalizadas", 
      description: "Perfeitas para festas e eventos especiais",
      icon: Gift, 
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6983e9ae10a7bb6a76ce0afc/90f02e362_caixa1.png" 
    },
    { 
      name: "Cartões de Agradecimento", 
      description: "Demonstre sua gratidão com estilo",
      icon: Heart, 
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6983e9ae10a7bb6a76ce0afc/21c81f11d_agradar1.png" 
    },
    { 
      name: "Cachepots", 
      description: "Decoração charmosa para suas lembrancinhas",
      icon: Package, 
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6983e9ae10a7bb6a76ce0afc/42fc75e0f_cachepot1.png" 
    },
    { 
      name: "Sacolinha", 
      description: "Sacolinhas personalizadas para para aniversario",
      icon: ShoppingBag, 
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6983e9ae10a7bb6a76ce0afc/ae4d2eac5_Capturadetela2026-02-042300261.png" 
    },
  ];

  const features = [
    { icon: Palette, title: "Design Exclusivo", desc: "Criações únicas e personalizadas para você" },
    { icon: Scissors, title: "Alta Qualidade", desc: "Materiais premium para seus projetos" },
    { icon: Star, title: "Feito com Amor", desc: "Cada detalhe pensado com carinho" },
    { icon: ShoppingBag, title: "Envio Rápido", desc: "Entrega segura para todo Brasil" },
  ];

  const testimonials = [
    {
      name: "Mariana Silva",
      text: "Os produtos da CaprichaPam são simplesmente incríveis! A qualidade e o capricho nos detalhes fazem toda a diferença. Recomendo muito!",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "Juliana Costa",
      text: "Comprei os cartões de agradecimento e foi um sucesso! Todo mundo adorou. A Pamela é super atenciosa e os produtos são lindos.",
      rating: 5,
      avatar: "JC"
    },
    {
      name: "Roberta Lima",
      text: "Melhor papelaria personalizada que já comprei! Entrega rápida e produtos de excelente qualidade. Super indico!",
      rating: 5,
      avatar: "RL"
    }
  ];

  const processSteps = [
    { step: "1", title: "Escolha seu produto", desc: "Navegue pela nossa loja e encontre o item perfeito" },
    { step: "2", title: "Faça seu pedido", desc: "Compra segura e rápida através da Shopee" },
    { step: "3", title: "Receba em casa", desc: "Entrega rápida e cuidadosa para todo Brasil" },
    { step: "4", title: "Aproveite!", desc: "Torne seus momentos ainda mais especiais" }
  ];

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>
      
      <div className="min-h-screen bg-white overflow-x-hidden relative w-full max-w-[100vw]">
      {/* Fixed Header/Navbar */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-[#D4847C]/10 shadow-[0_4px_24px_rgba(45,31,28,0.06)]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-4 cursor-pointer group"
            whileHover={{ x: 2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              className="relative"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute inset-0 bg-[#C77169]/20 rounded-full blur-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <img
                src={LOGO_URL}
                alt="CaprichaPam"
                className="w-12 h-12 rounded-full border-2 border-white shadow-lg relative z-10"
              />
            </motion.div>
            <div>
              <h1 className="text-lg font-semibold text-[#2D1F1C] tracking-tight group-hover:text-[#C77169] transition-colors">
                CaprichaPam
              </h1>
              <p className="text-xs text-[#8B7B77] font-light">Papelaria Personalizada</p>
            </div>
          </motion.div>
          
          <motion.a
            href={SHOPEE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-2 bg-gradient-to-r from-[#2D1F1C] to-[#3D2C29] text-white px-8 py-3.5 rounded-full font-medium overflow-hidden shadow-lg hover:shadow-xl transition-all text-sm group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#C77169] to-[#D4847C]"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <ShoppingBag className="w-4 h-4 relative z-10 group-hover:scale-110 transition-transform" />
            <span className="relative z-10">Visitar Loja</span>
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative z-10"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.a>
        </div>
      </motion.header>
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#F5E8E6]/30 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#E9DDD9]/30 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-[#C77169]/10 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#C77169]/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-8 py-32 pt-32">
        <motion.div style={{ opacity, scale }} className="relative z-10 text-center max-w-4xl mx-auto">

          {/* Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.8, bounce: 0.3, delay: 0.2 }}
            className="relative mx-auto mb-10"
          >
            <motion.div 
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full relative mx-auto"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C77169]/20 to-transparent"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <img
                src={LOGO_URL}
                alt="CaprichaPam Logo"
                className="w-full h-full object-contain rounded-full relative z-10"
              />
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#2D1F1C] mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.span
              className="inline-block"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Personalizando momentos
            </motion.span>
            <br/>
            <motion.span 
              className="font-serif italic text-[#C77169] inline-block"
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              para lembrar histórias
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-[#6B5B57] mb-12 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Papelaria personalizada que transforma seus momentos especiais em memórias inesquecíveis
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-16"
          >
            <motion.a
              href={SHOPEE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#2D1F1C] text-white px-10 py-4 rounded-full text-base font-medium hover:bg-[#3D2C29] transition-all shadow-[0_10px_40px_rgba(45,31,28,0.15)]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explorar Produtos</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-[#6B5B57]"
          >
            <div className="flex items-center gap-2.5">
              <Star className="w-5 h-5 text-[#C77169]" fill="currentColor" />
              <span className="text-sm font-light">4.9 estrelas</span>
            </div>
            <div className="w-px h-4 bg-[#D4847C]/20" />
            <div className="flex items-center gap-2.5">
              <Heart className="w-5 h-5 text-[#C77169]" fill="currentColor" />
              <span className="text-sm font-light">500+ clientes</span>
            </div>
            <div className="w-px h-4 bg-[#D4847C]/20" />
            <div className="flex items-center gap-2.5">
              <Package className="w-5 h-5 text-[#C77169]" />
              <span className="text-sm font-light">Entrega nacional</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-[#C77169]/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section - Pamela */}
      <section className="py-32 px-6 lg:px-8 bg-[#FAF8F7]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative">
                {/* Animated background elements */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-br from-[#C77169]/10 to-[#E9B8B0]/10 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.6, 0.4]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Sparkle effects */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-[#C77169] rounded-full"
                    style={{
                      top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 30}%`,
                      left: `${50 + Math.cos(i * 60 * Math.PI / 180) * 40}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
                
                <motion.img
                  src={PAMELA_URL}
                  alt="Pamela - Fundadora CaprichaPam"
                  className="rounded-full w-full max-w-md mx-auto md:mx-0 shadow-[0_20px_60px_rgba(45,31,28,0.15)] relative z-10 border-4 border-white"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                
                {/* Animated ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#C77169]/20"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-block px-4 py-2 bg-[#F5E8E6] text-[#C77169] rounded-full text-sm font-medium mb-8">
                Fundadora & Artista
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#2D1F1C] mb-6 tracking-tight">
                Conheça a <span className="font-serif italic text-[#C77169]">Pamela</span>
              </h2>
              
              <p className="text-[#6B5B57] text-lg mb-6 leading-relaxed font-light">
                Olá! Sou Pamela, a mente criativa por trás da CaprichaPam. Minha paixão por papelaria nasceu do desejo de tornar momentos simples em memórias extraordinárias.
              </p>
              
              <p className="text-[#8B7B77] text-base mb-8 leading-relaxed font-light">
                Cada peça é cuidadosamente desenhada e produzida artesanalmente, com atenção aos mínimos detalhes. Acredito que a qualidade e o amor que colocamos em cada criação fazem toda a diferença.
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#D4847C]/10">
                <div className="text-center">
                  <div className="text-4xl font-light text-[#C77169] mb-2">500+</div>
                  <div className="text-sm text-[#8B7B77] font-light">Clientes</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-light text-[#C77169] mb-2">1000+</div>
                  <div className="text-sm text-[#8B7B77] font-light">Produtos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-light text-[#C77169] mb-2">4.9★</div>
                  <div className="text-sm text-[#8B7B77] font-light">Avaliação</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#2D1F1C] mb-4 tracking-tight">
              Por que escolher a <span className="font-serif italic text-[#C77169]">CaprichaPam</span>?
            </h2>
            <p className="text-[#6B5B57] max-w-2xl mx-auto text-lg font-light">
              Qualidade artesanal e dedicação em cada detalhe
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className="text-center"
              >
                <motion.div 
                  className="w-16 h-16 bg-[#F5E8E6] rounded-2xl flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <feature.icon className="w-8 h-8 text-[#C77169]" />
                </motion.div>
                <h3 className="text-[#2D1F1C] font-medium text-lg mb-3">{feature.title}</h3>
                <p className="text-[#8B7B77] font-light text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-32 px-6 lg:px-8 bg-[#FAF8F7]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#2D1F1C] mb-4 tracking-tight">
              Nossos <span className="font-serif italic text-[#C77169]">Produtos</span>
            </h2>
            <p className="text-[#6B5B57] max-w-xl mx-auto text-lg font-light">
              Designs exclusivos criados artesanalmente
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(45,31,28,0.08)] hover:shadow-[0_25px_70px_rgba(45,31,28,0.15)] transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-[#FAF8F7] to-white p-8">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                    whileHover={{ scale: 1.08, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </div>
                
                <div className="p-6 border-t border-[#D4847C]/5">
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <product.icon className="w-5 h-5 text-[#C77169]" />
                    </motion.div>
                    <h3 className="text-lg font-medium text-[#2D1F1C]">{product.name}</h3>
                  </div>
                  
                  <p className="text-[#8B7B77] mb-6 text-sm font-light leading-relaxed">{product.description}</p>
                  
                  <motion.a
                    href={SHOPEE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#2D1F1C] text-white py-3 rounded-full font-medium hover:bg-[#3D2C29] transition-all text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Ver na Loja</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personalizer CTA Banner */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-[#fdf6f2] to-[#f5e8e3]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 text-[#C77169] rounded-full text-sm font-medium border border-[#e8d0c8]">
              <Sparkles className="w-4 h-4" />
              Novidade
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-[#3D1F1A] tracking-tight">
              Visualize seu <span className="font-serif italic text-[#C77169]">Cartão Chá Revelação</span>
            </h2>
            <p className="text-[#6B5B57] text-lg font-light max-w-xl">
              Digite o nome e veja a personalização acontecer em tempo real antes de encomendar!
            </p>
            <motion.a
              href={createPageUrl('Personalizador')}
              className="inline-flex items-center gap-3 text-white px-10 py-4 rounded-full font-medium text-base shadow-lg"
              style={{ background: 'linear-gradient(135deg, #8B4F40, #C77169)' }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Sparkles className="w-5 h-5" />
              <span>Personalizar Agora</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Process/How it Works Section */}
      <section className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#2D1F1C] mb-4 tracking-tight">
              Como <span className="font-serif italic text-[#C77169]">funciona</span>
            </h2>
            <p className="text-[#6B5B57] max-w-xl mx-auto text-lg font-light">
              Processo simples e transparente
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-12 relative">
            {/* Connecting Line */}
            <motion.div 
              className="hidden md:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4847C]/20 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative text-center"
              >
                <motion.div 
                  className="w-20 h-20 mx-auto mb-6 bg-[#F5E8E6] rounded-full flex items-center justify-center text-[#C77169] text-xl font-light relative z-10"
                  whileHover={{ 
                    scale: 1.15, 
                    backgroundColor: "#C77169",
                    color: "#fff",
                    rotate: 360
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.step}
                </motion.div>
                <h3 className="text-lg font-medium text-[#2D1F1C] mb-3">{item.title}</h3>
                <p className="text-[#8B7B77] text-sm font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 lg:px-8 bg-[#FAF8F7]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#2D1F1C] mb-4 tracking-tight">
              O que dizem <span className="font-serif italic text-[#C77169]">nossos clientes</span>
            </h2>
            <p className="text-[#6B5B57] max-w-xl mx-auto text-lg font-light">
              Histórias reais de quem confiou na CaprichaPam
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 60px rgba(45,31,28,0.1)"
                }}
                className="bg-white p-8 rounded-2xl border border-[#D4847C]/5 shadow-[0_4px_20px_rgba(45,31,28,0.04)] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="w-12 h-12 bg-[#F5E8E6] rounded-full flex items-center justify-center text-[#C77169] font-medium"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <h4 className="font-medium text-[#2D1F1C]">{testimonial.name}</h4>
                    <div className="flex gap-1">
                      {Array(testimonial.rating).fill(0).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.15 + i * 0.1 }}
                        >
                          <Star className="w-4 h-4 text-[#C77169]" fill="currentColor" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[#6B5B57] leading-relaxed font-light text-sm">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Quote Section */}
      <section className="py-32 px-6 lg:px-8 bg-[#2D1F1C] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl lg:text-4xl text-white/95 font-light mb-8 leading-relaxed tracking-tight">
              "Cada detalhe importa quando se trata de<br/>
              <span className="font-serif italic text-[#E9B8B0]">transformar momentos em memórias</span>"
            </p>
            <p className="text-white/60 text-base font-light">— Pamela, Fundadora</p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="w-28 h-28 mx-auto mb-12"
              animate={{ 
                rotate: [0, 5, -5, 0],
                y: [0, -5, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <img
                src={LOGO_URL}
                alt="CaprichaPam"
                className="w-full h-full rounded-full"
              />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#2D1F1C] mb-6 tracking-tight">
              Pronta para <span className="font-serif italic text-[#C77169]">criar memórias</span>?
            </h2>
            <p className="text-[#6B5B57] mb-12 text-lg max-w-2xl mx-auto leading-relaxed font-light">
              Visite nossa loja e descubra produtos personalizados que vão transformar seus momentos especiais
            </p>
            
            <a
              href={SHOPEE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#2D1F1C] text-white px-10 py-4 rounded-full text-base font-medium hover:bg-[#3D2C29] transition-all"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Visitar Loja</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 bg-[#2D1F1C] border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60 text-sm font-light mb-2">
            © 2025 CaprichaPam — Papelaria Personalizada
          </p>
          <p className="text-white/40 text-xs font-light">
            Feito com dedicação e amor pelos detalhes
          </p>
        </div>
      </footer>
    </div>
    </>
  );
}
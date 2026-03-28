import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShoppingBag, ArrowRight, User, ArrowLeft } from 'lucide-react';
import { createPageUrl } from '@/utils';
import cardPreviewImage from './img/cards.png';

const SHOPEE_URL =
  "https://shopee.com.br/Centro-de-mesa-agradecimento-personalizado-ch%C3%A1-revela%C3%A7%C3%A3o-ursinhos-em-cores-neutras-bege-i.418995096.22092850923?extraParams=%7B%22display_model_id%22%3A219593397935%2C%22model_selection_logic%22%3A3%7D";

function CardPreview({ name }) {
  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&display=swap');`}</style>
      <div style={{
        width: '100%',
        maxWidth: '340px',
        margin: '0 auto',
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(139,80,65,0.18)',
      }}>
        {/* Foto real do cartão */}
        <img
          src={cardPreviewImage}
          alt="Cartão Chá Revelação"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />

        {/* Nome sobreposto — espaço branco entre "CHÁ REVELAÇÃO" e o texto principal */}
        <div style={{
          position: 'absolute',
          top: '22%',
          left: 0,
          right: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}>
          <AnimatePresence mode="wait">
            {name ? (
              <motion.p
                key={name}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: 'clamp(1.4rem, 6vw, 2rem)',
                  fontWeight: 700,
                  color: '#7a3d30',
                  lineHeight: 1.1,
                  textAlign: 'center',
                  textShadow: '0 1px 3px rgba(255,255,255,0.6)',
                }}
              >
                {name}
              </motion.p>
            ) : (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}
              >
                <div style={{
                  width: '100px', height: '1.5px',
                  background: 'repeating-linear-gradient(90deg, #a0665a 0px, #a0665a 6px, transparent 6px, transparent 12px)'
                }} />
                <span style={{ fontSize: '9px', color: '#a0665a', letterSpacing: '0.1em' }}>seu nome aqui</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default function Personalizador() {
  const [name, setName] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf6f2] via-[#faf0eb] to-[#f5e8e3]">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-4 flex items-center justify-between">
        <a
          href={createPageUrl('Home')}
          className="flex items-center gap-2 text-[#8B4F40] hover:text-[#C77169] transition-colors text-sm font-light"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </a>
        <div className="flex items-center gap-2 text-[#8B4F40]">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-light">Personalize seu cartão</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#3D1F1A] mb-4 tracking-tight">
            Cartão <span className="font-serif italic text-[#C77169]">Chá Revelação</span>
          </h1>
          <p className="text-[#6B5B57] text-lg font-light max-w-lg mx-auto">
            Digite o nome e veja a personalização acontecer em tempo real
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center order-1 lg:order-none"
          >
            <CardPreview name={name} />
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Name input */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-[#3D1F1A] mb-3">
                <User className="w-4 h-4 text-[#C77169]" />
                Nome ou casal
              </label>
              <input
                type="text"
                placeholder="Ex: Ana & João"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={22}
                className="w-full px-5 py-4 rounded-2xl text-[#2D1F1C] placeholder-[#C4B5B1] font-light text-lg focus:outline-none transition-all"
                style={{
                  border: '2px solid #e8d0c8',
                  background: 'rgba(255,255,255,0.8)',
                  boxShadow: name ? '0 0 0 4px rgba(199,113,105,0.1)' : 'none',
                  borderColor: name ? '#C77169' : '#e8d0c8',
                }}
              />
              <p className="text-xs text-[#a08880] font-light mt-2">
                O nome aparecerá em fonte cursiva entre o título e a mensagem do cartão.
              </p>
            </div>

            {/* Info box */}
            <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.6)', border: '1.5px solid #e8d0c8' }}>
              <p className="text-sm text-[#6B5B57] font-medium mb-2">📦 Como funciona</p>
              <ul className="space-y-1.5 text-sm text-[#8B7B77] font-light">
                <li>• Personalize digitando o nome ou casal</li>
                <li>• Visualize o resultado em tempo real</li>
                <li>• Faça seu pedido pela Shopee</li>
                <li>• A Pamela produz artesanalmente e envia para você</li>
              </ul>
            </div>

            {/* CTA */}
            <motion.a
              href={SHOPEE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full text-white py-4 rounded-full font-medium text-base shadow-lg"
              style={{ background: 'linear-gradient(135deg, #8B4F40, #C77169)' }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Encomendar na Shopee</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <p className="text-center text-xs text-[#a08880] font-light">
              * Prévia ilustrativa. O produto final é produzido artesanalmente pela Pamela.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
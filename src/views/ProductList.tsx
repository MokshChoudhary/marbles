
import React from 'react';
import { motion } from 'framer-motion';
import { MarbleCard } from '../components/MarbleCard';
import { useStore } from '../../store';
import { Sparkles, User } from 'lucide-react';

export const ProductList: React.FC = () => {
  const { marbles } = useStore();

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-20 text-center">
        <div className="flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-400 backdrop-blur-md"
          >
            <Sparkles size={16} />
            Limited Edition Collection
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-500"
          >
            <User size={12} />
            Curated by krish3impax
          </motion.div>
        </div>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-6xl font-black text-transparent md:text-8xl"
        >
          MARBLEVERSE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-400"
        >
          Discover high-end collectible marbles forged from the rarest cosmic materials. 
          A premier selection meticulously verified by <span className="text-blue-400 font-semibold">krish3impax</span>.
        </motion.p>
      </section>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {marbles.map((marble, index) => (
          <motion.div
            key={marble.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <MarbleCard marble={marble} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

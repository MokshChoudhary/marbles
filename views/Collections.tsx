
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight } from 'lucide-react';
import { useStore } from '../store';

const COLLECTIONS_DATA = [
  {
    title: "The Italian Legacy",
    description: "Centuries of architectural history distilled into perfect spheres of Carrara and Calacatta.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    count: 4,
  },
  {
    title: "Nocturnal Noir",
    description: "Deep, dark, and dramatic. Sourced from the volcanic heart of the Basque Country.",
    image: "https://images.unsplash.com/photo-1504194104404-433180773017?auto=format&fit=crop&w=800&q=80",
    count: 2,
  },
  {
    title: "Luminous Lapis",
    description: "Exceptional sodalite and lapis lazuli marbles for the discerning cosmic collector.",
    image: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?auto=format&fit=crop&w=800&q=80",
    count: 3,
  }
];

export const Collections: React.FC = () => {
  const { setView } = useStore();

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-black md:text-6xl mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
        >
          CURATED COLLECTIONS
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Explore our masterfully grouped selections, curated for geological harmony and aesthetic balance.</p>
      </section>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {COLLECTIONS_DATA.map((col, idx) => (
          <motion.div
            key={col.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="glass group relative overflow-hidden rounded-[2.5rem] p-6 hover:shadow-2xl hover:shadow-blue-500/10 transition-all cursor-pointer"
            onClick={() => setView('products')}
          >
            <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-3xl">
              <img src={col.image} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-blue-600 px-3 py-1 rounded-full text-xs font-bold">{col.count} Items</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">{col.title}</h3>
            <p className="text-gray-400 text-sm mb-6">{col.description}</p>
            <button className="flex items-center gap-2 text-blue-400 font-bold group-hover:gap-4 transition-all">
              View Collection <ArrowRight size={18} />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

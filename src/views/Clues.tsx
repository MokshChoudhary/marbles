
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Zap, Droplets, ThermometerSnowflake } from 'lucide-react';

const CLUES = [
  {
    icon: ThermometerSnowflake,
    title: "The Cool Touch",
    desc: "Real marble maintains a temperature significantly lower than room temp. If a sphere feels warm after sitting out, it might be resin."
  },
  {
    icon: Droplets,
    title: "Vein Continuity",
    desc: "Examine the veins closely. Authentic geological veining should appear layered and multi-dimensional, never flat or printed."
  },
  {
    icon: Zap,
    title: "The Sound of Stone",
    desc: "When gently tapped with a wooden tool, high-quality marble emits a high-pitched, crystalline ring rather than a dull thud."
  }
];

export const Clues: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <motion.div 
          className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-blue-600/10 text-blue-400 mb-6"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <Search size={40} />
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-black mb-6">MARBLE CLUES</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Master the art of geological detection. Learn to spot a masterpiece from a mile away.</p>
      </section>

      <div className="grid gap-12 lg:grid-cols-3">
        {CLUES.map((clue, idx) => (
          <motion.div
            key={clue.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="glass group p-10 rounded-[3rem] text-center hover:bg-white/5 transition-all"
          >
            <div className="mx-auto h-20 w-20 rounded-full bg-white/5 flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-transform">
              <clue.icon size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-4">{clue.title}</h3>
            <p className="text-gray-400 leading-relaxed">{clue.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-20 glass rounded-[4rem] p-12 text-center border-dashed border-blue-500/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h4 className="text-3xl font-black mb-6 text-blue-400">DETECTIVE CHALLENGE</h4>
        <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto italic">"A true Carrara never reveals its depth on the first glance. It invites you to peer into the crystal lattice."</p>
        <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
      </motion.div>
    </div>
  );
};

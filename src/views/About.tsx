
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Gem, Globe2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            FORGING THE <br />
            <span className="text-blue-500">ETERNAL SPHERE</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Founded by the vision of krish3impax, Marbleverse is the culmination of a decade-long obsession with geological perfection. 
            We source only the most prestigious marble varieties from Italian quarries to Turkish heritage sites.
          </p>
          
          <div className="grid gap-6">
            <div className="flex gap-4">
              <div className="h-12 w-12 shrink-0 flex items-center justify-center rounded-2xl bg-blue-600/20 text-blue-400">
                <Gem size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Purity Selection</h4>
                <p className="text-gray-400">Only the top 1% of architectural marble slabs are chosen for sphere conversion.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-12 shrink-0 flex items-center justify-center rounded-2xl bg-indigo-600/20 text-indigo-400">
                <Shield size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Authenticity Guaranteed</h4>
                <p className="text-gray-400">Every piece comes with a digital blockchain-backed geological certificate.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-12 shrink-0 flex items-center justify-center rounded-2xl bg-teal-600/20 text-teal-400">
                <Globe2 size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Global Stewardship</h4>
                <p className="text-gray-400">Ethically sourced, low-impact extraction methods for a sustainable collection.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative aspect-square"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-[100px]" />
          <img 
            src="https://images.unsplash.com/photo-1588345921523-c2dce2a7ec03?auto=format&fit=crop&w=1000&q=80" 
            className="rounded-[4rem] h-full w-full object-cover relative z-10 border border-white/10 shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

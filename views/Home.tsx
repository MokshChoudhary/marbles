
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useStore } from '../store';
import { ArrowRight, ChevronDown, Sparkles, Shield, Globe } from 'lucide-react';

export const Home: React.FC = () => {
  const { setView } = useStore();
  const { scrollYProgress } = useScroll();
  const yTranslate = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Animation variants for re-usable scroll effects
  const scrollReveal = {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    },
    viewport: { once: false, amount: 0.2 }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div 
          style={{ y: yTranslate }}
          className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px]" 
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
          className="absolute top-[80%] -left-40 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px]" 
        />
      </div>

      {/* 1. Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mb-8 rounded-full px-6 py-2 text-sm font-bold tracking-widest text-blue-400 uppercase"
        >
          <Sparkles className="mr-2 inline-block" size={16} />
          The Future of Architectural Decor
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl text-center text-7xl font-black leading-tight tracking-tighter md:text-9xl"
        >
          GRAVITY IN <br />
          <span className="bg-gradient-to-r from-blue-400 via-white to-indigo-400 bg-clip-text text-transparent">
            PURE GLASS
          </span>
        </motion.h1 >

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 max-w-2xl text-center text-xl text-gray-400 md:text-2xl"
        >
          Collectible floor marbles forged from authentic geological treasures. 
          A convergence of history, weight, and light.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-col items-center gap-6 sm:flex-row"
        >
          <button
            onClick={() => setView('products')}
            className="group flex items-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-black text-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            Explore Gallery
            <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
          </button>
          <button
            onClick={() => setView('about')}
            className="rounded-full border border-white/10 bg-white/5 px-10 py-5 text-lg font-bold backdrop-blur-md transition-all hover:bg-white/10"
          >
            The Story
          </button>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-gray-500"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* 2. Scroll-Triggered Feature Grid */}
      <section className="container mx-auto px-4 py-32">
        <motion.div 
          className="grid gap-12 md:grid-cols-3"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false, amount: 0.3 }}
        >
          {[
            { 
              icon: Sparkles, 
              title: "Crystal Clarity", 
              desc: "Every marble is polished to a 12,000-grit mirror finish for unmatched refraction." 
            },
            { 
              icon: Shield, 
              title: "Heirloom Quality", 
              desc: "Forged to last centuries, maintaining its weight and luster through the passage of time." 
            },
            { 
              icon: Globe, 
              title: "Global Sourcing", 
              desc: "Materials extracted from legendary quarries in Italy, Greece, and the depths of Brazil." 
            }
          ].map((feature, i) => (
            <motion.div 
              key={i} 
              variants={staggerItem}
              className="glass group rounded-[3rem] p-10 transition-colors hover:bg-white/10"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-400 transition-transform group-hover:rotate-12 group-hover:scale-110">
                <feature.icon size={32} />
              </div>
              <h3 className="mb-4 text-2xl font-bold">{feature.title}</h3>
              <p className="leading-relaxed text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. Immersive "The Collection" Teaser with In-Out Scroll Animation */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div 
            {...scrollReveal}
            className="glass-dark relative overflow-hidden rounded-[4rem] p-12 md:p-24"
          >
            <div className="relative z-10 grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <motion.h2 
                  variants={staggerItem}
                  className="mb-8 text-5xl font-black md:text-7xl"
                >
                  BEYOND <br />
                  <span className="text-blue-500">ORDINARY</span>
                </motion.h2>
                <motion.p 
                  variants={staggerItem}
                  className="mb-10 text-xl text-gray-400"
                >
                  Our "Floor Marble" collection represents the pinnacle of geological curation. Each sphere is a unique fingerprint of the Earth, capturing frozen moments of heat and pressure from millions of years ago.
                </motion.p>
                <motion.button 
                  variants={staggerItem}
                  onClick={() => setView('collections')}
                  className="group flex items-center gap-3 text-2xl font-black text-blue-400 transition-all hover:text-blue-300"
                >
                  View Collections
                  <ArrowRight className="transition-transform group-hover:translate-x-2" size={28} />
                </motion.button>
              </div>
              
              <div className="relative aspect-square overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 10, ease: "linear" }}
                  src="https://images.unsplash.com/photo-1533158307587-828f0a76ef46?auto=format&fit=crop&w=1000&q=80" 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Scrolling Stats Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div 
          className="flex flex-wrap justify-center gap-12 text-center md:gap-32"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false }}
        >
          {[
            { label: "Global Quarries", value: "42+" },
            { label: "Rare Specimens", value: "850" },
            { label: "Verified Collectors", value: "12K" },
            { label: "Geological Age", value: "2M yrs" }
          ].map((stat, i) => (
            <motion.div key={i} variants={staggerItem}>
              <h4 className="text-6xl font-black text-white">{stat.value}</h4>
              <p className="mt-2 text-sm font-bold tracking-widest text-blue-400 uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-40 text-center">
        <motion.div
          {...scrollReveal}
          className="px-4"
        >
          <h2 className="mb-12 text-6xl font-black md:text-8xl">RECLAIM THE RADIANCE</h2>
          <button
            onClick={() => setView('products')}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-blue-600 px-16 py-8 text-2xl font-black text-white transition-all hover:bg-blue-500 hover:scale-110 active:scale-95 shadow-2xl shadow-blue-600/30"
          >
            <span className="relative z-10 flex items-center gap-3">
              Begin Your Journey <ArrowRight size={28} />
            </span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
          </button>
          <p className="mt-8 text-gray-500">Secure shipping available to all sectors of the globe.</p>
        </motion.div>
      </section>
    </div>
  );
};

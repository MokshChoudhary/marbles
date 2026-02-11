
import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <section className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">Enter the Guild</h2>
          <p className="text-gray-400">Reach our collectors' concierge for custom inquiries.</p>
        </section>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass rounded-[3rem] p-10 flex flex-col justify-between"
          >
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">Main Citadel</h4>
                  <p className="text-gray-400">42 Carrara Square, Pietrasanta, IT</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">Direct Line</h4>
                  <p className="text-gray-400">+39 0584 795400</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">Transmission</h4>
                  <p className="text-gray-400">concierge@marbleverse.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Available 24/7 for Global Logistics</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-gray-500 ml-2">Your Name</label>
              <input type="text" className="w-full glass rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-all" placeholder="Collector name..." />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-gray-500 ml-2">Email Address</label>
              <input type="email" className="w-full glass rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-all" placeholder="your@email.com" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-gray-500 ml-2">Transmission Message</label>
              <textarea rows={5} className="w-full glass rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-all resize-none" placeholder="How can we assist your collection?"></textarea>
            </div>
            <button className="w-full py-5 rounded-[2rem] bg-blue-600 font-black text-lg flex items-center justify-center gap-3 hover:bg-blue-500 shadow-xl shadow-blue-500/20 transition-all active:scale-95">
              Secure Transmission <Send size={20} />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

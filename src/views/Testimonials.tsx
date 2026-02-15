
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const REVIEWS = [
  {
    name: "Aria Sterling",
    role: "Museum Curator",
    content: "The Nero Marquina sphere I acquired is simply breathtaking. The vein depth is unlike anything I've seen in marble collecting before.",
    avatar: "https://i.pravatar.cc/150?u=aria"
  },
  {
    name: "Julian Vane",
    role: "Interior Architect",
    content: "Marbleverse doesn't just sell stones; they sell pieces of architectural history. Every marble is a masterwork of gravity and glass.",
    avatar: "https://i.pravatar.cc/150?u=julian"
  },
  {
    name: "Dr. Elena Moss",
    role: "Geologist",
    content: "The authenticity certificates provided by krish3impax are rigorous. The Lapis Blue Sodalite is perfectly identified and polished.",
    avatar: "https://i.pravatar.cc/150?u=elena"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16 text-center">
        <motion.h2 className="text-4xl font-black md:text-6xl mb-6">VOICES OF THE UNIVERSE</motion.h2>
        <div className="flex justify-center gap-1 text-amber-400 mb-4">
          {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
        </div>
        <p className="text-gray-400">Trusted by over 10,000 collectors and architects worldwide.</p>
      </section>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((review, idx) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass relative rounded-[2rem] p-8"
          >
            <Quote className="absolute right-8 top-8 text-blue-500/20" size={48} />
            <div className="flex items-center gap-4 mb-6">
              <img src={review.avatar} className="h-14 w-14 rounded-full border-2 border-blue-500/30" />
              <div>
                <h4 className="font-bold text-lg">{review.name}</h4>
                <p className="text-sm text-blue-400">{review.role}</p>
              </div>
            </div>
            <p className="text-gray-300 italic leading-relaxed">"{review.content}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

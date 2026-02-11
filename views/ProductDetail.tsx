
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Minus, Plus, ShoppingCart, ShieldCheck, Globe, Star } from 'lucide-react';
import { useStore } from '../store';

export const ProductDetail: React.FC = () => {
  const { selectedMarble, setView, addToCart, setIsCartOpen } = useStore();
  const [quantity, setQuantity] = useState(1);

  if (!selectedMarble) return null;

  const isOutOfStock = selectedMarble.stock < 1;

  const handleAdd = () => {
    addToCart(selectedMarble, quantity);
    setIsCartOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <button
        onClick={() => setView('home')}
        className="mb-8 flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
      >
        <ChevronLeft size={20} /> Back to Gallery
      </button>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Large Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative aspect-square overflow-hidden rounded-[3rem] border border-white/10"
        >
          <img
            src={selectedMarble.image}
            alt={selectedMarble.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-blue-400">
            {selectedMarble.category}
          </span>
          <h1 className="mt-2 text-5xl font-bold">{selectedMarble.name}</h1>
          <div className="mt-4 flex items-center gap-4">
            <span className="text-3xl font-bold text-white">${selectedMarble.price.toFixed(2)}</span>
            <div className="flex items-center gap-1 text-amber-400">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <span className="ml-2 text-sm text-gray-400">(48 reviews)</span>
            </div>
          </div>

          <p className="mt-8 text-lg leading-relaxed text-gray-300">
            {selectedMarble.description}
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="glass flex flex-col items-center rounded-2xl p-4 text-center">
              <span className="text-xs text-gray-400">Material</span>
              <span className="font-bold">{selectedMarble.specs.material}</span>
            </div>
            <div className="glass flex flex-col items-center rounded-2xl p-4 text-center">
              <span className="text-xs text-gray-400">Diameter</span>
              <span className="font-bold">{selectedMarble.specs.size}</span>
            </div>
            <div className="glass flex flex-col items-center rounded-2xl p-4 text-center">
              <span className="text-xs text-gray-400">Mass</span>
              <span className="font-bold">{selectedMarble.specs.weight}</span>
            </div>
          </div>

          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-2">
                <button
                  disabled={quantity <= 1}
                  onClick={() => setQuantity(q => q - 1)}
                  className="rounded-xl p-2 hover:bg-white/10 disabled:opacity-30"
                >
                  <Minus />
                </button>
                <span className="w-12 text-center text-xl font-bold">{quantity}</span>
                <button
                  disabled={quantity >= selectedMarble.stock}
                  onClick={() => setQuantity(q => q + 1)}
                  className="rounded-xl p-2 hover:bg-white/10 disabled:opacity-30"
                >
                  <Plus />
                </button>
              </div>
              <p className="text-sm text-gray-400">
                {selectedMarble.stock} units available in storage
              </p>
            </div>

            <button
              disabled={isOutOfStock}
              onClick={handleAdd}
              className={`flex w-full items-center justify-center gap-3 rounded-[2rem] py-5 text-xl font-bold transition-all ${
                isOutOfStock
                  ? 'cursor-not-allowed bg-gray-500/20 text-gray-500'
                  : 'bg-white text-black hover:scale-[1.02] active:scale-95'
              }`}
            >
              <ShoppingCart size={24} />
              {isOutOfStock ? 'Currently Unavailable' : 'Add to Collection'}
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <ShieldCheck className="text-blue-400" size={18} />
              Lifetime Authenticity
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Globe className="text-blue-400" size={18} />
              Global Secure Logistics
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

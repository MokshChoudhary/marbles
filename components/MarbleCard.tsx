
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Eye, AlertCircle } from 'lucide-react';
import { Marble } from '../types';
import { useStore } from '../store';

interface MarbleCardProps {
  marble: Marble;
}

export const MarbleCard: React.FC<MarbleCardProps> = ({ marble }) => {
  const { addToCart, setSelectedMarble, setView, setIsCartOpen } = useStore();
  
  const isOutOfStock = marble.stock < 1;
  const isLowStock = marble.stock > 0 && marble.stock < 5;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isOutOfStock) {
      addToCart(marble, 1);
      setIsCartOpen(true);
    }
  };

  const handleViewDetails = () => {
    setSelectedMarble(marble);
    setView('detail');
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass group relative overflow-hidden rounded-3xl p-4 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
      onClick={handleViewDetails}
    >
      {/* Badges */}
      <div className="absolute left-4 top-4 z-10 flex flex-col gap-2">
        {isOutOfStock && (
          <span className="flex items-center gap-1 rounded-full bg-red-500/80 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
            Out of Stock
          </span>
        )}
        {isLowStock && (
          <span className="flex items-center gap-1 rounded-full bg-amber-500/80 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
            <AlertCircle size={12} /> Low Stock
          </span>
        )}
      </div>

      {/* Image Container */}
      <div className="relative mb-6 aspect-square overflow-hidden rounded-2xl bg-black/20">
        <motion.img
          src={marble.image}
          alt={marble.name}
          className="h-full w-full object-cover transition-transform duration-700"
          whileHover={{ rotate: 180, scale: 1.1 }}
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button className="flex items-center gap-2 rounded-full bg-white/20 px-6 py-2 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/30">
            <Eye size={18} /> Quick View
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest text-blue-400">{marble.category}</span>
          <span className="font-bold text-white">${marble.price.toFixed(2)}</span>
        </div>
        <h3 className="text-xl font-bold text-white">{marble.name}</h3>
        
        <button
          disabled={isOutOfStock}
          onClick={handleAddToCart}
          className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 font-semibold transition-all ${
            isOutOfStock
              ? 'cursor-not-allowed bg-gray-500/20 text-gray-500'
              : 'bg-blue-600 text-white hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/30'
          }`}
        >
          <ShoppingCart size={18} />
          {isOutOfStock ? 'Sold Out' : 'Add to Cart'}
        </button>
      </div>
    </motion.div>
  );
};

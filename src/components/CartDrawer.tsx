
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useStore } from '../../store';

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateCartQuantity, getCartTotal, setView } = useStore();

  const handleCheckout = () => {
    setIsCartOpen(false);
    setView('checkout');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="glass-dark fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col p-6 shadow-2xl"
          >
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="text-blue-400" />
                <h2 className="text-2xl font-bold">Your Cart</h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="rounded-full p-2 hover:bg-white/10"
              >
                <X />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pr-2">
              {cart.length === 0 ? (
                <div className="flex h-64 flex-col items-center justify-center gap-4 text-gray-400">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p>Your universe is empty.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-blue-400 hover:underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-20 w-20 rounded-xl object-cover"
                      />
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between">
                          <h4 className="font-bold">{item.name}</h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-400 hover:text-red-300"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="mb-2 text-sm text-gray-400">${item.price.toFixed(2)}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 rounded-lg bg-white/5 p-1">
                            <button
                              onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:text-blue-400"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center text-sm font-bold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:text-blue-400"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <p className="font-bold text-blue-400">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-auto space-y-4 pt-6">
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-gray-400">Subtotal</span>
                <span className="text-2xl font-bold">${getCartTotal().toFixed(2)}</span>
              </div>
              <button
                disabled={cart.length === 0}
                onClick={handleCheckout}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 font-bold text-white shadow-xl transition-all hover:scale-[1.02] disabled:opacity-50"
              >
                Proceed to Checkout
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

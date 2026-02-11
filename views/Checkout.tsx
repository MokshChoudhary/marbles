
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, CreditCard, Truck, MapPin, ArrowRight, ArrowLeft } from 'lucide-react';
import { useStore } from '../store';

type Step = 'shipping' | 'payment' | 'review' | 'processing' | 'success';

export const Checkout: React.FC = () => {
  const [step, setStep] = useState<Step>('shipping');
  const { cart, getCartTotal, clearCart, setView } = useStore();

  const handleProcessPayment = () => {
    setStep('processing');
    // Simulate payment delay
    setTimeout(() => {
      setStep('success');
      clearCart();
    }, 3500);
  };

  const steps: { key: Step; label: string; icon: any }[] = [
    { key: 'shipping', label: 'Shipping', icon: MapPin },
    { key: 'payment', label: 'Payment', icon: CreditCard },
    { key: 'review', label: 'Review', icon: CheckCircle2 },
  ];

  if (step === 'success') {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass max-w-lg rounded-[3rem] p-12 text-center"
        >
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-green-500/20 text-green-500">
            <CheckCircle2 size={64} />
          </div>
          <h1 className="text-4xl font-bold">Universe Secured!</h1>
          <p className="mt-4 text-gray-400">
            Your order #MV-88219 has been placed. We're carefully polishing your marbles and preparing them for transit.
          </p>
          <button
            onClick={() => setView('home')}
            className="mt-10 rounded-full bg-white px-8 py-3 font-bold text-black transition-transform hover:scale-105"
          >
            Return to Store
          </button>
        </motion.div>
      </div>
    );
  }

  if (step === 'processing') {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center">
        {/* Spinning Marble Animation */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="mb-8 h-32 w-32 rounded-full border-4 border-dashed border-blue-500 p-2"
        >
          <div className="h-full w-full rounded-full bg-gradient-to-tr from-blue-400 to-indigo-800 shadow-2xl" />
        </motion.div>
        <h2 className="text-2xl font-bold">Synchronizing with the Bank...</h2>
        <p className="mt-2 text-gray-400">Please do not refresh the page.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      {/* Stepper Header */}
      <div className="mb-12 flex items-center justify-between">
        {steps.map((s, idx) => (
          <React.Fragment key={s.key}>
            <div className="flex flex-col items-center gap-2">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full transition-colors ${
                  step === s.key ? 'bg-blue-600 text-white' : 'bg-white/10 text-gray-500'
                }`}
              >
                <s.icon size={20} />
              </div>
              <span className={`text-xs font-bold uppercase tracking-tighter ${step === s.key ? 'text-white' : 'text-gray-500'}`}>
                {s.label}
              </span>
            </div>
            {idx < steps.length - 1 && (
              <div className="h-px flex-1 bg-white/10" />
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {step === 'shipping' && (
              <motion.div
                key="shipping"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="glass space-y-6 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold">Shipping Destination</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase">First Name</label>
                    <input type="text" className="w-full rounded-xl bg-white/5 border border-white/10 p-3 focus:border-blue-500 outline-none" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase">Last Name</label>
                    <input type="text" className="w-full rounded-xl bg-white/5 border border-white/10 p-3 focus:border-blue-500 outline-none" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase">Address</label>
                  <input type="text" className="w-full rounded-xl bg-white/5 border border-white/10 p-3 focus:border-blue-500 outline-none" placeholder="123 Galactic Way" />
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  <input type="text" className="w-full rounded-xl bg-white/5 border border-white/10 p-3 outline-none" placeholder="City" />
                  <input type="text" className="w-full rounded-xl bg-white/5 border border-white/10 p-3 outline-none" placeholder="State" />
                  <input type="text" className="w-full rounded-xl bg-white/5 border border-white/10 p-3 outline-none" placeholder="ZIP" />
                </div>
                <button
                  onClick={() => setStep('payment')}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white py-4 font-bold text-black"
                >
                  Continue to Payment <ArrowRight size={20} />
                </button>
              </motion.div>
            )}

            {step === 'payment' && (
              <motion.div
                key="payment"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="glass space-y-6 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold">Payment Method</h3>
                <div className="flex gap-4">
                  <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-2xl border border-blue-500 bg-blue-500/10 p-4">
                    <CreditCard size={24} className="text-blue-400" />
                    <span className="text-sm">Credit Card</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-2xl border border-white/5 bg-white/5 p-4 opacity-50">
                    <div className="h-6 w-12 bg-gray-400 rounded flex items-center justify-center text-[10px] font-bold text-black">PAYPAL</div>
                    <span className="text-sm">PayPal</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase">Card Number</label>
                  <input type="text" className="w-full rounded-xl bg-white/5 border border-white/10 p-3 outline-none" placeholder="**** **** **** 1234" />
                </div>
                <div className="grid gap-4 grid-cols-2">
                  <input type="text" className="w-full rounded-xl bg-white/5 border border-white/10 p-3 outline-none" placeholder="MM/YY" />
                  <input type="text" className="w-full rounded-xl bg-white/5 border border-white/10 p-3 outline-none" placeholder="CVC" />
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setStep('shipping')} className="flex-1 rounded-2xl bg-white/5 py-4 font-bold">Back</button>
                  <button onClick={() => setStep('review')} className="flex-1 rounded-2xl bg-white py-4 font-bold text-black">Review Order</button>
                </div>
              </motion.div>
            )}

            {step === 'review' && (
              <motion.div
                key="review"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="glass space-y-6 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold">Order Summary</h3>
                <div className="space-y-4">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <img src={item.image} className="h-12 w-12 rounded-lg object-cover" />
                        <div>
                          <p className="font-bold">{item.name}</p>
                          <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-4 space-y-2">
                   <div className="flex justify-between text-gray-400">
                     <span>Shipping</span>
                     <span>Free</span>
                   </div>
                   <div className="flex justify-between text-2xl font-bold">
                     <span>Total</span>
                     <span>${getCartTotal().toFixed(2)}</span>
                   </div>
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setStep('payment')} className="flex-1 rounded-2xl bg-white/5 py-4 font-bold">Back</button>
                  <button onClick={handleProcessPayment} className="flex-[2] rounded-2xl bg-blue-600 py-4 font-bold shadow-lg shadow-blue-500/40">Complete Purchase</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sidebar Mini Cart (only for large screens) */}
        <div className="hidden lg:block">
          <div className="glass sticky top-24 rounded-3xl p-6">
             <h4 className="font-bold mb-4">Cart Summary</h4>
             <div className="space-y-3">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-400">{item.name} × {item.quantity}</span>
                    <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
             </div>
             <div className="mt-6 border-t border-white/10 pt-4 flex justify-between font-bold">
               <span>Subtotal</span>
               <span>${getCartTotal().toFixed(2)}</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

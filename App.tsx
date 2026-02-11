
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Home as HomeIcon, Package, Layers, MessageSquare, Info, Mail, Search, Menu, X } from 'lucide-react';
import { useStore } from './store';
import { Home } from './views/Home';
import { ProductList } from './views/ProductList';
import { ProductDetail } from './views/ProductDetail';
import { Checkout } from './views/Checkout';
import { CartDrawer } from './components/CartDrawer';
import { Collections } from './views/Collections';
import { Testimonials } from './views/Testimonials';
import { About } from './views/About';
import { Contact } from './views/Contact';
import { Clues } from './views/Clues';
import { ViewState } from './types';

const App: React.FC = () => {
  const { view, cart, isCartOpen, setIsCartOpen, setView } = useStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks: { id: ViewState; label: string; icon: any }[] = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'collections', label: 'Collections', icon: Layers },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
    { id: 'about', label: 'About', icon: Info },
    { id: 'contact', label: 'Contact', icon: Mail },
    { id: 'clues', label: 'marbles Clues', icon: Search },
  ];

  const handleNavClick = (viewId: ViewState) => {
    setView(viewId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="glass sticky top-0 z-40 px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div 
            className="flex cursor-pointer items-center gap-2"
            onClick={() => handleNavClick('home')}
          >
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-800 shadow-lg shadow-blue-500/20" />
            <span className="text-xl font-extrabold tracking-tighter">MARBLEVERSE</span>
          </div>

          {/* Desktop Nav Tabs */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold transition-all duration-300 ${
                  view === link.id || (link.id === 'home' && view === 'detail') || (link.id === 'products' && view === 'detail')
                    ? 'bg-white/10 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)]'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <link.icon size={16} />
                <span>{link.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 transition-all hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <ShoppingCart size={20} />
              {cartItemsCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold">
                  {cartItemsCount}
                </span>
              )}
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-2 pt-4 pb-2 border-t border-white/5 mt-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center gap-4 rounded-xl px-4 py-3 text-base font-bold transition-all ${
                      view === link.id ? 'bg-blue-600 text-white' : 'text-gray-400 bg-white/5'
                    }`}
                  >
                    <link.icon size={18} />
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main View Area */}
      <main className="relative">
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Home />
            </motion.div>
          )}

          {view === 'products' && (
            <motion.div
              key="products"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ProductList />
            </motion.div>
          )}

          {view === 'detail' && (
            <motion.div
              key="detail"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <ProductDetail />
            </motion.div>
          )}

          {view === 'checkout' && (
            <motion.div
              key="checkout"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
            >
              <Checkout />
            </motion.div>
          )}

          {view === 'collections' && (
            <motion.div key="collections" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <Collections />
            </motion.div>
          )}

          {view === 'testimonials' && (
            <motion.div key="testimonials" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              <Testimonials />
            </motion.div>
          )}

          {view === 'about' && (
            <motion.div key="about" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}>
              <About />
            </motion.div>
          )}

          {view === 'contact' && (
            <motion.div key="contact" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              <Contact />
            </motion.div>
          )}

          {view === 'clues' && (
            <motion.div key="clues" initial={{ opacity: 0, rotateX: 45 }} animate={{ opacity: 1, rotateX: 0 }} exit={{ opacity: 0, rotateX: -45 }}>
              <Clues />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Overlays */}
      <CartDrawer />

      {/* Footer */}
      <footer className="mt-20 border-t border-white/5 py-12 text-center text-sm text-gray-500">
        <div className="container mx-auto">
          <p>© 2024 Marbleverse Collective. All spheres authentically forged.</p>
          <p className="mt-2 text-xs font-semibold tracking-widest text-blue-400 uppercase">Designed by krish3impax</p>
          <div className="mt-6 flex justify-center flex-wrap gap-8">
            {navLinks.map(link => (
              <button 
                key={link.id} 
                onClick={() => handleNavClick(link.id)}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

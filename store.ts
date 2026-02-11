
import { create } from 'zustand';
import { AppState, Marble, CartItem, ViewState } from './types';
import { INITIAL_INVENTORY } from './data/inventory';

export const useStore = create<AppState>((set, get) => ({
  marbles: INITIAL_INVENTORY,
  cart: [],
  selectedMarble: null,
  isCartOpen: false,
  view: 'home',

  addToCart: (marble: Marble, quantity: number = 1) => {
    const { cart } = get();
    const existingItem = cart.find((item) => item.id === marble.id);

    if (existingItem) {
      const newQuantity = existingItem.quantity + quantity;
      // Cap at stock limit
      const finalQuantity = Math.min(newQuantity, marble.stock);
      
      set({
        cart: cart.map((item) =>
          item.id === marble.id ? { ...item, quantity: finalQuantity } : item
        ),
      });
    } else {
      set({
        cart: [...cart, { ...marble, quantity: Math.min(quantity, marble.stock) }],
      });
    }
  },

  removeFromCart: (marbleId: string) => {
    set({
      cart: get().cart.filter((item) => item.id !== marbleId),
    });
  },

  updateCartQuantity: (marbleId: string, quantity: number) => {
    const { cart } = get();
    const item = cart.find(i => i.id === marbleId);
    if (!item) return;

    const finalQuantity = Math.max(1, Math.min(quantity, item.stock));

    set({
      cart: cart.map((item) =>
        item.id === marbleId ? { ...item, quantity: finalQuantity } : item
      ),
    });
  },

  clearCart: () => set({ cart: [] }),

  setSelectedMarble: (marble: Marble | null) => set({ selectedMarble: marble }),
  
  setIsCartOpen: (isOpen: boolean) => set({ isCartOpen: isOpen }),
  
  setView: (view: ViewState) => set({ view, selectedMarble: view === 'home' ? null : get().selectedMarble }),

  getCartTotal: () => {
    return get().cart.reduce((total, item) => total + item.price * item.quantity, 0);
  },
}));

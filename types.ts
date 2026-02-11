
export interface Marble {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  stock: number;
  category: string;
  specs: {
    material: string;
    size: string;
    weight: string;
  };
}

export interface CartItem extends Marble {
  quantity: number;
}

export type ViewState = 'home' | 'detail' | 'checkout' | 'products' | 'collections' | 'testimonials' | 'about' | 'contact' | 'clues';

export interface AppState {
  marbles: Marble[];
  cart: CartItem[];
  selectedMarble: Marble | null;
  isCartOpen: boolean;
  view: ViewState;
  
  // Actions
  addToCart: (marble: Marble, quantity?: number) => void;
  removeFromCart: (marbleId: string) => void;
  updateCartQuantity: (marbleId: string, quantity: number) => void;
  clearCart: () => void;
  setSelectedMarble: (marble: Marble | null) => void;
  setIsCartOpen: (isOpen: boolean) => void;
  setView: (view: ViewState) => void;
  getCartTotal: () => number;
}

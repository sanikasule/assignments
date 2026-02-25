import { create } from "zustand";
import type { CartItem, Product } from "../types";

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

/**
 * Zustand Store for Shopping Cart Management
 * Uses (set, get) to allow reading state inside actions.
 */
const useCartStore = create<CartState>()((set, get) => ({
  items: [],

  // ── addItem: Handles both 'new item' and 'increment existing' ──
  addItem: (product) => {
    const items = get().items;
    const existingItem = items.find((item) => item.id === product.id);

    if (existingItem) {
      // If product exists, increment quantity
      set({
        items: items.map((item) =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        ),
      });
    } else {
      // If new product, add to array with quantity 1
      set({
        items: [...items, { ...product, quantity: 1 }],
      });
    }
  },

  // ── removeItem: Filter out the item by ID ──
  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    }));
  },

  // ── updateQuantity: Adjust quantity or remove if it hits 0 ──
  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(productId);
      return;
    }

    set((state) => ({
      items: state.items.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      ),
    }));
  },

  // ── clearCart: Reset to empty state ──
  clearCart: () => set({ items: [] }),

  // ── Computed Values: Derived from the current state ──
  
  // Sum of all item quantities
  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },

  // Total price of all items in cart
  getTotalPrice: () => {
    return get().items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },
}));

export default useCartStore;
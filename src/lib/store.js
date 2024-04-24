import { create } from 'zustand'

export const cartSlice = create((set) => ({
  items: 0,
  cartOpen: false,
  increaseItems: () => set((state) => ({ items: state.items + 1 })),
  removeItem: () => set((state) => ({ items: state.items - 1 })),
  setCart: () => set((state) => ({cartOpen: !state.cartOpen})),
}))










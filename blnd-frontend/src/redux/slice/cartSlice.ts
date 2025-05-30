

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartState } from './types';


const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
};

const calculateTotals = (items: CartItem[]) => {
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = items.reduce((total, item) => total + (Number(item.price) * item.quantity), 0);
  return { totalItems, totalAmount };
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      
      const totals = calculateTotals(state.items);
      state.totalItems = totals.totalItems;
      state.totalAmount = totals.totalAmount;
    },
    
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      
      const totals = calculateTotals(state.items);
      state.totalItems = totals.totalItems;
      state.totalAmount = totals.totalAmount;
    },
    
    updateQuantity: (state, action: PayloadAction<{ id:number; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter(item => item.id !== id);
        } else {
          item.quantity = quantity;
        }
      }
      
      const totals = calculateTotals(state.items);
      state.totalItems = totals.totalItems;
      state.totalAmount = totals.totalAmount;
    },
    
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      
      const totals = calculateTotals(state.items);
      state.totalItems = totals.totalItems;
      state.totalAmount = totals.totalAmount;
    },
    
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(i => i.id !== action.payload);
        }
      }
      
      const totals = calculateTotals(state.items);
      state.totalItems = totals.totalItems;
      state.totalAmount = totals.totalAmount;
    },
    
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
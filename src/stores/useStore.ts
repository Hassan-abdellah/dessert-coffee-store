// stores/useStore.ts
import type { cartItemType } from "@/types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface updateCartItemType {
  productName: string;
  quantity: number;
}

interface shopingCartState {
  cartItems: cartItemType[];
  addCartItem: (cartItem: cartItemType) => void;
  updateCartItem: (updatedItem: updateCartItemType) => void;
  deleteCartItem: (productName: string) => void;
  emptyTheCart: () => void;
}

// Without middleware
export const useShopingCart = create<shopingCartState>((set) => ({
  cartItems: [],
  cartItemsLength: 0,
  // Implementation for adding cart item,
  addCartItem: (cartItem: cartItemType) =>
    set((state) => ({
      cartItems: [...state.cartItems, cartItem],
    })),

  // Implementation for updating cart item,
  updateCartItem: (updatedItem: updateCartItemType) =>
    set((state) => {
      // if quantity is zero or less, remove the item from the cart
      if (updatedItem.quantity <= 0) {
        return {
          cartItems: state.cartItems.filter(
            (item) => item.item.name !== updatedItem.productName,
          ),
        };
      }
      // if the quantity is more than zero, update the item quantity
      return {
        cartItems: state.cartItems.map((item) =>
          item.item.name === updatedItem.productName
            ? { ...item, quantity: updatedItem.quantity }
            : item,
        ),
      };
    }),

  // Implementation for deleting cart item,
  deleteCartItem: (productName: string) =>
    set((state) => ({
      cartItems: state.cartItems.filter(
        (item) => item.item.name !== productName,
      ),
    })),
  // remove all items from the cart
  emptyTheCart: () => set({ cartItems: [] }),
}));

// With devtools middleware (recommended for debugging)
export const useShopingCartWithDevtools = create<shopingCartState>()(
  devtools(
    (set) => ({
      cartItems: [],
      cartItemsLength: 0,

      // Implementation for adding cart item,
      addCartItem: (cartItem: cartItemType) =>
        set((state) => ({
          cartItems: [...state.cartItems, cartItem],
        })),

      // Implementation for updating cart item,
      updateCartItem: (updatedItem: updateCartItemType) =>
        set((state) => {
          // if quantity is zero or less, remove the item from the cart
          if (updatedItem.quantity <= 0) {
            return {
              cartItems: state.cartItems.filter(
                (item) => item.item.name !== updatedItem.productName,
              ),
            };
          }
          // if the quantity is more than zero, update the item quantity
          return {
            cartItems: state.cartItems.map((item) =>
              item.item.name === updatedItem.productName
                ? { ...item, quantity: updatedItem.quantity }
                : item,
            ),
          };
        }),

      // Implementation for deleting cart item,
      deleteCartItem: (productName: string) =>
        set((state) => ({
          cartItems: state.cartItems.filter(
            (item) => item.item.name !== productName,
          ),
        })),

      // remove all items from the cart

      emptyTheCart: () => set({ cartItems: [] }),
    }),
    { name: "Shoping Cart Store" },
  ),
);

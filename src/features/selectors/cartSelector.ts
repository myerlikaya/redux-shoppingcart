import { RootState } from "@/store/store";

export const cartSelector = (state: RootState) => state.cart.items;
export const cartCountSelector = (state: RootState) => state.cart.items.length;
export const cartTotalSelector = (state: RootState) => state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

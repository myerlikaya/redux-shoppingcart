"use client";

import Cart from "@/components/Cart/Cart";
import { cartSelector, cartTotalSelector } from "@/features/selectors/cartSelector";
import { clearCart, decrementQuantity, incrementQuantity } from "@/features/slices/cart/cartSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";


export default function CartContainer() {
  const cartItems = useAppSelector(cartSelector);
  const totalPrice = useAppSelector(cartTotalSelector);

  const dispatch = useAppDispatch();

  return (
    <Cart
      cartItems={cartItems}
      totalPrice={totalPrice}
      onIncrement={(id) => dispatch(incrementQuantity(id))}
      onDecrement={(id) => dispatch(decrementQuantity(id))}
      onClearCart={() => dispatch(clearCart())}
    />
  );}
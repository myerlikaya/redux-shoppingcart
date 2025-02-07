"use client";

import ProductList from "@/components/Product/ProductList";
import { productListSelector } from "@/features/selectors/productSelector";
import { addToCartAsync } from "@/features/slices/cart/cartSlice";
import { fetchProducts } from "@/features/slices/product/productSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useEffect } from "react";

export default function ProductListContainer() {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector(productListSelector);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return <ProductList products={items} loading={loading} error={error} onAddToCart={(product) => dispatch(addToCartAsync(product))} />;
}
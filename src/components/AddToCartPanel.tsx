"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/types";
import { effectivePrice } from "@/lib/utils";

export default function AddToCartPanel({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const outOfStock = product.stock_quantity <= 0;

  function handleAdd() {
    addItem(
      {
        productId: product.id,
        name: product.name,
        slug: product.slug,
        sku: product.sku,
        price: effectivePrice(product.price_gel, product.sale_price_gel),
        image: product.product_images?.[0]?.url ?? null,
        quantity: qty,
        maxStock: product.stock_quantity,
      },
      qty
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  if (outOfStock) {
    return (
      <button disabled className="btn-secondary w-full cursor-not-allowed opacity-50">
        Out of stock
      </button>
    );
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <div className="flex items-center rounded-full border border-line">
        <button
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="p-3 text-graphite hover:text-ink"
          aria-label="Decrease quantity"
        >
          <Minus size={16} />
        </button>
        <span className="w-8 text-center text-sm font-medium">{qty}</span>
        <button
          onClick={() => setQty((q) => Math.min(product.stock_quantity, q + 1))}
          className="p-3 text-graphite hover:text-ink"
          aria-label="Increase quantity"
        >
          <Plus size={16} />
        </button>
      </div>
      <button onClick={handleAdd} className="btn-primary flex-1">
        <ShoppingBag size={16} />
        {added ? "Added ✓" : "Add to cart"}
      </button>
    </div>
  );
}

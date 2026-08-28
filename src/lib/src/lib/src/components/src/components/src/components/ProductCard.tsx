import Link from "next/link";
import Image from "next/image";
import { formatGEL, effectivePrice, discountPercent } from "@/lib/utils";
import type { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  const image = product.product_images?.[0]?.url ?? "/placeholder-product.svg";
  const price = effectivePrice(product.price_gel, product.sale_price_gel);
  const discount = discountPercent(product.price_gel, product.sale_price_gel);
  const outOfStock = product.stock_quantity <= 0;

  return (
    <Link href={`/product/${product.slug}`} className="card group block overflow-hidden">
      <div className="relative aspect-square overflow-hidden bg-[#F2F1EE]">
        <Image
          src={image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain p-6 transition-transform duration-500 ease-smooth group-hover:scale-105"
        />
        {discount && (
          <span className="absolute left-3 top-3 rounded-full bg-copper px-2.5 py-1 text-xs font-medium text-white">
            -{discount}%
          </span>
        )}
        {outOfStock && (
          <span className="absolute inset-0 flex items-center justify-center bg-white/70 text-sm font-medium text-graphite">
            Out of stock
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="mb-1 truncate text-xs font-mono text-graphite">{product.sku}</p>
        <h3 className="mb-2 truncate text-sm font-medium text-ink">{product.name}</h3>
        <div className="flex items-baseline gap-2">
          <span className="font-display text-base font-semibold text-ink">{formatGEL(price)}</span>
          {discount && (
            <span className="text-xs text-graphite line-through">
              {formatGEL(product.price_gel)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export function formatGEL(amount: number): string {
  return new Intl.NumberFormat("ka-GE", {
    style: "currency",
    currency: "GEL",
    currencyDisplay: "symbol",
    minimumFractionDigits: 2,
  }).format(amount);
}

export function effectivePrice(price: number, salePrice: number | null): number {
  return salePrice != null && salePrice < price ? salePrice : price;
}

export function discountPercent(price: number, salePrice: number | null): number | null {
  if (salePrice == null || salePrice >= price) return null;
  return Math.round(((price - salePrice) / price) * 100);
}

export function cx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

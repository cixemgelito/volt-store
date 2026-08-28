"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/lib/cart-context";

const NAV = [
  { href: "/shop", label: "Shop" },
  { href: "/shop?category=chargers", label: "Chargers" },
  { href: "/shop?category=cables", label: "Cables" },
  { href: "/shop?category=earbuds", label: "Earbuds" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-base/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <span className="pin-row">
            <span className="pin-dot pin-dot-lit" />
            <span className="pin-dot pin-dot-lit" />
            <span className="pin-dot" />
          </span>
          volt<span className="text-copper">.ge</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-graphite transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/shop" aria-label="Search" className="hidden text-graphite hover:text-ink sm:block">
            <Search size={20} strokeWidth={1.75} />
          </Link>
          <Link href="/cart" aria-label="Cart" className="relative text-graphite hover:text-ink">
            <ShoppingBag size={20} strokeWidth={1.75} />
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-copper text-[10px] font-medium text-white">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            className="text-graphite hover:text-ink md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-base md:hidden">
          <div className="container-page flex flex-col py-3">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-graphite hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

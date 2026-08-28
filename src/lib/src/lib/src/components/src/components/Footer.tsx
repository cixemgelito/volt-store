import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="pin-row mb-3">
            <span className="pin-dot pin-dot-lit" />
            <span className="pin-dot pin-dot-lit" />
            <span className="pin-dot" />
          </div>
          <p className="max-w-[220px] text-sm text-graphite">
            Reliable phone and electronics accessories, delivered across Georgia.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-medium text-ink">Shop</h4>
          <ul className="space-y-2 text-sm text-graphite">
            <li><Link href="/shop?category=chargers" className="hover:text-ink">Chargers</Link></li>
            <li><Link href="/shop?category=cables" className="hover:text-ink">Cables</Link></li>
            <li><Link href="/shop?category=earbuds" className="hover:text-ink">Earbuds</Link></li>
            <li><Link href="/shop" className="hover:text-ink">All products</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-medium text-ink">Support</h4>
          <ul className="space-y-2 text-sm text-graphite">
            <li><Link href="/faq" className="hover:text-ink">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-ink">Contact us</Link></li>
            <li><Link href="/about" className="hover:text-ink">About us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-medium text-ink">Georgia</h4>
          <ul className="space-y-2 text-sm text-graphite">
            <li>Tbilisi &amp; nationwide delivery</li>
            <li>Cash on delivery available</li>
            <li>Prices in GEL (₾)</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-5">
        <p className="container-page text-xs text-graphite">
          © {new Date().getFullYear()} volt.ge — All rights reserved.
        </p>
      </div>
    </footer>
  );
}

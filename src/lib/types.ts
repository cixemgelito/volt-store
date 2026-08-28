export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  sort_order: number;
}

export interface ProductImage {
  id: string;
  product_id: string;
  url: string;
  alt_text: string | null;
  sort_order: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  sku: string;
  description: string | null;
  category_id: string | null;
  price_gel: number;
  sale_price_gel: number | null;
  stock_quantity: number;
  is_featured: boolean;
  is_active: boolean;
  specifications: Record<string, string>;
  created_at: string;
  product_images?: ProductImage[];
  categories?: Category | null;
}

export interface CartItem {
  productId: string;
  name: string;
  slug: string;
  sku: string;
  price: number;
  image: string | null;
  quantity: number;
  maxStock: number;
}

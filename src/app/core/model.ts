export type Category = 'food' | 'cake' | 'snack' | 'decoration';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: Category;
  tags?: string[];
  available?: boolean;
}

export interface CartItem {
  product: Product;
  qty: number;
}

export interface DecorationPackage {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  includes: string[];
}

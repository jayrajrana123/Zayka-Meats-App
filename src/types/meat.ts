export interface Category {
  id: number;
  name: string;
  icon: string;
}

export interface MeatItem {
  id: number;
  name: string;
  image: any; // Using any for require('../assets/placeholder.png')
  rating: number;
  price: number;
  category: string;
  weight: string;
  description?: string;
  stock?: number;
}

export interface CartItem extends MeatItem {
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'delivered' | 'cancelled';
  createdAt: string;
  deliveryAddress: string;
  paymentMethod: string;
} 
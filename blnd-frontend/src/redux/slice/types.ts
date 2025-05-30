export interface CartItem {
  id: number;
  name: string;
  price:string;
  quantity: number;
  image: string;
}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  totalAmount: number;
}

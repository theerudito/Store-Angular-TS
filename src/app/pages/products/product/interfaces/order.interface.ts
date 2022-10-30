export interface Order {
  id: number;
  date: string;
  name: string;
  city: string;
  isDelivery: boolean;
  shippingAddress: string;
}

export interface Details {
  productId: number;
  orderId?: number;
  productName: string;
  productQuantity: number;
}


export interface DetailOrder {
  details: Details[];
  orderId: number;
  id?: number;
}

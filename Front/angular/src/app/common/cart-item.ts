import { Product } from './product';

export class CartItem {
  name: string;
  unitPrice: number;
  imageUrl: string;
  id: string;

  quantity: number;

  constructor(product: Product) {
    this.name = product.name;
    this.unitPrice = product.unitPrice;
    this.imageUrl = product.imageUrl;
    this.id = product.id;
    this.quantity = 1;
  }
}

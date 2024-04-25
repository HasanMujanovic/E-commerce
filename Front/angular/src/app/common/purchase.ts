import { Address } from './address';
import { Customer } from './customer';
import { Order } from './order';
import { OrderItem } from './order-item';

export class Purchase {
  customer: Customer;
  order: Order;
  billingAddress: Address;
  shippingAddress: Address;
  orderItem: OrderItem[];
}

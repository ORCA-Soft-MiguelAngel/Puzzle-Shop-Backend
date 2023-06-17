import { IOrder, OrderStatus } from "@models/order";
import OrderRepository from "@repositories/OrderRepository";

class OrderService {
  constructor() {}

  async createOrder(data: IOrder) {
    return await OrderRepository.create(data);
  }

  async findOrderById(id: string) {
    return await OrderRepository.findById(id);
  }

  async updateOrder(id: string, data: Partial<IOrder>) {
    const currentOrder = await OrderRepository.findById(id);
    if (
      (currentOrder && currentOrder.status === OrderStatus.COMPLETED) ||
      !("rating" in data)
    ) {
      return await OrderRepository.update(id, data);
    } else {
      // TODO: Move this to a validation middleware
      throw new Error(
        "Cannot update rating when the order status is not COMPLETED"
      );
    }
  }

  async deleteOrder(id: string) {
    return await OrderRepository.delete(id);
  }

  async findAllOrdersByUserId(userId: string) {
    return await OrderRepository.findAllByUserId(userId);
  }
}

export default new OrderService();

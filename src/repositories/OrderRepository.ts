import Order, { IOrder } from '@models/order';

class OrderRepository {
    constructor() {}

    async create(data: IOrder) {
        const newOrder = new Order(data);
        return await newOrder.save();
    }

    async findById(id: string) {
        return await Order.findById(id);
    }

    async update(id: string, data: Partial<IOrder>) {
        return await Order.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string) {
        return await Order.findByIdAndDelete(id);
    }

    async findAll() {
        return await Order.find();
    }
}

export default new OrderRepository();

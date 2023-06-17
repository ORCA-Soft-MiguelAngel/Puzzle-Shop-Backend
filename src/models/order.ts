import mongoose, { Document, Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

enum OrderStatus {
    ACTIVE = 'active',
    COMPLETED = 'completed'
}

interface IProduct {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
}

interface IOrder extends Document {
    id: string;
    status: OrderStatus;
    rating: number;
    createdAt: Date;
    updatedAt: Date;
    products: IProduct[];
}

const ProductSchema: Schema = new Schema({
    id: { type: String, default: uuidv4 },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
});

const OrderSchema: Schema = new Schema({
    id: { type: String, default: uuidv4 },
    status: { type: String, enum: Object.values(OrderStatus), default: OrderStatus.ACTIVE },
    rating: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    products: { type: [ProductSchema], default: [] },
});

OrderSchema.pre<IOrder>("save", function(next) {
    this.updatedAt = new Date();
    next();
});

export default mongoose.model<IOrder>('Order', OrderSchema);
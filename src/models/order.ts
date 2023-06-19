import mongoose, { Document, Schema } from "mongoose";

export enum OrderStatus {
  ACTIVE = "active",
  COMPLETED = "completed",
}

export interface IProduct {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
}

export interface IOrder extends Document {
  userId: string;
  status: OrderStatus;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
  products: IProduct[];
}

const ProductSchema: Schema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: false },
  quantity: { type: Number, default: 1 },
});

const OrderSchema: Schema = new Schema({
  userId: { type: String, required: true },
  status: {
    type: String,
    enum: Object.values(OrderStatus),
    default: OrderStatus.ACTIVE,
  },
  rating: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  products: { type: [ProductSchema], default: [] },
});

OrderSchema.pre<IOrder>("save", function (next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.model<IOrder>("Order", OrderSchema);

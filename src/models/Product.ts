import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  price: number;
  quantity: number;
  description?: string;
  images?: string[]; // ← CAMBIADO
}

const ProductSchema: Schema<IProduct> = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number },
    quantity: { type: Number },
    description: { type: String },
    images: { type: [String], default: [] },
  },
  { timestamps: true }
);

export default mongoose.model<IProduct>("Product", ProductSchema);

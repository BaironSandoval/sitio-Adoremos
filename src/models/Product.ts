import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  price: number;
  quantity: number;
  images?: string[]; // ← CAMBIADO
  description?: string;
}

const ProductSchema: Schema<IProduct> = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number },
    quantity: { type: Number },
    images: [{ type: String }], // ← CAMBIADO
    description: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IProduct>("Product", ProductSchema);

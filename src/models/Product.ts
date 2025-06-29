import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  price: number;
  quantity: number;
  description?: string;
  category?: string; // ← CAMBIADO
  images?: string[]; // ← CAMBIADO
}

const ProductSchema: Schema<IProduct> = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number },
    quantity: { type: Number },
    description: { type: String },
    category: { type: String, default: "general" }, // ← CAMBIADO
    images: { type: [String], default: [] },
  },
  { timestamps: true }
);

export default mongoose.model<IProduct>("Product", ProductSchema);

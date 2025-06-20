import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

const ProductSchema: Schema<IProduct> = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number },
    quantity: { type: Number },
    image: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IProduct>("Product", ProductSchema);

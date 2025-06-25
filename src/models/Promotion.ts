import mongoose, { Schema, Document } from "mongoose";

export interface IPromotion extends Document {
  title: string;
  image: string;
  createdAt: Date;
}

const PromotionSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true, // Esto crea automáticamente `createdAt` y `updatedAt`
  }
);

const Promotion = mongoose.model<IPromotion>("Promotion", PromotionSchema);

export default Promotion;
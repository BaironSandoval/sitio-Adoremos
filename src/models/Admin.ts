import { Schema, model, Document } from 'mongoose';
const bcrypt = require('bcryptjs');
import { Admin } from '../types/Admin';

interface AdminDocument extends Omit<Admin, '_id'>, Document {}

const adminSchema = new Schema<AdminDocument>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

adminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

export default model<AdminDocument>('Admin', adminSchema);

import mongoose, { Schema, Document } from 'mongoose';

export interface INonce extends Document {
  nonce: string;
  createdAt: Date;
  expiresAt: Date;
}

const NonceSchema: Schema<INonce> = new Schema({
  nonce: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  expiresAt: { type: Date, required: true },
});

const Nonce = mongoose.models.Nonce || mongoose.model<INonce>('Nonce', NonceSchema);

export default Nonce;
import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  country: string;
  investmentGoals: string;
  riskTolerance: string;
  preferredIndustry: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\w+@\w+\.\w+$/, 'Please enter a valid email address'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be at least 8 characters'],
    },
    country: {
      type: String,
      required: [true, 'Country is required'],
    },
    investmentGoals: {
      type: String,
      required: [true, 'Investment goals are required'],
      enum: ['Growth', 'Income', 'Balanced', 'Conservative'],
    },
    riskTolerance: {
      type: String,
      required: [true, 'Risk tolerance is required'],
      enum: ['Low', 'Medium', 'High'],
    },
    preferredIndustry: {
      type: String,
      required: [true, 'Preferred industry is required'],
      enum: ['Technology', 'Healthcare', 'Finance', 'Energy', 'Consumer Goods'],
    },
  },
  {
    timestamps: true,
  }
);

// Check if model already exists to prevent re-compilation during hot reload in Next.js
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;


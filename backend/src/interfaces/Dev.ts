import { Document } from 'mongoose';

export default interface Dev extends Document {
    name: string;
    user: string;
    bio: string;
    avatar: string;
    timestamps: string;
    likes: string[];
    dislikes: string[];
}
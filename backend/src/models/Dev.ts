import { Schema, model } from 'mongoose';
import DevInterface from '../interfaces/Dev';

const DevScheam = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }, 
    bio: String,
    avatar: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const DevModel = model<DevInterface>('dev', DevScheam);

export default DevModel;
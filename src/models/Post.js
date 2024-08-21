import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    image: { type: String },
    visibility: { type: String, enum: ['public', 'friends', 'private'], default: 'friends' },
}, { timestamps: true });

export default mongoose.models.Post || mongoose.model('Post', PostSchema);

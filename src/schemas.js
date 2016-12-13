import mongoose from 'mongoose';

// eslint-disable-next-line
const postSchema = mongoose.Schema({
  vid: String,
  tags: Array,
  votes: Number,
});

export default mongoose.model('Post', postSchema);

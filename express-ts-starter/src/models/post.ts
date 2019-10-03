import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: 'Title is required'
  },
  content: {
    type: String,
    required: 'Content is required'
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});
const Post = mongoose.model('Post', PostSchema);
export { Post };

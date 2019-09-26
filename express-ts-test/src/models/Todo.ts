import * as mongoose from 'mongoose';
const Todo = mongoose.model(
  'todo',
  new mongoose.Schema({
    todo: String,
    complete: {
      type: Boolean,
      default: false
    }
  })
);
export default Todo;

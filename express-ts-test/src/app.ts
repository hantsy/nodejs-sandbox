import * as express from 'express';
import Todo from './models/Todo';
import * as mongoose from 'mongoose';
import { json } from 'body-parser';

const app = express();
app.use(json());

if (mongoose.connection.readyState === 0) {
  mongoose
    .connect('mongodb://localhost:32768/test')
    .then(() => console.log('Db connected...'))
    .catch(e => console.log('Db connection error', e));
}
app.get('/api/todo', async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({ error: null, data: todos });
  } catch (e) {
    res.status(500).json({ error: e.message, data: null });
  }
});
app.post('/api/todo', async (req, res) => {
  try {
    const todo = await new Todo({ todo: req.body.todo }).save();
    res.status(200).json({ error: null, data: todo });
  } catch (e) {
    res.status(500).json({ error: e.message, todo: null });
  }
});
export default app;

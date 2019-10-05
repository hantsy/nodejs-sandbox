import { Request, Response, Router } from 'express';
import {
  addNewPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost
} from '../controllers/PostHandler';

const postRoutes = Router();

postRoutes
  .route('/')
  // GET endpoint
  .get(getPosts)
  // POST endpoint
  .post(addNewPost);

// Post detail
postRoutes
  .route('/:postId')
  .get(getPostById)
  .put(updatePost)
  .delete(deletePost);

export default postRoutes;

import * as mongoose from 'mongoose';
import { Post } from '../models';
import { Request, Response, NextFunction } from 'express';

const addNewPost = (req: Request, res: Response) => {
  let newPost = new Post(req.body);

  newPost.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

const getPosts = (req: Request, res: Response) => {
  Post.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

const getPostById = (req: Request, res: Response) => {
  Post.findById(req.params.postId, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

const updatePost = (req: Request, res: Response) => {
  Post.findOneAndUpdate(
    { _id: req.params.postId },
    req.body,
    { new: true },
    (err, data) => {
      if (err) {
        res.send(err);
      }
      res.json(data);
    }
  );
};

const deletePost = (req: Request, res: Response) => {
  Post.remove({ _id: req.params.postId }, err => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Successfully deleted contact!' });
  });
};

export { addNewPost, getPosts, getPostById, updatePost, deletePost };

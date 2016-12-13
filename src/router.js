require('dotenv').config();

import express from 'express';
import mongoose from 'mongoose';
import Post from './schemas';

mongoose.connect(
  `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@ds133368.mlab.com:33368/steez`
);

// eslint-disable-next-line
const router = express.Router();

router.route('/')

  .get((req, res) => (
    Post.find((err, posts) => {
      // eslint-disable-next-line
      if (err) return console.error(err);

      return res.render('home', { posts });
    })
  ));

router.route('/post')

  .post((req, res) => (
    Post.create({
      vid: req.body.vid,
      tags: req.body.tags.split(','),
      votes: 0,
    }, (err) => (
      Post.find((error, posts) => {
        // eslint-disable-next-line
        if (err) return console.error(err);

        return res.render('home', { posts, layout: false });
      })
    ))
  ))

  .put((req, res) => (
    Post.findById(req.body.id, (err, doc) => {
      // eslint-disable-next-line
      doc.votes = doc.votes += 1;
      doc.save();
      return res.json({ votes: doc.votes });
    })
  ));

export default router;

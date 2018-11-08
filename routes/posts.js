const express = require('express');
const router  = express.Router();

const postModel = require('../models/post.js');

function sendAsJSON(req, res) {
  res.json(res.data);
}

router.route('/one')
  .get(postModel.getOnePost, postModel.getPosts, sendAsJSON);

router.route('/recent')
  .get(postModel.getMostRecentPosts, postModel.getPosts, sendAsJSON);

router.route('/search')
  .get(postModel.getPostsByTitle, postModel.getPosts, sendAsJSON);

router.route('/:id')
  .get(postModel.getPostByID, postModel.getPosts, sendAsJSON);

module.exports = router;

const express = require('express');
const router  = express.Router();

const postModel = require('../models/post.js');

function sendAsJSON(req, res) {
  res.json(res.data);
}

router.route('/')
  .get(postModel.getOnePost, sendAsJSON);

module.exports = router;

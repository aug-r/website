const express = require('express');
const router  = express.Router();

const testModel = require('../models/api.js');

function sendAsJSON(req, res) {
  res.json(res.data);
}

router.route('/')
  .get(testModel.getOnePost, sendAsJSON);

module.exports = router;

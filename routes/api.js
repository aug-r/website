const express = require('express');
const router  = express.Router();

function sendAsJSON(req, res) {
  res.json(res.data);
}

router.route('/')
  .get((req, res, next) => res.data = { message: 'hello from aug_r!' }, sendAsJSON);

module.exports = router;

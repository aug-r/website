const { getDB } = require('../lib/dbConnection');

function getOnePost(req, res, next) {
  getDB().then((db) => {
    db.collection('posts')
      .findOne({
      }, {
        _id: 0,
      })
      .then((data) => {
        res.data = data;
        next();
      })
      .catch(findErr => next(findErr));
  })
    .catch(dbErr => next(dbErr));
}

module.exports = {
  getOnePost
};

const MongoClient = require('mongodb').MongoClient;

const connectURL = process.env.DB_CONNECTION;
const connectObj = {
  useNewUrlParser: true,
}

function getOnePost(req, res, next) {
  const client = MongoClient(connectURL, connectObj);
  client.connect()
  .then((cl) => {
    const db = cl.db();
    return db.collection('posts');
  })
  .then(posts => {
    return posts.findOne({}, { projection: { _id: 0 }});
  })
  .then(result => {
    res.data = result;
    client.close();
    next();
  })
  .catch(err => next(err));
}

module.exports = {
  getOnePost
};

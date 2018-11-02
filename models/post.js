const MongoClient = require('mongodb').MongoClient;

const connectURL = process.env.DB_CONNECTION;
const connectObj = {
  useNewUrlParser: true,
}

/*
  function: getPosts
  This is a generic middleware function to get n posts, where n is set in
  res.numberOfPosts. This abstraction allows calling functions to simply set 
  the desired limit and call this function, keeping all fetch logic in one
  place.
*/
function getPosts(req, res, next) {
  const query = res.query || {};
  const options = res.filters || {};
  options.projection = { _id: 0 };
  const client = MongoClient(connectURL, connectObj);
  client.connect()
  .then((cl) => {
    const db = cl.db();
    return db.collection('posts');
  })
  .then(posts => {
    return posts.find(query, options).toArray();
  })
  .then(result => {
    res.data = result.length == 1 ? result[0] : result;
    client.close();
    next();
  })
  .catch(err => next(err));
}

function getOnePost(req, res, next) {
  res.query = {};
  res.filters = {
    limit: 1,
  };
  next();
}

function getMostRecentPosts(req, res, next) {
  // get the number of posts to fetch from the req, defaulting to 10
  const number = req.params.number_of_posts || req.body.number_of_posts || 10;
  res.query = {};
  res.filters = {
    limit: parseInt(number, 10),
    sort: {
      date: -1,
    }
  }
  next();
}

function getPostsByTitle(req, res, next) {
  const title = req.params.post_title || req.body.post_title;
  if (!title) {
    return next(new Error('Must specify a title'));
  }

  res.query = {
    title: title,
  }
  res.filters = {
    sort: {
      date: -1,
    }
  }
}

module.exports = {
  getPosts,
  getOnePost,
  getMostRecentPosts,
  getPostsByTitle,
};

require('dotenv').config({ silent: true });
const express    = require('express');
const logger     = require('morgan');
const path       = require('path');
const bodyParser = require('body-parser');
const history    = require('connect-history-api-fallback');

const PORT = process.argv[2] || process.env.PORT || 3000;
const app  = express();

app.disable('x-powered-by');
app.disable('Server');

app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

// allow CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token_authorization');
  next();
});

// import routers
const postsRouter = require('./routes/posts.js');

// routes
app.use('/api/posts', postsRouter);

// catch all for serving react bundle to unmatched paths
app.use(history({ logger }));

app.listen(PORT, () => console.warn(`Server here! Listening on port ${PORT}!`));

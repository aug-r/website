import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Posts from './Posts/Posts';
import Post from './Posts/Post';

function App() {
  return (
    <Switch>
      <Route path="/posts" component={Posts} />
      <Route path="/post/:id" component={Post} />
    </Switch>
  );
}

export default App;

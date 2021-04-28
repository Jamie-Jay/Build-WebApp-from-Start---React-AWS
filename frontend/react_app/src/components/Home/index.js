import React from 'react';
import Feed from '../Feed'

const Home = () => (
  <div>
    <h1>Home</h1>
    <Feed />
  </div>
);
// the home page is a protected route, which users can only access if they have been authenticated.
export default Home;

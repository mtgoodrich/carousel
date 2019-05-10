import React from "react";
import "./App.scss";

import Nav from "./Nav";
import Carousel from "./Carousel";
import FeaturedPosts from "./FeaturedPosts";
import PostFeaturette from "./PostFeaturette";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav position="top" />
        <Carousel />
      </header>
      <FeaturedPosts />
      <PostFeaturette />
      <Footer />
    </div>
  );
}

export default App;

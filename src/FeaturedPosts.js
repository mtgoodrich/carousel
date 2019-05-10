import React from "react";
import "./FeaturedPosts.scss";

import Button from "./Button";

const FeaturedPosts = () => {
  return (
    <section className="featured-posts">
      <div className="featured-posts__post">
        <div className="featured-posts__post--image" />
        <h1 className="featured-posts__post--heading">Heading</h1>
        <p className="featured-posts__post--content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue
          feugiat ante, nec aliquet nulla faucibus ut. Phasellus consequat
          porttitor malesuada. Proin vulputate imperdiet consectetur.
        </p>
        <Button text="View details &raquo;" />
      </div>
      <div className="featured-posts__post">
        <div className="featured-posts__post--image" />
        <h1 className="featured-posts__post--heading">Heading</h1>
        <p className="featured-posts__post--content">
          tUt aliquam tristique arcu vel vehicula. Morbi ultrices dolor justo.
          Nullam tortor ipsum, sagittis et ipsum vel, condimentum eleifend
          magna. Mauris dui velit, semper vitae consequat in, finibus sed enim.
        </p>
        <Button text="View details &raquo;" />
      </div>
      <div className="featured-posts__post">
        <div className="featured-posts__post--image" />
        <h1 className="featured-posts__post--heading">Heading</h1>
        <p className="featured-posts__post--content">
          Mauris dui velit, semper vitae consequat in, finibus sed enim. Fusce
          dignissim, lorem id euismod bibendum, velit nisl ultrices felis, ac
          euismod ante turpis ut risusre.
        </p>
        <Button text="View details &raquo;" />
      </div>
    </section>
  );
};

export default FeaturedPosts;

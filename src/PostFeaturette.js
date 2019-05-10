import React from "react";
import "./PostFeaturette.scss";

const PostFeaturette = () => {
  return (
    <section className="post-featurette">
      <article className="post-featurette__article">
        <div className="post-featurette__content-wrapper">
          <h1 className="post-featurette__heading-text">
            First featurette heading.{" "}
            <span className="post-featurette__subheading-text">
              It'll blow your mind.
            </span>
          </h1>
          <p>
            Nullam tortor ipsum, sagittis et ipsum vel, condimentum eleifend
            magna. Mauris dui velit, semper vitae consequat in, finibus sed
            enim. Fusce dignissim, lorem id euismod bibendum, velit nisl
            ultrices felis, ac euismod ante turpis ut risus.
          </p>
        </div>
        <div className="post-featurette__image-wrapper">
          <img
            src="./assets/images/500x500-image-placeholder.jpg"
            alt="placeholder for 500x500"
          />
        </div>
      </article>
      <article className="post-featurette__article">
        <div className="post-featurette__content-wrapper">
          <h1 className="post-featurette__heading-text">
            Oh yeah, it's that good.{" "}
            <span className="post-featurette__subheading-text">
              See for yourself.
            </span>
          </h1>
          <p>
            Aenean placerat consequat est, a gravida lacus dignissim id.
            Praesent pellentesque vulputate magna ac interdum. In dignissim
            bibendum nisl, sed elementum magna facilisis ac. Aenean eget rutrum
            ante, sed mattis dui. Donec luctus aliquet arcu, ullamcorper
            lobortis felis aliquam feugiat. Pellentesque tellus nunc, placerat
            eu iaculis at, porta et turpis.
          </p>
        </div>
        <div className="post-featurette__image-wrapper">
          <img
            src="./assets/images/500x500-image-placeholder.jpg"
            alt="placeholder for 500x500"
          />
        </div>
      </article>
      <article className="post-featurette__article">
        <div className="post-featurette__content-wrapper">
          <h1 className="post-featurette__heading-text">
            And lastly, this one.{" "}
            <span className="post-featurette__subheading-text">Checkmate.</span>
          </h1>
          <p>
            Maecenas fringilla sed ipsum eget cursus. Aenean dignissim non diam
            vulputate sagittis. Sed posuere leo quis nisl pharetra, ac bibendum
            massa dignissim. Vestibulum mollis non odio vel rutrum. Integer
            lacinia pharetra tellus, vitae viverra mauris sodales id. Integer
            interdum metus vel sagittis porttitor.
          </p>
        </div>
        <div className="post-featurette__image-wrapper">
          <img
            src="./assets/images/500x500-image-placeholder.jpg"
            alt="placeholder for 500x500"
          />
        </div>
      </article>
    </section>
  );
};

export default PostFeaturette;

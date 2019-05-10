import React from "react";
import "./Carousel.scss";

import Indicators from "./Indicators";
import Button from "./Button";

import data from "./assets/js/photos";

export default class Carousel extends React.Component {
  state = {
    slides: data.properties,
    currentSlide: data.properties[0]
  };

  loadNextSlide = e => {
    e.preventDefault();
    const slides = this.state.slides;
    const currentSlide = this.state.currentSlide;

    // loop through slides to get the next one
    // on last slide, load the first one
    for (let i = 0; i < slides.length; i++) {
      if (slides[i].url === currentSlide.url) {
        if (i === slides.length - 1) {
          this.setState({
            currentSlide: slides[0]
          });
        } else {
          this.setState({
            currentSlide: slides[i + 1]
          });
        }
      }
    }
  };

  loadPrevSlide = e => {
    e.preventDefault();
    const slides = this.state.slides;
    const currentSlide = this.state.currentSlide;

    // loop through slides to get the prev one
    // on first slide, load the last one
    for (let i = 0; i < slides.length; i++) {
      if (slides[i].url === currentSlide.url) {
        if (i === 0) {
          this.setState({
            currentSlide: slides[slides.length - 1]
          });
        } else {
          this.setState({
            currentSlide: slides[i - 1]
          });
        }
      }
    }
  };

  renderSlides = () => {
    const slides = this.state.slides;
    const currentSlide = this.state.currentSlide;

    return slides.map((slide, i) => {
      return (
        <div
          className={`carousel-item ${
            currentSlide.url === slide.url ? "active" : ""
          }`}
          key={i}
        >
          <div className="carousel__slide">
            <img
              src={slide.url}
              className="d-block carousel__image"
              alt={slide.title}
            />
            <div className="carousel-caption carousel__caption">
              <h5 className="carousel__caption--heading">{slide.label}</h5>
              <p className="carousel__caption--content">{slide.content}</p>
              <Button text="Sign up today" type="primary" size="lg" />
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <section className="carousel">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <Indicators
            slides={this.state.slides}
            currentSlide={this.state.currentSlide}
          />
          <div className="carousel-inner">{this.renderSlides()}</div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
            onClick={e => this.loadPrevSlide(e)}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
            onClick={e => this.loadNextSlide(e)}
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
    );
  }
}

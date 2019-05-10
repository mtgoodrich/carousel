import React from "react";

export default class Indicators extends React.Component {
  render() {
    const renderIndicators = () => {
      const { slides, currentSlide } = this.props;

      return slides.map((slide, i) => {
        return (
          <li
            key={i}
            data-target="#carouselExampleCaptions"
            data-slide-to={i}
            className={currentSlide.url === slide.url ? "active" : ""}
          />
        );
      });
    };
    return <ol className="carousel-indicators">{renderIndicators()}</ol>;
  }
}

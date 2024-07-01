import React from 'react';
import { Carousel } from 'react-bootstrap';
import frontPage1 from '../assets/images/FrontPage1.png'; // Import the local image
import frontPage2 from '../assets/images/FrontPage2.png';
import frontPage3 from '../assets/images/FrontPage3.png';

function ArticleCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={frontPage1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={frontPage2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={frontPage3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ArticleCarousel;

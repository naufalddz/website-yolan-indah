import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroCarousel.css'
// Import image
import Slide1 from '../../../assets/img/slide/slide-1.jpg';
import Slide2 from '../../../assets/img/slide/slide-2.jpg';
import Slide3 from '../../../assets/img/slide/slide-3.jpg';

// import faviconm
import { ChevronRight, ChevronLeft} from 'react-bootstrap-icons';

const slides = [
  {
    id: 1,
    image: Slide1,
    title: 'Welcome to <span>Yolan Indah Nusantara</span>',
    description: 'Selain jasa renovasi rumah, untuk bagian eksterior dan pengamanan kami juga menyediakan jasa bengkel las untuk melayani jasa pembuatan kanopi, pagar, railing tangga serta teralis dengan berbagai macam bahan baik dari besi maupun stainless.',
  },
  {
    id: 2,
    image: Slide2,
    title: 'Bengkel <span>Las</span>',
    description: 'Selain jasa renovasi rumah, untuk bagian eksterior dan pengamanan kami juga menyediakan jasa bengkel las untuk melayani jasa pembuatan kanopi, pagar, railing tangga serta teralis dengan berbagai macam bahan baik dari besi maupun stainless.',
  },
  {
    id: 3,
    image: Slide3,
    title: 'Tambah caption <span>lainnya</span>',
    description: 'Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.',
  },
];

function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((activeIndex - 1 + slides.length) % slides.length);
  };

  return (
    <section id="hero">
      <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">
        <Carousel interval={5000} pause={false} fade={true} activeIndex={activeIndex} onSelect={handleSelect}>
          {slides.map((slide, index) => (
            <Carousel.Item key={slide.id}>
              <img
                className="d-block w-100"
                src={slide.image}
                alt={`Slide ${slide.id}`}
              />
              <div className="carousel-container">
                <div className="carousel-content">
                  <h2 className="animate__animated animate__fadeInDown" dangerouslySetInnerHTML={{ __html: slide.title }}></h2>
                  {/* <h2 className="animate__animated animate__fadeInDown">{slide.title} <span>Yolan Indah Nusantara</span></h2> */}
                  <p className="animate__animated animate__fadeInUp">{slide.description}</p>
                  <a href="#/" className="btn-get-started animate__animated animate__fadeInUp">Read More</a>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        <ol className="carousel-indicators">
          {slides.map((slide, index) => (
            <li
              key={slide.id}
              data-target="#heroCarousel"
              data-slide-to={index}
              className={index === activeIndex ? "active" : ""}
            ></li>
          ))}
        </ol>

        <a className="carousel-control-prev" href="#/" role="button" data-slide="prev" onClick={prevSlide}>
          <span className="carousel-control-prev-icon" aria-hidden="true"><ChevronLeft/></span>
        </a>

        <a className="carousel-control-next" href="#/" role="button" data-slide="next" onClick={nextSlide}>
          <span className="carousel-control-next-icon" aria-hidden="true"><ChevronRight/></span>
        </a>
      </div>
    </section>
  );
}

export default HeroCarousel;

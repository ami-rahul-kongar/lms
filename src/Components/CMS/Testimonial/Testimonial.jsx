import React from 'react'
import { Container, Row, Col, Carousel } from "react-bootstrap";
import './Testimonial.css';
import testimonial1 from '../../../assets/Images/testimonial-1.jpg'
import testimonial2 from '../../../assets/Images/testimonial-2.jpg'
import testimonial3 from '../../../assets/Images/testimonial-3.jpg'
import testimonial4 from '../../../assets/Images/testimonial-4.jpg'

const Testimonial = () => {
    const testimonials = [
        {
          name: "Client Name 1",
          profession: "Profession 1",
          imageSrc: testimonial1,
          text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
        },
        {
          name: "Client Name 2",
          profession: "Profession 2",
          imageSrc: testimonial2,
          text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
        },
        {
          name: "Client Name 3",
          profession: "Profession 3",
          imageSrc: testimonial3,
          text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
        },
        {
          name: "Client Name 4",
          profession: "Profession 4",
          imageSrc: testimonial4,
          text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
        },
      ];
  return (
    <div className="testimonial-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Testimonial
          </h6>
          <h1 className="mb-5">Our Students Say!</h1>
        </div>
        <Carousel className="testimonial-carousel position-relative">
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index} className="testimonial-item text-center">
              <img
                className="border rounded-circle p-2 mx-auto mb-3"
                src={testimonial.imageSrc}
                alt={testimonial.name}
              />
              <h5 className="mb-0">{testimonial.name}</h5>
              <p>{testimonial.profession}</p>
              <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">{testimonial.text}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};


export default Testimonial

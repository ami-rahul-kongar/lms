import React from "react";
import { Carousel, Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaGraduationCap, FaGlobe, FaHome, FaBookOpen } from "react-icons/fa";
import { FaStar, FaUserTie, FaClock, FaUser } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

import carousel1 from "../../../assets/Images/carousel-1.jpg";
import carousel2 from "../../../assets/Images/carousel-2.jpg";

import aboutImage from "../../../assets/Images/about.jpg";
import cat from "../../../assets/Images/cat-1.jpg";
import cat1 from "../../../assets/Images/cat-2.jpg";
import cat2 from "../../../assets/Images/cat-3.jpg";
import cat3 from "../../../assets/Images/cat-4.jpg";
import course1 from "../../../assets/Images/course-1.jpg";
import course2 from "../../../assets/Images/course-2.jpg";
import course3 from "../../../assets/Images/course-3.jpg";
import team1 from "../../../assets/Images/team-1.jpg";
import team2 from "../../../assets/Images/team-2.jpg";
import team3 from "../../../assets/Images/team-3.jpg";
import team4 from "../../../assets/Images/team-4.jpg";
import testimonial1 from '../../../assets/Images/testimonial-1.jpg'
import testimonial2 from '../../../assets/Images/testimonial-2.jpg'
import testimonial3 from '../../../assets/Images/testimonial-3.jpg'
import testimonial4 from '../../../assets/Images/testimonial-4.jpg'

const Home = () => {
  const instructors = [
    {
      name: "Instructor Name 1",
      designation: "Designation 1",
      imageSrc: team1,
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Instructor Name 2",
      designation: "Designation 2",
      imageSrc: team2,
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Instructor Name 3",
      designation: "Designation 3",
      imageSrc: team3,
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Instructor Name 4",
      designation: "Designation 4",
      imageSrc: team4,
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
  ];

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
    <>
      <div className="header-carousel-container">
        <Carousel className="header-carousel position-relative">
          <Carousel.Item className="carousel-item position-relative">
            <img className="img-fluid" src={carousel2} alt="Carousel 1" />
            <div className="carousel-caption">
              <Container>
                <Row className="justify-content-start">
                  <Col md={8}>
                    <h5 className="text-#06bacb text-uppercase">
                      Best Online Courses
                    </h5>
                    <h1 className="display-3 text-white">
                      The Best Online Learning Platform
                    </h1>
                    <p className="fs-5 text-white">
                      Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
                      diam no. Kasd rebum ipsum et diam justo clita et kasd
                      rebum sea sanctus eirmod elitr.
                    </p>
                    <Button
                      href="#read-more"
                      className="btn-primary py-md-3 px-md-5 me-3"
                    >
                      Read More
                    </Button>
                    <Link to="/login" className="btn btn-light py-md-3 px-md-5">
                      Join Now
                    </Link>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
          {/* Second Carousel Item */}
          <Carousel.Item className="carousel-item position-relative">
            <img className="img-fluid" src={carousel1} alt="Carousel 2" />
            <div className="carousel-caption">
              <Container>
                <Row className="justify-content-start">
                  <Col md={8}>
                    <h5 className="text-#06bacb text-uppercase">
                      Best Online Courses
                    </h5>
                    <h1 className="display-3 text-white">
                      Get Educated Online From Your Home
                    </h1>
                    <p className="fs-5 text-white">
                      Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
                      diam no. Kasd rebum ipsum et diam justo clita et kasd
                      rebum sea sanctus eirmod elitr.
                    </p>
                    <Button
                      href="#read-more"
                      className="btn-primary py-md-3 px-md-5 me-3"
                    >
                      Read More
                    </Button>
                    <Link to="/login" className="btn btn-light py-md-3 px-md-5">
                      Join Now
                    </Link>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="container-xxl py-5">
        <Container>
          <Row className="g-4">
            <Col lg={3} sm={6} className="wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item text-center">
                <div className="p-4">
                  <FaGraduationCap className="service-icon" />
                  <h5 className="service-title">Skilled Instructors</h5>
                  <p className="service-description">
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6} className="wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item text-center">
                <div className="p-4">
                  <FaGlobe className="service-icon" />
                  <h5 className="service-title">Online Classes</h5>
                  <p className="service-description">
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6} className="wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item text-center">
                <div className="p-4">
                  <FaHome className="service-icon" />
                  <h5 className="service-title">Home Projects</h5>
                  <p className="service-description">
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6} className="wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item text-center">
                <div className="p-4">
                  <FaBookOpen className="service-icon" />
                  <h5 className="service-title">Book Library</h5>
                  <p className="service-description">
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="about-page">
          <Container className="py-5">
            <Row>
              <Col lg={6}>
                <div className="about-image">
                  <img className="img-fluid" src={aboutImage} alt="About Us" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="about-content">
                  <h2 className="section-title">-===About Us===-</h2>
                  <h1>Welcome to eLEARNING</h1>
                  <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit.
                  </p>
                  <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo magna dolore erat
                    amet.
                  </p>
                  <div className="about-features">
                    <div className="column">
                      <ul>
                        <li>Skilled Instructors</li>
                        <li>International Certificate</li>
                        <li>Online Classes</li>
                      </ul>
                    </div>
                    <div className="column">
                      <ul>
                        <li>Online Classes</li>
                        <li>Skilled Instructors</li>
                        <li>International Certificate</li>
                      </ul>
                    </div>
                  </div>
                  <Button className="btn btn-primary">Read More</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="course-categories">
          <Container className="py-5 category">
            <div className="text-center fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-primary px-3">
                Categories
              </h6>
              <h1 className="mb-5">Courses Categories</h1>
            </div>
            <Row className="g-3">
              <Col lg={7} md={6}>
                <Row className="g-3">
                  {/* Web Design */}
                  <Col
                    lg={12}
                    md={12}
                    className="fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <a
                      className="course-card position-relative d-block overflow-hidden"
                      href="#"
                    >
                      <img className="img-fluid" src={cat} alt="Web Design" />
                      <div className="course-card-content bg-white text-center position-absolute bottom-0 end-0 py-2 px-3">
                        <h5 className="m-0">Web Design</h5>
                        <small className="text-primary">49 Courses</small>
                      </div>
                    </a>
                  </Col>
                  {/* Graphic Design */}
                  <Col
                    lg={6}
                    md={12}
                    className="fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <a
                      className="course-card position-relative d-block overflow-hidden"
                      href="#"
                    >
                      <img
                        className="img-fluid"
                        src={cat1}
                        alt="Graphic Design"
                      />
                      <div className="course-card-content bg-white text-center position-absolute bottom-0 end-0 py-2 px-3">
                        <h5 className="m-0">Graphic Design</h5>
                        <small className="text-primary">49 Courses</small>
                      </div>
                    </a>
                  </Col>
                  {/* Video Editing */}
                  <Col
                    lg={6}
                    md={12}
                    className="fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <a
                      className="course-card position-relative d-block overflow-hidden"
                      href="#"
                    >
                      <img
                        className="img-fluid"
                        src={cat2}
                        alt="Video Editing"
                      />
                      <div className="course-card-content bg-white text-center position-absolute bottom-0 end-0 py-2 px-3">
                        <h5 className="m-0">Video Editing</h5>
                        <small className="text-primary">49 Courses</small>
                      </div>
                    </a>
                  </Col>
                </Row>
              </Col>
              <Col
                lg={5}
                md={6}
                className="fadeInUp"
                data-wow-delay="0.5s"
                style={{ minHeight: "350px" }}
              >
                <a
                  className="course-card position-relative d-block h-100 overflow-hidden"
                  href="#"
                >
                  <img
                    className="img-fluid position-absolute w-50 h-100"
                    src={cat3}
                    alt="Online Marketing"
                  />
                  <div className="course-card-content bg-white text-center position-absolute bottom-0 end-0 py-2 px-3">
                    <h5 className="m-0">Online Marketing</h5>
                    <small className="text-primary">49 Courses</small>
                  </div>
                </a>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="container-xxl py-5 courseList">
          <Container>
            <div className="text-center wow fadeInUp courseHeader">
              <h1 className="section-title bg-white text-center text-primary px-3">
                Courses
              </h1>
              <h1 className="mb-5">Popular Courses</h1>
            </div>
            <Row className="justify-content-center">
              {/* Course 1 */}
              <Col lg={4} md={6} className="wow fadeInUp courseCol">
                <Card className="course-item bg-light courseCard">
                  <div className="position-relative overflow-hidden courseImage">
                    <Card.Img variant="top" src={course1} alt="" />
                    <div className="image-overlay">
                      <div className="w-100 d-flex justify-content-center align-items-center h-100 image-overlay-content">
                        <Button
                          variant="primary"
                          className="flex-shrink-0 btn-sm px-3 border-end readMoreButton"
                        >
                          Read More
                        </Button>
                        <Button
                          variant="primary"
                          className="flex-shrink-0 btn-sm px-3 joinNowButton"
                        >
                          Join Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Card.Body className="text-center p-4 pb-0 courseCardBody">
                    <h3 className="mb-0">$149.00</h3>
                    <div className="mb-3">
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <small>(123)</small>
                    </div>
                    <h5 className="mb-4">
                      Web Design & Development Course for Beginners
                    </h5>
                  </Card.Body>
                  <div className="d-flex border-top courseFooter">
                    <small className="flex-fill text-center border-end py-2">
                      <FaUserTie className="text-primary me-2" />
                      John Doe
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <FaClock className="text-primary me-2" />
                      1.49 Hrs
                    </small>
                    <small className="flex-fill text-center py-2">
                      <FaUser className="text-primary me-2" />
                      30 Students
                    </small>
                  </div>
                </Card>
              </Col>
              {/* Course 2 */}
              <Col lg={4} md={6} className="wow fadeInUp courseCol">
                <Card className="course-item bg-light courseCard">
                  <div className="position-relative overflow-hidden courseImage">
                    <Card.Img variant="top" src={course2} alt="" />
                    <div className="image-overlay">
                      <div className="w-100 d-flex justify-content-center align-items-center h-100 image-overlay-content">
                        <Button
                          variant="primary"
                          className="flex-shrink-0 btn-sm px-3 border-end readMoreButton"
                        >
                          Read More
                        </Button>
                        <Button
                          variant="primary"
                          className="flex-shrink-0 btn-sm px-3 joinNowButton"
                        >
                          Join Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Card.Body className="text-center p-4 pb-0 courseCardBody">
                    <h3 className="mb-0">$149.00</h3>
                    <div className="mb-3">
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <small>(123)</small>
                    </div>
                    <h5 className="mb-4">Advanced Web Development Course</h5>
                  </Card.Body>
                  <div className="d-flex border-top courseFooter">
                    <small className="flex-fill text-center border-end py-2">
                      <FaUserTie className="text-primary me-2" />
                      Jane Smith
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <FaClock className="text-primary me-2" />
                      2.5 Hrs
                    </small>
                    <small className="flex-fill text-center py-2">
                      <FaUser className="text-primary me-2" />
                      50 Students
                    </small>
                  </div>
                </Card>
              </Col>
              {/* Course 3 */}
              <Col lg={4} md={6} className="wow fadeInUp courseCol">
                <Card className="course-item bg-light courseCard">
                  <div className="position-relative overflow-hidden courseImage">
                    <Card.Img variant="top" src={course3} alt="" />
                    <div className="image-overlay">
                      <div className="w-100 d-flex justify-content-center align-items-center h-100 image-overlay-content">
                        <Button
                          variant="primary"
                          className="flex-shrink-0 btn-sm px-3 border-end readMoreButton"
                        >
                          Read More
                        </Button>
                        <Button
                          variant="primary"
                          className="flex-shrink-0 btn-sm px-3 joinNowButton"
                        >
                          Join Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Card.Body className="text-center p-4 pb-0 courseCardBody">
                    <h3 className="mb-0">$199.00</h3>
                    <div className="mb-3">
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <small>(200)</small>
                    </div>
                    <h5 className="mb-4">Python Programming Masterclass</h5>
                  </Card.Body>
                  <div className="d-flex border-top courseFooter">
                    <small className="flex-fill text-center border-end py-2">
                      <FaUserTie className="text-primary me-2" />
                      Alex Johnson
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <FaClock className="text-primary me-2" />3 Hrs
                    </small>
                    <small className="flex-fill text-center py-2">
                      <FaUser className="text-primary me-2" />
                      80 Students
                    </small>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <section className="py-5">
          <Container>
            <div className="text-center mb-5">
              <h6 className="section-title bg-white text-center text-primary px-3">
                Instructors
              </h6>
              <h1 className="mb-5">Expert Instructors</h1>
            </div>
            <Row>
              {instructors.map((instructor, index) => (
                <Col key={index} lg={3} md={6} className="mb-4">
                  <Card className="border-0 shadow instructor-card">
                    <div className="overflow-hidden instructor-image">
                      <Card.Img
                        src={instructor.imageSrc}
                        alt={instructor.name}
                      />
                    </div>
                    <div className="position-relative d-flex justify-content-center">
                      <div className="bg-light d-flex justify-content-center pt-2 px-1">
                        <Button
                          variant="primary"
                          className="btn-sm-square mx-1"
                          href={instructor.socialLinks.facebook}
                        >
                          <FaFacebookF />
                        </Button>
                        <Button
                          variant="primary"
                          className="btn-sm-square mx-1"
                          href={instructor.socialLinks.twitter}
                        >
                          <FaTwitter />
                        </Button>
                        <Button
                          variant="primary"
                          className="btn-sm-square mx-1"
                          href={instructor.socialLinks.instagram}
                        >
                          <FaInstagram />
                        </Button>
                      </div>
                    </div>
                    <Card.Body className="text-center">
                      <h5 className="mb-0">{instructor.name}</h5>
                      <small>{instructor.designation}</small>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

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
                <Carousel.Item
                  key={index}
                  className="testimonial-item text-center"
                >
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
      </div>
    </>
  );
};

export default Home;

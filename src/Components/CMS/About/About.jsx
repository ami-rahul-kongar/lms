import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import aboutImage from "../../../assets/Images/about.jpg";
import "./About.css";

const About = () => {
  return (
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
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet.
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
  );
};

export default About;

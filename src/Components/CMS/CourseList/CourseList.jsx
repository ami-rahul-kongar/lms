import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaStar, FaUserTie, FaClock, FaUser } from 'react-icons/fa';
import './CourseList.css';
import course1 from '../../../assets/Images/course-1.jpg';
import course2 from '../../../assets/Images/course-2.jpg';
import course3 from '../../../assets/Images/course-3.jpg';

const CourseList = () => {
  return (
    <div className="container-xxl py-5 courseList">
      <Container>
        <div className="text-center wow fadeInUp courseHeader">
          <h1 className="section-title bg-white text-center text-primary px-3">Courses</h1>
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
                    <Button variant="primary" className="flex-shrink-0 btn-sm px-3 border-end readMoreButton">Read More</Button>
                    <Button variant="primary" className="flex-shrink-0 btn-sm px-3 joinNowButton">Join Now</Button>
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
                <h5 className="mb-4">Web Design & Development Course for Beginners</h5>
              </Card.Body>
              <div className="d-flex border-top courseFooter">
                <small className="flex-fill text-center border-end py-2"><FaUserTie className="text-primary me-2" />John Doe</small>
                <small className="flex-fill text-center border-end py-2"><FaClock className="text-primary me-2" />1.49 Hrs</small>
                <small className="flex-fill text-center py-2"><FaUser className="text-primary me-2" />30 Students</small>
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
                    <Button variant="primary" className="flex-shrink-0 btn-sm px-3 border-end readMoreButton">Read More</Button>
                    <Button variant="primary" className="flex-shrink-0 btn-sm px-3 joinNowButton">Join Now</Button>
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
                <small className="flex-fill text-center border-end py-2"><FaUserTie className="text-primary me-2" />Jane Smith</small>
                <small className="flex-fill text-center border-end py-2"><FaClock className="text-primary me-2" />2.5 Hrs</small>
                <small className="flex-fill text-center py-2"><FaUser className="text-primary me-2" />50 Students</small>
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
                    <Button variant="primary" className="flex-shrink-0 btn-sm px-3 border-end readMoreButton">Read More</Button>
                    <Button variant="primary" className="flex-shrink-0 btn-sm px-3 joinNowButton">Join Now</Button>
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
                <small className="flex-fill text-center border-end py-2"><FaUserTie className="text-primary me-2" />Alex Johnson</small>
                <small className="flex-fill text-center border-end py-2"><FaClock className="text-primary me-2" />3 Hrs</small>
                <small className="flex-fill text-center py-2"><FaUser className="text-primary me-2" />80 Students</small>
              </div>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
};

export default CourseList;

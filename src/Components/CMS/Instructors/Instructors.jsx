// Instructors.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import team1 from '../../../assets/Images/team-1.jpg';
import team2 from '../../../assets/Images/team-2.jpg';
import team3 from '../../../assets/Images/team-3.jpg';
import team4 from '../../../assets/Images/team-4.jpg';
import './Instructors.css';

const Instructors = () => {
  const instructors = [
    {
      name: 'Instructor Name 1',
      designation: 'Designation 1',
      imageSrc: team1,
      socialLinks: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
      },
    },
    {
      name: 'Instructor Name 2',
      designation: 'Designation 2',
      imageSrc: team2,
      socialLinks: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
      },
    },
    {
      name: 'Instructor Name 3',
      designation: 'Designation 3',
      imageSrc: team3,
      socialLinks: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
      },
    },
    {
      name: 'Instructor Name 4',
      designation: 'Designation 4',
      imageSrc: team4,
      socialLinks: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
      },
    },
  ];

  return (
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
                  <Card.Img src={instructor.imageSrc} alt={instructor.name} />
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
  );
};

export default Instructors;

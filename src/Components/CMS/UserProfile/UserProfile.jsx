import React, { useEffect } from "react";
import { Image, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { resetRedirectTo } from '../../Redux/AuthSlice';
import { profile_pic } from '../../Redux/Helper';
import { FaUser } from 'react-icons/fa'; // Import the FaUser icon
import "./UserProfile.css";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { redirectTo } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(resetRedirectTo(null));
  }, [redirectTo]);

  let profile_img = sessionStorage.getItem("profile_img");
  let first_name = sessionStorage.getItem("first_name");
  let last_name = sessionStorage.getItem("last_name");

  return (
    <div id='profile'>
      <Container className='mx-auto'>
        <div className='pro_card ms-auto'>
          <h2>User Profile</h2>
          <div className="profile-image">
            {profile_img !== '' ? (
              <Image src={profile_pic(profile_img)} alt='User Profile' roundedCircle />
            ) : (
              <FaUser size={70} color="#999" /> 
            )}
          </div>
          {profile_img !== '' && (
            <div className='mt-3'>
              <Button variant='danger' className='rounded-pill text-white w-75 py-2 delete-profile-button'>
                <strong>Delete Profile Pic</strong>
              </Button>
            </div>
          )}
          <div className='profile-details'>
            <Row className='mt-4'>
              <Col className='prop col-5'>First Name</Col>
              <Col className='colon col-2'>:</Col>
              <Col className='val col-5'>{first_name?.toUpperCase()}</Col>
            </Row>
            <Row className='mt-3'>
              <Col className='prop col-5'>Last Name</Col>
              <Col className='colon col-2'>:</Col>
              <Col className='val col-5'>{last_name?.toUpperCase()}</Col>
            </Row>
          </div>
          <div className='profile-actions'>
            <Button variant='primary' className='rounded-pill text-white w-75 py-2 edit-profile-button'>
              <strong>Edit Profile</strong>
            </Button>
            <Button variant='success' className='rounded-pill text-white w-75 py-2 change-password-button'>
              <strong>Change Password</strong>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UserProfile;

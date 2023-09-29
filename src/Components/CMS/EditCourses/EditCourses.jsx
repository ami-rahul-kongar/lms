import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { CoursesEdit, CoursesUpdate } from '../../Redux/CrudSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form, Button, Row, Col } from 'react-bootstrap';

const EditCourses = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Edit, loading } = useSelector((state) => state.crud);

  const [create, setCreate] = useState({
    title: '',
    description: '',
  });
  const [error, setError] = useState({});
  const [img, setImg] = useState(null);
  const [imgSrc, setImgSrc] = useState(null); // State to store the image preview URL
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setCreate({ ...create, [name]: value });
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImg(selectedImage);
    // Create a URL for the selected image and set it as the src
    const imageURL = URL.createObjectURL(selectedImage);
    setImgSrc(imageURL);
  };

  useEffect(() => {
    dispatch(CoursesEdit(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (Edit) {
      setCreate({
        title: Edit.title,
        description: Edit.description,
      });
      // Set the image preview URL if an image exists
      if (Edit.image) {
        const imageURL = `https://wtsacademy.dedicateddevelopers.us/uploads/product/${Edit.image}`;
        setImgSrc(imageURL);
      }
    }
  }, [Edit]);

  const SubmitHandle = (e) => {
    e.preventDefault();
    if (isSubmitting) {
      return; // Prevent multiple submissions
    }
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('title', create.title);
    formData.append('description', create.description);
    formData.append('id', id);
    if (img) {
      formData.append('image', img);
    }

   
    dispatch(CoursesUpdate(formData))
      .then(() => {
        navigate('/courses');
        // toast.success('Course updated successfully'); 
      })
      .catch((error) => {
       
        toast.error('Error updating course'); 
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Update Courses</h2>
        <Form onSubmit={SubmitHandle}>
          <Row>
            <Col md={4}>
              {/* Display the image */}
              {imgSrc && (
                <div className="mb-4">
                  <img
                    src={imgSrc}
                    alt={Edit.title}
                    className="img-fluid"
                  />
                </div>
              )}
              {/* Add an input to allow users to change the image */}
              <Form.Group>
                <Form.Label>Change Image</Form.Label>
                <Form.Control
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                />
              </Form.Group>
            </Col>
            <Col md={8}>
              <Form.Group>
                <Form.Label>Course Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={create.title}
                  onChange={inputChange}
                  isInvalid={!!error.title}
                  placeholder="Enter Course Title"
                />
                <Form.Control.Feedback type="invalid">
                  {error.title}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Course Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  type="text"
                  name="description"
                  value={create.description}
                  onChange={inputChange}
                  isInvalid={!!error.description}
                  placeholder="Enter Course Description"
                />
                <Form.Control.Feedback type="invalid">
                  {error.description}
                </Form.Control.Feedback>
              </Form.Group>
              <div className="text-center">
                <Button
                  type="submit"
                  className={`bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out ${
                    loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={Object.keys(error).length > 0 || loading || isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : (loading ? 'Loading...' : 'Update Course')}
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
      <ToastContainer /> 
    </div>
  );
};

export default EditCourses;

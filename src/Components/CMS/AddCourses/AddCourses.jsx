import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { creating } from '../../Redux/CrudSlice';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './AddCourses.css';

const AddCourses = () => {
  const [input, setInput] = useState({
    title: '',
    description: '',
  });
  const [error, setError] = useState({});
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let errors = {};
    if (!input.title) {
      errors.title = 'Title name cannot be blank!';
    }
    if (!input.description) {
      errors.description = 'Description cannot be blank!';
    }
    return errors;
  };

  const inputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleImageRemove = () => {
    setImage(null);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    setError(errors);

    if (Object.keys(errors).length === 0) {
      try {
        setLoading(true);
        const formData = new FormData();
        formData.append('title', input.title);
        formData.append('description', input.description);
        formData.append('image', image);

        const response = await dispatch(creating(formData));

        if (response.payload?.status === 200) {
          const token = response.payload.token;
          toast.success('Product created successfully!');
          setInput({ title: '', description: '' });
          setImage(null);

          navigate('/courses');
        } else if (response.payload?.status === 201) {
          toast.warning('Product creation failed!');
        } else {
          toast.error('Something went wrong. Please try again later.');
        }
      } catch (error) {
        toast.error('An error occurred. Please try again later.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <ToastContainer />
        <h2 className="text-2xl font-bold mb-4 text-center">Add a New Courses</h2>
        <Form onSubmit={inputSubmit}>
          <Row>
            <Col md={4}>
              <div
                className="border border-dashed border-gray-300 h-64 w-64 rounded-lg overflow-hidden relative"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                {image ? (
                  <div className="h-full w-full relative">
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Uploaded"
                      className="h-full w-full object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      className="bg-red-500 hover:bg-red-600 text-white absolute bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg"
                      onClick={handleImageRemove}
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <label
                    htmlFor="imageInput"
                    className="h-full w-full flex items-center justify-center cursor-pointer"
                  >
                    <p className="text-gray-500">
                      Drag & drop image here or click to select
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                      id="imageInput"
                    />
                  </label>
                )}
              </div>
            </Col>
            <Col md={8}>
              <Form.Group>
                <Form.Label>Product Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={input.title}
                  onChange={inputChange}
                  isInvalid={!!error.title}
                  placeholder="Enter Product Title"
                />
                <Form.Control.Feedback type="invalid">
                  {error.title}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Product Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  type="text"
                  name="description"
                  value={input.description}
                  onChange={inputChange}
                  isInvalid={!!error.description}
                  placeholder="Enter Product Description"
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
                  disabled={Object.keys(error).length > 0 || loading}
                >
                  {loading ? 'Loading...' : 'Add Product'}
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default AddCourses;

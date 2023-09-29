import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaLock, FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../Redux/AuthSlice';
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await dispatch(login(formData));
      if (response.payload.status === 200) {
        navigate('/userprofile');
      }
    } catch (error) {
      toast.error("Login failed: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="login-container">
      <div className="login-form">
        <h2 className="text-center mb-4">Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <div className="input-icon">
              <FaEnvelope className="input-icon" />
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <div className="input-icon">
              <FaLock className="input-icon" />
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mb-3" disabled={isLoading}>
            {isLoading ? <><span>Loading...</span><div className="spinner-border spinner-border-sm ml-2" role="status"></div></> : <span>Login</span>}
          </Button>

          <div className="text-center mb-3">Or login with</div>
          <div className="d-flex justify-content-center">
            <FaGoogle className="social-icon" />
            <FaFacebook className="social-icon" />
            <FaTwitter className="social-icon" />
          </div>

          <div className="text-center mt-3">
            Don't have an account? <Link to="/register">Register here</Link>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Login;

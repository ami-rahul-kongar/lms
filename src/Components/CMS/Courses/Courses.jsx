import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListData, productRemove } from "../../Redux/CrudSlice";
import { image } from "../../Redux/Helper";
import Swal from "sweetalert2";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Row, Col, Pagination, Card, Button } from "react-bootstrap";
import SweetAlert from "react-bootstrap-sweetalert";

import "./Courses.css"; 

const Courses = () => {
  const dispatch = useDispatch();
  const { Data, status } = useSelector((state) => state?.crud);
  const [showAlert, setShowAlert] = useState(false);
  const [delete_id, setDelete_id] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  useEffect(() => {
    dispatch(ListData());
  }, [dispatch]);

  const handleConfirmDelete = () => {
    if (delete_id !== "") {
      dispatch(productRemove({ id: delete_id })).then(() => {
        dispatch(ListData());
      });
    }
    setShowAlert(false);
    setDelete_id("");
  };

  const handleCancelDelete = () => {
    setShowAlert(false);
    setDelete_id("");
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = Data.slice(indexOfFirstProduct, indexOfLastProduct);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "idle" && Data.length === 0) {
    return <div>No products found.</div>;
  }

  const totalPages = Math.ceil(Data.length / productsPerPage);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-semibold my-8">Popular Courses</h2>
        </div>
        <div className="flex-grow container mx-auto px-4 my-4">
          <Row>
            {currentProducts.map((item) => (
              <Col key={item._id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <Card className="course-card">
                  <div className="course-image-container">
                    <Card.Img
                      variant="top"
                      src={item.image ? image(item.image) : "placeholder-image-url"}
                      alt={item.title}
                      className="course-image"
                    />
                  </div>
                  <Card.Body className="course-body">
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <div className="course-buttons">
                      <Link to={`/edit/${item._id}`}>
                        <Button variant="primary" className="mr-2">
                          <FaEdit /> Edit
                        </Button>
                      </Link>
                      <Button
                        variant="danger"
                        onClick={() => {
                          setDelete_id(item._id);
                          setShowAlert(true);
                        }}
                      >
                        <FaTrash /> Delete
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row className="justify-content-center mt-4">
            <Col>
              <Pagination>
                <Pagination.Prev
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                />
                {Array.from({ length: totalPages }).map((_, index) => (
                  <Pagination.Item
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    active={currentPage === index + 1}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            </Col>
          </Row>
        </div>
      </div>
      {showAlert && (
        <SweetAlert
          warning
          title="Are you sure?"
          confirmBtnText="Yes, delete it!"
          confirmBtnBsStyle="danger"
          cancelBtnText="Cancel"
          showCancelBtn
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        >
          You will not be able to recover this product!
        </SweetAlert>
      )}
    </div>
  );
};

export default Courses;

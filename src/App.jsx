import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./Components/ShareModul/Header/Header";
import Home from "./Components/CMS/Home/Home";
import Footer from "./Components/ShareModul/Footer/Footer";
import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/Register/Register";
import Chat from "./Components/CMS/Chat/Chat";
import UserProfile from "./Components/CMS/UserProfile/UserProfile";
import About from "./Components/CMS/About/About";
import Courses from "./Components/CMS/Courses/Courses";
import CourseList from "./Components/CMS/CourseList/CourseList";
import Testimonial from "./Components/CMS/Testimonial/Testimonial";
import Instructors from "./Components/CMS/Instructors/Instructors";
import Contact from "./Components/CMS/Contact/Contact";
import { toast } from "react-toastify";
import AddCourses from "./Components/CMS/AddCourses/AddCourses";
import EditCourses from "./Components/CMS/EditCourses/EditCourses";

export const UserContext = React.createContext();

function PrivateRoute({ children }) {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");

  return token !== null && token !== undefined ? (
    children
  ) : (
    <>
      <Navigate to="/login" />
      {toast.warning(
        "Please go for login either you can't access the product list"
      )}
    </>
  );
}

function App() {
  const PublicRouting = [
    {
      path: "/",
      component: <Home />,
    },
    {
      path: "/login",
      component: <Login />,
    },
    {
      path: "/register",
      component: <Register />,
    },
  ];

  const PrivateRouting = [
    {
      path: "/about",
      component: (
        <PrivateRoute>
          <About />
        </PrivateRoute>
      ),
    },
    {
      path: "/contact",
      component: (
        <PrivateRoute>
          <Contact />
        </PrivateRoute>
      ),
    },
    {
      path: "/courselist",
      component: (
        <PrivateRoute>
          <CourseList />
        </PrivateRoute>
      ),
    },
    {
      path: "/userprofile",
      component: (
        <PrivateRoute>
          <UserProfile />
        </PrivateRoute>
      ),
    },
    {
      path: "/courses",
      component: (
        <PrivateRoute>
          <Courses />
        </PrivateRoute>
      ),
    },
    {
      path: "/testimonial",
      component: (
        <PrivateRoute>
          <Testimonial />
        </PrivateRoute>
      ),
    },
    {
      path: "/instructors",
      component: (
        <PrivateRoute>
          <Instructors />
        </PrivateRoute>
      ),
    },
    {
      path: "/addcourses",
      component: (
        <PrivateRoute>
          <AddCourses />
        </PrivateRoute>
      ),
    },
    {
      path: "/edit/:id",
      component: (
        <PrivateRoute>
          <EditCourses/>
        </PrivateRoute>
      ),
    },
  ];

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {PublicRouting.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}

        {PrivateRouting.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
      <Chat />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate(); 
  const [formdata, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    conf_password: ''
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  };

  const checkValidation = () => {
    if (!formdata.username || !formdata.email || !formdata.password || !formdata.conf_password) {
      toast.warning("All fields are required", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formdata.email.toLowerCase())) {
      toast.warning("Please enter a valid email", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
      });
      return false;
    }

    if (formdata.password !== formdata.conf_password) {
      toast.warning("Passwords do not match", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkValidation()) {
      console.log("User Registered:", formdata);
      toast.success("Registration Successfull!", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
      });

      setFormData({
        name: '',
        username: '',
        email: '',
        password: '',
        conf_password: '',
      });

      setTimeout(() => {
        navigate("/login");
      }, 1000); 

    }
  };

  return (
    <div style={{
      backgroundImage: "url('https://img.freepik.com/free-photo/top-view-arrangement-with-salad-boxes-sauce_23-2148247882.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div className="container shadow bg-light p-4" style={{ width: '30%', borderRadius: '10px' }}>
        <h2 className="text-center">Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Enter Username:</label>
            <input
              type="text"
              name="username"
              className="form-control"
              value={formdata.username}
              onChange={handleInput}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Enter Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formdata.email}
              onChange={handleInput}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Enter Password:</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={formdata.password}
              onChange={handleInput}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Confirm Password:</label>
            <input
              type="password"
              name="conf_password"
              className="form-control"
              value={formdata.conf_password}
              onChange={handleInput}
              required
            />
          </div>

          <button type="submit" className="btn btn-success d-flex mx-auto">Register</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;

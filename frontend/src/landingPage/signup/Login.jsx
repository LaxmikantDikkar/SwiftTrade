import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./signup.css"

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

    const handleGuestLogin = async () => {
       
  try {
    const { data } = await axios.post(
      "https://swifttrading.netlify.app/login",
      {
        email: "guestlogin@gmail.com",
        password: "Pass@123",
      },
      { withCredentials: true }
    );

    console.log(data);
    // redirect after success
    if (data.success) window.location.href = "https://swifttradingd.netlify.app";
  } catch (err) {
    console.log(err);
  }
};
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const { data } = await axios.post(
        "https://swifttrading.netlify.app/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "https://swifttrading.netlify.app/login";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="signup_body">
    <div className="form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
        <button onClick={handleGuestLogin}>Guest Login</button>
        <span>
          Already have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
    </div>
  );
};

export default Login;

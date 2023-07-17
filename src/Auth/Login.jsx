import React, { useState } from "react";
import swal from "sweetalert";
import { Link } from "react-router-dom";
const Login = () => {
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (token) {
      const getEmail = localStorage.getItem("email");
      const getPwd = localStorage.getItem("password");
      if (formData.email == getEmail && getPwd == formData.password) {
        swal("Message", "Logged in Successfully", "success");
        localStorage.setItem("login",true)
        document.getElementById("redirect").click();
        window.location.reload()
      }
    } else {
      swal("Message", "Invalid Credential", "error");
    }

    // Add your login logic here
  };

  return (
    <div className="flex justify-center  mb-10 mt-24 items-center md:h-[50vh] bg-gray-100">
      <div className="max-w-md w-full mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-center px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
      <Link to="/" id="redirect" className="hidden"></Link>
    </div>
  );
};

export default Login;

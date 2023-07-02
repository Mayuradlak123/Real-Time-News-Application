import React, { useState } from 'react';
import {Link} from "react-router-dom"
const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your register logic here
  };

  return (
    <div className="flex justify-center mb-10 mt-24 items-center md:h-[50vh] ">
      <div className="max-w-md w-full mx-auto px-4 py-4 bg-white border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit} action='/'>
          <div className="mb-4">
           
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder='Enter your name'
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>
          <div className="mb-4">
          
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Contact No."
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>
          <div className="mb-4">
          
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>
          <Link
         to="/"
         type="submit"
            className="w-full text-center px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
          >
            Register
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;

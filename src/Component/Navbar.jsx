import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'Contact us', link: '/contact' },
    { id: 3, name: 'News', link: '/news' },
    { id: 4, name: 'Business', link: '/business' },
    { id: 5, name: 'Sports', link: '/sports' },
    { id: 6, name: 'Health', link: '/health' },
    { id: 7, name: 'Technology', link: '/technology' },
    { id: 8, name: 'Entertainment', link: '/entertainment' },
  ];

  return (
    <nav className=" px-4 bg-gray-800 py-3 flex justify-between fixed top-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
       
      <div className="lg:hidden">
          <button
            type="button"
            className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200"
            onClick={toggleMenu}
          >
            <svg
              className={`h-6 w-6 fill-current ${isMenuOpen ? 'hidden' : 'block'}`}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
              />
            </svg>
            <svg
              className={`h-6 w-6 fill-current ${isMenuOpen ? 'block' : 'hidden'}`}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 14H4V12H20V14ZM20 9H4V7H20V9ZM20 19H4V17H20V19Z"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full lg:flex  lg:w-auto ]`}
        >
          <div className="lg:flex-grow">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="block  lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4 no-underline"
              >
                {item.name}
              </Link>
            ))}
          </div>
         
        </div>
      </div>
      <div className="flex items-center px-4 ">
            <Link
              to="/login"
              className="text-white hover:text-gray-200 no-underline   px-1 py-1"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-white hover:text-gray-200 no-underline  rounded-md px-1 py-1"
            >
              Register
            </Link>
          </div>
    </nav>
  );
};

export default Navbar;

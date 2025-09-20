import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import NavBarLogo from '../assets/Navbarlogo.png'

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200/50 h-20 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 z-50">
      <div className="flex items-center space-x-2">
        <img
          src={NavBarLogo}
          alt="AI Lab Logo"
          className="h-20 w-35 object-contain"
        />
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-3xl text-gray-700 focus:outline-none">
          {isOpen ? (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <ul className="hidden md:flex flex-row justify-between items-center gap-8 transition duration-300 ease-in-out text-lg">
        <Link to="/">
          <li className={`font-medium transition-colors duration-200 relative group ${
            location.pathname === '/' ? 'text-red-600' : 'text-gray-700 hover:text-red-500'
          }`}>
            Home
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
              location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </li>
        </Link>
        <Link to="/about">
          <li className={`font-medium transition-colors duration-200 relative group ${
            location.pathname === '/about' ? 'text-red-600' : 'text-gray-700 hover:text-red-500'
          }`}>
            About
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
              location.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </li>
        </Link>
        <Link to="/projects">
          <li className={`font-medium transition-colors duration-200 relative group ${
            location.pathname === '/projects' ? 'text-red-600' : 'text-gray-700 hover:text-red-500'
          }`}>
            People
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
              location.pathname === '/projects' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </li>
        </Link>
        <Link to="/research">
          <li className={`font-medium transition-colors duration-200 relative group ${
            location.pathname === '/research' ? 'text-red-600' : 'text-gray-700 hover:text-red-500'
          }`}>
            Resources
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
              location.pathname === '/research' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </li>
        </Link>
        <Link to="/team">
          <li className={`font-medium transition-colors duration-200 relative group ${
            location.pathname === '/team' ? 'text-red-600' : 'text-gray-700 hover:text-red-500'
          }`}>
            Initiatives
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
              location.pathname === '/team' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </li>
        </Link>
        <Link to="/team">
          <li className={`font-medium transition-colors duration-200 relative group ${
            location.pathname === '/team' ? 'text-red-600' : 'text-gray-700 hover:text-red-500'
          }`}>
            Affiliates
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
              location.pathname === '/team' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </li>
        </Link>
        <Link to="/contact">
          <li className={`font-medium transition-colors duration-200 relative group ${
            location.pathname === '/contact' ? 'text-red-600' : 'text-gray-700 hover:text-red-500'
          }`}>
            Contact
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
              location.pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </li>
        </Link>
      </ul>

      {isOpen && (
        <ul className="absolute top-20 right-0 w-64 h-screen bg-white/90 backdrop-blur-md flex flex-col items-start justify-start gap-16 pt-16 px-6 md:hidden transition duration-300 ease-in-out shadow-2xl">
          <Link to="/" onClick={toggleMenu}><li className="hover:text-red-600 text-lg font-medium">Home</li></Link>
          <Link to="/about" onClick={toggleMenu}><li className="hover:text-red-600 text-lg font-medium">About</li></Link>
          <Link to="/projects" onClick={toggleMenu}><li className="hover:text-red-600 text-lg font-medium">People</li></Link>
          <Link to="/research" onClick={toggleMenu}><li className="hover:text-red-600 text-lg font-medium">Resources</li></Link>
          <Link to="/team" onClick={toggleMenu}><li className="hover:text-red-600 text-lg font-medium">Initiatives</li></Link>
          <Link to="/contact" onClick={toggleMenu}><li className="hover:text-red-600 text-lg font-medium">Affiliates</li></Link>
          <Link to="/contact" onClick={toggleMenu}><li className="hover:text-red-600 text-lg font-medium">Contact</li></Link>
        </ul>
      )}
    </div>
  );
};

export default NavBar;

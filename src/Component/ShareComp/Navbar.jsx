import { useState, useContext, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons
import '../Style/Style.css'

export default function Navbar() {
  const { user, logOut, googleWithLogin } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handlerLogout = () => {
    logOut();
    toast.success('Successfully Logged Out');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev); // Toggle menu visibility
  };

  return (
    <header className="border-0 border-b-2 border-gray-100">
      <nav className="container mx-auto py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="lg:text-2xl ps-3 text-xl font-bold font-script">
          <NavLink to="/">Queries</NavLink>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl text-gray-800" />
            ) : (
              <FaBars className="text-2xl text-gray-800" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">

{
  user ? <>
  
  
          <li><NavLink to="/" end>HOME</NavLink></li>
          <li><NavLink to="/add-queries">ADD QUERIES</NavLink></li>
          <li><NavLink to="/my-recommendations">MY RECOMMENDATIONS</NavLink></li>
          <li><NavLink to="/my-query">MY QUERIES</NavLink></li>
          <li><NavLink to="/all-queries">ALL QUERIES</NavLink></li>
          <li><NavLink to="/recommendations-for-me">RECOMMENDATIONS FOR ME</NavLink></li>

  </> : <>
  
  <li><NavLink to="/" end>HOME</NavLink></li>
  <li><NavLink to="/all-queries">ALL QUERIES</NavLink></li>
  </>
}

          






        </ul>

        {/* Mobile Navigation (Toggled by Hamburger Icon) */}
        <ul
          className={`md:hidden space-y-4 text-sm font-medium absolute top-16 left-0 w-full bg-white shadow-lg py-4 px-6 transition-all ease-in-out duration-300 ${isMobileMenuOpen ? "block opacity-100" : "hidden opacity-0"}`}
        >

         {
  user ? <>
  
  
          <li><NavLink to="/" end>HOME</NavLink></li>
          <li><NavLink to="/add-queries">ADD QUERIES</NavLink></li>
          <li><NavLink to="/my-recommendations">MY RECOMMENDATIONS</NavLink></li>
          <li><NavLink to="/my-query">MY QUERIES</NavLink></li>
          <li><NavLink to="/all-queries">ALL QUERIES</NavLink></li>
          <li><NavLink to="/recommendations-for-me">RECOMMENDATIONS FOR ME</NavLink></li>

  </> : <>
  
        <li><NavLink to="/" end>HOME</NavLink></li>
        <li><NavLink to="/all-queries">ALL QUERIES</NavLink></li>
  </>
}
        </ul>

        {/* Authentication Buttons */}
        <div className="space-x-2 font-medium lg:space-x-3 flex items-center">
          {user ? (
            <>
              <div className="flex items-center space-x-2">
                <img className="w-10 h-10 object-cover rounded-full border-2 border-green-500" src={user?.photoURL} alt="user" />
                <Link onClick={handlerLogout} className="btn h-8 px-3" to="/login">
                  <button className="cursor-pointer">Log Out</button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center space-x-2 ">
                <Link className="btn h-8 px-3" to="/login">
                  <button className="cursor-pointer">Login</button>
                </Link>
                <Link className="btn h-8" to="/register">
                  <button className="cursor-pointer">Register</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

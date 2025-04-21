import React from 'react';
import ErrorPage from '../../assets/errro img.png';
import { Link } from 'react-router'; // Corrected import

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex items-center flex-col text-center px-4">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! Page not found.</h1>
        <p className="text-gray-600 text-lg mb-6">
          The page you're looking for doesn't exist or was moved.
        </p>
        <img className="w-96 mb-6" src={ErrorPage} alt="Error illustration" />
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

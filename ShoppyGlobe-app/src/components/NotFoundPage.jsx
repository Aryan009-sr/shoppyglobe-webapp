// src/components/NotFound.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NotFoundPage = () => {
  const location = useLocation();
  const invalidPath = location.pathname;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 text-center">
      <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
      <h2 className="text-3xl font-bold mt-4 text-gray-800">Page Not Found</h2>
      <p className="mt-2 text-lg text-gray-600">
        The route <code className="bg-gray-200 text-red-500 rounded p-1">{invalidPath}</code> does not exist.
      </p>
      <p className="mt-4 text-md text-gray-500">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
import React from "react";
import { Link } from "react-router";
import { AlertCircle } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center p-4">
      {/* Lucide Icon */}
      <AlertCircle className="w-20 h-20 text-error mb-4" />

      <h1 className="text-6xl font-bold text-error mb-2">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-500 mb-6">
        Sorry! The page you are looking for does not exist.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;

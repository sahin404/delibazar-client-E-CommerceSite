import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-300">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mt-4">Oops! Page not found</p>
        <p className="text-gray-500 mt-2">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link to="/" className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition-all">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

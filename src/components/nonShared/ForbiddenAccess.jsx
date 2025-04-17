import { Link } from 'react-router-dom';

const ForbiddenAccess = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 text-center max-w-md">
        <div className="text-red-500 mb-4">
          
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">403 Forbidden</h1>
        <p className="text-gray-600 mb-6">
          You do not have permission to access this page. Admin access is required.
        </p>
        <Link to="/">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ForbiddenAccess;

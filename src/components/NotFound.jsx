import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex h-[92vh] flex-col items-center justify-center bg-gray-50">
      <h2 className="mb-4 text-6xl font-extrabold text-gray-800">
        <span className="text-red-700">404</span>
      </h2>
      <p className="mb-8 text-xl font-medium text-gray-600">
        Oops! This page fled to another planet.
      </p>
      <Link
        to="/"
        className="rounded-full bg-red-600 px-8 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105"
      >
        Go Back Home
      </Link>
    </div>
  );
}

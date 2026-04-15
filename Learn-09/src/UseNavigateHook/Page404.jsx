import { useNavigate} from "react-router-dom";

export default function Page404() {
  const navitage = useNavigate();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-600 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-lg w-full text-center">
        <h1 className="text-7xl font-extrabold text-indigo-600 mb-4">404</h1>

        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>

        <p className="text-gray-600 mb-6">
          Oops! The page you're looking for doesn’t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navitage(-1)}
            className="px-6 py-3 rounded-lg border border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition"
          >
            Go Back
          </button>

          <button
            onClick={() => navitage("/")}
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            Back Home
          </button>
        </div>
      </div>
    </main>
  );
}

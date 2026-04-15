import { Link, Outlet, useLocation } from "react-router-dom";

const Pvp = () => {
  const location = useLocation();
  const isMainPath = location.pathname === "/pvp";

  return (
    <main className="bg-gray-50 text-gray-800">
      {isMainPath && (
        <>
          <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-10 px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy & Policy
            </h2>
            <p className="text-lg md:text-xl">
              Your privacy is important to us.
            </p>
          </section>

          <section className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full h-[60vh]">
            <Link
              to="privacy"
              className=" w-[300px] h-[40vh] px-6 py-3 rounded-lg border border-indigo-600 text-indigo-600 text-6xl hover:bg-indigo-50 transition flex justify-center items-center"
            >
              Privacy
            </Link>

            <Link
              to="policies"
              className="w-[300px] h-[40vh] px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition text-6xl flex justify-center items-center"
            >
              Policies
            </Link>
          </section>
        </>
      )}
      <Outlet />
    </main>
  );
};

export default Pvp;

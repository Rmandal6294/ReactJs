const HomePage = () => {
  return (
    <main className="bg-gray-50 text-gray-800">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to MyCompany
          </h2>
          <p className="text-lg md:text-xl mb-6">
            We build modern, fast, and scalable web solutions for your business.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10">Our Features</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-3">Fast Performance</h4>
              <p>Optimized apps that load quickly and run smoothly.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-3">Responsive Design</h4>
              <p>Looks perfect on mobile, tablet, and desktop devices.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-3">Secure & Reliable</h4>
              <p>We ensure your data is protected and systems are stable.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">About Us</h3>
          <p className="text-lg text-gray-600">
            MyCompany is dedicated to delivering high-quality digital solutions.
            Our team focuses on innovation, design, and performance to help your
            business grow online.
          </p>
        </div>
      </section>

      <section className="bg-indigo-600 text-white py-16 px-4 text-center">
        <h3 className="text-3xl font-bold mb-4">
          Ready to Start Your Project?
        </h3>
        <p className="mb-6">
          Contact us today and let’s build something amazing together.
        </p>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        <p>© {new Date().getFullYear()} MyCompany. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default HomePage;

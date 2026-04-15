
const AboutPage = () => {
  return (
    <main className="bg-gray-50 text-gray-800">
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4"> About MyCompany</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          We are passionate about building digital experiences that make
          businesses grow.
        </p>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Our Story</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            MyCompany started with a simple mission — to create fast, modern,
            and user-friendly web applications. Over time, we have helped
            businesses transform their ideas into powerful digital products. Our
            focus is always on quality, performance, and user experience.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow">
            <h4 className="text-2xl font-semibold mb-4 text-indigo-600">
              Our Mission
            </h4>
            <p className="text-gray-600">
              To empower businesses with innovative technology solutions that
              are scalable, secure, and impactful.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h4 className="text-2xl font-semibold mb-4 text-blue-600">
              Our Vision
            </h4>
            <p className="text-gray-600">
              To become a leading digital solutions provider known for
              creativity, reliability, and excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold mb-10">Our Team</h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="mx-auto rounded-full mb-4"
              />
              <h4 className="font-semibold text-lg">John Doe</h4>
              <p className="text-gray-500">CEO & Founder</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="mx-auto rounded-full mb-4"
              />
              <h4 className="font-semibold text-lg">Jane Smith</h4>
              <p className="text-gray-500">Lead Developer</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="mx-auto rounded-full mb-4"
              />
              <h4 className="font-semibold text-lg">Alex Brown</h4>
              <p className="text-gray-500">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        <p>© {new Date().getFullYear()} MyCompany. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default AboutPage;

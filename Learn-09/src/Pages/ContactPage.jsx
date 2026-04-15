import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! 🚀");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="bg-gray-50 text-gray-800">

      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-10 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg md:text-xl">
          We'd love to hear from you! Send us a message.
        </p>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow"
          >
            <h3 className="text-2xl font-semibold mb-6">Send Message</h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

            <p className="mb-4 text-gray-600">📍 Address: Your City, Country</p>
            <p className="mb-4 text-gray-600">
              📧 Email: support@mycompany.com
            </p>
            <p className="mb-4 text-gray-600">📞 Phone: +123 456 7890</p>

            <p className="mt-6 text-gray-500">
              We usually respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        <p>© {new Date().getFullYear()} MyCompany. All rights reserved.</p>
      </footer>
    </main>
  );
}

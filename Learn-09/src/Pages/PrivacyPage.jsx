const PrivacyPage = () => {
  return (
    <main className="bg-gray-50 text-gray-800">
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-10 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Privacy Statements
        </h2>
        <p className="text-lg md:text-xl">Your privacy is important to us.</p>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-3">Introduction</h3>
            <p className="text-gray-600">
              At MyCompany, we respect your privacy and are committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, and safeguard your data.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Information We Collect
            </h3>
            <p className="text-gray-600">
              We may collect personal information such as your name, email
              address, and any message you send through our contact form.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              How We Use Your Information
            </h3>
            <p className="text-gray-600">
              We use your information to respond to inquiries, improve our
              services, and provide a better user experience.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">Data Protection</h3>
            <p className="text-gray-600">
              We implement security measures to protect your personal data.
              However, no method of transmission over the internet is 100%
              secure.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Third-Party Services
            </h3>
            <p className="text-gray-600">
              We may use third-party services to operate our website. These
              services may have access to your information solely to perform
              tasks on our behalf.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">Cookies</h3>
            <p className="text-gray-600">
              Our website may use cookies to enhance user experience. You can
              choose to disable cookies through your browser settings.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">Your Rights</h3>
            <p className="text-gray-600">
              You have the right to access, update, or delete your personal
              information. Contact us if you wish to exercise these rights.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Changes to This Policy
            </h3>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">Contact Us</h3>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please
              contact us at support@mycompany.com.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        <p>© {new Date().getFullYear()} MyCompany. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default PrivacyPage;

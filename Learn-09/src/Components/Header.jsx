import { useState } from "react";
import { Menu, X } from "lucide-react";
import {Link} from "react-router-dom"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">MyCompany</h1>

        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to='/' className="hover:text-blue-600">
            Home
          </Link>
          <Link to='/about' className="hover:text-blue-600">
            About
          </Link>
          <Link to='/contact' className="hover:text-blue-600">
            Contact
          </Link>
          <Link to='/pvp' className="hover:text-blue-600">
            Policy & Privacy
          </Link>
        </nav>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-white shadow">
          <Link to='/' className="block text-gray-700 hover:text-blue-600">
            Home
          </Link>

          <Link to='/about' className="block text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link to='/contact' className="block text-gray-700 hover:text-blue-600">
            Contact
          </Link>
          <Link to='/pvp' className="block text-gray-700 hover:text-blue-600">
            Policy & Privacy
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

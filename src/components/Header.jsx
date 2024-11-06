import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-transparent h-16 flex flex-row items-center justify-between px-4 shadow-md">
      <div className="text-neutral text-2xl font-bold">
        <Link to="/">
          Itik Solutions
        </Link>
      </div>
      <nav className="space-x-4">
        <Link
          to="/services"
          className="text-neutral-white hover:text-secondary-light transition"
        >
          Services
        </Link>
        <Link
          to="/mentorship"
          className="text-neutral-white hover:text-secondary-light transition"
        >
          Mentorship
        </Link>
        <Link
          to="/about"
          className="text-neutral-white hover:text-secondary-light transition"
        >
          About Us
        </Link>
      </nav>
      <Link to="/contact">
        <button className="bg-accent hover:bg-accent-dark text-neutral-white px-4 py-2 rounded-lg shadow-lg transition">
          Contact Us
        </button>
      </Link>
    </header>
  );
};

export default Header;

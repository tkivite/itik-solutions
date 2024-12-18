import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/image.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MobileSidebar from "./Sidebar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        isScrolled ? "bg-blue-950" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-6 py-2 flex justify-between  relative max-h-24">
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-gray-300 -translate-y-14 -translate-x-12 sm:-translate-x-0"
        >
          <img src={logo} alt="logo" width={270} height={270} />
        </Link>
        <div className="md:hidden absolute top-4 right-7 z-[100]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 focus:outline-none z-40 absolute"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <SlideTabs />

        <>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black z-40"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsOpen(false)}
            />
          )}
          <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
      </div>
    </header>
  );
}

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="hidden md:flex relative w-fit rounded-full p-1"
    >
      <Tab setPosition={setPosition} link="/">
        Home
      </Tab>
      <Tab setPosition={setPosition} link="/services">
        Services
      </Tab>
      <Tab setPosition={setPosition} link="/about">
        About
      </Tab>
      <Tab setPosition={setPosition} link="/mentorship">
        Mentorship
      </Tab>
      <Tab setPosition={setPosition} link="/contact">
        Contact
      </Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, link }) => {
  const ref = useRef(null);

  return (
    <Link
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      to={link}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs font-bold text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </Link>
  );
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  setPosition: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired,
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-gray-100 md:h-12"
    />
  );
};

Cursor.propTypes = {
  position: PropTypes.shape({
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    opacity: PropTypes.number.isRequired,
  }).isRequired,
};

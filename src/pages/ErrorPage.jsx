import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/itikLogo.png";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="from-blue-300 bg-gradient-to-br  via-blue-200 to-blue-300 h-screen flex flex-col justify-center items-center text-center">
      <Helmet>
        <title>ITIK Solutions | 404 Error</title>
        <meta
          name="description"
          content="This is the error page of ITIK Solutions."
        />
      </Helmet>
      {/* Animated Error Icon */}
      <motion.div
        className="bg-transparent p-8 rounded-full mb-6"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.5 }}
      >
        <img src={logo} width={1000} className="fill-black" />
      </motion.div>

      {/* Animated Heading */}
      <div className="sm:-translate-y-64 -translate-y-20">
        <motion.h1
          className="text-4xl font-bold text-red-600 mb-4 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Oops! Something Went Wrong.
        </motion.h1>

        {/* Animated Description */}
        <motion.p
          className="text-lg text-neutral-dark mb-6  "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          It seems the page you&apos;re looking for doesn&apos;t exist or has
          been moved.
        </motion.p>

        {/* Animated Button */}
        <motion.button
          onClick={handleGoHome}
          className="bg-primary text-white py-2 px-6 rounded-lg shadow-lg text-lg hover:bg-primary-dark transition "
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Go Back Home
        </motion.button>
      </div>
    </div>
  );
};

export default ErrorPage;

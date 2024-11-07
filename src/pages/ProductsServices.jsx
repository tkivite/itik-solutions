import { motion } from "framer-motion";
import Background1 from "../assets/sean-pollock-PhYq704ffdA-unsplash.jpg";
import {
  Monitor,
  Target,
  TrendingUp,
  Network,
  Search,
  Smartphone,
} from "lucide-react";
import illustration from "../assets/illustration1.png";
import { FaCompass, FaPalette, FaCogs, FaRocket } from "react-icons/fa";

const productServices = [
  {
    icon: Monitor,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
  },
  {
    icon: Target,
    title: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
  },
  {
    icon: TrendingUp,
    title: "Startup Solutions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
  },
  {
    icon: Network,
    title: "Networking Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
  },
  {
    icon: Smartphone,
    title: "Apps Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
  },
];
const services = [
  "Remote IT Assistance",
  "Cloud Services",
  "Managed IT Service",
  "IT Security Services",
  "Practice IT Management",
  "Solving IT Problems",
];

const ProductsServices = () => {
  return (
    <div className="relative text-neutral-dark h-screen text-center ">
      <div className="fixed inset-0">
        <img
          src={Background1}
          alt="backgroundImage"
          className="object-cover w-full h-full brightness-50"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
        {/* Dark overlay */}
      </div>

      <div className="absolute z-10 w-full mx-auto flex flex-col">
        <section className="text-center p-28 bg-transparent">
          <motion.h1
            className="text-4xl font-bold text-neutral-light"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Products and Services
          </motion.h1>
        </section>
        <section className="bg-neutral-light pb-6 text-center pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-3/4 mx-auto ">
            {productServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-700 hover:-translate-y-3 ease-in-out"
                  whileHover="hover"
                >
                  <div className="flex flex-col items-start">
                    <motion.div
                      className="p-3 rounded-lg mb-4"
                      variants={{ hover: { scaleX: -1 } }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <Icon className="w-9 h-9 text-primary-dark" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-neutral-dark mb-3">
                      {service.title}
                    </h3>
                    <p className="text-neutral mb-4">{service.description}</p>
                    <a
                      href="#"
                      className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-8 mb-20 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-100 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <img
              src={illustration}
              alt="IT Services Illustration"
              className="w-[35rem] h-auto"
            />
          </div>
          <div className="order-1 lg:order-2 p-4">
            <div className="space-y-6">
              <span className="text-primary font-medium">
                WHY CHOOSE US?
              </span>
              <h2 className="text-4xl font-bold text-neutral-dark">
                Safeguard Your Brand with Cyber Security and IT Solutions
              </h2>
              <p className="text-neutral">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center p-4 rounded-lg border border-gray-300 bg-gradient-to-r from-violet-50 via-transparent to-primary-dark bg-[length:200%_100%] bg-left transition-all duration-500 ease-in-out"
                    initial={{ backgroundPosition: "left" }}
                    whileHover={{ backgroundPosition: "right" }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-1 h-4 bg-primary mr-3" />
                    <span className="text-neutral-dark">{service}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="pb-6">
          <h2 className="text-3xl font-bold text-neutral-light mb-6 text-center">
            Our Work Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-4 w-[95%] mx-auto">
            {[
              {
                title: "Discover",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.",

                icon: <FaCompass className="text-primary-dark text-4xl" />, 
              },
              {
                title: "Design & Development",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.",

                icon: <FaPalette className="text-primary-dark text-4xl" />, 
              },
              {
                title: "Install & Testing",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.",

                icon: <FaCogs className="text-primary-dark text-4xl" />, 
              },
              {
                title: "Project Delivery",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.",

                icon: <FaRocket className="text-primary-dark text-4xl" />, 
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white/95 rounded-lg text-center shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-12 w-12 mx-auto mb-4">{item.icon}</div>{" "}
                
                <h3 className="text-lg font-semibold text-neutral-text">
                  {item.title}
                </h3>
                <p className="text-neutral-dark mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
        <section className="grid lg:grid-cols-2 gap-12 items-center bg-neutral-light">
          <div className="space-y-6 flex justify-center flex-col items-center">
            <span className="text-primary font-medium">WHY TRUST US?</span>
            <h2 className="text-4xl font-bold text-gray-900">
              Achieve Digital Transformation For Your Retail Business Services
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://file.removal.ai/preview/c5cd2bc2-0a64-49a0-8ada-443d2b7983b1-pngtreepeople-putting-together-a-series_7537093-1.png"
              alt="Digital Transformation Illustration"
              className="w-[35rem] h-auto"
            />
          </div>
        </section>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className=" fixed bottom-6 right-2 p-3 bg-primary-dark text-white rounded-full shadow-lg hover:bg-primary transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductsServices;

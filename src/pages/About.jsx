import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaEye, FaBullseye } from "react-icons/fa";
import {
  FaCompass,
  FaPalette,
  FaCogs,
  FaRocket,
  FaUserTie,
  FaCode,
  FaHeadset,
} from "react-icons/fa";
import Person1 from "../assets/bansah-photography-mIFiMZlh3Zg-unsplash.jpg";
import Person2 from "../assets/tara-urso-VxS-jzGRopM-unsplash.jpg";
import Person3 from "../assets/elizeu-dias-2EGNqazbAMk-unsplash.jpg";
import Person4 from "../assets/prince-akachi-i2hoD-C2RUA-unsplash.jpg";
import Background1 from "../assets/sean-pollock-PhYq704ffdA-unsplash.jpg";
import Footer from "../components/layout/Footer";
import { useNavigate } from "react-router-dom";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(null);
  const text = "Powering Businesses Through Technology";
  const navigate = useNavigate();

  return (
    <div className="relative text-neutral-dark h-screen ">
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
        {/* Hero Section */}
        <section className="text-center bg-transparent ">
          <div>
            <motion.h1
              className="text-4xl font-bold text-neutral-light mt-20"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              About Us
            </motion.h1>
            <motion.p
              className="text-lg text-neutral-light text-center mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {text.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: index * 0.03,
                    duration: 0.3,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.p>
          </div>
        </section>

        <section className="bg-neutral-light pb-6 text-center pt-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <FaBullseye className="mr-2 text-primary-dark" size={24} /> Our
            Mission
          </h2>
          <p className="text-neutral-dark">
            Our mission is to provide cutting-edge solutions that empower
            businesses to reach their full potential.
          </p>
        </section>

        <section className=" bg-neutral-light pb-6 pt-6 text-center">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <FaEye className="mr-2 text-primary-dark" size={24} /> Our Vision
          </h2>
          <p className="text-neutral-dark">
            We envision a future where technology seamlessly integrates into
            every business, enhancing productivity and fostering innovation.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-neutral-light p-2 sm:p-12">
          {[
            {
              title: "Consulting",
              description: "Comprehensive consulting for modern businesses.",
              icon: <FaUserTie className="text-primary-dark text-4xl" />,
            },
            {
              title: "Development",
              description: "Innovative solutions tailored for your needs.",
              icon: <FaCode className="text-primary-dark text-4xl" />,
            },
            {
              title: "Support",
              description: "Reliable support for your continued success.",
              icon: <FaHeadset className="text-primary-dark text-4xl" />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/95 rounded-lg text-center shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-12 w-12 mx-auto mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-neutral-text">
                {item.title}
              </h3>
              <p className="text-neutral-dark mt-2">{item.description}</p>
            </motion.div>
          ))}
        </section>

        {/* Team Section */}

        <section className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue-100 pb-6 text-center pt-6 mb-6">
          <h2 className="text-3xl font-bold text-neutral-text mb-6">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:w-3/4 mx-auto">
            {[
              {
                name: "John Doe",
                position: "Developer",
                image: Person1,
                socialLinks: {
                  github: "#",
                  twitter: "#",
                  linkedin: "#",
                },
              },
              {
                name: "Jane Smith",
                position: "Designer",
                image: Person2,
                socialLinks: {
                  github: "#",
                  twitter: "#",
                  linkedin: "#",
                },
              },
              {
                name: "Alice Johnson",
                position: "Project Manager",
                image: Person4,
                socialLinks: {
                  github: "#",
                  twitter: "#",
                  linkedin: "#",
                },
              },
              {
                name: "Bob Brown",
                position: "QA Engineer",
                image: Person3,
                socialLinks: {
                  github: "#",
                  twitter: "#",
                  linkedin: "#",
                },
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="relative p-4 rounded-lg text-center overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, ease: "easeInOut" }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Image Container */}
                <div className="relative">
                  <motion.div
                    className="relative h-80 w-full overflow-hidden rounded-t-lg mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className={`object-cover w-full h-full transition-transform duration-300 ease-in-out ${
                        activeIndex === index ? "scale-110" : ""
                      }`}
                    />
                  </motion.div>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className="flex space-x-2">
                          {Object.entries(member.socialLinks).map(
                            ([platform, link], i) => (
                              <motion.a
                                key={i}
                                href={link}
                                className="text-white border border-white rounded-lg p-1"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 100,
                                  damping: 12,
                                  delay: 0.1 * i,
                                }}
                                whileHover={{ scale: 1.1 }}
                              >
                                {platform === "github" && (
                                  <span className="hover:text-gray-700">
                                    <FaGithub size={30} />
                                  </span>
                                )}
                                {platform === "twitter" && (
                                  <span className="hover:text-blue-700">
                                    <BsTwitterX size={30} />
                                  </span>
                                )}
                                {platform === "linkedin" && (
                                  <span className="hover:text-blue-600">
                                    <FaLinkedin size={30} />
                                  </span>
                                )}
                              </motion.a>
                            )
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Name and Position */}
                <div className="p-2">
                  <h3 className="text-xl font-semibold text-neutral-text">
                    {member.name}
                  </h3>
                  <p className="text-primary-dark">{member.position}</p>
                </div>

                {/* Social Media Links */}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="pb-6">
          <h2 className="text-3xl font-bold text-neutral-light mb-6 text-center">
            Our Work Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:p-4 w-[95%] mx-auto">
            {[
              {
                title: "Discover",
                description:
                  "We begin by understanding your project needs, researching target audience, and analyzing market trends to shape a solid foundation for your solution.",
                icon: <FaCompass className="text-primary-dark text-4xl" />,
              },
              {
                title: "Design & Development",
                description:
                  "Our team crafts intuitive designs and develops scalable, secure code, ensuring a seamless user experience aligned with your project goals.",
                icon: <FaPalette className="text-primary-dark text-4xl" />,
              },
              {
                title: "Install & Testing",
                description:
                  "We rigorously test and install the solution in real-world environments to ensure reliability, performance, and compatibility before final deployment.",
                icon: <FaCogs className="text-primary-dark text-4xl" />, //
              },
              {
                title: "Project Delivery",
                description:
                  "Upon completion, we launch the project, providing continuous support and monitoring to ensure long-term success and adaptability.",
                icon: <FaRocket className="text-primary-dark text-4xl" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white/95 rounded-lg text-center shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-12 w-12 mx-auto mb-4">{item.icon}</div>{" "}
                {/* Rendered the icon */}
                <h3 className="text-lg font-semibold text-neutral-text">
                  {item.title}
                </h3>
                <p className="text-neutral-dark mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className=" bg-neutral-light p-8 text-center">
          <motion.h2
            className="text-3xl font-bold mb-4 text-neutral-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ready to Elevate Your Business?
          </motion.h2>
          <p className="text-neutral-dark mb-8">
            Accelerate your digital transformation and drive growth with us. Our
            expertise in modern technology and innovative solutions will help
            you streamline processes, enhance customer experiences, and reach
            new heights in today&apos;s digital landscape.
          </p>

          <div className="flex justify-center gap-4">
            <motion.a
              className="bg-primary text-neutral-light px-6 py-2 rounded-full shadow-md hover:bg-accent"
              href="tel:+254725475051"
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              Call Now
            </motion.a>
            <motion.button
              className="bg-neutral-light text-neutral-dark px-6 py-2 rounded-full shadow-md"
              onClick={() => navigate("/contact")}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </div>
        </section>
        <Footer />
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className=" fixed bottom-6 right-2 p-3 bg-primary-dark text-white rounded-full shadow-lg hover:bg-primary transition-colors z-50"
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
  );
}

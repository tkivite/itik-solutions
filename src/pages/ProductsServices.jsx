
/* import Background1 from "../assets/sean-pollock-PhYq704ffdA-unsplash.jpg";
import illustration2 from "../assets/trust.png";
import illustration from "../assets/illustration1.png"; */

import { motion } from "framer-motion";
import { Drawer } from "@mui/material";
import {
  Monitor,
  CreditCard,
  BookOpen,
  UserCheck,
  BarChart,
  Wrench,
} from "lucide-react";

import {
  FaChalkboardTeacher,
  FaEnvelope,
  FaCreditCard,
  FaUserCheck,
} from "react-icons/fa";
import Footer from "../components/layout/Footer";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const productServices = [
  {
    title: "Branded Bulk Messaging",
    description:
      "Branded Bulk Messaging, Email Messaging, Instant and schedules, Comprehensive Service and Support",
    icon: Monitor,
    additionalDetails: [
      "Send personalized, bulk SMS and email messages with your brand's identity.",
      "Choose from instant delivery or schedule messages for a specific time.",
      "Track delivery rates, read statuses, and manage your contacts through an easy-to-use dashboard.",
      "Get dedicated support to ensure smooth delivery and integration with your existing systems.",
      "Ideal for marketing campaigns, customer engagement, reminders, and notifications.",
    ],
  },
  {
    title: "Payment Integration",
    description:
      "Seamlessly integrate payment services like M-pesa, Paypal, local, and international banks",
    icon: CreditCard,
    additionalDetails: [
      "Integrate popular payment gateways like M-Pesa, PayPal, Stripe, and local bank APIs for easy payments.",
      "Enable both one-time payments and recurring subscriptions for various business needs.",
      "Comprehensive security features, including encryption and fraud detection tools, to safeguard all transactions.",
      "Easy API setup for developers with full documentation and support for different payment flows.",
      "Multi-currency support for both local and international transactions.",
    ],
  },
  {
    title: "Learning Management System (LMS)",
    description:
      "We deliver high-quality and scalable custom LMS solutions tailored to your learning needs.",
    icon: BookOpen,
    additionalDetails: [
      "Custom-built learning environments designed for your organization's specific training needs.",
      "Supports various content formats including videos, quizzes, and live sessions.",
      "Mobile-friendly platform to ensure students and employees can access learning materials anytime, anywhere.",
      "Detailed analytics and reporting for tracking learner progress and course effectiveness.",
      "Scalable and flexible, allowing your LMS to grow as your learning requirements evolve.",
    ],
  },
  {
    title: "Event Registration & Monitoring",
    description:
      "Manage event registrations efficiently with delegates being able to register from anywhere",
    icon: UserCheck,
    additionalDetails: [
      "Online event registration forms that allow participants to sign up from any device, anytime.",
      "Automatic confirmation emails and reminder notifications for attendees.",
      "Real-time monitoring of event registrations, with reporting tools for attendee demographics.",
      "Flexible pricing models to offer free or paid registrations with payment gateway integration.",
      "Integration with event management tools for easy check-in and attendee tracking during the event.",
    ],
  },
  {
    title: "Transaction Monitoring",
    description:
      "Transaction Monitoring systems for financial institutions, offering improved risk management and regulatory compliance",
    icon: BarChart,
    additionalDetails: [
      "Automated transaction tracking to identify and flag suspicious activity in real-time.",
      "Customizable risk detection models that fit the specific regulatory and compliance requirements of your institution.",
      "Comprehensive reporting tools for audit trails and regulatory compliance reporting.",
      "Integration with core banking systems for seamless data flow and monitoring.",
      "Real-time alerts and notifications for any potential security risks or compliance issues.",
    ],
  },
  {
    title: "ETC",
    description:
      "We work closely with clients to develop custom software based on their specific needs and requirements",
    icon: Wrench,
    additionalDetails: [
      "Collaborative process to understand your business goals and build tailored software solutions.",
      "From web and mobile applications to enterprise-level systems, we build solutions for a wide range of industries.",
      "Scalable solutions that grow with your business, with ongoing support and maintenance options.",
      "End-to-end software development including planning, design, development, testing, and deployment.",
      "Experienced developers, designers, and project managers dedicated to delivering the best results for your needs.",
    ],
  },
];

const reasons = [
  "Expert Support Anytime, Anywhere",
  "Cutting-Edge Technology for Business Growth",
  "Simplified Business Operations with Automation",
  "Tailored Solutions for Diverse Needs",
  "Proven Track Record of Successful Implementations",
  "Maximized Efficiency with Scalable Systems",
];
const text =
  "Transform your business with innovative solutions designed to drive growth, efficiency, and success in the digital age";

const ProductsServices = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const handleDrawerOpen = (service) => {
    setDrawerContent(service);
    setIsDrawerOpen(true);
  };

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="relative text-neutral-dark h-screen  ">
      <Helmet>
        <title>ITIK Solutions | Mentorship</title>
        <meta
          name="description"
          content="This is the mentorship page of ITIK Solutions."
        />
      </Helmet>
      <div className="fixed inset-0">
        <img
          src="https://res.cloudinary.com/dkwu8nd4d/image/upload/f_auto,q_auto/v1731039879/sean-pollock-PhYq704ffdA-unsplash_fjdmrv.jpg"
          alt="backgroundImage"
          className="object-cover w-full h-full brightness-50"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
        {/* Dark overlay */}
      </div>

      <div className="absolute z-10 w-full mx-auto flex flex-col">
        <section className="text-center bg-transparent">
          <motion.h1
            className="text-4xl font-bold text-neutral-light mt-20"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Products and Services
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
                  delay: index * 0.02, // Delay each letter's animation
                  duration: 0.2,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.p>
        </section>
        <section className="bg-neutral-light pb-6 text-center pt-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-2 sm:w-[95%] mx-auto "
            initial="hidden"
            animate="show"
            variants={containerVariants}
          >
            {productServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index}>
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-700 ease-in-out cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleDrawerOpen(service)}
                    variants={cardVariants}
                  >
                    <div className="flex flex-col items-start">
                      <motion.div
                        className="p-3 rounded-lg mb-4"
                        animate={{
                          scaleX: hoveredCard === index ? -1 : 1,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        <Icon
                          className={`w-9 h-9 ${
                            hoveredCard === index
                              ? "text-accent"
                              : "text-primary-dark"
                          } `}
                        />
                      </motion.div>
                      <h3 className="text-xl font-bold text-neutral-dark mb-3">
                        {service.title}
                      </h3>
                      <p className="text-neutral mb-4 text-left">
                        {service.description}
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
                        onClick={() => handleDrawerOpen(service)}
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
                </div>
              );
            })}
          </motion.div>
        </section>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <motion.div
            className="w-96 p-6 bg-white shadow-lg rounded-lg h-screen"
            initial={{ x: "20%" }}
            animate={{ x: 0 }}
            exit={{ x: "20%" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h2
              className="text-2xl font-semibold text-neutral-dark mb-4 flex items-center gap-2 border-b-2 border-b-black text-primary"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {drawerContent.icon ? (
                React.createElement(drawerContent.icon, {
                  className: "w-9 h-9 text-primary-dark",
                })
              ) : (
                <div>No icon available</div>
              )}
              {drawerContent.title}
            </motion.h2>
            <motion.p
              className="text-neutral-dark mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {drawerContent.description}
            </motion.p>
            <div className="mt-6 space-y-4">
              <motion.div
                className="bg-neutral-light p-4 rounded-lg shadow-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-lg font-semibold text-neutral-dark">
                  Additional Information
                </h3>
                <p className="text-neutral-dark">
                  {drawerContent.additionalDetails}
                </p>
              </motion.div>
            </div>
            <div className="flex gap-2 justify-center ">
              <motion.div
                className="mt-6 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <button
                  onClick={() => navigate("/contact")} //
                  className="bg-primary text-white py-2 px-4 rounded-lg shadow-lg hover:bg-primary-dark transition"
                >
                  Get Started Now
                </button>
              </motion.div>
              <motion.div
                className="mt-6 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <button
                  onClick={() => setIsDrawerOpen(false)} //
                  className="bg-neutral-light text-neutral-dark py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200 transition"
                >
                  Back to Services
                </button>
              </motion.div>
            </div>
          </motion.div>
        </Drawer>

        <section className="grid lg:grid-cols-2 gap-8 mb-12 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-100 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <img
              src="https://res.cloudinary.com/dkwu8nd4d/image/upload/f_auto,q_auto/v1731039813/illustration1_gfgj2n.png"
              alt="IT Services Illustration"
              className="md:w-[35rem] h-auto"
            />
          </div>
          <div className="order-1 lg:order-2 p-4">
            <div className="space-y-6">
              <span className="text-primary font-medium">WHY CHOOSE US?</span>
              <h2 className="text-4xl font-bold text-neutral-dark">
                Empower Your Business with Innovative IT Solutions
              </h2>
              <p className="text-neutral">
                We offer tailored IT services to help streamline your business
                operations, enhance security, and drive growth. Our solutions
                are designed with your needs in mind, whether you&apos;re
                managing payments, messaging, or monitoring transactions.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center p-4 rounded-lg border border-gray-300 bg-gradient-to-r from-violet-50 via-transparent to-primary-dark bg-[length:200%_100%] bg-left transition-all duration-500 ease-in-out"
                    initial={{ backgroundPosition: "left" }}
                    whileHover={{ backgroundPosition: "right" }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-1 h-4 bg-primary mr-3" />
                    <div>
                      <span className="text-neutral-dark font-semibold">
                        {reason}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-6">
          <h2 className="text-3xl font-bold text-neutral-light mb-6 text-center">
            Client Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-2 sm:p-4 w-full sm:w-[95%] mx-auto">
            {[
              {
                title: "Efficient Messaging for EduConnect",
                description:
                  "EduConnect improved communication across campuses with our Branded Bulk Messaging solution, reaching students and staff instantly through scheduled notifications.",
                icon: <FaEnvelope className="text-primary-dark text-4xl" />,
              },
              {
                title: "Seamless Payment Integration for ShopEasy",
                description:
                  "ShopEasy boosted their online sales by 40% after implementing our seamless Payment Integration with M-Pesa, PayPal, and local bank services.",
                icon: <FaCreditCard className="text-primary-dark text-4xl" />,
              },
              {
                title: "Custom LMS for BrightFuture Academy",
                description:
                  "BrightFuture Academy enhanced their online learning environment by adopting our scalable and customized Learning Management System (LMS), benefiting over 20,000 students.",
                icon: (
                  <FaChalkboardTeacher className="text-primary-dark text-4xl" />
                ),
              },
              {
                title: "Streamlined Event Registration for TechFest",
                description:
                  "TechFest improved their attendee experience with our Event Registration & Monitoring system, enabling users to register and manage their schedules from anywhere.",
                icon: <FaUserCheck className="text-primary-dark text-4xl" />,
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
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-12 items-center bg-neutral-light p-2 sm:p-4">
          <div className="space-y-6 flex justify-center flex-col items-center p-2 sm:p-0 sm:w-[90%] mx-auto">
            <span className="text-primary font-medium">WHY TRUST US?</span>
            <h2 className="text-4xl font-bold text-gray-900 ">
              Empowering Retail Businesses Through Digital Transformation
            </h2>
            <p className="text-gray-600">
              Our track record speaks for itself. We provide custom, scalable
              digital solutions that help retail businesses thrive. Here’s why
              clients trust us to lead their digital transformation:
            </p>
            <ul className="text-left space-y-3 text-gray-600">
              <motion.li
                className="flex sm:flex-row flex-col p-4 rounded-lg border border-gray-300 bg-gradient-to-r from-violet-50 via-transparent to-primary-dark bg-[length:200%_100%] bg-left transition-all duration-500 ease-in-out"
                initial={{ backgroundPosition: "left" }}
                whileHover={{ backgroundPosition: "right" }}
                transition={{ duration: 0.5 }}
              >
                <span className="font-bold whitespace-nowrap mr-2 text-primary">
                  🌍 Proven Success
                </span>
                <span className="text-neutral-dark font-semibold">
                  {" "}
                  Trusted by top brands across retail, we’ve successfully
                  digitized operations for businesses large and small, improving
                  efficiency and customer experience.
                </span>
              </motion.li>
              <motion.li
                className="flex p-4 sm:flex-row flex-col rounded-lg border border-gray-300 bg-gradient-to-r from-violet-50 via-transparent to-primary-dark bg-[length:200%_100%] bg-left transition-all duration-500 ease-in-out"
                initial={{ backgroundPosition: "left" }}
                whileHover={{ backgroundPosition: "right" }}
                transition={{ duration: 0.5 }}
              >
                <span className="font-bold whitespace-nowrap mr-2 text-primary">
                  🔒 Data Security{" "}
                </span>{" "}
                <span className="text-neutral-dark font-semibold">
                  We prioritize security, providing robust transaction
                  monitoring systems and secure payment integrations, ensuring
                  your data and transactions are safe.
                </span>
              </motion.li>
              <motion.li
                className="flex p-4 sm:flex-row flex-col rounded-lg border border-gray-300 bg-gradient-to-r from-violet-50 via-transparent to-primary-dark bg-[length:200%_100%] bg-left transition-all duration-500 ease-in-out"
                initial={{ backgroundPosition: "left" }}
                whileHover={{ backgroundPosition: "right" }}
                transition={{ duration: 0.5 }}
              >
                <span className="font-bold whitespace-nowrap mr-2 text-primary">
                  🚀 Innovation-Driven
                </span>{" "}
                <span className="text-neutral-dark font-semibold">
                  We leverage the latest technologies to help you stay ahead of
                  the competition—be it through our custom LMS solutions,
                  payment integrations, or event management systems.
                </span>
              </motion.li>

              <motion.li
                className="flex p-4 sm:flex-row flex-col rounded-lg border border-gray-300 bg-gradient-to-r from-violet-50 via-transparent to-primary-dark bg-[length:200%_100%] bg-left transition-all duration-500 ease-in-out"
                initial={{ backgroundPosition: "left" }}
                whileHover={{ backgroundPosition: "right" }}
                transition={{ duration: 0.5 }}
              >
                <span className="font-bold whitespace-nowrap mr-2 text-primary">
                  🤝 Long-Term Partnership
                </span>{" "}
                <span className="text-neutral-dark font-semibold">
                  We don’t just offer services; we build long-term partnerships.
                  Our ongoing support ensures that your business evolves as
                  technology progresses.
                </span>
              </motion.li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dkwu8nd4d/image/upload/f_auto,q_auto/v1731039942/trust_yoxs1p.png"
              alt="Digital Transformation Illustration"
              className="md:w-[35rem] h-auto"
            />
          </div>
        </section>

        <Footer />

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

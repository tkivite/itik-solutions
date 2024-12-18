/* import innovation from "../assets/innovation.png";
import scalability from "../assets/scalability.png";
import efficiency from "../assets/efficiency.png";

import security from "../assets/security.png";
import customization from "../assets/customization.png"; */

import { useEffect, useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Code,
  Server,
  Smartphone,
  Monitor,
  BarChart, 
  LifeBuoy,
  Shield,
  Smile
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import innovation from "../assets/animations/innovation.json"
import scalability from "../assets/animations/scalability.json"
import security from "../assets/animations/security.json"
import support from "../assets/animations/support.json"
import userExperience from "../assets/animations/userExperience.json"


const slides = [
  {
    title: "Innovation",
    description:
      "Embrace cutting-edge technology to stay ahead of the competition. Our innovative solutions are designed to transform your business operations, bringing fresh ideas and unique approaches.",
    icon: Code,
    animation: innovation,
    image: "https://res.cloudinary.com/dkwu8nd4d/image/upload/f_auto,q_auto/v1731039851/innovation_vti90i.png",
  },
  {
    title: "Scalability",
    description:
      "Build your business with growth in mind. Our solutions ensure your systems can scale effortlessly as your needs expand, supporting your journey from startup to enterprise.",
    icon: Server,
    animation: scalability,
    image: "https://res.cloudinary.com/dkwu8nd4d/image/upload/f_auto,q_auto/v1731039864/scalability_yftupt.png",
  },


  {
    title: "Security",
    description:
      "Protect your assets and customer data with robust security measures. Our solutions provide peace of mind, ensuring your business and users are always safe from evolving threats.",
    icon: Shield,
    animation: security,
    image: "https://res.cloudinary.com/dkwu8nd4d/image/upload/f_auto,q_auto/v1731039894/security_xyqgtg.png",
  },
  {
    title: "Reliable Support",
    description:
      "Benefit from our dedicated support team to ensure seamless integration and consistent performance. We’re here to assist you at every step with technical support and guidance.",
    icon: LifeBuoy,
    animation: support,
    image: "https://res.cloudinary.com/dkwu8nd4d/image/upload/f_auto,q_auto/v1731039783/customization_zzxdwx.png",
  },
  {
    title: "User-Friendly Experience",
    description:
      "Deliver a seamless, intuitive experience for your users. Our designs focus on ease of use, ensuring users can navigate and interact with your systems effortlessly, enhancing satisfaction and engagement.",
    icon: Smile,
    animation: userExperience,
    image: "https://res.cloudinary.com/dkwu8nd4d/image/upload/v1731039799/efficiency_a4y1m4.png",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 sm:p-24 pt-20 sm:pt-0 flex sm:items-center ">
   
      {/* Background Illustration */}
      <div className="fixed hidden sm:block -bottom-[0.1rem] sm:-bottom-20 sm:-right-20">
        <motion.div className="w-full h-full relative" initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }} >
          
        <Lottie animationData={slides[currentSlide].animation } loop={true} autoplay={true}   className="sm:w-[800px] md:w-[800px] lg:w-[1000px] sm:h-[800px] brightness-50 sm:brightness-75"/>
      
        </motion.div>
      </div>
      <div className="sm:hidden fixed inset-0 flex sm:justify-end ">
        <div className=" sm:max-w-[40%] w-full h-full relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={slides[currentSlide].image}
              alt="backgroundImage"
              className="object-contain w-full h-full brightness-50 object-bottom "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-xl bg-blue-900/50 border border-blue-700/50 text-blue-200"
            >
              <span className="text-md sm:text-lg font-medium">
                Welcome to ITIK Solutions. We empower businesses with innovative
                tech solutions to scale, secure, and optimize operations.
              </span>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-lg text-gray-300 max-w-md mt-4">
                  {slides[currentSlide].description}
                </p>
                
              </motion.div>
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white/70 sm:bg-white text-blue-950 font-medium transition-colors group hover:bg-primary-light"
              onClick={() => navigate("/services")}
            >
              Explore Services
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.button>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 grid grid-cols-3 gap-8">
              <div className="col-start-2">
                <div className="h-2 w-2 bg-blue-400 rounded-full mb-24" />
              </div>
              <div className="col-start-3">
                <div className="h-2 w-2 bg-blue-400 rounded-full mt-12" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-4 rounded-2xl bg-black/20 border border-blue-700/20 backdrop-blur-sm"
              >
                <Monitor className="h-6 w-6 text-blue-400" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-6 rounded-2xl bg-black/20 border border-blue-700/20 backdrop-blur-sm row-start-2"
              >
                <BarChart className="h-6 w-6 text-blue-400" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="p-12 rounded-3xl bg-blue-600/20 row-span-2 col-start-2 row-start-1 flex items-center justify-center relative"
              >
                <div className="absolute inset-2 rounded-2xl bg-blue-400/20 backdrop-blur-sm" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    {slides[currentSlide].icon &&
                      React.createElement(slides[currentSlide].icon, {
                        className: "h-16 w-16 text-blue-400",
                      })}
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="p-4 rounded-2xl bg-black/20 border border-blue-700/20 backdrop-blur-sm col-start-3"
              >
                <Code className="h-6 w-6 text-blue-400" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="p-4 rounded-2xl bg-black/20 border border-blue-700/20 backdrop-blur-sm col-start-3 row-start-2"
              >
                <Smartphone className="h-6 w-6 text-blue-400" />
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
import { useEffect, useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Code, Server, Laptop, Smartphone } from "lucide-react"

const slides = [
  {
    title: "Cutting-edge Technology Solutions",
    description: "We provide innovative tech solutions to streamline your business processes and boost productivity.",
    icon: Code,
  },
  {
    title: "Robust Cloud Infrastructure",
    description: "Scale your business with our state-of-the-art cloud solutions and expert management.",
    icon: Server,
  },
  {
    title: "Custom Software Development",
    description: "Tailor-made software solutions designed to meet your unique business needs and challenges.",
    icon: Laptop,
  },
  {
    title: "Mobile App Development",
    description: "Create powerful, user-friendly mobile applications that engage your customers and drive growth.",
    icon: Smartphone,
  },
]


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 p-24 flex items-center">
  

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/50 border border-blue-700/50 text-blue-200"
            >
              <span className="text-sm font-medium">Innovative Tech Solutions</span>
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
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-blue-950 font-medium hover:bg-gray-100 transition-colors group"
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
                <Code className="h-6 w-6 text-blue-400" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-6 rounded-2xl bg-black/20 border border-blue-700/20 backdrop-blur-sm row-start-2"
              >
                <Server className="h-6 w-6 text-blue-400" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="p-12 rounded-3xl bg-blue-600 row-span-2 col-start-2 row-start-1 flex items-center justify-center relative"
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
    {slides[currentSlide].icon && React.createElement(slides[currentSlide].icon, { className: 'h-16 w-16 text-blue-400' })}
  </motion.div>
</AnimatePresence>

              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="p-4 rounded-2xl bg-black/20 border border-blue-700/20 backdrop-blur-sm col-start-3"
              >
                <Laptop className="h-6 w-6 text-blue-400" />
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
  )

};

export default Home;

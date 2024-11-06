import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "Welcome to Itik Solutions",
    description: "Powering Businesses Through Technology",
    background: 'url("/path/to/image1.jpg")',
    link: "/",
  },
  {
    title: "Our Services",
    description: "Branded Messaging, Payment Integration, LMS, and more",
    background: 'url("/path/to/image2.jpg")',
    link: "/services",
  },
  {
    title: "Join Our Mentorship Program",
    description: "Learn from industry experts and elevate your skills",
    background: 'url("/path/to/image3.jpg")',
    link: "/mentorship",
  },
  {
    title: "About Us",
    description: "Learn more about our mission and vision.",
    background: 'url("/path/to/image4.jpg")',
    link: "/about",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence>
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: slide.background }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={index === currentSlide ? { opacity: 1, scale: 1 } : {}}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center h-full bg-black bg-opacity-40">
              <div className="text-center text-neutral-white p-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-6">{slide.description}</p>

                <button
                  className="px-6 py-3 bg-secondary hover:bg-secondary-dark text-neutral-white font-semibold rounded-lg shadow-lg transition"
                  onClick={() => navigate(slides[currentSlide].link)} 
                >
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-secondary" : "bg-neutral-light"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-white"
        onClick={() =>
          setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
        }
      >
        &#10094; {/* Left Arrow */}
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-white"
        onClick={() =>
          setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
        }
      >
        &#10095; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default Home;

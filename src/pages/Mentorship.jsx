/* import Background1 from "../assets/sean-pollock-PhYq704ffdA-unsplash.jpg" */;

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Lightbulb,
  Clock,
  Code,
  UserPlus,
  BookOpen,
  Network,
  Briefcase,
  Award,
  Target,
  Send,
} from "lucide-react";
import Footer from "../components/layout/Footer";

const Mentorship = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    techArea: "",
    experience: "",
    goals: "",
    preferredMentorshipType: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    alert(
      "Thank you for your interest in our tech mentorship program! We will contact you soon."
    );
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const offerings = [
    {
      icon: Users,
      title: "One-on-One Guidance",
      description: "Personalized mentorship from expert tech professionals",
    },
    {
      icon: Code,
      title: "Code Reviews",
      description: "Regular feedback on your coding projects and assignments",
    },
    {
      icon: UserPlus,
      title: "Networking Opportunities",
      description: "Connect with industry professionals and fellow mentees",
    },
    {
      icon: BookOpen,
      title: "Exclusive Workshops",
      description: "Access to specialized tech workshops and online courses",
    },
    {
      icon: Briefcase,
      title: "Real-World Projects",
      description: "Hands-on experience with actual tech industry projects",
    },
    {
      icon: Award,
      title: "Career Development",
      description: "Tailored plans to accelerate your tech career growth",
    },
    {
      icon: Network,
      title: "Tech Community",
      description:
        "Join a vibrant community of tech enthusiasts and professionals",
    },
    {
      icon: Lightbulb,
      title: "Innovation Insights",
      description:
        "Stay updated with the latest trends and innovations in tech",
    },
  ];

  const text =
    "Accelerate your career in tech with guidance from industry experts";

  return (
    <div className="relative text-neutral-dark">
 
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
        <section className="text-center bg-transparent ">
          <h1
            className="text-4xl font-bold text-neutral-light mt-20"
           
          >
            Join Our Mentorship Program
          </h1>
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
        </section>
        <div className="w-full mx-auto ">
          <section className="grid md:grid-cols-2 gap-12 bg-neutral-light p-2 sm:p-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <section className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About Our Tech Mentorship
                </h2>
                <p className="text-gray-600 mb-4">
                  Our mentorship program is designed to help aspiring tech
                  professionals accelerate their career growth. With guidance
                  from experienced industry leaders, you&apos;ll gain valuable
                  insights, expand your network, and develop the cutting-edge
                  skills needed to succeed in the fast-paced world of
                  technology.
                </p>
              </section>

              <section className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  What We Offer
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {offerings.map((offering, index) => (
                    <motion.div
                      key={index}
                      className="flex  space-x-4 items-center"
                      initial="hidden"
                      animate="visible"
                      variants={fadeIn}
                      whileHover="hover"
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <motion.div
                        className="flex-shrink-0"
                        variants={{ hover: { scaleX: -1 } }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        <offering.icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {offering.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {offering.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              <section className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Mentorship Areas
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Web Development",
                    "Mobile App Development",
                    "Cloud Computing",
                    "Data Science",
                    "Artificial Intelligence",
                    "Cybersecurity",
                    "DevOps",
                    "Blockchain",
                  ].map((area, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center p-4 rounded-lg border border-gray-300 bg-gradient-to-r from-violet-50 via-transparent to-primary-dark bg-[length:200%_100%] bg-left transition-all duration-500 ease-in-out"
                      initial={{ backgroundPosition: "left" }}
                      whileHover={{ backgroundPosition: "right" }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-1 h-4 bg-primary mr-3" />
                      {area}
                    </motion.div>
                  ))}
                </div>
              </section>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white shadow-lg rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Sign Up for Tech Mentorship
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Users className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1 block w-full border pl-10 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-accent"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Send className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1 block w-full pl-10 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-accent"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="techArea"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Preferred Tech Area
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Code className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="techArea"
                      name="techArea"
                      required
                      className="mt-1 pl-10 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-accent"
                      value={formData.techArea}
                      onChange={handleInputChange}
                    >
                      <option value="">Select an area</option>
                      <option value="webDev">Web Development</option>
                      <option value="mobileDev">Mobile App Development</option>
                      <option value="cloud">Cloud Computing</option>
                      <option value="dataScience">Data Science</option>
                      <option value="ai">Artificial Intelligence</option>
                      <option value="security">Cybersecurity</option>
                      <option value="devops">DevOps</option>
                      <option value="blockchain">Blockchain</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="experience"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Years of Experience
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Briefcase className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="number"
                      id="experience"
                      name="experience"
                      required
                      min="0"
                      className="mt-1 pl-10 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-accent"
                      value={formData.experience}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="goals"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Career Goals in Tech
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
                      <Target className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="goals"
                      name="goals"
                      rows="3"
                      required
                      className="mt-1 pl-10 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-accent"
                      value={formData.goals}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Preferred Mentorship Type
                  </label>
                  <div className="mt-2 space-y-2">
                    {[
                      "One-on-one",
                      "Group sessions",
                      "Project-based",
                      "Online courses",
                    ].map((type) => (
                      <div key={type} className="flex items-center">
                        <input
                          id={type}
                          name="preferredMentorshipType"
                          type="radio"
                          className="focus:border-accent h-4 w-4 text-primary border-gray-300"
                          value={type}
                          checked={formData.preferredMentorshipType === type}
                          onChange={handleInputChange}
                        />
                        <label
                          htmlFor={type}
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Apply for Tech Mentorship
                </motion.button>
              </form>
            </motion.div>
          </section>
          <section className="pb-6 sm:p-2">
            <h2 className="text-3xl font-bold text-neutral-light mb-6 text-center">
              Why Choose Our Tech Mentorship?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:p-4 w-[95%] mx-auto">
              {[
                {
                  title: "Industry-Leading Mentors",
                  description:
                    "Learn from professionals with years of experience in top tech companies.",
                  icon: (
                    <Users className="text-primary-dark text-4xl w-full h-auto" />
                  ),
                },
                {
                  title: "Cutting-Edge Curriculum",
                  description:
                    "Stay ahead with mentorship content that evolves with the tech industry.",
                  icon: (
                    <Lightbulb className="text-primary-dark text-4xl w-full h-auto" />
                  ),
                },
                {
                  title: "Flexible Learning",
                  description:
                    "Choose from various mentorship styles to fit your schedule and learning style.",
                  icon: <Clock className="text-primary-dark w-full h-auto" />,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white/95 rounded-lg text-center shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="h-14 w-14 mx-auto mb-4">{item.icon}</div>{" "}
                  <h3 className="text-lg font-semibold text-neutral-text">
                    {item.title}
                  </h3>
                  <p className="text-neutral-dark mt-2">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
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

export default Mentorship;

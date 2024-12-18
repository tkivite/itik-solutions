/* import Background1 from "../assets/sean-pollock-PhYq704ffdA-unsplash.jpg" */ import {
  useEffect,
  useState,
} from "react";
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
  Send,
  Phone,
  GraduationCap,
} from "lucide-react";
import Footer from "../components/layout/Footer";

const Mentorship = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedModule, setExpandedModule] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    otherNames: "",
    email: "",
    phoneNumber: "",
    educationLevel: "",
    experience: "",
    goals: "",
    preferredMentorshipType: "",
  });

  const handleToggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        // You can adjust the scroll threshold here
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

    alert(
      "Thank you for your interest in our tech mentorship program! We will contact you soon."
    );
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
  const faqItems = [
    {
      question: "What is the duration of the mentorship program?",
      answer:
        "The mentorship program lasts for 6 months, with weekly sessions and continuous support.",
    },
    {
      question: "Do I need prior experience to join?",
      answer:
        "No, we accept individuals at various skill levels. Our mentorship program is designed to help you grow at your own pace.",
    },
    {
      question: "How are mentors assigned?",
      answer:
        "Mentors are matched based on your interests, goals, and technical background. We ensure a good fit to help you achieve your goals.",
    },
    {
      question: "Can I access the program remotely?",
      answer:
        "Our mentorship program is primarily remote, but physical sessions can be arranged from time to time for more hands-on learning.",
    },
  ];

  const text =
    "Accelerate your career in tech with guidance from industry experts";

  const handleToggle = (index) => {
    setExpandedModule(expandedModule === index ? null : index); // Toggle the current module
  };

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
          <h1 className="text-4xl font-bold text-neutral-light mt-20">
            Practical Web Application Development
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
            <motion.div className="space-y-8">
              <motion.section
                className="bg-white shadow-lg rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
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
              </motion.section>

              <section className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  What We Offer
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {offerings.map((offering, index) => (
                    <motion.div
                      key={index}
                      className="flex  space-x-4 items-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4 ">
                  Modules Covered
                </h2>
                <div className="space-y-1">
                  {[
                    {
                      module: "Introduction to Web Application Development",
                      description:
                        "Learn the fundamentals of building web applications, including HTML, CSS, and JavaScript.",
                      mentor: "Jane Doe",
                      bio: "Senior Full Stack Developer with 10+ years of experience.",
                    },
                    {
                      module: "Database Management with PostgreSQL",
                      description:
                        "Understand relational databases, learn SQL, and work with PostgreSQL to manage data.",
                      mentor: "John Smith",
                      bio: "Database Architect specializing in PostgreSQL and NoSQL databases.",
                    },
                    {
                      module:
                        "Backend and API Development with Java-Spring Boot",
                      description:
                        "Dive into backend development with Java and Spring Boot, and learn how to create and manage APIs.",
                      mentor: "Alice Johnson",
                      bio: "Expert in Java and distributed systems with 8+ years of experience.",
                    },
                    {
                      module: "Frontend Development with React",
                      description:
                        "Master the React framework to build dynamic, responsive, and interactive front-end applications.",
                      mentor: "Michael Brown",
                      bio: "Frontend Engineer and React specialist with 6+ years of experience.",
                    },
                    {
                      module: "Capstone Project",
                      description:
                        "Apply everything you've learned in a real-world project that demonstrates your full-stack capabilities.",
                      mentor: "Emily Davis",
                      bio: "Software Project Manager with expertise in mentoring student projects.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col p-2 rounded-lg border border-gray-300 bg-gradient-to-r from-violet-50 via-transparent to-primary-dark bg-[length:200%_100%] bg-left transition-all duration-500 ease-in-out"
                      initial={{ backgroundPosition: "left" }}
                      whileHover={{ backgroundPosition: "right" }}
                      transition={{ duration: 0.5 }}
                      onClick={() => handleToggle(index)}
                    >
                      <div
                        onClick={() => handleToggle(index)}
                        className="flex justify-between items-center cursor-pointer"
                      >
                        <h3 className="text-lg font-bold text-gray-800 flex items-center">
                          <div className="w-1 h-4 bg-primary mr-3 sm:block hidden" />
                          {index + 1}. {item.module}
                        </h3>
                        <motion.div
                          initial={{ rotate: 0 }}
                          animate={{
                            rotate: expandedModule === index ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="transition-transform"
                        >
                          ▼
                        </motion.div>
                      </div>
                      

                      {/* Show this section only if this module is expanded */}
                      {expandedModule === index && (
                        <motion.div
                          className="mt-2 pl-2 sm:pl-4"
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          transition={{ duration: 0.3 }}
                          exit={{ height: 0 }}
                        >
                          <p className="text-sm sm:text-base text-gray-600 mb-2">
                            {item.description}
                          </p>
                          <div>
                            <p className="text-sm sm:text-base font-semibold text-gray-700">
                              Mentor: {item.mentor}
                            </p>
                            <p className="text-sm sm:text-base text-gray-600">
                              {item.bio}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </section>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
                    First Name
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Users className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="mt-1 block w-full border pl-10 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-accent"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="other_names"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Other names
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Users className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="other_names"
                      name="otherNames"
                      required
                      className="mt-1 block w-full border pl-10 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-accent"
                      value={formData.otherNames}
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
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      required
                      className="mt-1 block w-full pl-10 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-accent"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="educationLevel"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Highest Level of Education
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <GraduationCap className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="educationLevel"
                      name="educationLevel"
                      required
                      className="mt-1 pl-10 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-accent"
                      value={formData.educationLevel}
                      onChange={handleInputChange}
                    >
                      <option value="">Select your education level</option>
                      <option value="highSchool">High School</option>
                      <option value="highSchool">Diploma</option>
                      <option value="associateDegree">Associate Degree</option>
                      <option value="bachelors">Bachelor&apos;s Degree</option>
                      <option value="masters">Master&apos;s Degree</option>
                      <option value="phd">Doctorate (Ph.D.)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="programmingSkills"
                    className="block text-sm font-medium text-gray-700"
                  >
                    How would you rate your programming skills?
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Code className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="programmingSkills"
                      name="programmingSkills"
                      required
                      className="mt-1 pl-10 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-accent"
                      value={formData.programmingSkills}
                      onChange={handleInputChange}
                    >
                      <option value="">Select your skill level</option>
                      <option value="noKnowledge">
                        No Knowledge - I’ve never written code before
                      </option>
                      <option value="basicUnderstanding">
                        Basic Understanding - I know basic concepts but lack
                        hands-on experience
                      </option>
                      <option value="beginner">
                        Beginner - I can write simple programs with guidance
                      </option>
                      <option value="intermediate">
                        Intermediate - I can build functional applications with
                        occasional help
                      </option>
                      <option value="advanced">
                        Advanced - I can independently build complex
                        applications
                      </option>
                      <option value="expert">
                        Expert - I can design, optimize, and mentor others in
                        software development
                      </option>
                    </select>
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
              <section className="bg-white shadow-md rounded-lg sm:p-6 p-3 mt-5 sm:mt-14">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4 cursor-pointer">
                  {faqItems.map((item, index) => (
                    <motion.div
                      key={index}
                      className="border-b py-4 cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => handleToggleFAQ(index)}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {item.question}
                        </h3>
                        <motion.div
                          initial={{ rotate: 0 }}
                          animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="transition-transform"
                        >
                          ▼
                        </motion.div>
                      </div>

                      {expandedFAQ === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2 text-sm sm:text-base text-gray-600"
                        >
                          {item.answer}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </section>
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
        {isScrolled && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-2 p-3 bg-primary-dark text-white rounded-full shadow-lg hover:bg-primary transition-colors"
          >
            <span className="hidden sm:block">Apply now</span>
            <svg
              className="w-6 h-6 block sm:hidden"
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
        )}
      </div>
    </div>
  );
};

export default Mentorship;

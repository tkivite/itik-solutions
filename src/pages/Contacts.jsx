/* import Background1 from "../assets/sean-pollock-PhYq704ffdA-unsplash.jpg"; */

import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaPaperPlane } from "react-icons/fa";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";
import { MessageSquare, Mail, Phone, MapPin, Users, Send } from "lucide-react";
import Footer from "../components/layout/Footer";
import { BsTwitterX } from "react-icons/bs";


const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    services: [],
  });

  const services = [
    { id: "communication", label: "Communication" },
    { id: "payments", label: "Payments" },
    { id: "lms", label: "LMS" },
    { id: "eventsRegistration", label: "Events Registration" },
    { id: "transactionMonitoring", label: "Transaction Monitoring" },
    { id: "other", label: "Other" },
  ];

  const handleServiceToggle = (serviceId) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((id) => id !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const text = "Let’s Make Things Happen – Get in Touch!";

  return (
    <div className="relative text-neutral-dark">
 
      <div className="fixed inset-0">
        <img
          src="https://res.cloudinary.com/dkwu8nd4d/image/upload/f_auto,q_auto/v1731039879/sean-pollock-PhYq704ffdA-unsplash_fjdmrv.jpg"
          alt="backgroundImage"
          className="object-cover w-full h-full brightness-50"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <motion.div className="rounded-lg shadow-lg absolute z-10 w-full mx-auto">
        <section className="text-center bg-transparent">
          <h2
            className="text-4xl font-extrabold text-neutral-light mt-20"
           
          >
            Contact Us
          </h2>
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
        <section className="bg-neutral-light w-full mx-auto">
          <motion.div
            className="mx-auto bg-white shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="lg:flex">
              <div className="lg:w-1/2 xl:w-3/5 p-4 sm:p-8 flex flex-col justify-between">
                <div>
                  <motion.h2
                    className="text-4xl font-extrabold text-gray-900 mb-6"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    Contact Our Team
                  </motion.h2>
                  <motion.p
                    className="text-lg text-gray-600 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    Looking for a service or have questions? We&apos;re here to
                    assist you!
                  </motion.p>
                </div>
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  layout
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Users className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                          id="firstName"
                          placeholder="First name"
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              firstName: e.target.value,
                            })
                          }
                          required
                          className="border-gray-300 pl-10 focus:border-accent"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Users className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                          id="lastName"
                          placeholder="Last name"
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              lastName: e.target.value,
                            })
                          }
                          required
                          className="border-gray-300 pl-10 focus:border-accent"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Send className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="border-gray-300 pl-10 focus:border-accent"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone number</Label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+254724518291"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                        className="border-gray-300 pl-10 focus:border-accent"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-start top-3 pointer-events-none">
                        <MessageSquare className="h-5 w-5 text-gray-400" />
                      </div>
                      <Textarea
                        id="message"
                        placeholder="Leave us a message..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        className="min-h-[120px] pl-10 border-gray-300 focus:border-accent"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label>Services</Label>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <div
                          key={service.id}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={service.id}
                            checked={formData.services.includes(service.id)}
                            onCheckedChange={() =>
                              handleServiceToggle(service.id)
                            }
                          />
                          <Label htmlFor={service.id} className="font-normal">
                            {service.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white"
                  >
                    <FaPaperPlane className="mr-2" />
                    Send message
                  </Button>
                </motion.form>
              </div>
              <div className="lg:w-1/2 xl:w-2/5 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 p-4 sm:p-8 text-white">
                <h3 className="text-2xl font-bold mb-8">Get in touch</h3>
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h4 className="text-lg font-semibold mb-3">Chat with us</h4>
                    <p className="text-indigo-200 mb-4">
                      Speak to our friendly team via live chat.
                    </p>
                    <div className="space-y-3">
                      <Button
                        variant="outline"
                        className=" flex justify-start text-primary-dark   p-4 rounded-lg border border-gray-300 bg-gradient-to-r from-violet-50 via-transparent to-primary-dark bg-[length:200%_100%] bg-left transition-all duration-500 ease-in-out w-full"
                        initial={{ backgroundPosition: "left" }}
                        whileHover={{ backgroundPosition: "right" }}
                        transition={{ duration: 0.5 }}
                      >
                        <FaFacebook className="mr-2 h-4 w-4" />
                        Message us on Facebook
                      </Button>
                      <Button
                        variant="outline"
                        className=" flex justify-start text-primary-dark   p-4 rounded-lg border border-gray-300 bg-gradient-to-r from-violet-50 via-transparent to-primary-dark bg-[length:200%_100%] bg-left transition-all duration-500 ease-in-out w-full"
                        initial={{ backgroundPosition: "left" }}
                        whileHover={{ backgroundPosition: "right" }}
                        transition={{ duration: 0.5 }}
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        <a href="mailto:itikslns@gmail.com">
                          Shoot us an email
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className=" flex justify-start text-primary-dark   p-4 rounded-lg border border-gray-300 bg-gradient-to-r from-violet-50 via-transparent to-primary-dark bg-[length:200%_100%] bg-left transition-all duration-500 ease-in-out w-full"
                        initial={{ backgroundPosition: "left" }}
                        whileHover={{ backgroundPosition: "right" }}
                        transition={{ duration: 0.5 }}
                      >
                        <BsTwitterX className="mr-2 h-4 w-4" />
                        <a href="twitter.com"> Message us on X</a>
                      </Button>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h4 className="text-lg font-semibold mb-3">Call us</h4>
                    <p className="text-indigo-200 mb-4">
                      Call our team Mon-Fri from 8am to 5pm.
                    </p>
                    <Button
                      variant="outline"
                      className=" flex justify-start text-primary-dark   p-4 rounded-lg border border-gray-300 bg-gradient-to-r from-violet-50 via-transparent to-primary-dark bg-[length:200%_100%] bg-left transition-all duration-500 ease-in-out w-full mb-2"
                      initial={{ backgroundPosition: "left" }}
                      whileHover={{ backgroundPosition: "right" }}
                      transition={{ duration: 0.5 }}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      <a href="tel:+254725475051">+254725475051</a>
                    </Button>

                    <Button
                      variant="outline"
                      className=" flex justify-start text-primary-dark   p-4 rounded-lg border border-gray-300 bg-gradient-to-r from-violet-50 via-transparent to-primary-dark bg-[length:200%_100%] bg-left transition-all duration-500 ease-in-out w-full"
                      initial={{ backgroundPosition: "left" }}
                      whileHover={{ backgroundPosition: "right" }}
                      transition={{ duration: 0.5 }}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      <a href="tel:+2547983380831"> +254798338083</a>
                    </Button>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <h4 className="text-lg font-semibold mb-3">Visit us</h4>
                    <p className="text-indigo-200 mb-4">
                      Talk to us in person at our Nairobi HQ.
                    </p>
                    <Button
                      variant="outline"
                      className=" flex justify-start text-primary-dark   p-4 rounded-lg border border-gray-300 bg-gradient-to-r from-violet-50 via-transparent to-primary-dark bg-[length:200%_100%] bg-left transition-all duration-500 ease-in-out w-full"
                      initial={{ backgroundPosition: "left" }}
                      whileHover={{ backgroundPosition: "right" }}
                      transition={{ duration: 0.5 }}
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      100 Smith Street, Kiambu Road
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Contact;

import { motion } from "framer-motion";
import { Mail, Phone, MapPin,Wrench,Info,GraduationCap } from "lucide-react";
import { Link } from "react-router-dom"; 
import logo from "../../assets/itikLogo.png"

import { FaLinkedin, FaGithub,FaInstagram, FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://facebook.com", label: "Github" },
    { icon: BsTwitterX, href: "https://twitter.com", label: "Twitter" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
  ];

  const contactInfo = [
    { icon: Mail, info: "itiksnls@gmail.com", label: "Email" },
    { icon: Phone, info: "+254725475051", label: "Phone" },
    { icon: Phone, info: "+254798338083", label: "Phone" },

    { icon: MapPin, info: "123 Lumumba Drive, Nairobi, 12345", label: "Address" },
  ];

  const footerLinks = [
    { href: "/about", label: "About Us",icon:Info, },
    { href: "/services", label: "Services", icon:Wrench },
    { href: "/contact", label: "Contact", icon:Mail },
    { href: "/mentorship", label: "Mentorship", icon:GraduationCap },
   
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-300 via-blue-200 to-blue-300 text-black py-4 sm:py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center flex-col"
            transition={{ duration: 0.5 }}
          >
            <img src={logo} alt="logo" width={200} className="-translate-y-10"/>
            <h3 className="text-2xl font-bold mb-4 -translate-y-16 text-center">Connect With Us</h3>
            <div className="flex space-x-4 -translate-y-16 justify-center">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="hover:text-primary-dark"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-2 sm:mb-0"
          >
            <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 flex justify-center flex-col">
              {contactInfo.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-2 hover:text-primary"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <item.icon size={18} />
                  <span>{item.info}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="hover:text-primary transition-colors flex gap-2 items-center"
                  >
                    <link.icon size={23}/>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 pt-8 border-t border-primary text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p>
            © {currentYear} ITIK Solutions. All rights reserved.
          </p>
        
        </motion.div>
      </div>
    </footer>
  );
}

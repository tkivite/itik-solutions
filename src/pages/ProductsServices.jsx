import React from 'react';
import { motion } from 'framer-motion';
import Background1 from "../assets/sean-pollock-PhYq704ffdA-unsplash.jpg";


const productsServices = [
  {
    id: 1,
    title: 'Branded Messaging',
    description: 'Crafting the perfect message to represent your brand.',
    image: '/path/to/image1.jpg',
  },
  {
    id: 2,
    title: 'Payment Integration',
    description: 'Seamless integration for all payment methods.',
    image: '/path/to/image2.jpg',
  },
  {
    id: 3,
    title: 'Learning Management System',
    description: 'Empower your learning with our customized LMS.',
    image: '/path/to/image3.jpg',
  },
  {
    id: 4,
    title: 'Consulting Services',
    description: 'Expert guidance to elevate your business.',
    image: '/path/to/image4.jpg',
  },
];

const ProductsServices = () => {
  return (
    <div className="relative text-neutral-dark h-screen text-center">
        <img
        src={Background1}
        alt="backgroundImage"
        className="fixed brightness-50 h-screen sm:h-auto"
      />
      <div className='absolute z-10 w-full mx-auto flex flex-col'>
        <section className='text-center p-28 bg-transparent'>
      <h2 className="text-3xl font-bold mb-8 text-center">Our Products and Services</h2>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-neutral-light pb-6 pt-6 flex-grow">
        {productsServices.map((item) => (
          <motion.div
            key={item.id}
            className="bg-neutral-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }} // Start off-screen
            animate={{ opacity: 1, y: 0 }} // Move to original position
            exit={{ opacity: 0, y: -50 }} // Exit animation
            transition={{ duration: 0.5 }}
          >
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ProductsServices;

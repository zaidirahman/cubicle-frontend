import React from "react";
import { motion } from "framer-motion";
import privateOfficeImg from "../assets/private.svg";
import meetingRoomImg from "../assets/meeting.svg";
import desksImg from "../assets/dedicated.svg";

const Products = () => {
  const cardVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-black mb-12">
          Our Offerings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Private Offices */}
          <motion.div
            className="bg-emerald-600 rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src={privateOfficeImg}
              alt="Private Offices"
              className="w-40 h-40 object-contain"
            />
            <h3 className="text-2xl font-bold text-white">
              Private Offices
            </h3>
            <p className="text-gray-200">
            Fully-equipped spaces for 1-25 people, offering privacy and productivity for teams of any size.
            </p>
          </motion.div>

          {/* Meeting Rooms */}
          <motion.div
            className="bg-emerald-600 rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src={meetingRoomImg}
              alt="Meeting Rooms"
              className="w-40 h-40 object-contain"
            />
            <h3 className="text-2xl font-bold text-white">
              Meeting Rooms
            </h3>
            <p className="text-gray-200">
            Modern, tech-ready rooms for up to 10 people, ideal for brainstorming and presentations.
            </p>
          </motion.div>

          {/* Flex/Dedicated Desks */}
          <motion.div
            className="bg-emerald-600 rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src={desksImg}
              alt="Flex/Dedicated Desks"
              className="w-40 h-40 object-contain"
            />
            <h3 className="text-2xl font-bold text-white">
              Flex/Dedicated Desks
            </h3>
            <p className="text-gray-200">
            Your personal workstation in a shared environment, perfect for focused freelancers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;
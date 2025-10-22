"use client";

import { FaGithub, FaBehance, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import ScrollVelocity from "./ScrollVelocity";

export default function Profile() {
  return (
    <section id="profile" className="relative py-20 bg-black">
      {/* Rectangle Putih */}
      <div className="relative max-w-xl mx-auto bg-white rounded-2xl shadow-2xl p-8 text-center">
  {/* Label Profile */}
  <div className="absolute -top-2 right-4 bg-black text-white px-4 py-1 rounded-md transform rotate-3 shadow-md text-xl">
  Mini Profile
  </div>

  {/* Foto */}
  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg">
    <img
      src="/skdkemlu.JPG"
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Nama */}
  <motion.h2
    className="mt-6 text-3xl font-bold text-gray-900"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    Mochammad Wildan Al ghifary
  </motion.h2>

  {/* Deskripsi */}
  <motion.p
    className="mt-4 text-gray-600 leading-relaxed"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.8 }}
  >
    Eager to <span className="font-bold">Learn</span>. 
    Ready to <span className="font-bold">Contribute</span>.
    <br />
    <span className="font-regular italic text-sm">"Turning Ideas Into Intuitive Interfaces"</span>
  </motion.p>

  {/* Social Icons */}
  <motion.div
    className="mt-6 flex justify-center gap-4 text-2xl"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.8 }}
  >
    <div className="bg-black text-white p-3 rounded-xl flex gap-6">
    {/* GitHub */}
    <a
      href="https://github.com/princechayon"
      target="_blank"
    >
      <FaGithub />
    </a>

    {/* Behance */}
    <a
      href="https://www.behance.net/wildanal1"
      target="_blank"
    >
      <FaBehance />
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/mochammad-wildan-al-ghifary-6a36322a4/"
      target="_blank"
    >
      <FaLinkedin />
    </a>
    </div>
  </motion.div>
</div>

<ScrollVelocity
  texts={['UI/UX Enthusiast', 'Front End', 'Networking']}
  velocity={10}
  className="custom-scroll-text text-white 
             text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4rem] font-bold"
 />
    </section>
  );
}

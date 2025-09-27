"use client";
import { motion } from "framer-motion";
import { 
  SiFigma, 
  SiAdobephotoshop, 
  SiCanva
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { FaDatabase, FaTools, FaNetworkWired, FaUsers, FaWrench, FaReact } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import SpotlightCard from './SpotlightCard';

const skills = [
  { name: "Figma", icon: SiFigma, color: "#f24e1e" },
  { name: "Photoshop", icon: SiAdobephotoshop, color: "#31a8ff" },
  { name: "Canva", icon: SiCanva, color: "#00c4cc" },
  { name: "VSCode", icon: VscCode, color: "#0078d7" },
  { name: "Data Entry", icon: FaDatabase, color: "#f59e0b" },
  { name: "Software Installation", icon: FaTools, color: "#9ca3af" },
  { name: "Basic Network", icon: FaNetworkWired, color: "#10b981" },
  { name: "Team Work", icon: FaUsers, color: "#3b82f6" },
  { name: "UI Design", icon: MdDesignServices, color: "#e11d48" },
  { name: "Troubleshooting", icon: FaWrench, color: "#8b5cf6" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-12">
{/* Heading */}
 {/* 🔹 Title */}
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between mb-12">
        <div className="text-left">
          <h2 className="text-4xl font-medium mb-3">Skills</h2>
          <div className="space-y-1 mb-6">
            <div className="w-16 h-0.5 bg-white rounded"></div>
            <div className="w-10 h-0.5 bg-white rounded"></div>
          </div>
        </div>
        {/* Icon di kanan */}
        <FaReact className="text-cyan-400 text-4xl" />
      </div>



        {/* Grid Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <SpotlightCard
                key={i}
                spotlightColor={skill.color}
                className="rounded-2xl p-6 
                          bg-white/1 backdrop-blur-xl shadow-lg 
                          flex flex-col items-center justify-center
                          transition duration-300"
              >
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div className="w-14 h-14 mb-4 flex items-center justify-center">
                    <Icon size={56} color={skill.color} />
                  </div>
                  <p className="text-sm font-semibold">{skill.name}</p>
                </motion.div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { FaBehance } from "react-icons/fa";
import { SiFigma } from "react-icons/si";

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  behance?: string;
  figma?: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Website Magang Pusat Data dan Informasi Kementerian Pertahanan",
    description: "Website ini dibuat untuk memudahkan peserta dan pengelola dalam proses rekrutmen peserta magang, memiliki beberapa aktor seperti: Admin, Admin Tata Usaha, Bidang, Mentor, dan Peserta. Website ini bersifat internal dan tidak dapat diakses oleh publik (Intranet).",
    tech: ["HTML", "CSS", "Javascript", "PHP", "MySQL", "Bootstrap", "CodeIgniter", "Figma", "Visual Studio Code", "Xampp"],
    image: "/projects/pusdatin.png",
    figma: "https://www.figma.com/design/7NItndAJnDChfQiMMKzwI0/Project-Wildan?node-id=70-26&t=15SF9JYjItVcTpWE-1",
  },
  {
    id: 2,
    title: "Redesign Website Alan Creative",
    description: "Design ini berfokus pada halaman utama sebuah Software House dan Digital Agency.",
    tech: ["Figma", "Photoshop"],
    figma: "https://www.figma.com/design/2QcxNjUdt7UbZklPZsYodQ/Redesign-Alan-Creative?node-id=1415-3&t=gBTXFY4O3vAMzuGi-1",
    image: "/projects/alancreative.png",
  },
  {
    id: 3,
    title: "Redesign Website TemuDataku",
    description: "Sebuah perusahaan penyedia kelas online mentoring data science.",
    tech: ["Figma", "Photoshop"],
    behance: "https://www.behance.net/gallery/229598365/TemuDataku-Website-Design",
    figma: "https://www.figma.com/design/f0GTrFyXhi1NWjGdW0HXQT/TemuDataku--Website-?node-id=549-1427&t=6BTQDPAkUnUGoY5N-1",
    image: "/projects/temudataku.png",
  },
  {
    id: 4,
    title: "Redesign Website Zonaebt",
    description: "Perusahaan yang bergerak di bidang teknologi terbarukan.",
    tech: ["Figma", "Photoshop"],
    image: "/projects/zonaebt.png",
    behance: "https://www.behance.net/gallery/227200741/Redesign-Website-ZonaEBT",
    figma: "https://www.figma.com/design/HqKRCpNqTPtM28O35vXzoc/Redesign-Website-Zonaebt?node-id=0-1&p=f",
  },
  {
    id: 5,
    title: "App Design Dibimbing",
    description: "Sebuah aplikasi mobile untuk kursus online dan pembelajaran daring, dengan fokus pada aksesibilitas dan inklusivitas.",
    tech: ["Figma", "Photoshop"],
    image: "/projects/dibimbing.png",
    behance: "https://www.behance.net/gallery/227228595/UI-Design-Mobile-App",
    figma: "https://www.figma.com/design/pBY3nycUr16mSpngVj5zsT/Study-Case-Dibimbing.id--UI-UX-Designer-?node-id=0-1&t=6ViHWjsrsTi5ODZP-1",
  },
  {
    id: 6,
    title: "App Design Warkop",
    description: "Aplikasi mobile untuk pemesanan makanan dan minuman di warkop",
    tech: ["Figma", "Photoshop"],
    image: "/projects/waren.png",
    figma: "https://www.figma.com/design/vhweLxFeZapGOI0zUBNmD3/Warkop-keren?node-id=0-1&t=Lo7cgwZTNmJiwSBY-1",
  },
  {
    id: 7,
    title: "Website Design Echo Store",
    description: "Website untuk pemesanan sparepart motor.",
    tech: ["Figma", "Photoshop"],
    image: "/projects/echostore.png",
    figma: "https://www.figma.com/design/f0GTrFyXhi1NWjGdW0HXQT/TemuDataku--Website-?node-id=549-1427&t=6BTQDPAkUnUGoY5N-1",
  },
  {
    id: 8,
    title: "Website Design Jemput Sampah",
    description: "Website untuk pemesanan jemput sampah via daring dengan tujuan mempermudah pelanggan.",
    tech: ["Figma", "Photoshop"],
    image: "/projects/websampah.png",
    figma: "https://www.figma.com/design/KoqQTxgEgVuRGL3XunLLYy/Banksampah?node-id=0-1&t=nZ0Uq0daXY8KgMog-1",
  },
  {
    id: 9,
    title: "Football Jersey Design",
    description: "Desain Jersey untuk tim sepakbola.",
    tech: [ "Photoshop"],
    image: "/projects/pomangfc.png",
  },
  {
    id: 10,
    title: "Football Jersey Design",
    description: "Desain Jersey untuk tim sepakbola.",
    tech: [ "Photoshop"],
    image: "/projects/pinterestfc.png",
  },
  {
    id: 11,
    title: "Cycling Comunity Jersey Design",
    description: "Desain Jersey untuk Komunitas Sepeda.",
    tech: [ "Photoshop"],
    image: "/projects/seragambikers.png",
  },
  {
    id: 12,
    title: "T-Shirt Design",
    description: "Desain T-Shirt untuk kenang-kenangan teman kelas.",
    tech: [ "Photoshop"],
    image: "/projects/seragamsd.png",
  },
  {
    id: 13,
    title: "ID Card Design",
    description: "Desain ID Card untuk panitia HUT RI di lingkungan rumah.",
    tech: [ "Photoshop"],
    image: "/projects/idcard.png",
  },
  {
    id: 14,
    title: "ID Card Design",
    description: "Desain ID Card untuk panitia HUT RI di lingkungan rumah.",
    tech: [ "Photoshop"],
    image: "/projects/idcard2.png",
  },
  {
    id: 15,
    title: "ID Card Design",
    description: "Desain ID Card untuk panitia HUT RI di lingkungan rumah.",
    tech: [ "Figma", "Photoshop"],
    image: "/projects/idcard3.png",
  },
  {
    id: 16,
    title: "Banner Design",
    description: "Desain Banner untuk panitia HUT RI di lingkungan rumah.",
    tech: [ "Photoshop"],
    image: "/projects/banner.png",
  },
  {
    id: 17,
    title: "Banner Design",
    description: "Desain Banner untuk panitia HUT RI di lingkungan rumah.",
    tech: [ "Canva"],
    image: "/projects/banner2.png",
  },
  {
    id: 18,
    title: "Pamflet Design",
    description: "Desain Pamflet untuk usaha saya sendiri.",
    tech: [ "Photoshop"],
    image: "/projects/chayonstore.jpg",
  },
  {
    id: 19,
    title: "Pamflet Design",
    description: "Desain Pamflet untuk usaha saya sendiri.",
    tech: [ "Canva"],
    image: "/projects/apkprem.png",
  },
  {
    id: 20,
    title: "LED Box Design",    
    description: "Desain LED Box untuk perusahaan penyewaan.",
    tech: [ "Photoshop"],
    image: "/projects/komaho.png",
  },
  {
    id: 21,
    title: "Sticker Design", 
    description: "Desain Stiker untuk usaha.",
    tech: [ "Photoshop"],
    image: "/projects/udrinks.png",
  },
];

export default function ProjectDetails() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleProject = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-black text-white">
      <Navbar />
      <Contact />
      <div className="container mx-auto px-6">
        {/* Judul Section */}
        <h1 className="text-4xl font-semibold text-center mb-16">
          All Projects
        </h1>

        {/* List Project */}
        <div className="flex flex-col space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row items-center gap-10 cursor-pointer transition-all duration-500 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              onClick={() => toggleProject(project.id)}
            >
              {/* Gambar */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-2xl shadow-lg w-full max-w-[400px] md:max-w-[450px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Konten */}
              <div className="w-full md:w-1/2">
                {/* Judul */}
                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                {/* Expandable Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openId === project.id
                      ? "max-h-[600px] opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-300 mb-6">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Tech Stack:</h4>
                    <ul className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <li
                          key={i}
                          className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-4">
                    {/* Behance CTA */}
                    {project.behance && project.behance.trim() !== "" && (
                      <a
                        href={project.behance}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                      >
                        <FaBehance className="text-xl" />
                        View Behance
                      </a>
                    )}

                    {/* Figma CTA */}
                    {project.figma && project.figma.trim() !== "" && (
                      <a
                        href={project.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition"
                      >
                        <SiFigma className="text-xl" />
                        View Figma
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer /> 
    </section>
  );
}

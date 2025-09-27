"use client";

import InfiniteMenu from "./InfiniteMenu";
import Link from "next/link";

export default function Projects() {
  // 🔹 Data project
  const items = [
    {
      image: "/projects/alancreative.png",
      title: "",
      description: "",
    },
    {
      image: "/projects/pomangfc.png",
      title: "",
      description: "",
    },
    {
      image: "/projects/temudataku.png",
      title: "",
      description: "",
    },
    {
      image: "/projects/idcard3.png",
      title: "",
      description: "",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-black text-white flex flex-col justify-center px-6 py-20"
    >
{/* 🔹 Title */}
<div className="w-full max-w-6xl mx-auto flex items-center justify-between mb-12">
  {/* Kiri → Teks Title */}
  <div className="text-left">
    <h2 className="text-4xl font-medium mb-3">Projects</h2>
    <div className="space-y-1 mb-6">
      <div className="w-16 h-0.5 bg-white rounded"></div>
      <div className="w-10 h-0.5 bg-white rounded"></div>
    </div>
  </div>
</div>

      {/* 🔹 Content: Grid 2 Kolom */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Kolom Kiri → InfiniteMenu */}
        <div style={{ height: "500px", position: "relative" }}>
          <InfiniteMenu items={items} />
        </div>

        {/* Kolom Kanan → Deskripsi + CTA */}
        <div className="flex flex-col justify-center space-y-6">
          <h3 className="text-2xl font-semibold">Project Showcase</h3>
          <p className="text-gray-400 leading-relaxed">
            Beberapa project yang saya kerjakan merupakan sebuah Study Case, Tugas Kuliah, Permintaan Client, dan Project Mandiri. Selain yang ada pada halaman (Projects) ini, saya juga memiliki beberapa project lain seperti instalasi perangkat lunak, instalasi sistem operasi windows, dan troubleshooting pada perangkat komputer.
          </p>
        <div className="flex justify-right items-center py-6">
      <Link
        href="/project-detail"
        className="
          px-6 py-2 
          rounded-full 
          border border-gray-400 
          text-gray-200 
          hover:bg-gray-200 hover:text-black 
          transition-colors duration-300
          shadow-md hover:shadow-lg
        "
      >
        Go Archive
      </Link>
    </div>
        </div>
      </div>
    </section>
  );
}

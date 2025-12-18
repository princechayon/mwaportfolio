"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronUp, ChevronDown, X, ChevronLeft, ChevronRight } from "lucide-react";

type Details = { text: string; list: string[] };
type ImageItem = { src: string; title?: string; date?: string };

type ActivityCardProps = {
  title: string;
  year: string;
  logo: string;
  points: string[];
  details: Details;
  images: (string | ImageItem)[][];
};

function IconButton({ children, ...rest }: any) {
  return (
    <button
      {...rest}
      className="inline-flex items-center justify-center rounded-full p-2 bg-white/10 hover:bg-white/20 border border-white/10 shadow-sm transition"
    >
      {children}
    </button>
  );
}

function normalizeImage(item: string | ImageItem, fallbackTitle: string, fallbackDate: string): ImageItem {
  if (typeof item === "string") {
    const parts = item.split("/");
    const file = parts[parts.length - 1];
    const name = file.replace(/[-_\d]+|\.(jpg|jpeg|png|webp|gif)$/gi, " ").replace(/\s+/g, " ").trim();
    return { src: item, title: name || fallbackTitle, date: fallbackDate };
  }
  return { src: item.src, title: item.title || fallbackTitle, date: item.date || fallbackDate };
}

function formatDate(dateStr?: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (!isNaN(d.getTime())) {
    return d.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
  }
  if (/^\d{4}$/.test(dateStr)) return dateStr;
  return dateStr;
}

function ActivityCard({ title, year, logo, points, details, images }: ActivityCardProps) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [preview, setPreview] = useState<ImageItem | null>(null);

  const flatImages = useMemo(() => {
    const fallbackDate = year;
    return images.flat().map((img, idx) => normalizeImage(img, `${title} image ${idx + 1}`, fallbackDate));
  }, [images, title, year]);

  const showNext = () => setCurrentIndex((i) => (i + 1) % flatImages.length);
  const showPrev = () => setCurrentIndex((i) => (i - 1 + flatImages.length) % flatImages.length);

  return (
    <article className="relative w-full max-w-3xl mx-auto bg-gradient-to-br from-gray-900 via-[#0b0b0b] to-black/90 text-white rounded-3xl shadow-2xl overflow-hidden">
      <div className={`p-5 sm:p-6 md:p-8 ${open ? "pb-10" : "pb-6"}`}>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden bg-white/5 flex items-center justify-center">
              <Image src={logo} alt={`${title} logo`} width={64} height={64} className="object-contain" />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg sm:text-2xl font-semibold tracking-tight">{title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-300 mt-1">
                  <Calendar size={14} />
                  <span>{year}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <IconButton aria-label={open ? "Collapse details" : "Expand details"} onClick={() => setOpen((v: boolean) => !v)}>
                  {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </IconButton>
              </div>
            </div>

            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-200 list-disc pl-5">
              {points.map((p, i) => (
                <li key={i} className="leading-snug">{p}</li>
              ))}
            </ul>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.32 }}
              className="mt-6 pt-6 border-t border-white/6 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="text-gray-300 text-sm leading-relaxed">
                <h4 className="text-white font-semibold mb-3">Detail Kegiatan</h4>
                <p className="mb-4">{details.text}</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-200">
                  {details.list.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  {flatImages.slice(0, 4).map((item) => (
                    <button
                      key={item.src}
                      onClick={() => {
                        setPreview(item);
                        setCurrentIndex(flatImages.findIndex((f) => f.src === item.src));
                      }}
                      className="group rounded-xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/30"
                      aria-label={`Preview ${item.title}`}
                    >
                      <div className="relative w-full h-36 sm:h-40 bg-white/5">
                        <Image src={item.src} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{flatImages.length} photos</span>
                  <span className="italic">Click to preview</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Preview modal */}
      <AnimatePresence>
        {preview && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(null)}
            aria-modal
            role="dialog"
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ type: "spring", stiffness: 250, damping: 25 }}
              className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-gradient-to-b from-black/80 to-black/60 touch-pan-y"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPreview(null)}
                className="absolute top-4 right-4 z-20 bg-white/10 p-2 rounded-full hover:bg-white/20"
                aria-label="Close image preview"
              >
                <X size={20} />
              </button>

              {/* Prev/Next controls */}
              <button
                onClick={showPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 p-3 rounded-full hover:bg-white/20"
                aria-label="Previous image"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={showNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 p-3 rounded-full hover:bg-white/20"
                aria-label="Next image"
              >
                <ChevronRight size={22} />
              </button>

              {/* Swipable area */}
              <div
                className="w-full h-[60vh] relative overflow-hidden"
                onTouchStart={(e) => (window as any).touchStartX = e.touches[0].clientX}
                onTouchEnd={(e) => {
                  const diff = e.changedTouches[0].clientX - (window as any).touchStartX;
                  if (diff > 50) showPrev();
                  if (diff < -50) showNext();
                }}
              >
                <Image src={flatImages[currentIndex].src} alt={flatImages[currentIndex].title} fill className="object-contain select-none" />

                <div className="absolute left-6 right-6 bottom-6 bg-black/50 backdrop-blur-sm rounded-xl p-3 flex items-start gap-3">
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-white">{flatImages[currentIndex].title}</div>
                    <div className="text-xs text-gray-300 mt-1">{formatDate(flatImages[currentIndex].date)}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export default function Activity() {
  const cards: ActivityCardProps[] = [
    {
      title: "Kementerian Luar Negeri",
      year: "2024",
      logo: "/kemlulogo.png",
      points: [],
      details: { text: "Deskripsi kegiatan.", list: ["Deskripsi list", "Deskripsi list", "Deskripsi list"] },
      images: [
        [
          { src: "/kemlu1.jpg", title: "SKB Tes Esai CPNS - Kementerian Luar Negeri", date: "2024-11-20" },
          { src: "/kemlu3.jpg", title: "SKD CAT CPNS - Kementerian Luar Negeri", date: "2024-10-17" },
        ],
        [
          { src: "/kemlu4.jpg", title: "SKB Wawancara Substansi - Kementerian Luar Negeri", date: "2024-12-04" },
          { src: "/kemlu5.jpg", title: "Exit Presentation (Internship)", date: "2025-01-10" },
        ],
      ],
    },
    {
      title: "Kementerian Pertahanan",
      year: "2025",
      logo: "/kemhanlogo.png",
      points: [],
      details: {
        text: "Pada tahun 2023, tim kami berperan dalam membangun sistem pelaporan digital berbasis web di Kementerian Kominfo, dengan fokus pada efisiensi data publik.",
        list: ["Desain UI/UX dashboard pelaporan", "Koneksi API ke sistem eksternal", "Pengujian keamanan & performa"],
      },
      images: [
        [
          { src: "/kominfo1.jpg", title: "Sesi workshop", date: "2025-03-10" },
          "/kominfo2.jpg",
        ],
        [
          "/kominfo3.jpg",
          { src: "/kominfo4.jpg", title: "Demo sistem", date: "2025-03-12" },
        ],
      ],
    },
  ];

  return (
    <section id="activity" className="py-20 px-6 md:px-12 bg-black dark:bg-black transition-colors">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-black dark:text-white">Activity</h2>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="w-16 h-[2px] bg-black dark:bg-white rounded" />
            <span className="w-8 h-[2px] bg-black dark:bg-white rounded" />
          </div>
        </header>

        <div className="flex flex-col gap-8">
          {cards.map((c) => (
            <ActivityCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
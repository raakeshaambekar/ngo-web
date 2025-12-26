"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageGallery({
  images,
}: {
  images: string[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className="relative h-40 rounded-lg overflow-hidden"
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover hover:scale-105 transition"
            />
          </button>
        ))}
      </div>

      {/* MODAL */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <button
            className="absolute top-6 right-6 text-white text-2xl"
            onClick={() => setActiveIndex(null)}
          >
            ✕
          </button>

          <button
            className="absolute left-4 text-white text-3xl"
            onClick={() =>
              setActiveIndex(
                (activeIndex - 1 + images.length) % images.length
              )
            }
          >
            ‹
          </button>

          <div className="relative w-[90vw] max-w-4xl h-[80vh]">
            <Image
              src={images[activeIndex]}
              alt=""
              fill
              className="object-contain"
            />
          </div>

          <button
            className="absolute right-4 text-white text-3xl"
            onClick={() =>
              setActiveIndex((activeIndex + 1) % images.length)
            }
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}

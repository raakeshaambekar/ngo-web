"use client";

import { useRef } from "react";

export default function ImageManager({
  images = [],
  onChange,
}: {
  images: { url: string; isMain: boolean }[];
  onChange: (val: any[]) => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);

  async function upload(file: File) {
    const fd = new FormData();
    fd.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: fd,
    });

    const data = await res.json();

    onChange([
      ...images,
      {
        url: data.url,
        isMain: images.length === 0, // first image = main
      },
    ]);
  }

  function setMain(index: number) {
    onChange(
      images.map((img, i) => ({
        ...img,
        isMain: i === index,
      }))
    );
  }

  function remove(index: number) {
    const updated = images.filter((_, i) => i !== index);

    // ensure at least one main image
    if (updated.length && !updated.some((i) => i.isMain)) {
      updated[0].isMain = true;
    }

    onChange(updated);
  }

  return (
    <div className="space-y-4">
      <label className="font-semibold block">Images</label>

      {/* Upload Button */}
      <div
        onClick={() => fileRef.current?.click()}
        className="cursor-pointer border-2 border-dashed rounded-xl p-6 text-center hover:bg-gray-50 transition"
      >
        <p className="text-gray-600 text-sm">
          Click to upload image
        </p>
        <p className="text-xs text-gray-400 mt-1">
          JPG / PNG recommended
        </p>
      </div>

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => e.target.files && upload(e.target.files[0])}
      />

      {/* Thumbnails */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative border rounded-lg overflow-hidden ${
                img.isMain ? "ring-2 ring-red-600" : ""
              }`}
            >
              <img
                src={img.url}
                alt=""
                className="h-32 w-full object-cover"
              />

              {/* Main Badge */}
              {img.isMain && (
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  Main
                </span>
              )}

              {/* Actions */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 flex text-xs text-white">
                <button
                  type="button"
                  onClick={() => setMain(index)}
                  className="flex-1 py-1 hover:bg-black/80"
                >
                  Set Main
                </button>
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="flex-1 py-1 hover:bg-black/80"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
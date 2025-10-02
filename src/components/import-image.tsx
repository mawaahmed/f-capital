"use client";

import React, { useRef, useState } from "react";
import { Trash2, Upload } from "lucide-react";
import { Button } from "./ui/button";

export default function PartImageUpload() {
  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);
    if (images.length + files.length > 4) {
      alert("Vous ne pouvez importer que 4 images maximum.");
      return;
    }

    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages]);

    e.target.value = "";
  };

  const handleRemove = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClickUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="border border-gray-200 rounded-lg p-4 w-full max-w-md h-fit">
        <h2 className="font-semibold text-lg mb-3">Product Image</h2>

        <div className="grid grid-cols-2 gap-2">
          {/* Upload Button */}
          <div
            className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-4 cursor-pointer transition ${
              images.length >= 4
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-50"
            }`}
            onClick={images.length < 4 ? handleClickUpload : undefined}
          >
            <Upload className="w-6 h-6 text-gray-400 mb-1" />
            <p className="text-sm font-medium text-blue-600">Click to upload</p>
            <p className="text-xs text-gray-400">or drag and drop</p>
            <input
              type="file"
              accept="image/*"
              multiple
              ref={fileInputRef}
              className="hidden"
              onChange={handleUpload}
            />
          </div>

          {/* Display uploaded images */}
          {images.map((src, index) => (
            <div key={index} className="relative group">
              <img
                src={src}
                alt={`uploaded-${index}`}
                className="w-full h-32 object-cover rounded-lg border"
              />
              <button
                onClick={() => handleRemove(index)}
                className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition"
              >
                <Trash2 className="w-6 h-6 text-white" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="py-4 flex justify-between gap-5 w-[440px]">
        <Button className="bg-gray-500 text-white">Discard</Button>
        <Button className="bg-blue-500 text-white">Save</Button>
      </div>
    </div>
  );
}

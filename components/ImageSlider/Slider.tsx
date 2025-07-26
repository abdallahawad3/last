"use client";
import "react-image-gallery/styles/css/image-gallery.css";
import { useState } from "react";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import "./gallery-rtl.css"; // Custom RTL styles
interface ImageProps {
  images: {
    original: string;
    thumbnail: string;
  }[];
}

const Slider = ({ images }: ImageProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openGallery = (index: number) => {
    setStartIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      {/* شبكة الصور */}
      <div className="container !py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <h2 className="col-span-full flex items-center justify-center gap-2 flex-col text-center text-2xl md:text-5xl font-bold mb-4">
          شاهد اعمالنا​
          <span className="block">
            <svg
              aria-hidden="true"
              className="w-12"
              viewBox="0 0 640 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M608 0H160a32 32 0 0 0-32 32v96h160V64h192v320h128a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zM232 103a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm352 208a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm-168 57H32a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32zM96 224a32 32 0 1 1-32 32 32 32 0 0 1 32-32zm288 224H64v-32l64-64 32 32 128-128 96 96z"></path>
            </svg>
          </span>
        </h2>
        {images.map((img, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded-lg shadow-lg hover:scale-101 transition-transform"
            onClick={() => openGallery(index)}
          >
            <Image
              src={img.original}
              alt={`Image ${index + 1}`}
              className="w-full h-60 object-cover"
              width={1000}
              height={600}
            />
          </div>
        ))}
      </div>

      {/* المودال (Overlay) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center ">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
          >
            ✕
          </button>
          <div className="w-full max-w-5xl p-4">
            <ImageGallery
              items={images}
              showBullets={true}
              showNav={true}
              showThumbnails={true}
              showIndex={true}
              showFullscreenButton={false}
              showPlayButton={false}
              onSlide={(currentIndex) => setStartIndex(currentIndex)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Slider;

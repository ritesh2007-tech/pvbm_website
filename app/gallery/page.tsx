"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryData } from "./gallerydata";
import YearCard from "./YearCard";

const Gallery = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const currentYear = galleryData.find(
    (year) => year.year === selectedYear
  );

  const currentEvent = currentYear?.events.find(
    (event) => event.id === selectedEvent
  );

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-140 sm:h-170 overflow-hidden">
        <Image
          src="/images/gallery.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="max-w-3xl mx-auto text-[19px] md:text-2xl font-thin mb-4 text-white py-2 px-2">
              “Every picture reflects purposeful learning- where academic,
              creativity, values and leadership grow together”
            </h1>

            <p className="text-[14px] md:text-base text-white">
              - Prasan Vidya Bala Mandir
            </p>
          </div>
        </div>
      </div>

      {/* YEARS VIEW */}
      {!selectedYear && (
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-thin text-center mb-10">
            Explore by Year
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {galleryData.map((year) => (
              <YearCard
                key={year.id}
                year={year.year}
                coverImage={year.thumbnail}
                description={year.description}
                onClick={() => {
                  setSelectedYear(year.year);
                  setSelectedEvent(null);
                }}
              />
            ))}
          </div>
        </section>
      )}

      {/* EVENTS VIEW */}
      {selectedYear && !selectedEvent && currentYear && (
        <section className="max-w-7xl mx-auto px-6 py-16">
          <button
            onClick={() => setSelectedYear(null)}
            className="mb-8 text-sm font-medium hover:underline"
          >
            ← Back to Years
          </button>

          <h2 className="text-2xl font- mb-10 text-center">
            {currentYear.year} Events and Celebrations
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {currentYear.events.map((event) => (
              <article
                key={event.id}
                onClick={() => setSelectedEvent(event.id)}
                className="group overflow-hidden rounded-3xl border hover:shadow-xl transition cursor-pointer"
              >
                <div className="relative h-72">
                  <Image
                    src={event.coverImage}
                    alt={event.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/20" />

                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-lg font-semibold text-white">
                      {event.title}
                    </h3>

                    {event.date && (
                      <p className="text-white/80 mt-2">
                        {event.date}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* PHOTOS VIEW */}
      {selectedYear && selectedEvent && currentEvent && (
        <section className="max-w-7xl mx-auto px-6 py-16">
          <button
            onClick={() => setSelectedEvent(null)}
            className="mb-8 text-sm font-medium hover:underline"
          >
            ← Back to Events
          </button>

          <h2 className="text-3xl font-thin mb-10">
            {currentEvent.title}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentEvent.photos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo.url)}
                className="relative aspect-square overflow-hidden rounded-xl cursor-pointer"
              >
                <Image
                  src={photo.url}
                  alt={""}
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FULLSCREEN IMAGE MODAL */}
{selectedPhoto && (
  <div
    onClick={() => setSelectedPhoto(null)}
    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
  >
    {/* Close Button */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        setSelectedPhoto(null);
      }}
      className="
        fixed
        top-4
        right-4
        z-[999]
        w-12
        h-12
        rounded-full
        bg-white
        text-black
        text-2xl
        font-light
        flex
        items-center
        justify-center
        shadow-lg
        hover:scale-110
        transition
      "
    >
      ×
    </button>

    {/* Image Container */}
    <div
      onClick={(e) => e.stopPropagation()}
      className="
        relative
        w-full
        max-w-6xl
        h-[70vh]
        sm:h-[85vh]
      "
    >
      <Image
        src={selectedPhoto}
        alt="Gallery Image"
        fill
        priority
        className="object-contain"
      />
    </div>
  </div>
)}
    </>
  );
};

export default Gallery;
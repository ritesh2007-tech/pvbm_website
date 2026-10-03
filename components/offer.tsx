import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function WhatWeOffer() {
  const offerings = [
    {
      title: "Kindergarten",
      description: "Play-based learning that builds curiosity and confidence.",
      classes: "LKG – UKG",
      image: "/images/kg-2.JPG",
    },
    {
      title: "Primary School",
      description: "Strong foundations with activity-based education.",
      classes: "Class I – V",
      image: "/images/primary.jpg",
    },
    {
      title: "Middle School",
      description: "Concept clarity and disciplined learning.",
      classes: "Class VI – VIII",
      image: "/images/secondary.jpg",
    },
    {
      title: "Higher Secondary",
      description: "Focused preparation for boards and careers.",
      classes: "Class IX – XII",
      image: "/images/higher_sec.png",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 text-xs tracking-widest uppercase">
            Our Academic Programmes
          </span>

          <h2 className={`mt-3 text-2xl sm:text-4xl font-bold ${playfair.className}`}>
            Education for Every Stage of Growth
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
            Programs designed to nurture curiosity, confidence, and excellence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 lg:gap-12">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="
                group relative
                w-full
                aspect-[4/3]
                rounded-[50px]
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                transition-all duration-300
              "
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

              {/* Content */}
              {/* Content */}
<div className="absolute inset-0 flex items-end justify-start p-5 sm:p-6">
  <div className="text-left">
    <h3 className="text-white text-lg sm:text-xl font-semibold mb-1">
      {item.title}
    </h3>

    <p className="text-gray-100 text-xs sm:text-sm mb-2 max-w-xs">
      {item.description}
    </p>

    <span className="text-orange-500 text-sm font-bold tracking-wide">
      {item.classes}
    </span>
  </div>
</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
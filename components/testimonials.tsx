"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export function InfiniteMovingCardsDemo() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-orange-50  to-orange-50">


      <div className="relative max-w-7xl mx-auto">

        {/* ===== Section Header ===== */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-xs tracking-widest uppercase mb-3">
            Testimonials
          </p>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${playfair.className}`}
          >
            Hear From Parents
          </h2>

          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            Trusted words from parents who have witnessed the care, values,
            and academic growth we nurture every day.
          </p>
        </div>

        {/* ===== Infinite Moving Cards ===== */}
        <div className="relative flex items-center justify-center">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </div>

      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "The school provides a nurturing environment where children grow not only academically but also morally and emotionally.",
    name: "Mrs. Kavitha",
    title: "Parent of Sudharshan VI-B",
  },
  {
    quote:
      "The teachers are dedicated, caring, and always encourage students to give their best in every aspect of life.",
    name: "Mr. Ramesh",
    title: "Parent of Monica VII-A",
  },
  {
    quote:
      "A perfect blend of discipline, academics, and extracurricular activities. My child loves coming to school.",
    name: "Mrs. Anitha",
    title: "Parent of Nisheanth III-B",
  },
  {
    quote:
      "The school focuses on values and character building along with strong academic foundations.",
    name: "Mr. Suresh",
    title: "Parent of Niranjana IX-B",
  },
];

"use client";

import { Playfair_Display } from "next/font/google";

// Professional font pairing
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const images = [
  {
    url: "/images/pht1-2.jpg",
    title: "Out Campus Learning ",
    description:
      "Learning goes beyond the classroom. School trips help children build confidence, friendships, and real-world understanding.",
  },
  {
    url: "/images/activity1.JPG",
    title: "Co Curricular Activities",
    description:
      "A joyful celebration where students express themselves through dance, music, art, and performances, celebrating our rich culture.",
  },
  {
    url: "/images/career_guidance.JPG",
    title: "Career Guidance",
    description:
      "Supportive counseling helps students recognize interests, explore possibilities, and confidently plan their career journey.",
  },
  {
    url: "/images/club-2.jpg",
    title: "Clubs @ PVBM as Skill Development ",
    description:
      "From Science to Arts and Music, clubs give students a chance to explore interests, learn teamwork, and build new skills.",
  },
  {
    url: "/images/IMG_1680.JPG",
    title: "Festivals & Celebrations",
    description:
      "We celebrate festivals and special days to help children understand traditions, values, and the joy of togetherness.",
  },
  {
    url: "/images/D.F.I. - 4.jpeg",
    title: "Student Empowerment",
    description:
      "Interactive workshops help students discover talents, develop practical skills, and enjoy hands-on learning.",
  },
];


export default function StudentLife() {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-2xl md:text-4xl text-black font-bold mb-4 ${playfair.className}`}>
            Life Cherishing Experiences at {" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-200 text-transparent bg-clip-text">
              PVBM
            </span>
          </h2>
          <p className="text-[13px] sm:text-1xl text-gray-500">
            Discover What Students Experience at PVBM
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl w-full">
          {images.map((item, index) => (
            <div
              key={index}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group"
            >
              {/* Image */}
              <img
                src={item.url}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Bottom Fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-bold mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-[13px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

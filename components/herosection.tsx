import { GraduationCap, School, Users } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

// Professional font pairing
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});



export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100vh] md:min-h-[100vh]">


      {/* Background Video */}
      {/* ===== DESKTOP & TABLET VIDEO ===== */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/black.png"
      >
        <source src="/videos/hero2.mp4" type="video/mp4" />
      </video>

      {/* ===== MOBILE VIDEO ===== */}
      <video
        className="block md:hidden absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/black.png"
      >
        <source src="/videos/hero-mobile.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content Wrapper */}
      <div
        className="
    relative z-10
    flex flex-col items-center justify-center
    min-h-[90vh] md:min-h-[100vh]
    px-4 sm:px-6 
    pt-10 sm:pt-0
  "
      >
        <div className="max-w-4xl text-center text-white space-y-4 sm:space-y-6">

          {/* Welcome */}
          {/* <span className="text-[12px] sm:text-[20px] uppercase tracking-widest font-semibold text-orange-400">
            Welcome to
          </span> */}
          {/* Top Left Logo */}


          {/* Heading */}
          <h1 className={`text-2xl sm:text-5xl font-bold leading-tight
                         text-white bg-clip-text mt-5
                          ${playfair.className}`}>
            Prasan Vidya{" "}
            <span className="bg-orange-700 px-3 py-1 rounded-md text-white">
              Bala
            </span>{" "}
            Mandir
          </h1>

          {/* Paragraph */}
          <p className="text-gray-200 text-[12px] sm:text-base leading-relaxed px-2 sm:px-0">
            Recognized among the best, our strength lies in purposeful nurturing that shapes capable, compassionate and confident learners. </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <Link href="/admission">
              <button
                className="px-5 py-2 sm:px-6 sm:py-3
text-[13px] sm:text-[15px]
font-normal rounded-full
bg-gradient-to-r from-orange-800 to-orange-500
hover:from-orange-600 hover:to-orange-400
hover:scale-105 active:scale-95
cursor-pointer
transition"
              >
                Enroll Now
              </button>
            </Link>


            <Link href="/about">
              <button
                className="px-5 py-2 sm:px-6 sm:py-3
text-[13px] sm:text-[15px]
border-2 border-orange-500
bg-orange-100 text-black
rounded-[10px]
hover:bg-orange-800 hover:text-white
hover:scale-105 active:scale-95
cursor-pointer
transition"
              >
                Learn More
              </button>
            </Link>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-1 sm:gap-4 mt-6">

            <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur
                  px-2 py-2 sm:px-6 sm:py-4
                  rounded-lg justify-center">
              <Users className="w-4 h-4 sm:w-8 sm:h-8 text-white" />
              <div>
                <h3 className="text-sm sm:text-2xl font-bold">
                  900 <span className="text-orange-600">+</span>
                </h3>
                <p className="text-[9px] sm:text-sm text-gray-300">Students</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur
                  px-2 py-2 sm:px-6 sm:py-4
                  rounded-lg justify-center">
              <GraduationCap className="w-4 h-4 sm:w-8 sm:h-8 text-white" />
              <div>
                <h3 className="text-sm sm:text-2xl font-bold">
                  50 <span className="text-orange-600">+</span>
                </h3>
                <p className="text-[9px] sm:text-sm text-gray-300">Staff</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur
                  px-2 py-2 sm:px-6 sm:py-4
                  rounded-lg justify-center">
              <School className="w-4 h-4 sm:w-8 sm:h-8 text-white" />
              <div>
                <h3 className="text-sm sm:text-2xl font-bold">
                  17 <span className="text-orange-600">+</span>
                </h3>
                <p className="text-[9px] sm:text-sm text-gray-300">
                  Years of excellence
                </p>
              </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  );
}

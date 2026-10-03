import Image from "next/image";

import { Playfair_Display } from "next/font/google";

// Professional font pairing
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});


export default function HomeAbout() {
  return (
    <section className="relative bg-white py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">

      {/* Decorative Circles - visible on tablet & desktop */}
      {/* <div className="hidden sm:block absolute top-10 left-10 w-40 h-40 bg-orange-200 rounded-full opacity-30 z-10"></div>
      <div className="hidden sm:block absolute top-32 right-20 w-24 h-24 bg-orange-300 rounded-full opacity-40 z-10"></div>
      <div className="hidden sm:block absolute bottom-20 left-1/4 w-32 h-32 bg-orange-100 rounded-full opacity-25 z-10"></div>
      <div className="hidden sm:block absolute bottom-10 right-10 w-52 h-52 bg-orange-200 rounded-full opacity-20 z-10"></div> */}



      {/* Title */}
      <h1 className={`text-xl sm:text-3xl md:text-4xl font-bold text-center mb-12 relative z-10 ${playfair.className}`}>
        Why Parents and Students Trust <span className="text-orange-600">PVBM</span>
      </h1>


      {/* Main Content */}
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-8 md:gap-12 relative z-10">

        {/* Left Side - Text and Points */}
        <div className="md:w-1/2 flex flex-col justify-center">

          
          <p className="text-[13px] sm:text-[14px] md:text-lg text-gray-700 mb-6 sm:mb-8">
            When parents choose PVBM, they choose a school committed to <span className="font-bold">safety</span>, <span className="font-bold">excellence</span>,<span className="font-bold"> individual attention </span> and <span className="font-bold"> life long learning</span>.
          </p>

          {/* Points */}
          {[
            {
              title: "Holistic Growth",
              desc: "Beyond Textbooks, PVBM shapes confident speakers, thinkers, leaders and compassionate citizens.",
            },
            {
              title: "Commitment",
              desc: "PVBM is chosen for its unwavering commitment to every child’s future.",
            },
            {
              title: "Nurturing",
              desc: "At PVBM every child is guided personally, emotionally and academically to thrive.",
            },
            {
              title: "Path to Excellence",
              desc: " The blend of academics with innovative teaching to ensure consistent student success.",
            },
          ].map((point, index) => (
            <div key={index} className="flex gap-3 mb-4 sm:mb-6">
              <div className="bg-orange-500 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-base sm:text-lg">✓</span>
              </div>
              <div>
                <h3 className={`font-semibold text-gray-800 text-sm sm:text-lg md:text-lg ${playfair.className}`}>{point.title}</h3>
                <p className="text-gray-600 text-[10px] sm:text-[12px] md:text-sm">{point.desc}</p>
              </div>
            </div>
          ))}
{/* 
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium shadow-lg transition mt-2 sm:mt-4 w-full sm:w-auto">
            Learn More →
          </button> */}
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0  rounded-full">
          <Image
            src="/images/kids.jpeg"
            alt="Prasan Vidya Mandir Campus"
            width={1200}
            height={900}
            className="rounded-full shadow-2xl w-full max-w-md sm:max-w-lg md:max-w-full object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}
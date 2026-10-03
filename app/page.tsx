"use client";
import HeroSection from "@/components/herosection";
import HomeAbout from "@/components/trust";
import StudentLife from "@/components/studentlife";
import PvbmDifferent from "@/components/motto";
import WhatWeOffer from "@/components/offer";
import Link from "next/link";
import Image from "next/image";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { Playfair_Display } from "next/font/google";
import { InfiniteMovingCardsDemo } from "@/components/testimonials";


// Professional font pairing
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
type Card = {
  id: number;
  thumbnail: string;
  content: React.ReactNode;
};

const MobileGrid = ({ cards }: { cards: Card[] }) => {
  return (
    <div className="grid grid-cols-2 gap-3 w-full">
      {cards.slice(0, 4).map((card) => (
        <div
          key={card.id}
          className="
            relative
            w-full
            aspect-[4/3]   /* landscape */
            rounded-xl
            bg-gray-100
            overflow-hidden
            flex items-center justify-center
          "
        >
          <img
            src={card.thumbnail}
            alt=""
            className="
              w-full h-full
              object-contain
              bg-white
            "
          />
        </div>
      ))}
    </div>
  );
};



export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <PvbmDifferent/>
      <HomeAbout />
       <div
  className="
    hidden lg:block
    absolute
    z-30
    rotate-180
    pointer-events-none

    left-24 xl:left-36 2xl:left-48
    -mt-4
  "
>
  <Image
    src="/images/arrow.png"
    alt=""
    width={320}
    height={80}
    draggable={false}
    aria-hidden="true"
    className="
      w-56 xl:w-64 2xl:w-72
      h-auto
      drop-shadow-2xl
      select-none
    "
  />
</div>

      <WhatWeOffer/> 
      
   <div
  className="
    hidden lg:block
    absolute
    z-30
    rotate-50
    pointer-events-none

    left-24 xl:left-36 2xl:left-30
    -mt-4
  "
>
  <Image
    src="/images/airplane.png"
    alt=""
    width={320}
    height={80}
    draggable={false}
    aria-hidden="true"
    className="
      w-56 xl:w-64 2xl:w-92
      h-auto
      drop-shadow-2xl
      select-none
    "
  />
</div>

      <StudentLife />

     
      
<section className="bg-white">
  <div
    className="
      max-w-7xl mx-auto px-6 py-10
      grid grid-cols-1
      lg:grid-cols-2
      gap-8
      items-center
    "
  >
    {/* LEFT SIDE (GRID) */}
    <div className="
      order-2
      lg:order-1
    ">
      {/* MOBILE GRID */}
      <div className="block lg:hidden w-full max-w-md mx-auto">
        <MobileGrid cards={cards} />
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden lg:block w-full h-[680px]">
        <LayoutGrid cards={cards} />
      </div>
    </div>

    {/* RIGHT SIDE (TEXT) */}
    <div className="
      order-1
      lg:order-2
      flex flex-col justify-center
      max-w-xl px-2 md:px-6
    ">
      <h2
        className={`text-4xl md:text-5xl font-thin text-orange-900 mb-6 ${playfair.className}`}
      >
        Gallery
      </h2>

      <p className="text-gray-500 text-[13px] md:text-lg leading-relaxed mb-8">
        Our school gallery captures the vibrant moments, achievements, and
        everyday joys of student life. From classrooms to celebrations, each
        image tells a story of learning, growth, and creativity.
      </p>

      <Link
  href="/gallery"
  className="
  text-[12px] sm:text-sm
    inline-flex
    w-fit
    items-center justify-center
    px-10 py-3
    rounded-xl
    bg-black text-white
    transition-all duration-300
    hover:bg-orange-500 hover:text-black
    hover:scale-105
  "
>
  Take a Look :)
</Link>

    </div>
  </div>
</section>



{/* <ThreeDMarqueeDemo/> */}
<InfiniteMovingCardsDemo/>
     <section
  className="relative bg-white h-[50vh] sm:h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6
             bg-cover bg-center"
  style={{ backgroundImage: "url('/images/adm.jpg')" }}
>
  {/* Overlay for dark effect if needed */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-10 text-center space-y-3 sm:space-y-4">
    {/* Heading */}
    <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
      Ready To Join Our Family?
    </h2>

    {/* Paragraph */}
    <p className="text-[10px] sm:text-sm md:text-base text-white md:max-w-xl mx-auto">
      Admissions are now open for the academic year 2026-27. Give your child the best start in life.
    </p>
   
    {/* Button */}

    <Link href={"https://pvbmandir.onlinevidyalaya.net/Pages/OnlineAdmission/AdmissionInquiryForm.aspx?OrgGroupId=3853"}>
    <button className="bg-orange-600 text-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-[12px] 
                       hover:bg-orange-700 text-[12px] sm:text-sm md:text-base transition w-full sm:w-auto hover:scale-105 active:scale-95
cursor-pointer">
      Apply For Admission →
    </button>
    
    </Link>
    
    
  </div>
</section>

    </div>
  );
  
}




const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-2xl text-xl text-white">
        Project
      </p>
      <p className="font-normal text-base text-white"></p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-2xl text-xl text-white">
        Festivals
      </p>
      <p className="font-normal text-base text-white"></p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-2xl text-xl text-white">
        Student Presentation
      </p>
      <p className="font-normal text-base text-white"></p>
      
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-2xl text-xl text-white">
        Sports day
      </p>
      <p className="font-normal text-base text-white"></p>
      
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/images/2025/BaalPradarshini/eve3.JPG",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/images/2025/KrishnaJayanti/kj2.JPG",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/images/adm (3).JPG",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "/images/2025/Sportsday/sd4.JPG",
    },
];






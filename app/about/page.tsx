"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import { PrincipalMessage } from "@/components/principalmessage";
import { SeniorPrincipalMessage } from "@/components/senior-principal";
import { Playfair_Display } from "next/font/google";
import { LayoutTextFlipDemo } from "@/components/whychoose";
import { Target, Eye, HeartHandshake } from "lucide-react";
import Link from "next/link";


// Professional font pairing
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const items = [
  {
    title: "Smart Classes",
    desc: "Digital classrooms that make learning engaging.",
    img: "/images/smart_classroom.jpg",
  },
  {
    title: "Library",
    desc: "Quiet space with books for reading and research.",
    img: "/images/pvbm_lib.jpg",
  },
  {
    title: "Physics Lab",
    desc: "Hands-on experiments to understand concepts better.",
    img: "/images/physlab.JPG",
  },
  {
    title: "Chemistry Lab",
    desc: "Safe and well-equipped lab for practical learning.",
    img: "/images/chem.JPG",
  },
  {
    title: "Biology Lab",
    desc: "Learning through observation and real-life examples.",
    img: "/images/bio.JPG",
  },
  {
    title: "Computer Lab",
    desc: "Modern computers for digital skills and learning.",
    img: "/images/cmplab.png",
  },

  {
    title: "Football Ground",
    desc: "Dedicated space for training, matches, and team sports.",
    img: "/images/football_ground.png",
  },
  {
    title: "Pickelball Court",
    desc: "Modern court for energetic and skill-based play.",
    img: "/images/pickel-court.png",
  },
  {
    title: "Kids Play Area",
    desc: "Safe space for fun, play, and exploration.",
    img: "/images/park.png",
  }
];

const boardMembers = [
  {
    name: "  Mr. Surendra Kumar",
    role: "  Correspondent / member",
    image: "/images/Surendra Kumar.jpeg",
  },
   {
    name: "Ms. Lakshmi Prabha",
    role: "Educationist / Convenor",
    image: "/images/Lakshmi Prabha.jpeg",
  },
  {
    name: "Mr. Jitendra Kumar",
    role: "Chairperson",
    image: "/images/Jitendra Kumar.jpeg",
  },
 
  {
    name: " Ms. Rooba ",
    role: "Secretary",
    image: "/images/Rooba.JPG",
  },
  {
    name: "Ms. Malini",
    role: "Vice Principal /Committee member ",
    image: "/images/Malini.JPG",
  },
  {
    name: "Mr. Harsaa",
    role: "Trustee / member",
    image: "/images/Harsaa.jpeg",
  },
]

export default function AboutUs() {
  return (
    <main className={`${poppins.className} bg-white text-gray-800`}>

      {/* ================= HERO ================= */}
      <section className="relative h-[85vh] min-h-[560px] flex items-center">
        <Image
          src="/images/school_about.png"
          alt="School Campus"
          fill
          priority
          className="hidden sm:block object-cover"
        />


        {/* ===== MOBILE IMAGE ===== */}
        <Image
          src="/images/about_mobile.png"
          alt="School Campus"
          fill
          priority
          className="block sm:hidden object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-1xl md:text-2xl font-semibold text-white mb-4 leading-tight">
            “Shaping Young Minds
            <span className="text-yellow-500"> Since 2009...“</span>
          </h1>
          <p className="text-[10px] sm:text-sm text-gray-100 text-center">- Prasan Vidya Bala Mandir</p>


        </div>
      </section>
      <section className="relative bg-orange-500 flex items-center justify-center min-h-[350px] px-4 overflow-hidden">

        {/* Text */}
        <div className="z-10 text-center">
          <LayoutTextFlipDemo />
        </div>

        {/* Bee Image */}
        <div className="absolute right-2 sm:right-6 md:right-16 top-1/2 -translate-y-1/2">
          <Image
            src="/images/bee.png"
            alt=""
            width={320}
            height={80}
            draggable={false}
            aria-hidden="true"
            className="
        w-24 sm:w-36 md:w-56 xl:w-64
        h-auto
        opacity-90
        drop-shadow-2xl
        select-none
      "
          />
        </div>

      </section>

      <section className="w-full py-36 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          {/* Common Heading */}
          <h2 className={`text-2xl md:text-4xl font-bold mb-5 ${playfair.className}`}>
            Our Guiding Principles
          </h2>
          <p className="text-[12px] sm:text-sm text-gray-600 max-w-2xl mx-auto mb-14">
            The mission, vision, and values that shape our purpose and guide every step forward.
          </p>

          {/* Circles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-50 justify-items-center">

            {/* Mission */}
            <div className="w-74 h-74 md:w-92 md:h-92 bg-white flex flex-col justify-center items-center text-center p-6">
              <div className="flex items-center gap-2 mb-3 border border-orange-500 p-3">
                <Target className="w-5 h-5 text-orange-500" />
                <h3 className={`text-xl font-bold ${playfair.className}`}>Our Mission</h3>
              </div>
              <p className="text-[10px] sm:text-sm text-gray-600">
                To nurture a holistic learning environment that develops self-disciplined, socially responsible students with leadership, collaboration, critical thinking, compassion, and respect, rooted in Indian values and traditions.</p>
            </div>

            {/* Vision */}
            <div className="w-74 h-74 md:w-92 md:h-92 bg-white flex flex-col justify-center items-center text-center p-6">
              <div className="flex items-center gap-2 mb-3 border border-orange-500 p-2">
                <Eye className="w-5 h-5 text-orange-500" />
                <h3 className={`text-xl font-bold ${playfair.className}`}>Our Vision</h3>
              </div>
              <p className="text-[10px] sm:text-sm text-gray-800">
                Nuturing students for Global readiness with Indian roots.
              </p>
            </div>

            {/* Values */}
            <div className="w-74 h-74 md:w-92 md:h-92  bg-white flex flex-col justify-center items-center text-center p-6">
              <div className="flex items-center gap-2 mb-3 border border-orange-500 p-2">
                <HeartHandshake className="w-5 h-5 text-orange-500" />
                <h3 className={`text-xl font-bold ${playfair.className}`}>Value Statement</h3>
              </div>
              <p className="text-[10px] sm:text-sm text-gray-600">
                We value Integrity, Respect, Compassion and Righteousness in all we do.
              </p>
            </div>

          </div>
        </div>
      </section>
       
      <section className="w-full py-20 sm:py-28 bg-gradient-to-t from-yellow-100 via-white to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          {/* Heading */}
          <h2 className={`text-3xl md:text-4xl font-bold mb-5 ${playfair.className}`}>
            The Desire that Blossomed
          </h2>

          {/* Divider */}
          <div className="mx-auto h-[2px] w-28 bg-orange-500 mb-10"></div>

          {/* Content */}
          <p className="font-light text-[14px] sm:text-lg leading-relaxed text-gray-700 max-w-4xl mx-auto">
            Nestled amidst innumerable houses, shops, and a bustling market area,
            Prasan Vidya Bala Mandir naturally draws the attention of passersby with its
            sturdy and thoughtfully designed infrastructure.
            <br /><br />
            The institution owes its existence to Sri. Prasannamal, a philanthropist with a
            strong belief that education uncovers knowledge hidden by ignorance and enables
            one to perceive the invisible beyond the visible.
            <br /><br />
            PVBM is managed by the K. C. Prasannamal Memorial Educational Trust.
            Established in 2015, the school has grown into a K–12 institution recognized by
            the Government of Tamil Nadu.
          </p>

        </div>
      </section>
      <section className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

          {/* Heading */}
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 ${playfair.className}`}>
            Members of Managing Committee
          </h2>
          <div className="mx-auto h-[2px] w-14 bg-orange-500 mb-10"></div>

          {/* Members Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 place-items-center">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className="w-full max-w-[220px] sm:max-w-[260px] text-center"
              >
                {/* Photo */}
                <div className="mx-auto mb-4 h-36 w-36 sm:h-68 sm:w-68 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className={`text-[15px] sm:text-lg font-bold ${playfair.className}`}>
                  {member.name}
                </h3>

                {/* Role */}
                <p className="mt-1 text-[10px] sm:text-sm text-gray-600">
                  {member.role}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Senior Principal Section */}
      <section className="bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6">

    {/* ================= MOBILE LAYOUT ================= */}
    <div className="block lg:hidden">

      {/* TEXT FIRST */}
      <div className="relative max-w-3xl mx-auto text-center mt-16">

        {/* LOGO BEHIND TEXT */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src="/images/logo.png"
            alt="School Logo"
            width={360}
            height={360}
            className="opacity-[0.06]"
          />
        </div>

        <h1 className={`font-semibold text-2xl mb-3 ${playfair.className}`}>
          Senior Principal&apos;s <span className="text-orange-600">Message</span>
        </h1>

        <SeniorPrincipalMessage />

        <div className="mt-6">
          <h6 className="font-semibold text-gray-800">
            — Lakshmi Prabha A
          </h6>
          <p className="text-sm text-gray-500">
            Senior Principal
          </p>
        </div>
      </div>

      {/* IMAGE NEXT */}
      <div className="flex justify-center relative z-10 mt-12">
        <div className="relative w-72 h-72 sm:w-80 sm:h-80">

          {/* DECORATIVE CIRCLE */}
          <div className="absolute -top-[-80px] -left-[-50px] sm:-bottom-6 sm:-left-16
            w-[200px] h-[200px] sm:w-[20px] sm:h-[20px]
            rounded-full bg-gradient-to-b from-green-500 to-green-100 z-0">
          </div>

          <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
            <Image
              src="/images/senior-principal.png"
              alt="Principal"
              fill
              sizes="(max-width: 640px) 70vw, 320px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>

    {/* ================= DESKTOP LAYOUT ================= */}
    <div className="hidden lg:grid grid-cols-2 gap-16 items-center">

      {/* IMAGE LEFT */}
      <div className="flex justify-center relative z-10">
        <div className="relative w-[420px] h-[420px] lg:w-[460px] lg:h-[460px]">

          {/* DECORATIVE CIRCLE */}
          <div className="absolute -top-[-60px] -right-[-34px]
            w-[400px] h-[400px]
            rounded-full bg-gradient-to-b from-green-500 to-green-100 z-0">
          </div>

          <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
            <Image
              src="/images/senior-principal.png"
              alt="Principal"
              fill
              sizes="460px"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* TEXT RIGHT */}
      <div className="relative max-w-3xl mx-auto text-center">

        {/* LOGO BEHIND CONTENT */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src="/images/logo.png"
            alt="School Logo"
            width={420}
            height={420}
            className="opacity-[0.06]"
          />
        </div>

        <h1 className={`font-semibold text-3xl mb-3 ${playfair.className}`}>
          Senior Principal&apos;s <span className="text-orange-600">Message</span>
        </h1>

        <SeniorPrincipalMessage />

        <div className="mt-6">
          <h6 className="font-semibold text-gray-800">
            — Lakshmi Prabha A
          </h6>
          <p className="text-sm text-gray-500">
            Senior Principal
          </p>
        </div>
      </div>
    </div>

  </div>
</section>



      {/* ================= Principal's Message ================= */}
      <section className="">
        <div className="max-w-7xl mx-auto py-46 sm:py-24 px-4 sm:px-6 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: Text */}
            <div className="relative max-w-3xl mx-auto text-center">

              {/* LOGO BEHIND CONTENT */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Image
                  src="/images/logo.png"
                  alt="School Logo"
                  width={420}
                  height={420}
                  className="opacity-[0.06]"
                />
              </div>

              {/* MAIN CONTENT */}
              <h1 className={`font-semibold text-2xl sm:text-3xl md:text-3xl mb-3 ${playfair.className}`}>
                Principal&apos;s <span className="text-orange-600">Message</span>
              </h1>

              <PrincipalMessage />

              <div className="mt-6">
                <h6 className="font-semibold text-gray-800">
                  — Rooba.D
                </h6>
                <p className="text-sm text-gray-500">
                  Principal
                </p>
              </div>
            </div>

            {/* Right: Image + Shapes */}
            <div className="flex justify-center relative z-10">
              <div className="relative w-82 h-82 md:w-96 md:h-96">


                <div className="absolute -bottom-1 -right-[-30px] w-68 h-68 md:w-68 md:h-78
rounded-full bg-gradient-to-b from-orange-500 to-orange-80  z-0 blur-1xl"></div>


                {/* <div className="absolute -bottom-5 -right-20 w-40 h-50 md:w-58 md:h-58
rounded bg-green-400 z-0 blur-1xl rounded-full"></div> */}


                <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/principal (2).jpg"
                    alt="Principal"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <div
        className="
          hidden lg:block
          absolute
          z-30
          rotate-50
          pointer-events-none
      
          left-24 xl:left-36 2xl:left-48
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

      <section className="px-4 py-24 bg-white">
        <h2 className={`${playfair.className} text-black text-3xl md:text-5xl text-center font-semibold mb-6`}>
          Facilities at <span className="text-orange-600">PVBM</span>
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Modern Facilities for Modern Education.
        </p>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
  {items.map((item, index) => (
    <div key={index} className="w-full flex justify-center">

      {/* BIG RECTANGLE CARD */}
      <div className="relative w-[340px] sm:w-[380px] md:w-[420px] h-[280px] sm:h-[320px] md:h-[360px] overflow-hidden rounded-2xl shadow-xl group">

        <Image
          src={item.img}
          alt={item.title}
          fill
          draggable={false}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* BOTTOM LEFT CONTENT */}
        <div className="absolute bottom-0 left-0 p-5 text-left">
          <h3 className="text-white text-lg sm:text-xl font-semibold mb-1">
            {item.title}
          </h3>

          <p className="text-gray-200 text-[12px] md:text-sm leading-snug max-w-[260px]">
            {item.desc}
          </p>
        </div>

      </div>
    </div>
  ))}
</div>
      </section>

      {/* <section className="py-24 px-6 bg-white">

        <TimelineDemo />
      </section> */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-6">
              <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 ${playfair.className}`}>
                Our CBSE Campus
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                Prasan Vidya Mandir is a campus where tradition meets modern education.
                We focus on holistic development, strong values, and academic excellence.
              </p>

              <p className="text-gray-600 text-sm leading-relaxed">
                Our campus is equipped with modern classrooms, skilled faculty, and
                a safe learning environment. Join us to experience a nurturing
                educational journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="https://pvmandir.com/"><button className="px-6 py-3 rounded-xl border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 hover:scale-105 active:scale-95 transition">
                  Learn More
                </button></Link>

              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative h-[320px] sm:h-[420px] rounded-xl overflow-hidden ">
              <Image
                src="/images/campus.jpg"
                alt="Prasan Vidya Mandir Campus"
                fill
                className="object-cover"
                priority
              />
            </div>

          </div>
        </div>
      </section>


    </main>
  );
}


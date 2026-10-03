"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Playfair_Display, Poppins } from "next/font/google";
import Link from "next/link";

/* ================= FONTS ================= */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});



const AdmissionPage: React.FC = () => {
  const ageCriteria = [
    { class: "Pre-KG", age: "3 years completed as on 1st June" },
    { class: "LKG", age: "3½ years completed as on 1st June" },
    { class: "UKG", age: "4½ years completed as on 1st June" },
  ];

  const curriculumData = [
    {
      title: "Kindergarten Programme (Pre-KG to UKG)",
      image: "/images/kg2.JPG",
      points: [
        "Play-based learning approach",
        "Development of motor skills and creativity",
        "Introduction to basic literacy and numeracy",
        "Social and emotional skill building",
        "Interactive storytelling and art activities",
      ],
    },
    {
      title: "Primary Programme (Class I – V)",
      image: "/images/class1.JPG",
      points: [
        "Foundation in core subjects (Math, Science, Languages)",
        "Focus on reading, writing, and comprehension",
        "Introduction to technology and computer basics",
        "Co-curricular activities and sports",
        "Value education and character development",
      ],
    },
    {
      title: "Middle School and Secondary Programme (Class VI – X)",
      image: "/images/class10.png",
      points: [
        "Comprehensive Matriculation curriculum",
        "Advanced learning in all core subjects",
        "Critical thinking and analytical skills",
        "Career counseling and guidance",
        "Preparation for State board examinations",
      ],
    },
    {
      title: "Higher Secondary Programme (Class XI – XII)",
      image: "/images/class12.JPG",
      points: [
        "Stream selection (Science, Commerce, Humanities)",
        "Specialized subject-focused education",
        "Competitive exam preparation support",
        "College and career guidance",
        "Research projects and practical learning",
      ],
    },
  ];

  const documents = [
    "Transfer certificate / Proof of previous year completion",
    "Birth Certificate",
    "Aadhar Card",
    "Ration / Electricity / Gas Bill (Any one)",
    "Community Certificate (if not OC)",
    "Passport Size Photo – 3 Nos",
    "Family Photo – 1 No",
  ];

  return (
    <div className={`bg-orange-50 text-gray-800 ${poppins.className}`}>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] lg:min-h-[89vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />

        <Image
          src="/images/adm(3).jpg"
          alt="School Campus"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div

          className="relative z-20 text-center px-4"
        >
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-6">
            “Join Us for a Brighter Tomorrow”
          </h1>
          <p className="text-yellow-500 font-medium text-sm">
            — Admissions open for 2026–27 
          </p>
          

        </div>
      </section>

      {/* ================= CURRICULUM ================= */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div

          className="text-center mb-20"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${playfair.className}`}>
            <span className="bg-gradient-to-r from-orange-800 via-orange-600 to-black bg-clip-text text-transparent">Our Curriculum</span>
          </h2>
          <p className="text-[12px] sm:text-sm text-gray-600 max-w-4xl mx-auto">
            Age-appropriate, structured, and value-based education designed to
            support every stage of a child&apos;s growth.
          </p>
        </div>

        <div className="space-y-28 max-w-7xl mx-auto">
          {curriculumData.map((program, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
              {/* CONTENT */}
              <div

                className={index % 2 !== 0 ? "md:order-2" : ""}
              >
                <h3 className={`text-[25px] sm:text-3xl font-semibold mb-6 ${playfair.className}`}>
                  {program.title}
                </h3>

                <ul className="space-y-4">
                  {program.points.map((point, i) => (
                    <li
                      key={i}

                      className="flex"
                    >
                      <span className="text-sky-500 mr-3">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* IMAGE */}
              <div

                className="relative h-[320px]"
              >
                {/* <div className="absolute -top-6 -left-10 w-48 h-48 bg-black/70 rounded-2xl rotate-6" />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-600 rounded-3xl rotate-12 opacity-60" /> */}

                <div className="relative z-10 h-full rounded-full overflow-hidden shadow shadow-2xl">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= READY TO JOIN ================= */}
      <section className="py-24 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="relative hidden:block sm:h-[360px] lg:h-[460px]">
            <Image
              src="/images/logo.png"
              alt="Admissions"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-2xl"
            />
          </div>

          <div>
            <h2 className={`text-4xl md:text-5xl mb-15 font-bold text-black ${playfair.className}`}>
              Admission Process
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {ageCriteria.map((item, i) => (
                <div key={i} className="rounded-2xl bg-white px-8 py-5 border border-orange-500 shadow">
                  <h3 className={`${playfair.className} font-semibold`}>
                    {item.class}
                  </h3>
                  <p className="text-sm text-gray-800">{item.age}</p>
                </div>
              ))}
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 border border-[2px] rounded-[10px] py-10 px-5">

              {documents.map((item, i) => (
                <div key={i} className="flex gap-3 bg-white px-4 py-3 ">
                  <CheckCircle className="text-orange-500 w-5 h-5 mt-1" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
            <Link href={"https://pvbmandir.onlinevidyalaya.net/Pages/OnlineAdmission/AdmissionInquiryForm.aspx?OrgGroupId=3853"}>

              <button className="bg-orange-700 text-white px-20 py-4 rounded-2xl hover:scale-105 active:scale-95 transition">
                Apply for Admission
              </button>

            </Link>


          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionPage;
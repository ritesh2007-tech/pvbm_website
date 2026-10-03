import React from "react";
import Image from "next/image";

export default function KeyHighlights() {
  return (
    <section className="py-11 bg-white">
     <div className="container mx-auto px-20 py-12">
  <h2 className="text-3xl font-bold text-black text-center mb-10">Key <span className="text-orange-500">Highlights</span></h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
    {/* Card 1 */}
    <div className="bg-white border-[1px] border-gray-300 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="w-full h-56 relative">
        <Image
          src="/images/faculty.jpg"
          alt="Experienced Faculty"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl text-orange-500 font-semibold mb-3">Experienced Faculty</h3>
        <p className="text-gray-600 text-[13px]">
          Highly qualified teachers guiding students.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white border-[1px] border-gray-300 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="w-full h-56 relative">
        <Image
          src="/images/facility.jpg"
          alt="School Facilities"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl text-black font-semibold mb-3">School Facilities</h3>
        <p className="text-gray-600 text-[13px]">
          Well-maintained classrooms, library, and playground.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white border-[1px] border-gray-300 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="w-full h-56 relative">
        <Image
          src="/images/pvbm_school.jpg"
          alt="Achievements"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold mb-3 text-orange-500">Extra-Curricular</h3>
        <p className="text-gray-600 text-[13px]">
          Long history of academic and extracurricular excellence.
        </p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="bg-white border-[1px] border-gray-300 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="w-full h-56 relative">
        <Image
          src="/images/pvbm_school.jpg"
          alt="Matric Curriculum"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl text-black font-semibold mb-3">Matric Curriculum</h3>
        <p className="text-gray-600 text-[13px]">
          Structured syllabus aligned with Matric standards.
        </p>
      </div>
    </div>
  </div>
</div>

    </section>
  );
}

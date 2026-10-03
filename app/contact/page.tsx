"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";



export default function Contact() {
  return (
    <main className="bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="relative h-[26rem] md:h-[41rem] flex items-center justify-center">
        <Image
          src="/images/contact_20.jpg"
          alt="School Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
            “Connect With Our Team”
          </h1>
          <p className="text-[12px] md:text-sm text-gray-200">
            - We’d Love to Hear From You :)
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            <ContactCard
              icon={<MapPin />}
              title="Address"
              text="No: 98 & 99, Periya Maniyakara St, Chengalpattu,
              Gokulapuram, Tamil Nadu 603001"
            />

            <ContactCard
              icon={<Phone />}
              title="Phone"
              text="044 2742 2602 / +91-9841087708"
            />

            <ContactCard
              icon={<Mail />}
              title="E-Mail"
              text="prasanvidyabalamandir@gmail.com"
            />
            <ContactCard
              icon={<Mail />}
              title="Teacher Recruitment"
              text="resumepvm@gmail.com"
            />

            <ContactCard
              icon={<Clock />}
              title="Office Hours"
              text="Mon – Fri | 9:00 AM – 4:00 PM"
            />

          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
            Our Location
          </h2>

          <div className="h-[320px] sm:h-[420px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.056084595541!2d79.9757612!3d12.6916708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52fc6ee0a53757%3A0xeadaac679104ec55!2sPrasan%20Vidya%20Bala%20Mandir!5e0!3m2!1sen!2sin!4v1733720000000"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

          <p className="text-center text-sm text-gray-500 mt-4">
            Prasan Vidya Bala Mandir, Chengalpattu, Tamil Nadu – India
          </p>
        </div>
      </section>
    </main>
  );
}

/* Reusable Card */
function ContactCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="p-6 text-center  transition border-[0.1px] border-yellow-300 rounded-full">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 ">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-[12px] text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
}

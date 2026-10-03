import Image from "next/image";
import { Playfair_Display } from "next/font/google";

// Professional font pairing
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function OurMotto() {
  return (
    <section className="py-20 bg-white text-black">
      
      <div className="max-w-5xl mx-auto px-4 text-center">
        
        <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${playfair.className}`}>
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Motto</span>
        </h2>
      
        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-white/50 backdrop-blur">
            <Image
              src="/images/logo.png"
              alt="PVBM School Logo"
              width={110}
              height={110}
              className="object-contain"
            />
          </div>
        </div>
        <p className="text-gray-600 italic font-semibold mt-5 mb-8 max-w-xl mx-auto">
          &quot;Learn To Lead&quot;
        </p>
        <p className="text-[13px] sm:text-sm font-light text-gray-600 mb-8 max-w-xl mx-auto">
         Every student is encouraged to learn, take initiative, and develop the skills needed to lead with integrity and confidence.
        </p>

      </div>
    </section>
  );
}

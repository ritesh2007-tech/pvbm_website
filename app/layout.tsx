import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import './globals.css'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgressBar from "@/components/Pagescroll";
import Image from "next/image";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: {
    default: "Prasan Vidya Bala Mandir",
    template: "%s - Prasan Vidya Bala Mandir",
  },
  description:
    "Prasan Vidya Bala Mandir is a Matriculation School in Chengalpattu, nurturing students for global readiness with Indian roots through quality education and strong values.",

  keywords: [
    "Prasan Vidya Bala Mandir",
    "PVBM",
    "pvbm",
    "Matriculation School in Chengalpattu",
    "Best school in Chengalpattu",
    "Tamil Nadu matriculation school",
    "Indian values education",
  ],

  authors: [{ name: "Prasan Vidya Bala Mandir" }],
  creator: "Prasan Vidya Bala Mandir",
  publisher: "Prasan Vidya Bala Mandir",

  metadataBase: new URL("https://www.prasanvidyabalamandir.com"),

  openGraph: {
    title: "Prasan Vidya Bala Mandir, Chengalpattu",
    description:
      "Nurturing students for global readiness with Indian roots. A leading Matriculation School in Chengalpattu.",
    url: "https://pvbalamandir.com",
    siteName: "Prasan Vidya Bala Mandir",
    images: [
      {
        url: "/images/og-image.jpg", // add later if not now
        width: 1200,
        height: 630,
        alt: "Prasan Vidya Bala Mandir Campus",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Prasan Vidya Bala Mandir, Chengalpattu",
    description:
      "Matriculation School in Chengalpattu nurturing students for global readiness with Indian roots.",
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <SmoothScroll>
          <ScrollProgressBar />
          <Navbar />
          <div className="fixed absolute top-4 left-4 sm:top-0 sm:left-6 z-20">
            <Image
              src="/images/pvbm.png"
              alt="pvbm logo"
              width={80}
              height={80}
              className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] rounded-full"
              priority
              draggable={false}
            />
          </div>
          {children}
          <Footer />
        </SmoothScroll>


      </body>
    </html>
  );
}

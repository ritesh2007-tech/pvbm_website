import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore moments from Prasan Vidya Bala Mandir through our gallery showcasing academics, events, activities, and campus life.",

  keywords: [
    "Prasan Vidya Bala Mandir Gallery",
    "School Gallery",
    "pvbm school photos",
    "school photos of pvbm",
    "School Events",
    "Student Activities",
    "Campus Life",
  ],
  robots: {
    index: false,
    follow: true,
  },

};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-white">
      {children}
    </section>
  );
}

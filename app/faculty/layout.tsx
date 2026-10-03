import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faculty",
  description:
    "Meet the experienced and dedicated faculty of Prasan Vidya Bala Mandir, a reputed Matriculation School in Chengalpattu committed to quality education and student development.",
  keywords: [
    "Prasan Vidya Bala Mandir faculty",
    "PVBM teachers",
    "teachers in pvbm",
    "School faculty Chengalpattu",
    "Matriculation School teachers",
    "Best school faculty in Chengalpattu"
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function FacultyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

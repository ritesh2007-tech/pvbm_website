import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admission",
  description:
    "Apply now to enroll your child in a leading Matriculation School nurturing global readiness with Indian roots.",

  keywords: [
    "Prasan Vidya Bala Mandir admissions",
    "School admissions in Chengalpattu",
    "Matriculation school admission",
    "Admissions 2026-27 Chengalpattu",
    "PVBM admission form",
  ],

  openGraph: {
    title: "Admissions Open | Prasan Vidya Bala Mandir, Chengalpattu",
    description:
      "Join Prasan Vidya Bala Mandir for the academic year 2026–27. A Matriculation School in Chengalpattu focused on holistic education and Indian values.",
    url: "https://pvbalamandir.com/admission/",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AdmissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

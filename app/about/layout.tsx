import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Prasan Vidya Bala Mandir, a reputed Matriculation School in Chengalpattu, nurturing students for global readiness with Indian roots through quality education and strong values.",
  keywords: [
    "Prasan Vidya Bala Mandir",
    "About PVBM",
    "Matriculation School in Chengalpattu",
    "Best school in Chengalpattu",
    "Indian values based education",
    "PVBM school"
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

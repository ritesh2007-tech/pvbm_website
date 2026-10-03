import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "For admissions, teacher recruitment, or general enquiries, feel free to contact us. We’re happy to assist you.",
  keywords: [
    "Prasan Vidya Bala Mandir contact",
    "PVBM Chengalpattu contact",
    "PVBM contact",
    "Matriculation School in Chengalpattu",
    "Best school in Chengalpattu",
    "PVBM admissions contact",
    "Prasan Vidya Bala Mandir address"
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

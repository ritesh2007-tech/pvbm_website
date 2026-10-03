"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `“Working at PVBM for over 16 years as an educator and mentor, and this journey has been deeply meaningful. Being part of this institution has reinforced my belief that education is built on values, guidance, and care.

Together with a committed team of teaching staff, we strive to create a supportive learning environment where students are encouraged to grow with confidence, discipline, and purpose.”
             
`;

export function ExperiencedTeacher() {
  return <TextGenerateEffect words={words} />;
}

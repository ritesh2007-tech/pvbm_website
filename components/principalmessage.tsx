"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `“Our school focuses on building strong values, confidence, and academic excellence. We encourage every student to grow with discipline, creativity, and leadership. Together with teachers and parents, we strive to shape responsible and successful individuals.”
             
`;

export function PrincipalMessage() {
  return <TextGenerateEffect words={words} />;
}

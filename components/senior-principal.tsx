"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `“Education is not preparation for life; Education is life itself. 

We nurture 21st century learners who will think boldly, act ethically, adapt confidently and lead with compassion in the ever evolving world. I envision our students growing responsible, contributive citizens, rooted in values and commits themselves to society’s progress. 
”
             
`;

export function SeniorPrincipalMessage() {
  return <TextGenerateEffect words={words} />;
}

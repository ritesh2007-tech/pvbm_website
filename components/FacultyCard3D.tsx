"use client";

import Image from "next/image";
import { CometCard } from "./ui/comet-card";

interface FacultyCardProps {
  image: string;
  name: string;
  subject: string;
  qualification: string;
  experience: string;
}

export default function FacultyCard({
  image,
  name,
}: FacultyCardProps) {
  return (
    <CometCard>
      <div
        className="my-6 flex w-70 h-70 cursor-pointer flex-col rounded-[16px] bg-transparent p-3 md:p-8"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* IMAGE */}
        <div className="w-70 h-40">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-[16px] object-cover contrast-90"
            sizes="320px"
          />
        </div>
      </div>
    </CometCard>
  );
}

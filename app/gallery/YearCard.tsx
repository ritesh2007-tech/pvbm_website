import Image from "next/image";

type YearCardProps = {
  year: number;
  coverImage: string;
  description: string;
  onClick: () => void;
};

export default function YearCard({
  year,
  coverImage,
  description,
  onClick,
}: YearCardProps) {
  return (
    <article
      onClick={onClick}
      className="group overflow-hidden rounded-3xl border hover:shadow-xl transition cursor-pointer"
    >
      <div className="relative h-72">
        <Image
          src={coverImage}
          alt={`Gallery ${year}`}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h2 className="text-3xl font-thin text-white">
            {year}
          </h2>

          <p className="text-white/80 mt-2">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
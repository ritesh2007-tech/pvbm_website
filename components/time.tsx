import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2009 — A New Chapter Begins",
      content: (
        <div>
          <p className="mb-6 text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            Prasan Vidya Bala Mandir strengthened its academic framework with a strong focus on quality education.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img src="/images/independence/id4.JPG" className="h-24 w-full rounded-lg object-cover md:h-48" />
            
          </div>
        </div>
      ),
    },

    {
      title: "2012 — Holistic Development",
      content: (
        <div>
          <p className="mb-6 text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            Structured co-curricular activities, sports, and cultural programs were introduced.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img src="/images/Sportsday/sd1.JPG" className="h-24 w-full rounded-lg object-cover md:h-48" />
            <img src="/images/BaalPradarshini/eve4.JPG" className="h-24 w-full rounded-lg object-cover md:h-48" />
          </div>
        </div>
      ),
    },

    {
      title: "2014 — Learning Beyond Classrooms",
      content: (
        <div>
          <p className="mb-6 text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            Activity-based learning and experiential teaching became core practices.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img src="/images/activity1.JPG" className="h-24 w-full rounded-lg object-cover md:h-48" />
            <img src="/images/Sportsday/sd6.JPG" className="h-24 w-full rounded-lg object-cover md:h-48" />
          </div>
        </div>
      ),
    },

    {
      title: "2016 — Sports & Cultural Excellence",
      content: (
        <div>
          <p className="mb-6 text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            Annual sports days and cultural events strengthened teamwork and confidence.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img src="/images/Sportsday/sd4.JPG" className="h-24 w-full rounded-lg object-cover md:h-48" />
            <img src="/images/annualday.JPG" className="h-24 w-full rounded-lg object-cover md:h-48" />
          </div>
        </div>
      ),
    },

    {
      title: "2018 — Student Leadership & Values",
      content: (
        <div>
          <p className="mb-6 text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            Leadership programs and value education shaped disciplined individuals.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img src="/images/pht1.jpg" className="h-24 w-full rounded-lg object-cover md:h-48" />
            <img src="/images/D.F.I. - 4.jpeg" className="h-24 w-full rounded-lg object-cover md:h-48" />
          </div>
        </div>
      ),
    },

    {
      title: "2020 — Technology Enabled Learning",
      content: (
        <div>
          <p className="mb-6 text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            Smart classrooms and modern teaching tools enhanced student engagement.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img src="/images/activity1.JPG" className="h-24 w-full rounded-lg object-cover md:h-48" />
            <img src="/images/independence/id4.JPG" className="h-24 w-full rounded-lg object-cover md:h-48" />
          </div>
        </div>
      ),
    },


    {
      title: "Today",
      content: (
        <div>
          <p className="mb-4 text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            A student-centric environment blending academics, values, and innovation.
          </p>

          <div className="space-y-1 mb-6 text-xs md:text-sm">
            <div>• Strong academic foundation</div>
            <div>• Smart classrooms & activity-based learning</div>
            <div>• Focus on discipline & character</div>
            <div>• Safe and nurturing campus</div>
            <div>• Preparing future-ready learners</div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src="/images/BaalPradarshini/eve3.JPG" className="h-24 w-full rounded-lg object-cover md:h-48" />
            <img src="/images/Sportsday/sd2.JPG" className="h-24 w-full rounded-lg object-cover md:h-48" />
          </div>
        </div>
      ),
    },
   
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <Timeline data={data} />
    </div>
  );
}

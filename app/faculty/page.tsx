import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import { ExperiencedTeacher } from "@/components/Experienced_teacher";



// Professional font pairing
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

/* ================= TYPES ================= */

type Staff = {
  name: string;
  role: string;
  degree: string;
  experience: string;
  img: string;
};
//manisha c,jansirani
/* ================= FULL STAFF LIST (UPDATED DEGREES) ================= */

const staff: Staff[] = [
  { name: "Rooba D", role: "Principal", degree: "B.Sc., M.Sc., M.Phil., B.Ed.,", experience: "3+ Years", img: "/images/staff/Rooba_D_600x600.jpg" },
  { name: "Malini S", role: "Vice Principal", degree: "B.Sc., M.Sc., M.A., Mont.Trained., B.Ed.,", experience: "16+ Years", img: "/images/staff/Malini_S_600x600.jpg" },

  { name: "Anitha V", role: "Office Staff", degree: "B.Lit (Tamil)., HDCA", experience: "13+ Years", img: "/images/staff/Anitha_V_600x600.jpg" },
  { name: "Anto Beena A", role: "TGT", degree: "B.Com., M.B.A.,", experience: "1+ Years", img: "/images/staff/Anto_Beena_A_600x600.jpg" },
  { name: "Anusuya N", role: "PGT", degree: "M.A., B.Ed., D.PPTC.,", experience: "10+ Years", img: "/images/staff/Anusuya_N_600x600.jpg" },
  { name: "Aruna K U", role: "PGT", degree: "B.Sc., M.C.A., B.Ed.", experience: "5+ Years", img: "/images/staff/Aruna_K_U_600x600.jpg" },
  { name: "Bharathi R", role: "KGT", degree: "B.Sc", experience: "1+ Years", img: "/images/staff/Bharathi_R_600x600.jpg" },
  { name: "Bhuvaneshwari J", role: "PRT", degree: "B.Lit (Tamil), M.A., B.Ed.", experience: "4+ Years", img: "/images/staff/Bhuvaneshwari_J_600x600.jpg" },
  { name: "Brindha M", role: "PRT", degree: "B.E., B.Ed.,", experience: "0+ Years", img: "/images/staff/Brindha_M_600x600.jpg" },
  { name: "Deepika L", role: "PRT", degree: "B.Sc., M.C.A", experience: "0+ Years", img: "/images/staff/Deepika_L_600x600.jpg" },
  { name: "Devi V", role: "Relationship Manager", degree: "B.B.A., M.B.A.,", experience: "8+ Years", img: "/images/staff/Devi_V_600x600.jpg" },
  { name: "Dhivya R", role: "TGT", degree: "B.Sc., B.Ed.,", experience: "0+ Years", img: "/images/staff/Divya_R_600x600.jpg" },
  { name: "Hari Priya S", role: "KGT", degree: "B.Tech", experience: "0+ Years", img: "/images/staff/Haripriya S.JPG" },

  { name: "Ilakkiya ", role: "PRT", degree: "B.Sc., (B.Ed).,", experience: "0+ Years", img: "/images/staff/Illakiya_S_600x600.jpg" },
  { name: "Jamunadevi R", role: "PGT", degree: "M.Sc., B.Ed.,", experience: "6+ Years", img: "/images/staff/Jamunadevi_R_600x600.jpg" },
  { name: "Jayalakshmi P", role: "KGT", degree: "B.Sc., M.Sc., B.Ed.,", experience: "3+ Years", img: "/images/staff/Jayalakshmi_P_1_600x600.jpg" },
  { name: "Jayanthi K", role: "TGT", degree: "B.A., M.A., D.T.Ed., B.Ed.,", experience: "8+ Years", img: "/images/staff/Jayanthi_K_600x600.jpg" },
  { name: "Jaqulin Jabarani J", role: "PGT", degree: "B.Sc, M.Sc, B.Ed", experience: "8+ Years", img: "/images/staff/Jaqulin Jabarani.JPG" },
  { name: "Jansirani P", role: "Office Staff", degree: "HSC.,", experience: "8+ Years", img: "/images/staff/Jansirani_P_600x600.jpg" },
  { name: "Kalaivani C", role: "TGT", degree: "B.Lit., M.A., D.T.Ed., B.Ed.,", experience: "10+ Years", img: "/images/staff/Kalaivani_C_600x600.jpg" },
  { name: "Karpaga Selvi", role: "KGT", degree: "B.Sc.,Mont.Trained.,B.Ed.,", experience: "1+ Years", img: "/images/staff/Karpga_Selvi_600x600.jpg" },
  { name: "Katholine F", role: "PRT", degree: "M.Sc Botany", experience: "1+ Years", img: "/images/staff/Katholine_600x600.jpg" },
  { name: "Kavitha J", role: "PRT", degree: "B.A., M.A., B.Ed.,", experience: "3+ Years", img: "/images/staff/Kavitha_J_600x600.jpg" },
  { name: "Kavitha K", role: "Office Staff", degree: "B.Sc., B.Ed.,", experience: "0+ Years", img: "/images/staff/Kavitha_K_600x600.jpg" },
  { name: "Kugan M", role: "Junior Admin Officer", degree: "B.B.A", experience: "4+ Years", img: "/images/staff/Kugan_M_600x600.jpg" },
  { name: "Lavanya N", role: "KGT", degree: "B.Sc., Mont.Trained., M.A (Edu)., B.Ed.,", experience: "9+ Years", img: "/images/staff/Lavanya_N_600x600.jpg" },
  { name: "Mahalakshmi M", role: "KGT", degree: "B.Sc., B.Ed.,", experience: "3+ Years", img: "/images/staff/Mahalakshmi_M_600x600.jpg" },

  { name: "Manju Priya K", role: "PRT", degree: "B.Sc., M.Sc (Yoga)", experience: "1+ Years", img: "/images/staff/Manju_Priya_K_600x600.jpg" },
  { name: "Muthulakshmi K", role: "PRT", degree: "B.Lit., M.A.,", experience: "12+ Years", img: "/images/staff/Muthulakshmi_K_600x600.jpg" },
  { name: "Nallisai Venthan R P", role: "PGT", degree: "M.P.Ed", experience: "3+ Years", img: "/images/staff/Nallisai_Venthan_R_P_600x600.jpg" },
  { name: "Prabha T", role: "PRT", degree: "M.Sc., B.Ed.,", experience: "3+ Years", img: "/images/staff/Prabha_T_600x600.jpg" },
  { name: "Purushothaman C", role: "Admin Manager", degree: "B.Sc., M.B.A.,", experience: "3+ Years", img: "/images/staff/Purusothaman.jpg" },
  { name: "Premalatha P", role: "PGT", degree: "B.Sc., M.Sc.,M.Phil., B.Ed., M.Ed.", experience: "3+ Years", img: "/images/staff/Premalatha P.JPG" },
  { name: "Ramesh C", role: "PGT", degree: "B.Lit., M.A., B.Ed.,", experience: "9+ Years", img: "/images/staff/Ramesh_C_600x600.jpg" },
  { name: "Rajalakshmi R", role: "KGT", degree: "Advance Montessori Training., DCA.,PGDCA", experience: "9+ Years", img: "/images/staff/Rajalakshmi_R_600x600.jpg" },
  { name: "Ramya R", role: "PRT", degree: "B.E., B.Ed.,", experience: "0+ Years", img: "/images/staff/Ramya_R_600x600.jpg" },
  { name: "Raviselvi S", role: "KGT", degree: "DMLT., Mont.Trained., B.A., D.EL.Ed., B.Ed.,", experience: "12+ Years", img: "/images/staff/Raviselvi_S_600x600.jpg" },
  { name: "Rathi Devi S", role: "PRT", degree: "B.E., B.Ed.,", experience: "12+ Years", img: "/images/staff/Rathidevi_S_600x600.jpg" },

  { name: "Santhiya R G", role: "PRT", degree: "B.Com", experience: "0+ Years", img: "/images/staff/Santhiya_R_G_600x600.jpg" },
  { name: "Saranya J", role: "PRT", degree: "M.A., B.Ed., D.T.Ed.,", experience: "7+ Years", img: "/images/staff/Saranya_J_600x600.jpg" },
  { name: "Shanmugapriya B", role: "TGT", degree: "M.Com, B.Ed.,", experience: "0+ Years", img: "/images/staff/Shanmugapriya_B_600x600.jpg" },
  { name: "Shanmugapriya S", role: "PGT", degree: "B.Sc., M.Sc", experience: "4+ Years", img: "/images/staff/Shanmugapriya_S_600x600.jpg" },
  { name: "Shobana S", role: "TGT", degree: "B.Sc., M.Sc., B.Ed.,", experience: "3+ Years", img: "/images/staff/Shobana_S_600x600.jpg" },
  { name: "Sivaranjani V", role: "PRO", degree: "B.E", experience: "1+ Years", img: "/images/staff/Sivaranjani_V_600x600.jpg" },
  { name: "Srilekha T", role: "KGT", degree: "B.E., Dip in Montessori., B.Ed.,", experience: "7+ Years", img: "/images/staff/Srilekha_T_600x600.jpg" },
  { name: "Vetrivel M", role: "PGT", degree: "M.COM, B.Ed.,", experience: "3+ Years", img: "/images/staff/Vetrivel_M.jpg" },
  { name: "Tamizharasi P", role: "KGT", degree: "M.Com, B.Ed.,", experience: "7+ Years", img: "/images/staff/Tamizharasi_600x600.jpg" },
  { name: "Vijayalakshmi M P", role: "PRT", degree: "B.Sc.,", experience: "1+ Years", img: "/images/staff/Vijayalakshmi_M_P_600x600.jpg" },
  { name: "Viji Priya K", role: "Librarian", degree: "B.B.A., B.Lis.,", experience: "0+ Years", img: "/images/staff/Viji_Priya_K_600x600.jpg" },
];

/* ================= SPLIT LOGIC ================= */

const nonTeachingNames = [
  "Devi V",
  "Kugan M",
  "Sivaranjani V",
  "Anitha V",
  "Jansirani P",
  "Kavitha K",
  "Purushothaman C",
  "Jansirani P"
];

const nonTeachingStaff = staff.filter(s => nonTeachingNames.includes(s.name));
const teachingStaff = staff.filter(s => !nonTeachingNames.includes(s.name));

/* ================= PAGE ================= */

export default function FacultyPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[80vh] sm:min-h-[90vh] flex justify-center text-center overflow-hidden">

        {/* Desktop Image */}
        <Image
          src="/images/pvbm_teachers_grp.jpeg"
          alt="Faculty"
          fill
          priority
          className="hidden sm:block object-cover"
        />

        {/* Mobile Image */}
        <Image
          src="/images/pvbm_t_grp.jpeg"
          alt="Faculty"
          fill
          priority
          className="block sm:hidden object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
          <h1 className="text-white text-xl sm:text-2xl font-semibold">
            &quot;Powered by passionate, skilled and student-centric faculty &quot;
          </h1>
          <p className="mt-2 text-gray-100 text-[12px] sm:text-base">
            - Experts in their fields, mentors in the classroom
          </p>
        </div>

      </section>
      <section className="max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <div className="relative max-w-3xl mx-auto text-center">

            {/* LOGO BEHIND CONTENT */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Image
                src="/images/logo.png"
                alt="School Logo"
                width={420}
                height={420}
                className="opacity-[0.06]"
              />
            </div>

            {/* MAIN CONTENT */}
            <h1 className={`font-semibold text-2xl sm:text-3xl md:text-3xl mb-3 ${playfair.className}`}>
             <span className="text-orange-600"> First Employee</span> of PVBM
            </h1>

            <p className="text-[10px] sm:text-[12px] text-gray-500 mb-6">
              Sixteen years at PVBM, guiding students with experience, care, and purpose.
            </p>

            <ExperiencedTeacher />

            <div className="mt-6">
              <h6 className="font-semibold text-gray-800">
                — Malini.S
              </h6>
              <p className="text-sm text-gray-500">
                Vice Principal
              </p>
            </div>
          </div>

          {/* Right: Image + Shapes */}
          <div className="flex justify-center">
            <div className="relative w-64 h-71 sm:w-96 sm:h-99 md:w-96 md:h-99">

              {/* Background Shapes */}
              <div className="absolute -top-[-50px] -right-0 w-49 h-55 lg:w-80 lg:h-80
          rounded-full bg-gradient-to-b from-yellow-900 via-yellow-500 to-yellow-10 z-0 " />
              <div className="absolute -top-[-80px] -right-0 w-40 h-40 lg:w-60 lg:h-60
          rounded-full bg-gradient-to-b from-yellow-800 to-yellow-10 z-0 " />

              {/* Image */}
              <div className="relative z-10 w-full h-full overflow-hidden rounded-full">
                <Image
                  src="/images/exp_teacher.png"
                  alt="Faculty"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

            </div>
          </div>

        </div>
      </section>
      <Section title="Teaching Staff" data={teachingStaff} />
      <Section title="Non-Teaching Staff" data={nonTeachingStaff} />
    </main>
  );
}

/* ================= SECTION COMPONENT ================= */

function Section({ title, data }: { title: string; data: Staff[] }) {
  return (
    <section className="py-16 px-4 bg-gray-50">

      {/* TITLE + ORANGE UNDERLINE */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="mx-auto mt-2 h-[2px] w-14 bg-orange-500"></div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {data.map((t, i) => (
          <div
            key={i}
            className="group relative h-[25vh] sm:h-64 rounded-xl overflow-hidden shadow cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src={t.img}
              alt={t.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 group-hover:from-black/90" />
            <div className="absolute bottom-0 p-3 text-white transform transition-transform duration-300 group-hover:translate-y-[-4px]">
              <h3 className="text-[12px] sm:text-sm font-semibold">{t.name}</h3>
              <p className="text-[8px] sm:text-[11px] flex items-center gap-1 text-yellow-400">{t.role}</p>
              <p className="text-[8px] sm:text-[11px] flex items-center gap-1 text-gray-200">
                <GraduationCap size={12} /> {t.degree}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function FloatingNavbar() {
  const [darkText, setDarkText] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setDarkText(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Faculty", path: "/faculty" },
    { name: "Gallery", path: "/gallery" },
    { name: "Admission", path: "/admission" },
    { name: "Contact", path: "/contact" },

    {
      name: "Login",
      path: "https://pvbmandir.onlinevidyalaya.net/Pages/BaseFramework/Security/Login.aspx?OrgGroupId=3853",
      external: true,
    },
  ];

  // normalize path (prevents trailing slash issues)
  const normalize = (path: string) =>
    path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;

  return (
    <>
      {/* 🌐 DESKTOP FLOATING NAVBAR */}
      <nav className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <div
          className={`
            px-8 py-3 rounded-2xl backdrop-blur-md shadow-xl border transition-all
            ${
              darkText
                ? "bg-white/80 text-gray-900 border-gray-200"
                : "bg-black/30 text-white border-white/30"
            }
          `}
        >
          <ul className="flex gap-8">
            {links.map((link) => {
              const isExternal = link.external;
              const isActive =
                !isExternal &&
                (link.path !== "/"
                  ? normalize(pathname).startsWith(normalize(link.path))
                  : normalize(pathname) === "/");

              return (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    target={isExternal ? "_blank" : undefined}
                    className={`
                      relative font-medium
                      after:absolute after:left-0 after:-bottom-1
                      after:h-[2px] after:bg-orange-500 after:transition-all
                      ${
                        isActive
                          ? "after:w-full"
                          : "after:w-0 hover:after:w-full"
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

   {/* 📱 MOBILE MENU BUTTON */}
<div className="md:hidden fixed top-4 right-15 z-50">

  {/* Toggle Button */}
  <button
    onClick={() => setOpen(!open)}
    className="
      w-12 h-12 rounded-full 
      bg-white/60 backdrop-blur-md shadow-lg   /* fixed typo + better glass effect */
      flex flex-col items-center justify-center gap-1
    "
  >
    <span className="w-5 h-[2px] bg-gray-800" />
    <span className="w-5 h-[2px] bg-gray-800" />
    <span className="w-5 h-[2px] bg-gray-800" />
  </button>

  {/* 📱 MOBILE DROPDOWN */}
  {open && (
    <div
      className="
        absolute right-0 mt-10                /* keeps dropdown aligned to button */
        w-[220px] sm:w-[260px]               /* responsive width (bigger box) */
        bg-black/60 backdrop-blur-md 
        rounded-2xl shadow-xl 
        px-6 py-6
      "
    >
      <ul className="flex flex-col gap-5 text-left">
        {links.map((link) => {
          const isExternal = link.external;
          const isActive =
            !isExternal &&
            (link.path !== "/"
              ? normalize(pathname).startsWith(normalize(link.path))
              : normalize(pathname) === "/");

          return (
            <li key={link.name}>
              <Link
                href={link.path}
                target={isExternal ? "_blank" : undefined}
                onClick={() => setOpen(false)}
                className={`
                  relative font-medium text-sm text-white
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:bg-orange-500 after:transition-all
                  ${
                    isActive
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }
                `}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  )}
</div>
    </>
  );
}

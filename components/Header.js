"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "HOME", href: "/" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS", href: "#skills" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const isProjectPage = pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show the header when near the top.
      if (currentScrollY < 20) {
        setVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Scrolling down -> hide.
      if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      }

      // Scrolling up -> show.
      if (currentScrollY < lastScrollY.current) {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed inset-x-0 top-9 z-50 flex items-center justify-center
        transition-all duration-500
        ease-[cubic-bezier(0.4,0,0.2,1)]
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "-translate-y-[140%] opacity-0"
        }
      `}
    >
        <div className="relative flex w-full max-w-[1400px] items-center justify-center px-5 sm:px-8">
          {isProjectPage && (
            <Link
              href="/"
              aria-label="Back to projects"
              title="Back to projects"
              className="absolute left-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-[#111111]/90 text-white/80 backdrop-blur-xl transition hover:border-white/20 hover:text-white sm:left-8 lg:h-auto lg:w-auto lg:rounded-lg lg:px-5 lg:py-3"
            >
              <span className="hidden whitespace-nowrap text-sm font-medium lg:inline">
                ← Back to Projects
              </span>
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 lg:hidden"
                aria-hidden="true"
              >
                <path
                  d="M19 12H5m7 7-7-7 7-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          )}

          <nav
            className={`
              flex h-[72px] w-[554px]
                max-w-[calc(100vw-32px)]
                max-sm:h-11
                max-sm:w-[calc(100vw-80px)]
                ${isProjectPage ? "max-sm:ml-14" : ""}
              items-center justify-center
              rounded-full
              border border-white/[0.08]
              bg-[#111111]/90
              px-8
              max-sm:px-3
              backdrop-blur-xl
            `}
          >
            <ul className="flex w-full items-center justify-between">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="
                      text-[16px]
                      font-medium
                      tracking-[0.07em]
                      text-[#858585]
                      transition-colors
                      duration-300
                      hover:text-white
                      max-sm:text-[12px]
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
    </header>
  );
}
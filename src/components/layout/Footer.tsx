import type { ReactNode } from "react";
import { useId } from "react";
import { fadeInUp, staggerContainer, viewport } from "@/lib/motion";
import { motion } from "framer-motion";
const locations = [
  {
    title: "London",
    description:
      "Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.",
  },
  {
    title: "Dubai",
    description:
      "Linktia Infosystems Ltd – CB7, Jumeirah Business Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates.",
  },
  {
    title: "Pune",
    description:
      "Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India.",
  },
];

const solutionsLinks = [
  "Core Banking CB7",
  "Digital Banking N&",
  "Open Bannking",
  "Loan Origination System",
  "Loan Management System",
  "Digital Transformation",
];

const n7BankingLinks = [
  "About Us",
  "Solutions",
  "Contact",
  "Company",
  "Careers",
  "Insights",
  "Core Team",
  "Brand Center",
];

const socialLinks = ["Linkedin", "X"];

export function FooterGradientArrow() {
  const gradientId = useId();

  return (
    <svg
      className="h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="12"
          y1="4"
          x2="12"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--color-n7-gradient-from)" />
          <stop offset="1" stopColor="var(--color-n7-gradient-to)" />
        </linearGradient>
      </defs>
      <path
        d="M5 12h14M12 5l7 7-7 7"
        stroke={`url(#${gradientId})`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FooterLinkColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-base font-semibold text-white md:text-lg">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="group flex w-full items-center justify-between gap-3 text-sm text-slate-400 transition-colors hover:text-white md:text-base"
            >
              <span>{link}</span>
              <FooterGradientArrow />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterGridRow({ children }: { children: ReactNode }) {
  return (
    <div className="grid gap-8 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-10 lg:gap-12">
      {children}
    </div>
  );
}

function FooterCopyrightRow() {
  return (
    <div className="grid gap-8 border-t border-white/5 pt-8 md:grid-cols-[2fr_3fr] md:gap-10 lg:gap-12">
      <div aria-hidden />
      <p className="text-xs leading-relaxed text-slate-500 md:text-sm">
        Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as
        Commercial Brand] — [Registered under the Companies Act 2006 in England
        and Wales | Number of Incorporation 13100992]
      </p>
    </div>
  );
}

export function Footer() {
  return (
    <motion.footer className="relative overflow-hidden border-t border-white/5 bg-n7-bg">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-0 z-0 aspect-square w-[28%] max-w-lg -translate-x-1/3 -translate-y-1/2 rounded-full opacity-30 blur-[120px] md:w-[32%] md:opacity-40"
        style={{
          background:
            "linear-gradient(180deg, var(--color-n7-gradient-from) 0%, var(--color-n7-gradient-to) 100%)",
        }}
      />
      <motion.div
        className="section-container relative z-10 space-y-12 py-12 md:space-y-16 md:py-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div variants={fadeInUp}>
          <FooterGridRow>
          <div>
            <p className="text-gradient-n7 text-8xl font-bold leading-none tracking-tighter md:text-9xl lg:text-[11rem] xl:text-[14rem]">
              N7
            </p>
          </div>
          {locations.map((location) => (
            <div key={location.title}>
              <h4 className="text-base font-semibold text-white md:text-lg">
                {location.title}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
                {location.description}
              </p>
            </div>
          ))}
        </FooterGridRow>
        </motion.div>

        <motion.div variants={fadeInUp}>
        <FooterGridRow>
          <div aria-hidden />
          <FooterLinkColumn title="Solutions" links={solutionsLinks} />
          <FooterLinkColumn title="N7 Banking" links={n7BankingLinks} />
          <FooterLinkColumn title="Our Socials" links={socialLinks} />
        </FooterGridRow>
        </motion.div>

        <motion.div variants={fadeInUp}>
        <FooterCopyrightRow />
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}
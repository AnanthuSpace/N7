import { Button } from "@/components/ui/button";
import { Linkedin, Twitter } from "lucide-react";

const footerColumns = [
  {
    title: "Product",
    links: ["Core Banking", "Payments", "Cards", "Compliance"],
  },
  {
    title: "Solutions",
    links: ["Neobanks", "Fintech", "Enterprise", "Developers"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "Cookies"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-n7-bg">
      <div className="section-container border-b border-white/5 py-12 md:py-16">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="max-w-md text-2xl font-semibold tracking-tight md:text-3xl">
              Take the full advantage of going paperless now.
            </h3>
            <p className="mt-2 max-w-sm text-sm text-slate-400">
              Start building your digital bank with N7 today.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline">Learn more</Button>
            <Button>Get started</Button>
          </div>
        </div>
      </div>

      <div className="section-container py-12 md:py-16">
        <p className="text-6xl font-bold tracking-tighter text-gradient-n7 md:text-8xl lg:text-9xl">
          N7
        </p>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-sm font-semibold text-white">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} N7. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-slate-400 transition-colors hover:text-white"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-slate-400 transition-colors hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

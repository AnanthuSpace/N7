import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "SOLUTIONS", hasDropdown: true },
  { label: "RESOURCES", hasDropdown: true },
  { label: "ABOUT US", hasDropdown: false },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string, hasDropdown: boolean) => {
    if (!hasDropdown) return;
    setActiveDropdown((current) => (current === label ? null : label));
  };

  return (
    <header className="sticky top-8 z-50 mt-8 flex justify-center">
      <div className="w-[60%] max-w-full rounded-xl bg-[#2F2F2F] text-white">
        <div className="grid h-14 grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-6">
          <a
            href="#"
            className="justify-self-start text-lg font-bold tracking-tight text-white"
          >
            N7
          </a>

          <nav className="hidden items-center justify-center gap-6 lg:flex">
            {navItems.map(({ label, hasDropdown }) => (
              <div key={label} className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown(label, hasDropdown)}
                  className="font-chivo inline-flex items-center justify-center gap-1.5 text-center text-xs tracking-wide text-white transition-opacity hover:opacity-80"
                  aria-expanded={hasDropdown ? activeDropdown === label : undefined}
                >
                  {label}
                  {hasDropdown && (
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform",
                        activeDropdown === label && "rotate-180",
                      )}
                    />
                  )}
                </button>

                {hasDropdown && activeDropdown === label && (
                  <div className="absolute top-full left-1/2 z-50 mt-2 min-w-[160px] -translate-x-1/2 rounded-lg border border-white/10 bg-[#2F2F2F] py-2 shadow-lg">
                    <a
                      href="#"
                      className="block px-4 py-2 text-center text-xs text-white hover:bg-white/10"
                    >
                      Overview
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-center text-xs text-white hover:bg-white/10"
                    >
                      Learn more
                    </a>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              className="font-chivo hidden rounded-md border border-white bg-transparent px-4 py-1.5 text-xs tracking-wide text-white transition-colors hover:bg-white/10 lg:inline-flex"
            >
              REQUEST DEMO
            </button>

            <button
              type="button"
              className="rounded-lg p-1.5 text-white hover:bg-white/10 lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-white/10 px-4 py-3 lg:hidden">
            <nav className="flex flex-col items-center gap-1">
              {navItems.map(({ label, hasDropdown }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => {
                    if (hasDropdown) {
                      toggleDropdown(label, true);
                    } else {
                      setOpen(false);
                    }
                  }}
                  className="font-chivo flex w-full items-center justify-center gap-1.5 py-2 text-center text-xs tracking-wide text-white"
                >
                  {label}
                  {hasDropdown && (
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5",
                        activeDropdown === label && "rotate-180",
                      )}
                    />
                  )}
                </button>
              ))}
            </nav>
            <button
              type="button"
              className="font-chivo mt-3 w-full rounded-md border border-white bg-transparent px-4 py-2 text-xs tracking-wide text-white"
              onClick={() => setOpen(false)}
            >
              REQUEST DEMO
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

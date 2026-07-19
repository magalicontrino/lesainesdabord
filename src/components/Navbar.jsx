import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { DONATE_URL, SOCIALS, socialHref } from "../socials.js";

const LOGO =
  "https://qmrardtopeisqxpcpjzy.supabase.co/storage/v1/object/public/site/logo.png";

const NAV_LINKS = [
  { to: "/quisommesnous", label: "Qui sommes-nous ?" },
  { to: "/missions", label: "Nos missions" },
  { to: "/evenements", label: "Nos événements" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 border-b ${
          scrolled || menuOpen
            ? "bg-[#FAFAF9]/95 backdrop-blur-md border-stone-200/60 h-16"
            : "bg-transparent border-transparent h-20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between gap-2">
          <button
            className="lg:hidden p-1 sm:p-2 text-stone-600 hover:text-stone-900 shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <iconify-icon
              icon={
                menuOpen
                  ? "solar:close-circle-linear"
                  : "solar:hamburger-menu-linear"
              }
              width="28"
              height="28"
            />
          </button>

          <div className="flex items-center gap-2 shrink overflow-hidden">
            <Link
              to="/"
              className="flex items-center gap-1.5 sm:gap-2 overflow-hidden"
            >
              <img
                src={LOGO}
                alt="Logo"
                className="h-8 sm:h-10 w-auto rounded-full object-contain shrink-0"
              />
              <div className="flex flex-row gap-1 uppercase text-sm sm:text-base md:text-xl font-light tracking-tight font-sans leading-tight whitespace-nowrap">
                <span className="text-cyan-600">les ainés</span>
                <span className="text-pink-600">d'abord</span>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-500">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="hover:text-stone-900 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="hidden lg:flex items-center gap-2">
              {SOCIALS.map((network) => (
                <a
                  key={network}
                  href={socialHref(network)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-stone-950 text-white rounded-full hover:bg-stone-800 transition-colors"
                >
                  <iconify-icon
                    icon={`lucide:${network}`}
                    width="18"
                    height="18"
                  />
                </a>
              ))}
            </div>
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fbbd23] text-white px-3 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-xl md:rounded-2xl text-xs sm:text-sm font-medium hover:bg-[#eab308] transition-all shadow-lg flex items-center gap-1.5 sm:gap-2 ml-0 sm:ml-2 md:ml-4"
            >
              <span className="hidden sm:inline">Faire un don</span>
              <span className="sm:hidden text-sm">❤</span>
              <iconify-icon
                icon="solar:arrow-right-linear"
                width="16"
                height="16"
              />
            </a>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 z-40 bg-[#FAFAF9] pt-24 px-6 pb-6 flex flex-col h-screen overflow-y-auto"
          >
            <div className="flex flex-col gap-6 mt-4">
              {NAV_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-3xl font-playfair font-medium text-stone-800 hover:text-stone-900"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <div className="w-full h-px bg-stone-200 my-4" />
              <div className="flex gap-4">
                {SOCIALS.map((network) => (
                  <a
                    key={network}
                    href={socialHref(network)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-stone-950 text-white rounded-full"
                  >
                    <iconify-icon
                      icon={`lucide:${network}`}
                      width="24"
                      height="24"
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

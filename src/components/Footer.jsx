import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { DONATE_URL } from "../socials.js";

const FOUNDER_PHOTO =
  "https://qmrardtopeisqxpcpjzy.supabase.co/storage/v1/object/public/site/equipe/carine.jpg";

const VOLUNTEER_STEPS = [
  {
    number: "01",
    title: "Tout le monde est bienvenu",
    body: "Nous accueillons avec joie toutes les personnes passionnées qui souhaitent contribuer au bien-être de nos aînés. Vous pouvez rejoindre notre équipe en tant que bénévole, partenaire, ou collaborateur professionnel.",
  },
  {
    number: "02",
    title: "Il suffit de nous contacter",
    body: "Il suffit de nous contacter; nous vous accompagnerons dans chaque étape pour trouver la mission qui vous correspond le mieux.",
  },
];

export default function Footer() {
  return (
    <div className="px-3 sm:px-10 pb-6 sm:pb-10 bg-stone-50">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl sm:rounded-[40px] shadow-2xl overflow-hidden border border-black/5">
        <section
          id="process"
          className="py-12 sm:py-24 px-6 sm:px-20 relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="text-center mb-10 sm:mb-20">
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-400 font-bold mb-3 sm:mb-4">
                Bénévolat
              </p>
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-medium font-playfair tracking-tight text-stone-900">
                Je postuler pour rejoindre l’équipe ou devenir bénévole
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-12">
              {VOLUNTEER_STEPS.map(({ number, title, body }) => (
                <div key={number} className="space-y-8">
                  <div className="bg-stone-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-stone-100 hover-lift text-center sm:text-left">
                    <span className="text-[10px] sm:text-xs font-bold text-stone-300 uppercase tracking-widest">
                      {number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-playfair italic mt-3 sm:mt-4 mb-3 sm:mb-4">
                      {title}
                    </h3>
                    <p className="text-sm sm:text-base text-stone-600">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 sm:mt-20">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-medium font-playfair tracking-tight text-stone-900">
                Rejoignez-nous
              </h2>
            </div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(0,0,0,0.03),transparent_60%)] pointer-events-none" />
        </section>

        <section className="bg-slate-950 py-12 sm:py-24 px-6 sm:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-playfair font-medium text-white leading-tight mb-10 sm:mb-16">
              {"\" En Belgique, j’ai appris que prendre soin des personnes âgées, c’est bien plus qu’un métier : c’est un engagement de cœur. Aujourd’hui, je souhaite partager cette expérience pour contribuer à offrir des soins de qualité aux aînés du Congo "}
              <span className="text-amber-400 italic">aînés du congo</span>. "
            </h2>
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <img
                src={FOUNDER_PHOTO}
                alt="Mm Carine"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-amber-400 object-cover"
              />
              <div>
                <p className="text-amber-200 font-medium text-lg sm:text-xl">
                  Mm Carine
                </p>
                <p className="text-stone-400 text-xs sm:text-sm">
                  {"Fondatrice & Presidente des Ainés d’Abord"}
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="pt-12 sm:pt-24 pb-8 sm:pb-12 px-6 sm:px-20 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-playfair font-semibold text-stone-900 leading-none mb-6">
            {"Les Aînés d’Abord – "}
            <br />
            <span className="text-stone-400">ONG Vieux Mbuta</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-500 max-w-md mx-auto mb-12 sm:mb-20">
            Conseils bien-être, activités, appels à bénévolat.
          </p>
          <hr className="border-stone-200 max-w-7xl mx-auto w-full" />
        </section>

        <section className="py-12 sm:py-24 px-6 sm:px-20 text-center md:text-left">
          <div className="mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-6xl lg:text-8xl font-playfair font-semibold text-stone-900 tracking-tighter leading-[1.05]">
              {"Parce qu’ils ont été là pour nous, "}
              <br className="hidden sm:block" />
              <span className="italic text-stone-400 font-normal">
                soyons là pour eux
              </span>
              .
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 mb-10 sm:mb-12">
            <div className="space-y-4">
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-400 font-bold mb-3 sm:mb-4">
                Infos
              </p>
              <div
                id="contact"
                className="space-y-3 flex flex-col items-center md:items-start scroll-mt-24"
              >
                <a
                  href="mailto:lesainesdabord2026@gmail.com"
                  className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 text-stone-900 hover:text-cyan-600 transition-colors"
                >
                  <iconify-icon icon="solar:letter-linear" width="20" />
                  <span className="text-xs sm:text-sm font-geist">
                    lesainesdabord2026@gmail.com
                  </span>
                </a>
                <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 text-stone-900">
                  <iconify-icon icon="solar:phone-calling-outline" width="20" />
                  <span className="text-xs sm:text-sm font-geist">
                    Téléphone : 04 65 80 97 34
                  </span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 text-stone-900">
                  <iconify-icon icon="solar:gps-outline" width="20" />
                  <span className="text-xs sm:text-sm font-geist">
                    Kinshasa, RDC
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-400 font-bold mb-3 sm:mb-4">
                Nos vidéos
              </p>
              <a
                href="https://www.youtube.com/@lesainesdabord2026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#EA3396] text-white px-5 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-all shadow-sm"
              >
                <iconify-icon icon="lucide:youtube" width="18" />
                <span className="font-geist">Youtube</span>
              </a>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-400 font-bold mb-3 sm:mb-4">
                Nos réseaux
              </p>
              <div className="flex justify-center md:justify-start gap-3">
                <a
                  href="https://www.instagram.com/lesainesdabord/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#83CFDC] text-white rounded-full hover:opacity-90 transition-all"
                >
                  <iconify-icon icon="lucide:instagram" width="20" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61582351872396"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#FACC15] text-white rounded-full hover:opacity-90 transition-all"
                >
                  <iconify-icon icon="lucide:facebook" width="20" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-black/10 pt-8">
            <div className="flex flex-col items-center md:items-start mb-8">
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-400 font-bold mb-3 sm:mb-4">
                Explorer
              </p>
              <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 sm:gap-6">
                <Link
                  to="/quisommesnous"
                  className="text-xs sm:text-sm text-stone-900 hover:underline font-geist"
                >
                  Qui sommes-nous ?
                </Link>
                <Link
                  to="/evenements"
                  className="text-xs sm:text-sm text-stone-900 hover:underline font-geist"
                >
                  Evènements
                </Link>
                <Link
                  to="/missions"
                  className="text-xs sm:text-sm text-stone-900 hover:underline font-geist"
                >
                  Nos missions
                </Link>
                <a
                  href={DONATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-stone-900 hover:underline font-geist"
                >
                  Faire un don
                </a>
              </div>
            </div>
            <p className="text-center text-[10px] sm:text-xs text-stone-400 font-geist">
              © 2025 Magali Contrino — Designed with love for amazing people !
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

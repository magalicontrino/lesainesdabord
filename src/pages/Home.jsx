import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import ImmersionSection from "../components/ImmersionSection.jsx";
import { DONATE_URL } from "../socials.js";
import {
  CARD_COLORS,
  fetchEvenements,
  formatEventDate,
  getEventImage,
} from "../lib/events.js";

const HERO_IMAGE =
  "https://qmrardtopeisqxpcpjzy.supabase.co/storage/v1/object/public/site/accueil-hero.jpg";

const PANORAMIC_IMAGE =
  "https://qmrardtopeisqxpcpjzy.supabase.co/storage/v1/object/public/site/accueil-panoramique.jpg";

const PRESENCE_IMAGE =
  "https://qmrardtopeisqxpcpjzy.supabase.co/storage/v1/object/public/site/accueil-presence.jpg";

const GALLERY = [
  "https://qmrardtopeisqxpcpjzy.supabase.co/storage/v1/object/public/site/moments/01.jpg",
  "https://qmrardtopeisqxpcpjzy.supabase.co/storage/v1/object/public/site/moments/02.jpg",
  "https://qmrardtopeisqxpcpjzy.supabase.co/storage/v1/object/public/site/moments/03.jpg",
  "https://qmrardtopeisqxpcpjzy.supabase.co/storage/v1/object/public/site/moments/04.jpg",
  "https://qmrardtopeisqxpcpjzy.supabase.co/storage/v1/object/public/site/moments/05.jpg",
  "https://qmrardtopeisqxpcpjzy.supabase.co/storage/v1/object/public/site/moments/06.jpg",
];

export default function Home() {
  const [latestEvents, setLatestEvents] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setLatestEvents(await fetchEvenements(3));
      } catch (error) {
        console.error("Failed to fetch latest events", error);
      }
    })();
  }, []);

  return (
    <div className="pt-20 bg-stone-50">
      <section className="px-4 sm:px-8 pt-10 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 order-1 lg:order-none"
          >
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/50 shadow-sm">
              <img
                src={HERO_IMAGE}
                alt="Aînés"
                className="w-full h-[240px] sm:h-[320px] lg:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 order-2 lg:order-none"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold text-black tracking-tighter font-playfair leading-[1.05] max-w-3xl">
              Les aînés d'abord Vieux Mbuta
            </h1>
            <p className="text-lg sm:text-xl text-black/60 font-sans leading-relaxed max-w-2xl mt-6">
              Les Aînés d’Abord est une initiative solidaire dédiée à celles et
              ceux qui ont tant donné. Nous accompagnons les aînés avec respect
              et bienveillance—santé, écoute, présence et actions concrètes—pour
              qu’ils vivent chaque jour avec dignité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10 items-start sm:items-center">
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lime-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-lime-700 transition-all shadow-lg flex items-center gap-2"
              >
                Faire un don
              </a>
              <a
                href="#process"
                className="flex items-center gap-2 text-black/70 hover:text-black transition-colors font-medium"
              >
                Devenir bénévole
                <iconify-icon icon="lucide:arrow-up-right" width="16" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-black w-full flex items-center justify-center py-[60px] lg:h-screen lg:py-0 px-0 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full md:w-[711px] lg:w-[888px] aspect-video md:h-[400px] lg:h-[500px] rounded-none md:rounded-3xl overflow-hidden shadow-2xl border-y md:border border-white/10"
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/ZbVcOkYWgY0?si=GCN2lv5F0xR83c27"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </motion.div>
      </section>

      <ImmersionSection />

      <section className="bg-stone-100 py-32 px-4 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-7xl sm:text-8xl font-semibold tracking-tighter font-playfair text-stone-900">
            {"Nos moments "}
            <span className="italic font-medium">de vie</span>.
          </h2>
          <p className="text-lg sm:text-xl text-stone-500 mt-6 leading-relaxed">
            Découvrez les instants de joie, de partage et de convivialité qui
            rythment le quotidien de nos aînés.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {GALLERY.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-black/10 hover:scale-105 transition-transform duration-500 cursor-pointer ${
                  index % 2 === 0
                    ? "lg:-rotate-3 lg:translate-y-4"
                    : "lg:rotate-3 lg:-translate-y-4"
                }`}
              >
                <img
                  src={src}
                  alt={`Moment ${index}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
          <div className="mt-16">
            <Link
              to="/evenements"
              className="bg-pink-500 text-white px-8 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-pink-600 transition-all shadow-xl inline-flex items-center gap-2"
            >
              Evenements
              <iconify-icon icon="solar:arrow-right-linear" width="16" />
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full h-[50vh] sm:h-[600px] relative overflow-hidden">
        <img
          src={PANORAMIC_IMAGE}
          alt="Panoramic"
          className="w-full h-full object-cover"
        />
      </section>

      <section className="py-12 sm:py-16 bg-white px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
            <p className="text-xs uppercase tracking-widest text-stone-400 font-medium mb-4">
              / Nos derniers événements
            </p>
            <h2 className="text-6xl sm:text-7xl font-semibold text-black tracking-tighter font-playfair leading-[1.02]">
              Redonnons leur dignité à nos aînés
            </h2>
            <p className="text-lg text-stone-500 mt-6 leading-relaxed">
              Nous offrons aux aînés un accompagnement complet et humain, centré
              sur leur santé, leur dignité et leur bien-être quotidien.
            </p>
          </div>

          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pb-4 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0">
            {latestEvents.length > 0 ? (
              latestEvents.map((event, index) => {
                const color = CARD_COLORS[index % CARD_COLORS.length];
                const { surtitre, categorie } = event;

                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-[40px] p-4 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-stone-100 flex flex-col min-w-[75vw] sm:min-w-[350px] md:min-w-0 snap-center"
                  >
                    <div className="relative mb-6 sm:mb-8">
                      <div className="rounded-[30px] overflow-hidden aspect-[4/3]">
                        <img
                          src={getEventImage(event)}
                          alt={event.titre || "Événement"}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {surtitre ? (
                        <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white/95 backdrop-blur-sm p-1.5 sm:p-2 pr-3 sm:pr-5 rounded-[24px] shadow-lg flex items-center gap-2 sm:gap-3 border border-stone-100 scale-75 sm:scale-90 origin-bottom-left">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#141414] rounded-full flex items-center justify-center shrink-0">
                            <iconify-icon
                              icon="lucide:feather"
                              width="16"
                              className="text-[#E60033]"
                            />
                          </div>
                          <p className="text-xs sm:text-base font-playfair text-stone-900 tracking-wide">
                            {surtitre}
                          </p>
                        </div>
                      ) : (
                        categorie && (
                          <div className="absolute bottom-4 left-4">
                            <span className="bg-[#F6D365] text-stone-900 px-4 py-1.5 rounded-full text-[12px] font-bold shadow-sm">
                              {categorie}
                            </span>
                          </div>
                        )
                      )}
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-lg sm:text-2xl font-playfair font-medium text-stone-900 leading-tight mb-2 sm:mb-4 line-clamp-2">
                        {event.titre || "Événement sans titre"}
                      </h3>
                      <p className="text-stone-400 font-sans text-sm sm:text-lg">
                        {formatEventDate(event)}
                      </p>
                    </div>

                    <div className="flex justify-end mt-4 sm:mt-6">
                      <Link
                        to={`/template-event/${event.id}`}
                        className={`w-10 h-10 sm:w-12 sm:h-12 ${color.bg} rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg ${color.shadow}`}
                      >
                        <div
                          className={`w-5 h-5 sm:w-6 sm:h-6 ${color.inner} rounded-full flex items-center justify-center`}
                        >
                          <iconify-icon
                            icon="lucide:arrow-up-right"
                            width="12"
                            style={{ color: "white" }}
                          />
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <div className="col-span-3 text-center text-stone-500 py-20">
                Chargement des événements...
              </div>
            )}
          </div>

          <div className="flex justify-center mt-12 sm:mt-16">
            <Link
              to="/evenements"
              className="bg-[#E91E63] text-white px-8 py-4 rounded-full font-medium hover:bg-[#D81B60] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-3"
            >
              <span className="text-lg">Voir tous nos événements</span>
              <iconify-icon icon="lucide:arrow-right" width="20" />
            </Link>
          </div>
        </div>
      </section>

      <section className="pt-8 pb-16 sm:pt-12 sm:pb-24 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={PRESENCE_IMAGE}
              alt="Presence"
              className="w-full h-[50vh] sm:h-[420px] lg:h-[480px] object-cover rounded-[32px] sm:rounded-[40px] shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-6xl font-medium text-stone-900 tracking-tight font-playfair leading-[1.05]">
              {"Être présent à chaque moment, pour que nos aînés "}
              <br />
              <span className="italic text-stone-400 font-normal">
                jamais seuls
              </span>
              .
            </h2>
            <p className="text-lg sm:text-xl text-black/60 leading-relaxed">
              Découvrez l’alliance du cœur et de l’engagement avec Les Aînés
              d’Abord, le moteur de solidarité qui redonne dignité et espoir à
              ceux qui ont bâti nos vies.
            </p>
            <div>
              <Link
                to="/missions"
                className="bg-teal-500 text-white px-8 py-4 rounded-2xl font-medium hover:bg-teal-600 transition-all shadow-xl inline-block"
              >
                NOS MISSIONS
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

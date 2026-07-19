import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  CARD_COLORS,
  formatEventDate,
  getCategory,
  getEventImage,
  getStrapline,
  getTitle,
} from "../lib/events.js";

export default function Evenements() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/events");
        if (!response.ok) throw new Error("Failed to fetch events");
        setEvents(await response.json());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="pb-24 bg-white min-h-screen">
      <section className="px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto pt-20 mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl"
        >
          <div className="flex items-center gap-6 mb-12">
            <div className="w-12 h-[1.5px] bg-stone-900" />
            <p className="text-[13px] font-sans font-bold tracking-[0.15em] text-stone-900 uppercase">
              NOS ACTIONS
            </p>
          </div>
          <h1 className="text-[60px] sm:text-[100px] lg:text-[150px] font-medium text-stone-900 tracking-[-0.05em] font-playfair leading-[0.85]">
            {"Bienvenue sur "}
            <br />
            {"notre page "}
            <br />
            <span className="italic">d'évènements.</span>
          </h1>
        </motion.div>
      </section>

      {loading && (
        <div className="px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto mb-32 text-center">
          <p className="text-xl text-stone-500">
            Chargement des événements...
          </p>
        </div>
      )}

      {error && (
        <div className="px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto mb-32 text-center">
          <p className="text-xl text-red-500">
            {"Erreur : "}
            {error}
          </p>
          <p className="text-stone-500 mt-4">
            Veuillez vérifier que la clé API Airtable est correcte et a les
            bonnes permissions.
          </p>
        </div>
      )}

      {!loading && !error && events.length === 0 && (
        <div className="px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto mb-32 text-center">
          <p className="text-xl text-stone-500">Aucun événement trouvé.</p>
        </div>
      )}

      {!loading && !error && events.length > 0 && (
        <section className="px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto mb-8 sm:mb-12">
          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 pb-4 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0">
            {events.map((event, index) => {
              const color = CARD_COLORS[index % CARD_COLORS.length];
              const strapline = getStrapline(event);
              const category = getCategory(event);

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 3) * 0.1 }}
                  className="bg-white rounded-[40px] p-4 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-stone-100 flex flex-col min-w-[75vw] sm:min-w-[350px] md:min-w-0 snap-center"
                >
                  <div className="relative mb-6 sm:mb-8">
                    <div className="rounded-[30px] overflow-hidden aspect-[4/3]">
                      <img
                        src={getEventImage(event)}
                        alt={getTitle(event) || "Événement"}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {strapline ? (
                      <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white/95 backdrop-blur-sm p-2 pr-4 sm:pr-5 rounded-[24px] shadow-lg flex items-center gap-2 sm:gap-3 border border-stone-100">
                        <div className="w-10 h-10 bg-[#141414] rounded-full flex items-center justify-center shrink-0">
                          <iconify-icon
                            icon="lucide:feather"
                            width="18"
                            className="text-[#E60033]"
                          />
                        </div>
                        <p className="text-sm sm:text-base font-playfair text-stone-900 tracking-wide">
                          {strapline}
                        </p>
                      </div>
                    ) : (
                      category && (
                        <div className="absolute bottom-4 left-4">
                          <span className="bg-[#F6D365] text-stone-900 px-4 py-1.5 rounded-full text-[12px] font-bold shadow-sm">
                            {category}
                          </span>
                        </div>
                      )
                    )}
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-lg sm:text-2xl font-playfair font-medium text-stone-900 leading-tight mb-2 sm:mb-4 line-clamp-2">
                      {getTitle(event) || "Événement sans titre"}
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
            })}
          </div>
        </section>
      )}

      <section className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-stone-100 rounded-[40px] px-6 py-10 sm:px-12 sm:py-16 border border-stone-200"
        >
          <h2 className="text-4xl sm:text-6xl font-playfair font-medium text-stone-900 mb-8">
            {"Vous souhaitez organiser "}
            <br />
            <span className="italic text-stone-400">
              un événement avec nous ?
            </span>
          </h2>
          <p className="text-xl text-stone-600 mb-12 max-w-2xl mx-auto">
            Nous sommes toujours ouverts à de nouvelles collaborations pour
            apporter de la joie à nos aînés.
          </p>
          <a
            href="#contact"
            className="bg-[#D92D20] text-white px-12 py-5 rounded-full font-bold hover:bg-[#B42318] hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_20px_40px_-10px_rgba(217,45,32,0.3)] inline-block"
          >
            Contactez-nous
          </a>
        </motion.div>
      </section>
    </div>
  );
}

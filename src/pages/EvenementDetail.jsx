import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import Markdown from "react-markdown";
import {
  fetchEvenement,
  formatEventDate,
  getEventImage,
} from "../lib/events.js";

export default function EvenementDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        setEvent(await fetchEvenement(id));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) {
    return (
      <div className="bg-white min-h-screen pt-32 pb-20 px-6 flex justify-center items-center">
        <p className="text-xl text-stone-500">Chargement de l'événement...</p>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="bg-white min-h-screen pt-32 pb-20 px-6 flex flex-col justify-center items-center">
        <p className="text-xl text-red-500 mb-4">
          {"Erreur : "}
          {error || "Événement introuvable"}
        </p>
        <Link to="/evenements" className="text-[#D92D20] hover:underline">
          Retour aux événements
        </Link>
      </div>
    );
  }

  const title = event.titre || "Événement sans titre";
  const date = formatEventDate(event);
  const strapline = event.surtitre;
  const category = event.categorie;
  const description = event.description || "";
  const subtitle = event.sous_titre || "";
  const coverImage = getEventImage(event);
  const gallery = event.galerie || [];

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-32 pb-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-stone-500 font-medium">
                {category || date}
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-playfair font-bold text-stone-900 leading-[0.9] tracking-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg sm:text-xl text-stone-500 leading-relaxed max-w-2xl pt-4">
                  {subtitle}
                </p>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src={coverImage}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            {strapline ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-sm p-2 sm:p-3 pr-5 sm:pr-8 rounded-[24px] sm:rounded-[32px] shadow-xl flex items-center gap-3 sm:gap-5 border border-stone-100 max-w-[90%] sm:max-w-none"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-[#141414] rounded-full flex items-center justify-center shrink-0">
                  <iconify-icon
                    icon="lucide:feather"
                    width="24"
                    className="text-[#E60033]"
                  />
                </div>
                <p className="text-base sm:text-xl font-playfair text-stone-900 tracking-wide leading-tight">
                  {strapline}
                </p>
              </motion.div>
            ) : (
              category && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute bottom-6 left-6"
                >
                  <span className="bg-[#F6D365] text-stone-900 px-6 py-2 rounded-full text-sm font-bold shadow-sm">
                    {category}
                  </span>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </section>

      <section className="px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto pb-24 pt-8">
        <div className="border-t border-stone-200 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="prose prose-lg prose-stone max-w-none font-sans text-stone-600 leading-relaxed">
              <Markdown>{description}</Markdown>
            </div>
          </motion.div>
        </div>
      </section>

      {gallery && gallery.length > 0 && (
        <section className="px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto pb-24">
          <div className="flex overflow-x-auto lg:flex-wrap gap-4 sm:gap-6 pb-4 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 sm:-mx-12 sm:px-12 lg:mx-0 lg:px-0">
            {gallery.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-none w-[85vw] sm:w-[60vw] lg:flex-grow lg:basis-[25%] lg:w-auto overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 h-[300px] sm:h-[350px] lg:h-[400px] snap-center cursor-pointer"
                onClick={() => setLightboxImage(src)}
              >
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      <section className="px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto pb-24 flex justify-center">
        <Link
          to="/evenements"
          className="inline-flex items-center gap-3 bg-[#D92D20] text-white px-8 py-4 rounded-full font-medium hover:bg-stone-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          <iconify-icon icon="lucide:arrow-left" width="20" />
          <span className="text-lg">Retour aux événements</span>
        </Link>
      </section>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-stone-300 transition-colors bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxImage(null);
            }}
          >
            <iconify-icon icon="lucide:x" width="24" />
          </button>
          <img
            src={lightboxImage}
            alt="Enlarged gallery view"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

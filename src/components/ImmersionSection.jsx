import { motion } from "motion/react";

const IMAGE =
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0e3f6ab6-bf09-4013-af89-00bb56d6cf8d_800w.jpg";

export default function ImmersionSection() {
  return (
    <section className="px-4 sm:px-8 py-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-[3rem] p-4 sm:p-6 lg:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col justify-between py-4 lg:py-8 lg:pl-8">
            <div>
              <h2 className="text-5xl sm:text-6xl lg:text-[64px] font-playfair text-black leading-[1.1] tracking-tight mb-8">
                Immersion : — Visite en
                <br />
                maison de repos
              </h2>
              <p className="text-[17px] text-stone-400 leading-[1.7] max-w-md font-sans">
                ## Un engagement durable pour le respect, la solidarité et
                l'autonomie Vbi curarum abiectis ponderibus aliis tamquam nodum
                et codicem difficillimum Caesarem convellere nisu valido
                cogitabat, eique deliberanti cum proximis...
              </p>
            </div>
            <div className="flex items-center justify-between mt-16 lg:mt-24">
              <p className="text-[17px] font-medium text-black font-sans">
                5 janvier 2025
              </p>
              <button className="w-16 h-16 bg-[#DA291C] rounded-full flex items-center justify-center text-white hover:bg-[#B92217] transition-colors shadow-lg shadow-red-500/20">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <iconify-icon icon="lucide:arrow-up-right" width="20" />
                </div>
              </button>
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={IMAGE}
              alt="Immersion en maison de repos"
              className="w-full aspect-square object-cover rounded-[2.5rem]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

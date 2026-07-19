import { motion } from "motion/react";

const MISSIONS = [
  {
    title: "ASSISTANCE & ACCOMPAGNEMENT SOCIAL",
    desc: "Nous aidons les aînés isolés dans leurs démarches, tout en leur offrant écoute, présence et soutien pour préserver leur autonomie et leur confiance.",
    icon: "solar:bill-list-linear",
  },
  {
    title: "SOINS & BIEN-ÊTRE",
    desc: "Nous organisons des activités de prévention, des conseils santé et des visites ponctuelles pour maintenir un bon équilibre physique et moral.",
    icon: "solar:heart-linear",
  },
  {
    title: "LUTTE CONTRE L'ISOLEMENT",
    desc: "Nous favorisons les liens humains à travers des visites, ateliers et échanges intergénérationnels pour rompre la solitude et redonner le sourire.",
    icon: "solar:users-group-rounded-linear",
  },
  {
    title: "SENSIBILISATION & PLAIDOYER",
    desc: "Nous menons des campagnes d'information et de sensibilisation pour défendre les droits des aînés et promouvoir leur reconnaissance sociale.",
    icon: "solar:flag-linear",
  },
  {
    title: "SOUTIEN AUX FAMILLES",
    desc: "Nous accompagnons les proches aidants à travers des conseils, formations et outils pratiques pour mieux comprendre et servir leurs aînés.",
    icon: "solar:home-2-linear",
  },
  {
    title: "ENGAGEMENT BÉNÉVOLE",
    desc: "Nous encourageons les jeunes et les adultes à devenir acteurs du changement en s'impliquant dans des actions solidaires au service des aînés.",
    icon: "solar:stars-linear",
  },
];

export default function Missions() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <section className="px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-medium text-stone-900 tracking-tight font-playfair leading-none mb-12">
            {"Nos "}
            <span className="text-yellow-400 italic font-normal">missions</span>.
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-stone-900 font-playfair leading-tight max-w-5xl">
            {"Nous offrons aux aînés un accompagnement complet et humain, centré sur leur santé, "}
            <span className="italic">
              leur dignité et leur bien-être quotidien.
            </span>
          </p>
        </motion.div>
      </section>

      <section className="px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
          {MISSIONS.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col"
            >
              <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center mb-6">
                <iconify-icon
                  icon={mission.icon}
                  width="20"
                  className="text-stone-700"
                />
              </div>
              <div className="w-full h-px bg-stone-200 mb-6" />
              <h3 className="text-[11px] font-sans font-bold tracking-[0.2em] text-stone-900 mb-8 uppercase">
                {mission.title}
              </h3>
              <p className="text-stone-600 leading-relaxed text-sm font-sans">
                {mission.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

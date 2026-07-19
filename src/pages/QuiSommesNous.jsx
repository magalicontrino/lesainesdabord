import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

const TEAM = [
  {
    name: "MR. SIMPLICE ONOYA",
    role: "...",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7a941afc-2296-4bd2-916f-631dbd4d7876_1600w.jpg",
  },
  {
    name: "MM. CARINE",
    role: "Fondatrice, CEO",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/650331d9-44bc-465f-98c9-a8ae51c8289d_320w.jpg",
  },
  {
    name: "MM.",
    role: "...",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1b82c38-2b1f-4b1a-a11a-74bb85d70282_1600w.jpg",
  },
  {
    name: "M.",
    role: "...",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0e3f6ab6-bf09-4013-af89-00bb56d6cf8d_800w.jpg",
  },
];

const FAQS = [
  {
    q: "Quelle est votre approche pour les petits projets communautaires ?",
    a: "Notre approche repose d’abord sur l’écoute et la collaboration. Pour les petits projets communautaires, nous travaillons main dans la main avec les familles, les bénévoles et les partenaires locaux afin d’identifier les besoins réels. Nous mettons ensuite en place des actions simples mais concrètes : visites à domicile, séances de sensibilisation, ou groupes de soutien ; qui apportent un impact immédiat et durable. Chaque projet est suivi avec attention pour garantir dignité et proximité humaine.",
    color: "bg-yellow-400",
  },
  {
    q: "Qui se cache derrière Les Aînés d’Abord ?",
    a: "Derrière Les Aînés d’Abord se trouve une équipe de soignants, d’assistants sociaux et de bénévoles animés par une même mission: redonner dignité, soins et chaleur humaine aux personnes âgées. L’initiative a été fondée par une soignante et mère de quatre enfants, inspirée par sa propre histoire et guidée par le désir profond que personne ne vieillisse dans la solitude.",
    color: "bg-cyan-400",
  },
  {
    q: "J’aimerais rencontrer d’autres bénévoles et soignants, comment faire?",
    a: "Vous pouvez rejoindre notre communauté de bénévoles en vous inscrivant sur notre site ou en participant à nos activités locales. Nous organisons régulièrement des rencontres, ateliers et visites solidaires pour permettre aux membres d’échanger, de partager leurs expériences et de s’entraider au service de nos aînés.",
    color: "bg-green-400",
  },
  {
    q: "Puis-je postuler pour rejoindre l’équipe ou devenir bénévole avec Les Aînés d’Abord ?",
    a: "Oui, tout à fait ! Nous accueillons avec joie toutes les personnes passionnées qui souhaitent contribuer au bien-être de nos aînés. Vous pouvez rejoindre notre équipe en tant que bénévole, partenaire, ou collaborateur professionnel. Il suffit de nous contacter par email ; nous vous accompagnerons dans chaque étape.",
    color: "bg-pink-500",
  },
];

const STORY = [
  "Je suis soignante femme marié et mère de quatre enfants, animée par le désir profond de transmettre mes valeurs aux générations futures. Ce projet, initialement appelé « Vieux Mbuta », est né d’un hommage à mon père, que j’ai perdu sans avoir eu la chance de l’accompagner dans ses derniers instants.",
  "De cette douleur est née une conviction : aucune personne âgée ne devrait affronter seule la vieillesse ou la précarité, surtout dans un contexte comme celui du Congo, où le quotidien reste un combat pour beaucoup.",
  "C’est pourquoi j’ai voulu créer un espace d’écoute, de solidarité et de respect; un lieu où nos aînés retrouvent la dignité, l’attention et l’accompagnement qu’ils méritent.",
  "C’est pourquoi j’ai voulu créer un espace d’écoute, de solidarité et de respect; un lieu où nos aînés retrouvent la dignité, l’attention et l’accompagnement qu’ils méritent.",
];

const BELIEFS = [
  "Nous croyons qu’aucun aîné ne devrait vivre dans l’isolement ou la précarité, mais au contraire profiter pleinement de cette étape de vie, entouré de respect, de soins et d’attention.",
  "Nous croyons qu’aucun aîné ne devrait vivre dans l’isolement ou la précarité, mais au contraire profiter pleinement de cette étape de vie, entouré de respect, de soins et d’attention.",
  "À travers nos actions, nous œuvrons pour que chaque personne âgée retrouve sa place, sa voix et sa valeur au sein de la communauté. Laisser une marque indélébile sur le paysage de demain.",
];

const ENGAGEMENT_IMAGE =
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0fa4d261-54b7-4d7a-861f-69ea8ce8f24e_1600w.jpg";

const BANNER_IMAGE =
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9a807ce2-6cc6-40ba-babd-844aa8902926_3840w.jpg";

export default function QuiSommesNous() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="pt-20 bg-white overflow-hidden">
      <section className="pt-8 pb-32 sm:pt-12 sm:pb-40 px-4 sm:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-playfair font-bold text-stone-900 leading-[1.1] max-w-6xl mx-auto tracking-tight">
            Être présent à chaque moment, pour que nos aînés ne marchent jamais
            seuls.
          </h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-playfair italic text-stone-900/90 font-normal leading-tight">
            Pour que nos aînés ne marchent jamais seuls
          </h3>
          <p className="text-lg sm:text-xl text-stone-500 max-w-4xl mx-auto pt-8 leading-relaxed font-sans">
            {"Découvrez l’alliance du cœur et de l’engagement avec Les Aînés d’Abord, le moteur "}
            <br className="hidden md:block" />
            de solidarité qui redonne dignité et espoir à ceux qui ont bâti nos
            vies.
          </p>
        </motion.div>
      </section>

      <section className="bg-[#05050b] py-40 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto space-y-16"
          >
            <h2 className="text-7xl sm:text-8xl md:text-9xl font-playfair font-medium text-white tracking-tight">
              Notre Histoire
            </h2>
            <div className="space-y-10 text-xl sm:text-2xl text-stone-300 leading-relaxed font-sans">
              {STORY.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <Link
              to="/missions"
              className="inline-block bg-[#14b8a6] text-white px-8 py-4 rounded-xl font-sans font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-[#0d9488] transition-all shadow-lg"
            >
              NOS MISSIONS
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-4 sm:px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-playfair font-medium text-stone-900 text-center leading-tight max-w-5xl mx-auto mb-20"
          >
            Notre mission est de redonner dignité, autonomie et espoir aux
            personnes âgées, souvent oubliées ou marginalisées dans nos sociétés.
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
            {BELIEFS.map((belief, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 sm:p-10 rounded-[32px] border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-lg text-stone-600 leading-relaxed font-sans">
                  {belief}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-4xl sm:text-5xl font-playfair italic font-medium text-stone-900 leading-tight">
              Nous croyons qu’aucun aîné ne devrait vivre dans l’isolement ou la
              précarité, mais au contraire profiter pleinement de cette étape de
              vie, entouré de respect, de soins et d’attention.
            </h2>
            <p className="text-xl text-stone-500 leading-relaxed italic">
              À travers nos actions, nous œuvrons pour que chaque personne âgée
              retrouve sa place, sa voix et sa valeur au sein de la communauté.
              Laisser une marque indélébile sur le paysage de demain.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={ENGAGEMENT_IMAGE}
              alt="Engagement"
              className="w-full h-[50vh] sm:h-[400px] lg:h-[500px] object-cover rounded-[32px] sm:rounded-[40px] shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-stone-50 py-12 sm:py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto bg-[#050505] rounded-[32px] sm:rounded-[40px] p-6 sm:p-20 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-8 sm:space-y-12">
              <h2 className="text-4xl sm:text-6xl font-playfair text-white mb-8 sm:mb-16">
                FAQ
              </h2>
              <div className="space-y-0">
                {FAQS.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-white/10 group cursor-pointer"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <div className="flex items-center justify-between gap-4 sm:gap-6 py-6 sm:py-8">
                      <h3 className="text-xl sm:text-2xl font-playfair text-white group-hover:text-stone-300 transition-colors leading-tight">
                        {faq.q}
                      </h3>
                      <div
                        className={`w-10 h-10 rounded-full ${faq.color} flex items-center justify-center flex-shrink-0 transition-transform ${
                          openFaq === index ? "rotate-45" : ""
                        }`}
                      >
                        <iconify-icon
                          icon="lucide:arrow-up-right"
                          width="20"
                          className="text-black"
                        />
                      </div>
                    </div>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-stone-400 pb-6 sm:pb-8 font-sans leading-relaxed text-base sm:text-lg">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full flex items-center"
            >
              <img
                src={BANNER_IMAGE}
                alt="Banner"
                className="w-full h-[50vh] sm:h-[600px] object-cover rounded-[32px] shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-40 px-4 sm:px-8 max-w-7xl mx-auto">
        <h2 className="text-7xl sm:text-9xl font-playfair font-medium text-stone-900 text-center mb-16 sm:mb-32">
          Notre équipe
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {TEAM.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col bg-white p-6 rounded-[40px] shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="overflow-hidden rounded-[32px] mb-8">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="space-y-3 px-2 mt-auto">
                <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-stone-900">
                  {member.name}
                </h3>
                <p className="text-stone-500 font-sans text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

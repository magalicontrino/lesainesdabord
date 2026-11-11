export const SOCIALS = ["instagram", "youtube", "facebook"];

const HREFS = {
  instagram: "https://www.instagram.com/lesainesdabord/",
  youtube: "https://www.youtube.com/@lesainesdabord2026",
  facebook: "https://www.facebook.com/profile.php?id=61582351872396",
};

export const socialHref = (network) =>
  HREFS[network] ?? `https://www.${network}.com`;

// Page de don officielle de l'ASBL sur Donoor (plateforme belge).
// S'active une fois Stripe connecté côté Donoor.
export const DONATE_URL = "https://donoor.org/pay/lesainesdabord";

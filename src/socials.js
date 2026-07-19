export const SOCIALS = ["instagram", "youtube", "facebook"];

const HREFS = {
  instagram: "https://www.instagram.com/lesainesdabord/",
  youtube: "https://www.youtube.com/@lesainesdabord2026",
  facebook: "https://www.facebook.com/profile.php?id=61582351872396",
};

export const socialHref = (network) =>
  HREFS[network] ?? `https://www.${network}.com`;

export const DONATE_URL = "https://www.gofundme.com/";

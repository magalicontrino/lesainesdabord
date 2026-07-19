export const FALLBACK_EVENT_IMAGE =
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57af007a-e5e4-40ff-b27e-85605a6777fd_1600w.jpg";

/** Airtable column names vary, so read the first key that exists. */
export function getField(record, keys) {
  if (!record || !record.fields) return null;
  for (const key of keys) {
    if (record.fields[key] !== undefined) return record.fields[key];
  }
  return null;
}

export const getTitle = (record) =>
  getField(record, ["Name", "Titre", "Title"]);

export const getStrapline = (record) =>
  getField(record, ["Strapline", "Surtitre"]);

export const getCategory = (record) =>
  getField(record, ["Category", "Catégorie", "Type"]);

export const getRawDate = (record) =>
  getField(record, ["Date", "Date de l'événement"]);

export function getEventImage(record) {
  const attachments = getField(record, ["Image", "Photo", "Affiche", "Cover"]);
  return attachments && attachments.length > 0
    ? attachments[0].url
    : FALLBACK_EVENT_IMAGE;
}

export function getGallery(record) {
  const attachments = getField(record, [
    "Galerie",
    "Photos",
    "Gallery",
    "Images",
  ]);
  return attachments && attachments.length > 0
    ? attachments.map((a) => a.url)
    : [];
}

export function formatEventDate(record) {
  const raw = getRawDate(record);
  if (!raw) return "Date à venir";
  return new Date(raw).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const CARD_COLORS = [
  { bg: "bg-[#00B4D8]", inner: "bg-[#90E0EF]", shadow: "shadow-cyan-500/10" },
  { bg: "bg-[#10B981]", inner: "bg-[#A7F3D0]", shadow: "shadow-emerald-500/10" },
  { bg: "bg-[#E91E63]", inner: "bg-[#F9A8D4]", shadow: "shadow-pink-500/10" },
  { bg: "bg-[#F59E0B]", inner: "bg-[#FDE68A]", shadow: "shadow-amber-500/10" },
  { bg: "bg-[#8B5CF6]", inner: "bg-[#C4B5FD]", shadow: "shadow-violet-500/10" },
];

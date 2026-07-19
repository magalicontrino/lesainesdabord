import { supabase } from "./supabase.js";

export const FALLBACK_EVENT_IMAGE =
  "https://qmrardtopeisqxpcpjzy.supabase.co/storage/v1/object/public/evenements/reczVUFB5nYxiBD01/cover.jpg";

const COLONNES = "id, titre, surtitre, sous_titre, categorie, date, description, image_url, galerie";

/** Événements du plus récent au plus ancien. `limite` pour la page d'accueil. */
export async function fetchEvenements(limite) {
  let requete = supabase
    .from("evenements")
    .select(COLONNES)
    .order("date", { ascending: false });

  if (limite) requete = requete.limit(limite);

  const { data, error } = await requete;
  if (error) throw error;
  return data;
}

export async function fetchEvenement(id) {
  const { data, error } = await supabase
    .from("evenements")
    .select(COLONNES)
    .eq("id", id)
    .maybeSingle();

  if (error) throw error;
  return data;
}

export const getEventImage = (evenement) =>
  evenement?.image_url || FALLBACK_EVENT_IMAGE;

export function formatEventDate(evenement) {
  if (!evenement?.date) return "Date à venir";
  return new Date(evenement.date).toLocaleDateString("fr-FR", {
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

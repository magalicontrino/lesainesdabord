# Les Aînés d'Abord — site

Reproduction du site https://lesainesdabord.com, même stack que l'original :
Vite + React 19 + React Router 7 + Tailwind CSS v4 + Motion, icônes via
`iconify-icon`, polices Inter + Playfair Display.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## Pages

| Route | Composant |
| --- | --- |
| `/`, `/home`, `*` | `src/pages/Home.jsx` |
| `/quisommesnous` | `src/pages/QuiSommesNous.jsx` |
| `/missions` | `src/pages/Missions.jsx` |
| `/evenements` | `src/pages/Evenements.jsx` |
| `/evenement/:id`, `/template-event/:id` | `src/pages/EvenementDetail.jsx` |

## Données des événements

Les événements sont dans Supabase (projet « Les aînés d'abord »), table
`evenements`, lue via `src/lib/events.js`. La table est en lecture seule
publique (RLS) : le site lit, il n'écrit jamais. Pour ajouter ou modifier un
événement, passez par le Table Editor de Supabase.

Copiez `.env.example` vers `.env.local` avant de lancer le projet. La clé
`VITE_SUPABASE_ANON_KEY` est publique par conception — c'est la RLS qui
protège les données. Ne mettez jamais la clé `service_role` dans ce fichier.

Les photos des événements sont dans le bucket public `evenements` du même
projet, rangées par événement (`{id}/cover.jpg`, `{id}/galerie-01.jpg`…).

## Images du reste du site

⚠️ Les visuels des pages accueil, missions et qui-sommes-nous pointent encore
vers le bucket du prestataire d'origine (`hoirqrkdgbmvpwutwuwj.supabase.co`),
sur lequel nous n'avons aucun contrôle. Elles disparaîtront s'il ferme son
projet. À rapatrier dans le bucket `evenements` (ou un bucket `site` dédié).

Les photos locales du dossier parent (`Def/`, `video/`) ne sont pas utilisées.

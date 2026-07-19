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

Les événements viennent d'une base Airtable exposée par l'API de production
sur `/api/events` et `/api/events/:id`. En développement, `vite.config.js`
proxifie `/api` vers `https://lesainesdabord.com` — les pages événements
affichent donc les mêmes contenus que le site en ligne.

Pour un déploiement autonome, il faut soit héberger cette API, soit remplacer
les `fetch("/api/events")` dans `Home.jsx`, `Evenements.jsx` et
`EvenementDetail.jsx` par une source de données locale.

## Images

Les visuels pointent vers le bucket public Supabase utilisé par le site
d'origine (`hoirqrkdgbmvpwutwuwj.supabase.co`). Les photos locales du dossier
parent (`Def/`, `video/`) ne sont pas encore utilisées.

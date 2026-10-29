# Précieux

PWA éducative hors ligne pour un élève de 4ᵉ (7 matières). **État : lot 2** (socle, correction, stockage IndexedDB, parcours d'exercices, contenu maths + français).

## Commandes
- `npm install` · `npm run dev` · `npm test` · `npm run build` · `npm run preview`

## Polices
- Luckiest Guy : licence Apache 2.0 (`public/fonts/LuckiestGuy-LICENSE.txt`), redistribuable.
- Chillink : **gratuite pour usage personnel uniquement** (usage commercial sous licence de l'auteur). Le fichier est exclu du dépôt par `.gitignore` : copiez `Chillink.woff2` dans `public/fonts/` en local. Repli : Impact / system-ui.

## Fait
- Accueil, pages matières, leçon + exercices, correction expliquée, statut par compétence (non acquis / fragile / maîtrisé).
- Stockage IndexedDB (migrations versionnées), export/import JSON.
- Contenu : maths et français (5 compétences, 10 exercices chacun) ; 18 tests unitaires (correction, maîtrise, validité du contenu).

## À faire
- Physique, chimie, SVT, anglais, allemand ; diagnostics ; niveaux 1-8 et révision espacée ; XP, badges, statistiques ; arbre ; audio ; fond d'accueil illustré.
- Test de bout en bout hors ligne (non vérifié à ce jour : seul le build du service worker est vérifié).
- Programme : francophone usuel de 4ᵉ, non confirmé comme programme béninois officiel ; contenu à relire par un enseignant.

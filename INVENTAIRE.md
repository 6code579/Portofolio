# INVENTAIRE DU CONTENU (état avant refonte)

Source de vérité = le code actuel. Les textes seront déplacés tels quels dans `src/data/` sans reformulation. Vérification finale : comparaison avec cette liste.

## Routes (à conserver : `/`, `/projects`, `/about`, `/contact`)
`pages/Skills.tsx` existe mais n'est branchée sur aucune route (code mort, textes différents : 6 soft skills avec %). Non affichée aujourd'hui, donc non reprise sauf demande.

## Accueil (`/`)
**Hero** (`Hero.tsx`) : photo `images/francisco.png` ; titre « Développeur Fullstack » ; « Passionné par la création de solutions web performantes et modernes » ; « Spécialisé en Django, React, Python et JavaScript. Je transforme vos idées en applications web robustes et élégantes. » ; boutons « Télécharger mon CV » (modale : « La version simple de mon CV est disponible en téléchargement. Pour la version détaillée, veuillez me contacter directement. », bouton « Version Simple » → `/cv.pdf`) et « Me contacter » → `/contact` ; liens GitHub `github.com/LucaneTech`, LinkedIn `linkedin.com/in/franciscomouanda579`, Instagram `instagram.com/lucane.tech/`.

**Projets récents** (`FeaturedProjects.tsx`) : titre « Projets Récents », texte « Découvrez une sélection de mes derniers projets, alliant innovation technique et design moderne pour créer des expériences utilisateur exceptionnelles. » ; 3 projets : Lucane Tech (Octobre 2025), Hermon (Avril 2026), Agrobusiness (Mai 2026) ; bouton « Voir tous les projets ».

**Compétences** (`components/Skills.tsx`) : « Compétences Techniques » + « Une expertise technique complète pour développer des solutions web de bout en bout, de la conception à la mise en production. »
- Frontend (10) : HTML5, CSS3, JavaScript, React.js, React Native, TypeScript, Next.js, Tailwind CSS, Bootstrap, Material UI
- Backend (7) : Python, Django, NodeJS, Express, FastAPI, RESTful APIs, Supabase
- Database (4) : MySQL, MongoDB, SQLite, Firebase
- Tools & DevOps (4) : Git, Docker, Linux, VS Code
- « Autres Compétences » (4) : Développement (Architecture, Tests, Code Review) · Design UX/UI (Responsive, Accessibilité, Performance) · Mobile (React Native, PWA, Responsive) · DevOps (Déploiement, Monitoring, Sécurité)
- « Niveau d'Expertise » : Frontend 90 %, Backend 80 %, Database 70 %, DevOps 45 %

**Appel à l'action** (`CallToAction.tsx`) : « Prêt à donner vie à votre projet web ? » ; « Collaborons ensemble pour créer une solution sur mesure qui répond parfaitement à vos besoins et dépasse vos attentes. » ; boutons « Discutons de votre projet » et « Télécharger mon CV » ; chiffres : 3+ Années d'expérience · 30+ Projets réalisés · 99.99% Clients satisfaits.

## Projets (`/projects`) — 10 projets, recherche + filtre par catégorie
Titre « Mes Projets » ; « Découvrez une sélection de mes réalisations en développement web » ; placeholder « Rechercher un projet... » ; filtre « Tous les projets » ; vide : « Aucun projet trouvé avec ces critères. »

| Projet | Date | Catégorie | Stack | Live | GitHub |
|---|---|---|---|---|---|
| Lucane | Octobre 2025 | Frontend | React, TypeScript, Tailwind CSS, Vite, Daisyui | lucanetech.netlify.app | LucaneTech/Lucane |
| Agrobusiness | Mai 2026 | Frontend | React, TypeScript, Tailwind CSS, Vite | kfkagrobusiness.com | LucaneTech/agrobusiness |
| Panval | Avril 2026 | Frontend | React, TypeScript, Tailwind CSS, Vite | panvalconsiliuminter.com | LucaneTech/Panval |
| Active Rise | Mai 2026 | Frontend | React, TypeScript, Tailwind CSS, Vite | activerise.netlify.app | LucaneTech/Active_rise |
| Hermon | Avril 2026 | Frontend | React, TypeScript, Tailwind CSS, Vite | hermon-eximia.com | LucaneTech/hermon |
| Folio Francisco | Avril 2025 | Frontend | React, TypeScript, Tailwind CSS, Vite, Daisyui | franciscomouanda.netlify.app | LucaneTech/Portofolio |
| Oralise | Mai 2026 | Frontend | React, TypeScript, Tailwind CSS, Vite | oralise.netlify.app | LucaneTech/Oralise |
| Trip Manager | Mai 2026 | Web App | Django, React TS, Tailwindcss, JwT, Axios | — (vidéo démo Cloudinary) | LucaneTech/trip_management |
| Kone Shop | Septembre 2025 | E-commerce | React, TypeScript, Tailwind CSS, Vite | koneshop.netlify.app | LucaneTech/Kone-Shop |
| Lucane Filter | Mars 2026 | Web App | Full Django, Docker, Celery, Pandas, Django-tailwind, Pillow | — (vidéo démo Cloudinary) | LucaneTech/contact_filter2026 |

Descriptions complètes : copiées depuis `pages/Projects.tsx` et `FeaturedProjects.tsx` (« Lucane Tech » sur l'accueil, « Lucane » sur la page projets ; l'accueil ajoute « EmailJS » et « React-i18next » à Hermon). Actions : « Live Demo », « Dépôt GitHub », « Voir la démo », « Pas de démo disponible ».

## À propos (`/about`)
« À Propos » ; « Découvrez mon parcours, mes compétences et ma passion pour le développement web ».
- **Mon Histoire** (3 paragraphes), **Ma Mission** (2 paragraphes)
- **Mes Valeurs** : Performance, Sécurité, Collaboration, Ponctualité (avec sous-textes)
- **Mon Approche** : Développement Agile, Architecture Solide, Responsive Design, UX/UI Optimisée (avec sous-textes)
- **Expérience Professionnelle** (4) : Freelance (Jan 2025 - Présent) ; BLAZE & Co, stagiaire Frontend & E-commerce (Juillet 2026 - Septembre 2026) ; WebConsulting, stage Développeur Web (Avril 2025 - Juillet 2025) ; L'Atélier, stagiaire (Avril 2024- Juillet 2024)
- **Formation** (4) : Bachelor EEMCI (2025 - 2026) ; BTS EEMCI (2023 - 2025) ; Formation Autodidacte (Après Bac) ; Baccalauréat Professionnel, Lycée Professionnel L.W.S (2022 - 2023)

Textes exacts (fautes d'origine comprises, ex. « L'Atélier ») : copiés à l'identique.

## Contact (`/contact`)
« Me Contacter » ; « Vous avez un projet en tête ? Une question technique ? N'hésitez pas à me contacter, je serais ravi de discuter avec vous ! »
- Email profrancisco579@gmail.com (« Réponse rapide garantie ») · Téléphone +212 0781343642 (« Appel ou WhatsApp ») · Localisation Meknès, Maroc (« Disponible en remote ») · Disponibilité Lun-Ven, 9h-18h (« GMT+1 »)
- Réseaux : GitHub (« Mes projets open source »), LinkedIn (« Profil professionnel »), Instagram (« Contact personnel »)
- Bloc Disponibilité : Projets freelance : Disponible · Collaboration : Ouvert aux opportunités · Réponse : Sous 24h
- Formulaire (Formspree `xjkrldwl`) : Nom complet *, Email *, Sujet *, Message * ; « Envoyer le message » ; « * Champs obligatoires. Je m'engage à répondre dans les 24h. » ; messages de succès/erreur.

## Footer
Contact (email, « Maroc », téléphone) · Navigation (Accueil, Projets, À propos, Contact) · « Suivez-moi » (GitHub, LinkedIn, Instagram, Email) · « © année Portfolio. Tous droits réservés. »

## Assets
`images/francisco.png` (hero), `images/portrait2.png`, `images/profil.jpeg`, `public/cv.pdf`, `public/my_Cv.pdf`, `public/images/preview.jpg`, favicon, `robots.txt`, `sitemap.xml`, `_redirects`.

## Incohérences constatées (conservées telles quelles)
- Le footer écrit « Maroc », la page contact « Meknès, Maroc ».
- Hermon : stack différente entre accueil et page projets.
- L'accueil nomme le projet « Lucane Tech », la page projets « Lucane ».

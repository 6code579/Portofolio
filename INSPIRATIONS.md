# INSPIRATIONS — Refonte immersive du portfolio

Phase 1 de la mission. Les sites ont été ouverts dans le navigateur intégré (détection des librairies via `window.*`, classes CSS, scripts chargés, texte rendu). Les articles et listings Awwwards viennent de la recherche web.

**Limites de l'observation** : ce que je peux affirmer vient des signaux techniques (librairies détectées, nombre de `<canvas>`, structure du texte). Je n'ai pas rejoué chaque interaction à la main. Quand un site charge un bundle opaque ou un moteur maison (rien de détecté à 6-8 s), je le dis : « non vérifié ».

---

## A. Sites de référence demandés

| Site | Observé | Transposable | Non transposable |
|---|---|---|---|
| [bruno-simon.com](https://bruno-simon.com) | Three.js détecté, 1 canvas, aucun texte HTML : tout est dans le monde 3D. Awwwards Site of the Month (janv. 2026) selon les listings. | L'idée d'un **monde cohérent** et d'un petit élément jouable/ludique. | Monde 3D complet avec physique : des mois de travail, lourd, inaccessible (pas de texte HTML). |
| [lusion.co](https://lusion.co) | Three.js détecté, 3 canvas ; ni GSAP ni Lenis exposés (code maison). Hero : « Bold Ideas, Brought to Life », indication « SCROLL TO EXPLORE ». | **Shader/particules en fond** du hero, texte HTML au-dessus, invitation au scroll. | Recherche matériaux/physique poussée. |
| [cuberto.com](https://cuberto.com) | 0 canvas, 0 WebGL : un site 100 % DOM. Astro + `ClientRouter` (transitions de page natives). Menu, projets, texte éditorial. | **Curseur custom, hovers, transitions de page** sans WebGL : l'essentiel de l'effet « premium » à coût faible. | — |
| [locomotive.ca](https://locomotive.ca) | **Lenis détecté** (classe `lenis` sur `<html>`), 2 canvas, états `is-loading` / `is-first-loading`. Titre découpé en lignes qui se révèlent (« Digital-First / Design / Agency… »). | **Preloader + révélation de texte ligne par ligne + Lenis** : exactement la recette éditoriale visée. | Pagination/CMS d'agence. |
| [immersive-g.com](https://immersive-g.com) | 6 canvas, pas de GSAP/Lenis exposés. Hero « Innovative digital experiences studio » + projets (Louis Vuitton VIA…) présentés en expériences. | **Direction artistique** : un projet = une scène, plein écran. | Budget et assets de marques de luxe. |
| [igloo.inc](https://www.igloo.inc) | Bundle Vite unique, aucun texte HTML ni canvas à 8 s (écran de chargement probable). | Scroll narratif en chapitres. | **Non vérifié** (rendu non obtenu). |
| [activetheory.net](https://activetheory.net) | Moteur maison (`app.js` + `modules.js`), aucun texte HTML ni canvas à 8 s. | Références de fluidité sur mobile. | **Non vérifié** ; stack propriétaire. |
| [resn.co.nz](https://resn.co.nz) | Stack ancien (RequireJS, loader.js), rien rendu à 8 s. L'humour et les interactions inattendues sont décrits par la presse spécialisée. | Un ton, une personnalité dans les micro-interactions. | **Non vérifié** visuellement. |
| [darkroom.engineering](https://darkroom.engineering) | Next.js (Turbopack), page sans canvas ni texte à 6 s. C'est l'équipe de **Lenis**. | Lenis (voir ci-dessous) comme référence de scroll. | **Non vérifié** visuellement. |
| [henryheffernan.com](https://henryheffernan.com) | Bundle maison, aucun canvas détecté à 8 s (portfolio 2022 : bureau 3D rétro). | Idée d'une **métaphore d'objet** (bureau) comme interface. | **Non vérifié** ; scène 3D lourde, mauvais choix pour un portfolio qui doit rester lisible. |
| [brittanychiang.com](https://brittanychiang.com) | Next.js, 0 canvas, 0 GSAP. Lien « SKIP TO CONTENT », texte sobre. | **Lisibilité, accessibilité, hiérarchie** : le contrepoids qui garde le site crédible pour un recruteur. | Absence d'immersion (c'est son parti pris). |

## B. Références récentes (2025-2026) trouvées par recherche

| Site | Technique relevée | Source | Transposable |
|---|---|---|---|
| **By-Kin** (by-kin.com) | Typographie éditoriale, scroll « pondéré », transitions subtiles ; Next.js + GSAP. « Maîtrise de la retenue. » | [hontran.dev](https://www.hontran.dev/blog/best-award-winning-websites-2026) | Oui : c'est le registre visé (sobre mais riche). |
| **Mat Voyce** (matvoyce.tv) | Typographie cinétique : lettres qui s'étirent et se recomposent au scroll ; timelines GSAP qui ne bloquent jamais la lecture. | idem | Oui, pour un titre signature. |
| **Minh Pham** (minhpham.design) | GSAP par-dessus Three.js ; éléments 3D qui encadrent le travail sans l'écraser. Site of the Day, score dev 7,77 (selon l'article). | idem | Oui, la dose de 3D. |
| **Iventions** (iventions.com) | Scène Three.js où chaque projet est « éclairé comme une installation » ; révélations GSAP, « visite guidée plutôt qu'une grille ». | idem | Oui, pour la présentation des projets. |
| **Uncommon Studio** | Grille qui se casse à des moments précis ; transitions de section façon mouvements de caméra. | idem | Oui. |
| **Oryzo** (oryzo.ai) | Un seul objet 3D en hero, caméra pilotée par le scroll. Scène légère. | [utsubo.com](https://www.utsubo.com/blog/best-threejs-websites-2026) | Oui : modèle de « un objet, peu de coût ». |
| **Hubtown** | Hero Three.js + GSAP avec interaction « révélation » à la souris. | idem | Oui (version shader 2D). |
| **Cartier Watches & Wonders** | Pièces 3D séparées, Three.js + GLSL + GSAP + Lenis, audio Web Audio. | idem | Non (budget de marque, audio). |
| **Garcy Studio** (garcy.studio) | 43 canvas, galerie à faire glisser, « Drag to rotate and move the gallery », support clavier (flèches, Home). | Visité | Partiel : le support clavier est un bon réflexe ; 43 canvas serait trop lourd. |
| **Léo Parpeix — Portfolio 2026** | Site of the Day + Developer Award (14 sept. 2026) d'après Awwwards. Stack non confirmée. | [Awwwards](https://www.awwwards.com/websites/website_category_portfolio/) | À étudier à la main avant la phase 3. |

Non consultés : danielebuser.com, dakshgajjar.com, petrillo.studio (navigation refusée / non faite dans cette passe).

## C. Enseignements d'architecture (source : Hon Tran, membre de jury Awwwards)

- **Une seule horloge** : Lenis, GSAP et WebGL ne doivent pas avoir chacun leur `requestAnimationFrame`. On met à jour Lenis depuis le ticker GSAP et on appelle `ScrollTrigger.update` sur le scroll Lenis ; `lagSmoothing(0)`.
- **Animer uniquement `transform` et `opacity`**.
- **WebGL** : monter la scène au besoin (IntersectionObserver), la mettre en pause hors écran, plafonner le pixel ratio à 2.
- **Le jury note** Design 40 %, Usabilité 30 %, Créativité 20 %, Contenu 10 %. Un mobile cassé plafonne le site à « Honorable Mention ». Un loader trop long est une pénalité, pas de la direction artistique.
- **Un concept, une interaction signature.** Les layouts « tendance » (galerie horizontale générique) pénalisent la créativité.

## D. Synthèse : 12 techniques retenues

| # | Technique | Pourquoi |
|---|---|---|
| 1 | **Lenis + GSAP ScrollTrigger sur un ticker unique** | Base de toute fluidité ; recette Locomotive/Darkroom. |
| 2 | **Révélation de texte par ligne avec masque** (SplitType, `expo.out`) | L'effet le plus perceptible pour un coût CPU minime (Locomotive, By-Kin). |
| 3 | **Preloader court (≤ 2 s)** : compteur + révélation du nom | Masque le chargement des polices/images sans pénalité de LCP. |
| 4 | **Curseur custom avec états** (projet, lien, bouton) + **boutons magnétiques** | Cuberto : gros effet « premium », zéro WebGL. |
| 5 | **Une scène WebGL légère au hero** (shader de fond/particules aux couleurs du site) | Lusion/Oryzo : un seul moment signature, chargé en différé. |
| 6 | **Sections épinglées / scroll narratif** (2 ou 3 maximum) | Guide la lecture comme une visite (Iventions, Uncommon Studio). |
| 7 | **Cartes projets avec aperçu qui suit le curseur + distorsion** | Remplace les iframes lourdes actuelles par un effet plus fluide. |
| 8 | **Transitions de page sans coupure** (GSAP/Motion avec React Router) | Cuberto/Astro : la page ne « saute » jamais. |
| 9 | **Menu plein écran animé** | Micro-interaction forte, simple à faire accessible. |
| 10 | **Typographie expressive, très grande, éditoriale** | By-Kin, Mat Voyce : la typo porte l'identité. |
| 11 | **Grain + glow dérivés de la primaire/secondaire** | Donne de la profondeur sur fond noir sans dégradé arc-en-ciel. |
| 12 | **Dégradation gracieuse** : `prefers-reduced-motion`, version mobile allégée, lien « skip to content » | Brittany Chiang + critères du jury : condition de crédibilité. |

## E. À écarter

- Monde 3D entièrement navigable (Bruno Simon) : hors budget, peu lisible, perd le contenu texte.
- Bureau 3D rétro (Henry Heffernan) : métaphore sans lien avec ton identité, lourd.
- Audio : non demandé.
- Galerie horizontale générique : pénalisée pour manque d'originalité ; on garde seulement un défilement horizontal court si le concept le justifie.

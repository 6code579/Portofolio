# Portfolio Francisco Mouanda - Développeur Web

Portfolio moderne et responsive développé avec React, TypeScript, Tailwind CSS et Framer Motion.

## 🚀 Technologies utilisées

- **React 18** - Framework JavaScript
- **TypeScript** - Typage statique
- **Vite** - Build tool rapide
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes modernes
- **React Router** - Navigation SPA

## 📋 Fonctionnalités

- ✅ **Design moderne** avec animations fluides
- ✅ **Responsive** sur tous les appareils
- ✅ **Mode sombre/clair** automatique
- ✅ **Formulaire de contact** fonctionnel (Netlify Forms)
- ✅ **Navigation fluide** avec React Router
- ✅ **Optimisé SEO** et performance
- ✅ **Animations scroll-triggered** avec Framer Motion

## 🛠️ Installation et développement

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone <votre-repo-url>
cd project

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

### Scripts disponibles
```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run preview  # Prévisualiser le build
npm run lint     # Vérifier le code
```

## 🌐 Déploiement sur Netlify

### Méthode 1 : Déploiement automatique
1. Poussez votre code sur GitHub/GitLab
2. Connectez votre repository à Netlify
3. Configurez les paramètres de build :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
4. Déployez !

### Méthode 2 : Déploiement manuel
```bash
# Build du projet
npm run build

# Déployer le dossier dist sur Netlify
```

## 📧 Configuration du formulaire de contact

Le formulaire utilise **Netlify Forms** et fonctionne automatiquement après déploiement.

### Configuration des notifications (optionnel)
1. Dashboard Netlify > Forms > contact > Settings
2. "Form notifications" > "Add notification"
3. Sélectionnez "Email notification"
4. Entrez votre email : `profrancisco579@gmail.com`

## 📁 Structure du projet

```
src/
├── components/          # Composants réutilisables
├── pages/              # Pages de l'application
├── images/             # Images et assets
│   └── projects/       # Images des projets
├── App.tsx             # Composant principal
├── main.tsx            # Point d'entrée
└── index.css           # Styles globaux

public/
├── index.html          # Template HTML
├── success.html        # Page de succès du formulaire
└── favicon.ico         # Icône du site

netlify.toml            # Configuration Netlify
```

## 🎨 Personnalisation

### Couleurs et thème
Modifiez les couleurs dans `tailwind.config.js` :
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        // ... autres nuances
      }
    }
  }
}
```

### Contenu
- **Informations personnelles** : `src/pages/About.tsx`
- **Projets** : `src/pages/Projects.tsx`
- **Compétences** : `src/pages/Skills.tsx`
- **Contact** : `src/pages/Contact.tsx`

## 🔧 Configuration Netlify

Le fichier `netlify.toml` configure :
- ✅ Redirections SPA
- ✅ Headers de sécurité
- ✅ Optimisations de performance
- ✅ Configuration des formulaires

## 📱 Responsive Design

Le portfolio est optimisé pour :
- 📱 Mobile (320px+)
- 📱 Tablette (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🚀 Performance

- ⚡ Build optimisé avec Vite
- 🎯 Lazy loading des images
- 📦 Code splitting automatique
- 🗜️ Compression gzip
- 🎨 Optimisation des assets

## 🔒 Sécurité

- ✅ Headers de sécurité configurés
- ✅ Protection CSRF
- ✅ Validation des formulaires
- ✅ HTTPS obligatoire

## 📊 Analytics et SEO

- ✅ Meta tags optimisés
- ✅ Open Graph tags
- ✅ Schema.org markup
- ✅ Sitemap automatique

## 🤝 Contribution

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

- **Email** : profrancisco579@gmail.com
- **Téléphone** : +212 0781343642
- **LinkedIn** : [Francisco Mouanda](https://www.linkedin.com/in/franciscomouanda579)
- **GitHub** : [6code579](https://github.com/6code579)

---

Développé avec ❤️ par Francisco Mouanda 
# CV Angular

CV interactif converti en Single Page Application Angular/TypeScript.

## Prérequis

- Node.js 20.19+ ou 22.12+
- npm

## Installation

```bash
cd cv-angular
npm install
```

## Développement

```bash
npm start
```

L'application sera disponible sur `http://localhost:4200`

## Build Production

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/cv-angular`

## Structure du projet

```
src/
├── app/
│   ├── components/
│   │   ├── header/         # En-tête avec profil
│   │   ├── nav/            # Navigation
│   │   ├── about/          # Section À propos
│   │   ├── experience/     # Section Expériences
│   │   ├── education/      # Section Formations
│   │   ├── skills/         # Section Compétences
│   │   ├── languages/      # Section Langues
│   │   └── footer/         # Pied de page
│   ├── models/             # Interfaces TypeScript
│   ├── services/           # Services Angular
│   └── shared/             # Styles partagés SCSS
├── styles.scss             # Styles globaux
└── index.html              # Point d'entrée HTML
```

## Technologies utilisées

- Angular 17 (Standalone Components)
- TypeScript
- SCSS
- Particles.js pour l'arrière-plan animé
- Font Awesome pour les icônes

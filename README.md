# 🎭 Moustachio - Jeu d'Alcool

Un jeu d'alcool moderne développé avec Angular 20, Ionic 8 et Capacitor 7.4.

## 🎮 Description du Jeu

Moustachio est un jeu de cartes d'alcool où chaque joueur tire une carte tour après tour. Chaque carte a une règle spéciale que le joueur doit suivre. Le jeu utilise un jeu de 52 cartes standard, et chaque carte ne peut être tirée qu'une seule fois.

### Règles des Cartes

- **As** : Bois 1 gorgée !
- **2** : Choisis qui boit 2 gorgées !
- **3** : Bois 3 gorgées !
- **4** : Tout le monde boit 1 gorgée !
- **5** : Les mecs boivent 1 gorgée !
- **6** : Les filles boivent 1 gorgée !
- **7** : Le ciel ! Tout le monde lève les bras, le dernier boit 2 gorgées !
- **8** : Choisis un partenaire de boisson !
- **9** : Rime ! Tu dis un mot, le suivant doit rimer, sinon il boit !
- **10** : Catégorie ! Tu choisis une catégorie, chacun dit un mot, sinon boit !
- **Valet** : Règle ! Tu inventes une règle pour le reste de la partie !
- **Dame** : Question ! Tu poses une question, le suivant doit répondre par une question, sinon boit !
- **Roi** : Roi ! Bois 4 gorgées et distribue 4 gorgées !

## 🛠️ Stack Technologique

- **Framework Principal** : Angular 20 avec composants standalone
- **Mobile** : Ionic 8 + Capacitor 7.4
- **Langage** : TypeScript 5.8
- **Styling** : SCSS
- **Build** : Angular CLI 20

## 🚀 Installation et Développement

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn
- Android Studio (pour le déploiement Android)

### Installation

```bash
# Cloner le projet
git clone <repository-url>
cd moustachio

# Installer les dépendances
npm install
```

### Développement Web

```bash
# Démarrer le serveur de développement
npm start

# Ou avec le build en mode watch
npm run watch
```

L'application sera accessible sur `http://localhost:4200`

### Déploiement Android

```bash
# Build et synchronisation avec Capacitor
npm run cap:build

# Ouvrir Android Studio
npm run cap:android

# Ou lancer directement sur un appareil/émulateur
npm run cap:run:android

# Build complet pour production
npm run cap:build:android
```

## 📱 Fonctionnalités

- ✅ Jeu de 52 cartes avec règles d'alcool
- ✅ Interface moderne et responsive
- ✅ Animations fluides
- ✅ Compteur de cartes restantes
- ✅ Système de tirage aléatoire sans répétition
- ✅ Design adaptatif pour mobile et desktop
- ✅ Déploiement Android natif

## 🎯 Utilisation

1. **Démarrer le jeu** : Appuyez sur "Tirer une carte" pour commencer
2. **Suivre les règles** : Chaque carte affiche sa règle spéciale
3. **Continuer** : Appuyez à nouveau pour tirer la carte suivante
4. **Nouveau jeu** : Utilisez "Nouveau jeu" pour recommencer

## 🔧 Scripts Disponibles

- `npm start` : Serveur de développement
- `npm run build` : Build de développement
- `npm run build:prod` : Build de production
- `npm run cap:sync` : Synchroniser avec Capacitor
- `npm run cap:build` : Build + synchronisation
- `npm run cap:android` : Ouvrir Android Studio
- `npm run cap:run:android` : Lancer sur Android
- `npm run cap:build:android` : Build complet Android

## 📦 Structure du Projet

```
src/
├── app/
│   ├── game/           # Composant principal du jeu
│   │   ├── game.ts     # Logique du jeu
│   │   ├── game.html   # Template du jeu
│   │   └── game.scss   # Styles du jeu
│   ├── app.config.ts   # Configuration Angular
│   ├── app.routes.ts   # Routes de l'application
│   └── app.ts          # Composant racine
└── main.ts             # Point d'entrée
```

## 🎨 Personnalisation

Pour modifier les règles du jeu, éditez le fichier `src/app/game/game.ts` et modifiez l'objet `cardRules`.

Pour personnaliser l'apparence, modifiez les styles dans `src/app/game/game.scss`.

## 📄 Licence

Ce projet est sous licence MIT.

---

**Amusez-vous bien et buvez responsablement ! 🍻**
# 🚀 Déploiement Vercel - Moustachio

Guide pour déployer l'application Moustachio sur Vercel.

## 📋 Prérequis

- Compte Vercel
- Repository GitHub connecté
- Node.js 18+ installé localement

## ⚙️ Configuration

### 1. Fichiers de configuration créés

- ✅ `vercel.json` - Configuration Vercel
- ✅ `.vercelignore` - Fichiers à ignorer
- ✅ `package.json` - Scripts de build optimisés
- ✅ `angular.json` - Configuration Angular optimisée

### 2. Configuration Vercel

```json
{
  "version": 2,
  "buildCommand": "npm run build:prod",
  "outputDirectory": "dist/moustachio",
  "installCommand": "npm install",
  "framework": "angular",
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

## 🔧 Scripts de build

- `npm run build:prod` - Build de production optimisé
- `npm run build:vercel` - Build spécifique Vercel
- `npm start` - Serveur de développement

## 📦 Optimisations appliquées

### Bundle size
- ✅ Budgets Angular ajustés (600kB initial, 8kB styles)
- ✅ Build optimisé avec tree-shaking
- ✅ Source maps désactivés en production
- ✅ Licenses extraites séparément

### Imports nettoyés
- ✅ Suppression des imports Ionic inutilisés
- ✅ Réduction des warnings de build
- ✅ Optimisation des chunks

## 🚀 Déploiement

### Option 1: Interface Vercel
1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement la configuration
3. Le build se lancera avec `npm run build:prod`
4. L'output sera dans `dist/moustachio`

### Option 2: CLI Vercel
```bash
# Installation CLI
npm i -g vercel

# Déploiement
vercel

# Déploiement en production
vercel --prod
```

## 🌐 URLs générées

- **Application principale** : `https://votre-projet.vercel.app`
- **Règles de confidentialité** : `https://votre-projet.vercel.app/privacy.html`

## 🔍 Vérifications post-déploiement

1. ✅ L'application se charge correctement
2. ✅ Le logo s'affiche
3. ✅ La navigation fonctionne
4. ✅ Les règles de confidentialité sont accessibles
5. ✅ Le jeu fonctionne sur mobile et desktop

## 🐛 Résolution des problèmes

### Erreur "No Output Directory"
- ✅ **Résolu** : Configuration `outputDirectory: "dist/moustachio"`

### Bundle size warnings
- ✅ **Résolu** : Budgets Angular ajustés

### Imports inutilisés
- ✅ **Résolu** : Nettoyage des imports Ionic

### Routing SPA
- ✅ **Résolu** : Route catch-all vers `index.html`

## 📱 Fonctionnalités déployées

- ✅ Jeu de cartes complet
- ✅ Interface responsive
- ✅ Logo et branding
- ✅ Règles de confidentialité
- ✅ Navigation SPA
- ✅ Optimisations de performance

## 🔄 Mises à jour

Pour mettre à jour l'application :
1. Poussez les changements sur GitHub
2. Vercel redéploiera automatiquement
3. Vérifiez le déploiement sur l'URL générée

---

**Votre application Moustachio est maintenant prête pour Vercel ! 🍻**

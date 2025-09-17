# 🚀 Commandes pour Déployer Moustachio sur Android

## 📋 Prérequis
- Node.js et npm installés
- Android Studio installé
- Appareil Android connecté OU émulateur configuré

## 🔧 Commandes de Déploiement

### 1. Aller dans le répertoire du projet
```bash
cd /home/etud/Documents/Perso/Moustachio/moustachio
```

### 2. Construire l'application Angular (Production)
```bash
npm run build:prod
```

### 3. Synchroniser avec Capacitor
```bash
npx cap sync
```

### 4. Ouvrir Android Studio
```bash
export CAPACITOR_ANDROID_STUDIO_PATH=/opt/android-studio/bin/studio.sh
npx cap open android
```

## 🎯 Commandes Rapides (Script Complet)

### Script de déploiement complet
```bash
#!/bin/bash
cd /home/etud/Documents/Perso/Moustachio/moustachio
echo "🔨 Construction de l'application..."
npm run build:prod
echo "🔄 Synchronisation avec Capacitor..."
npx cap sync
echo "📱 Ouverture d'Android Studio..."
export CAPACITOR_ANDROID_STUDIO_PATH=/opt/android-studio/bin/studio.sh
npx cap open android
echo "✅ Déploiement terminé !"
```

## 🛠️ Commandes de Développement

### Build de développement (plus rapide)
```bash
npm run build
```

### Build avec watch (recompilation automatique)
```bash
npm run build -- --watch
```

### Synchronisation rapide (sans rebuild)
```bash
npx cap sync --no-build
```

## 📱 Commandes Android Studio

### Dans Android Studio :
1. **Attendre** la synchronisation Gradle
2. **Connecter** un appareil Android OU **créer un émulateur**
3. **Cliquer sur Run** (▶️) pour installer l'app

### Vérifier la connexion ADB (optionnel)
```bash
# Installer ADB si nécessaire
sudo apt install android-tools-adb

# Vérifier les appareils connectés
adb devices
```

## 🔍 Résolution de Problèmes

### Erreur "INSTALL_FAILED_USER_RESTRICTED"
1. **Sur l'appareil Android :**
   - Paramètres → Sécurité → Activer "Sources inconnues"
   - Paramètres → À propos → Tapez 7 fois sur "Numéro de build"
   - Paramètres → Options développeur → Activer "Débogage USB"

### Erreur "Android Studio not found"
```bash
# Vérifier l'emplacement d'Android Studio
find /usr -name "studio.sh" 2>/dev/null
find /opt -name "studio.sh" 2>/dev/null
find /home -name "studio.sh" 2>/dev/null

# Configurer le chemin si nécessaire
export CAPACITOR_ANDROID_STUDIO_PATH=/chemin/vers/android-studio/bin/studio.sh
```

## 📦 Structure des Fichiers

```
moustachio/
├── dist/moustachio/          # Build Angular
├── android/                  # Projet Android
│   └── app/build/outputs/    # APK générés
├── src/app/game/            # Code source du jeu
└── DEPLOY_ANDROID.md        # Ce fichier
```

## ⚡ Commandes Express

### Déploiement en une ligne
```bash
cd /home/etud/Documents/Perso/Moustachio/moustachio && npm run build:prod && npx cap sync && export CAPACITOR_ANDROID_STUDIO_PATH=/opt/android-studio/bin/studio.sh && npx cap open android
```

### Nettoyage et rebuild complet
```bash
cd /home/etud/Documents/Perso/Moustachio/moustachio
rm -rf dist/
rm -rf android/app/build/
npm run build:prod
npx cap sync
```

## 🎮 Fonctionnalités de l'App

- ✅ Jeu de cartes Moustachio (52 cartes)
- ✅ Règles d'alcool personnalisées
- ✅ Design minimaliste avec couleurs en dur
- ✅ Animations de retournement de cartes
- ✅ Interface mobile optimisée
- ✅ Plugins Capacitor (haptics, keyboard, status-bar)

---
**Créé le :** $(date)
**Projet :** Moustachio - Jeu d'alcool avec cartes
**Framework :** Angular 20 + Ionic 8 + Capacitor 7.4

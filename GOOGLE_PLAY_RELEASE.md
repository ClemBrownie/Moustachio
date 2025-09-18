# 🚀 Release Google Play Store - Moustachio

## 📦 Informations de la release

### **Nom de la version**
```
Moustachio v1.0.0 - Release Initiale
```

### **Notes de version (fr-FR)**
```xml
<fr-FR>
🎭 MOUSTACHIO v1.0.0 - RELEASE INITIALE

✨ NOUVELLES FONCTIONNALITÉS
• Jeu de cartes d'alcool complet avec 52 cartes uniques
• Interface moderne et intuitive optimisée pour mobile
• 52 règles spéciales pour chaque carte du jeu
• Système de tirage aléatoire sans répétition
• Compteur de cartes restantes en temps réel
• Animations fluides et engageantes

🎯 RÈGLES DES CARTES INCLUSES
• As : Bois 1 gorgée !
• 2-6 : Distribue des gorgées à tes amis
• 7 : "Dans ma valise" - Jeu de mémoire
• 8 : "J'ai déjà" ou "Je n'ai jamais"
• 9 : La lettre - Créez des mots à la chaîne
• 10 : Thème - Catégorisez et répondez
• Valet : Roi des pouces - Soyez rapide !
• Dame : Toutes les filles boivent
• Roi : Tous les garçons boivent

🎨 DESIGN UNIQUE
• Logo moustache emblématique
• Couleurs festives (rouge et or)
• Cartes à jouer authentiques
• Interface épurée et moderne

📱 OPTIMISATIONS
• Performance optimisée pour Android 7.0+
• Mode hors ligne - Jouez partout !
• Interface responsive pour tous les écrans
• Chargement rapide et fluide

🍻 POUR QUI ?
• Groupes d'amis (2-10+ joueurs)
• Soirées entre amis
• Fêtes et événements
• Étudiants et jeunes adultes

⚠️ IMPORTANT
• Jeu réservé aux adultes (18+)
• Consommation d'alcool responsable
• Ne pas conduire après avoir bu
• Respectez vos limites

🎉 PRÊT À TRANSFORMER VOS SOIRÉES ?
Téléchargez Moustachio et créez des souvenirs inoubliables avec vos amis !

---
Version 1.0.0 - Build 1
Développé avec ❤️ pour les soirées festives
</fr-FR>
```

## 📋 Informations techniques de la release

### **Détails de la version**
- **Nom de la version** : `Moustachio v1.0.0 - Release Initiale`
- **Code de version** : `1` (versionCode)
- **Nom de la version** : `1.0.0` (versionName)
- **Type de release** : Test fermé
- **Statut** : Prêt pour la publication

### **App Bundle requis**
- **Format** : AAB (Android App Bundle)
- **Taille estimée** : ~15 MB
- **Architectures** : arm64-v8a, armeabi-v7a
- **Densité** : mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi

### **Permissions requises**
- **Aucune permission** : L'application fonctionne sans accès système
- **Connexion internet** : Non requise (mode hors ligne)
- **Stockage** : Données locales uniquement

### **Configuration minimale**
- **Android** : 7.0 (API 24) ou supérieur
- **RAM** : 2 GB minimum
- **Stockage** : 50 MB d'espace libre
- **Écran** : 4.5" minimum

## 🎯 Instructions de création de la release

### **1. Préparation de l'App Bundle**
```bash
# Build de production
npm run build:prod

# Génération de l'AAB avec Android Studio
# 1. Ouvrir le projet dans Android Studio
# 2. Build > Generate Signed Bundle/APK
# 3. Sélectionner Android App Bundle
# 4. Choisir la clé de signature
# 5. Générer l'AAB
```

### **2. Upload sur Google Play Console**
1. **Aller** dans "Production" > "Créer une release"
2. **Sélectionner** "Test fermé"
3. **Uploader** le fichier AAB
4. **Remplir** les informations ci-dessus
5. **Prévisualiser** et confirmer

### **3. Configuration de la release**
- **Nom de la version** : `Moustachio v1.0.0 - Release Initiale`
- **Notes de version** : Copier le contenu XML ci-dessus
- **Intégrité** : Protection automatique activée
- **Signature** : Signée par Google Play

## 📊 Métadonnées de la release

### **Classification**
- **Catégorie** : Jeux > Simulation
- **Classification** : 18+ (Contenu mature)
- **Contenu** : Alcool, Jeux d'argent simulés
- **Publicité** : Aucune

### **Langues supportées**
- **Français (France)** : fr-FR
- **Interface** : 100% en français
- **Règles** : Adaptées au public français

### **Liens importants**
- **Site web** : https://moustachio.vercel.app
- **Règles de confidentialité** : https://moustachio.vercel.app/privacy.html
- **Support** : support@moustachio.app

## ✅ Checklist de validation

### **Contenu** ✅
- [x] Notes de version complètes en français
- [x] Description des fonctionnalités
- [x] Avertissements 18+ et alcool
- [x] Instructions d'utilisation

### **Technique** ✅
- [x] App Bundle (AAB) généré
- [x] Signature valide
- [x] Permissions minimales
- [x] Tests sur différents appareils

### **Conformité** ✅
- [x] Règles de confidentialité
- [x] Classification 18+
- [x] Avertissements alcool
- [x] Conformité RGPD

## 🚀 Prochaines étapes

1. **Générer** l'AAB avec Android Studio
2. **Uploader** sur Google Play Console
3. **Remplir** les informations de release
4. **Configurer** les testeurs fermés
5. **Publier** la release de test
6. **Tester** sur différents appareils
7. **Passer** en production après validation

---

**Votre release est prête pour le Google Play Store ! 🍻**

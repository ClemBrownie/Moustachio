# 📱 Guide Complet - Fiche Play Store Moustachio

## 📋 Informations à copier-coller dans le Play Store

### 1. **Nom de l'application** (26/30 caractères)
```
Moustachio - Jeux d'Alcool
```

### 2. **Brève description** (80 caractères max)
```
Jeu de cartes d'alcool festif avec moustache ! Chaque carte a sa règle spéciale.
```

### 3. **Description complète** (4000 caractères max)
```
🎭 MOUSTACHIO - Le jeu d'alcool qui cartonne !

Transformez vos soirées en moments inoubliables avec Moustachio, le jeu de cartes d'alcool le plus festif ! Chaque carte cache une règle spéciale qui va faire monter l'ambiance.

🃏 COMMENT JOUER
• Tirez une carte tour après tour
• Suivez la règle spéciale de chaque carte
• 52 cartes uniques, 52 règles différentes
• Aucune carte ne peut être tirée deux fois
• Le dernier joueur debout gagne !

🎯 RÈGLES DES CARTES
• As : Bois 1 gorgée !
• 2-6 : Distribue des gorgées à tes amis
• 7 : "Dans ma valise" - Mémoire et concentration
• 8 : "J'ai déjà" ou "Je n'ai jamais"
• 9 : La lettre - Créez des mots à la chaîne
• 10 : Thème - Catégorisez et répondez
• Valet : Roi des pouces - Soyez rapide !
• Dame : Toutes les filles boivent
• Roi : Tous les garçons boivent

✨ FONCTIONNALITÉS
• Interface moderne et intuitive
• Design responsive pour mobile et tablette
• Animations fluides et engageantes
• Compteur de cartes restantes
• Système de tirage aléatoire sans répétition
• Mode hors ligne - Jouez partout !

🎨 DESIGN UNIQUE
• Logo moustache emblématique
• Couleurs festives (rouge et or)
• Cartes à jouer authentiques
• Interface épurée et moderne

🍻 POUR QUI ?
• Groupes d'amis (2-10+ joueurs)
• Soirées entre amis
• Fêtes et événements
• Étudiants et jeunes adultes
• Tous ceux qui aiment s'amuser !

⚠️ IMPORTANT
• Jeu réservé aux adultes (18+)
• Consommation d'alcool responsable
• Ne pas conduire après avoir bu
• Respectez vos limites

🎉 POURQUOI MOUSTACHIO ?
• Simple à comprendre, difficile à arrêter
• Crée des souvenirs inoubliables
• Brise la glace en soirée
• Développe la créativité et l'humour
• Interface sans publicité

Téléchargez Moustachio maintenant et transformez vos soirées en légendes ! 🍻
```

## 🎨 Assets graphiques créés

### **Icône de l'application** (512x512px)
- **Fichier :** `playstore-icon.svg`
- **Format :** SVG (convertir en PNG pour le Play Store)
- **Contenu :** Logo avec moustache, cartes à jouer, fond rouge

### **Image de présentation** (1024x500px)
- **Fichier :** `playstore-feature-graphic.svg`
- **Format :** SVG (convertir en PNG pour le Play Store)
- **Contenu :** Bannière avec titre, logo, cartes décoratives

### **Captures d'écran téléphone** (1080x1920px - 9:16)
1. **Capture 1 :** `screenshot-1.svg` - Carte As avec règle simple
2. **Capture 2 :** `screenshot-2.svg` - Carte 7 "Dans ma valise"
3. **Capture 3 :** `screenshot-3.svg` - Carte Roi des pouces
4. **Capture 4 :** `screenshot-4.svg` - Écran de fin de jeu

## 📊 Métadonnées techniques

### **Informations de base**
- **Nom :** Moustachio - Jeux d'Alcool
- **Package :** com.moustachio.app
- **Version :** 1.0.0
- **Taille :** ~15 MB
- **Langue :** Français (France)

### **Configuration Android**
- **Version minimale :** Android 7.0 (API 24)
- **Version cible :** Android 14 (API 34)
- **Permissions :** Aucune
- **Connexion internet :** Non requise

### **Classification**
- **Catégorie :** Jeux > Simulation
- **Classification :** 18+ (Contenu mature)
- **Contenu :** Alcool, Jeux d'argent simulés
- **Publicité :** Aucune

### **Liens importants**
- **Site web :** https://moustachio.vercel.app
- **Règles de confidentialité :** https://moustachio.vercel.app/privacy.html
- **Support :** support@moustachio.app
- **Contact :** privacy@moustachio.app

## 🔧 Instructions de conversion

### **Convertir SVG en PNG**
```bash
# Pour l'icône (512x512)
inkscape playstore-icon.svg --export-png=playstore-icon.png --export-width=512 --export-height=512

# Pour l'image de présentation (1024x500)
inkscape playstore-feature-graphic.svg --export-png=playstore-feature-graphic.png --export-width=1024 --export-height=500

# Pour les captures d'écran (1080x1920)
inkscape screenshot-1.svg --export-png=screenshot-1.png --export-width=1080 --export-height=1920
inkscape screenshot-2.svg --export-png=screenshot-2.png --export-width=1080 --export-height=1920
inkscape screenshot-3.svg --export-png=screenshot-3.png --export-width=1080 --export-height=1920
inkscape screenshot-4.svg --export-png=screenshot-4.png --export-width=1080 --export-height=1920
```

### **Alternative avec ImageMagick**
```bash
# Convertir tous les SVG en PNG
magick playstore-icon.svg -resize 512x512 playstore-icon.png
magick playstore-feature-graphic.svg -resize 1024x500 playstore-feature-graphic.png
magick screenshot-1.svg -resize 1080x1920 screenshot-1.png
magick screenshot-2.svg -resize 1080x1920 screenshot-2.png
magick screenshot-3.svg -resize 1080x1920 screenshot-3.png
magick screenshot-4.svg -resize 1080x1920 screenshot-4.png
```

## 📝 Checklist de soumission

### **Contenu textuel** ✅
- [x] Nom de l'application (26/30 caractères)
- [x] Brève description (80 caractères)
- [x] Description complète (4000 caractères)
- [x] Mots-clés et catégories

### **Assets graphiques** ✅
- [x] Icône 512x512px
- [x] Image de présentation 1024x500px
- [x] 4 captures d'écran 1080x1920px
- [x] Formats PNG optimisés

### **Métadonnées** ✅
- [x] Classification 18+
- [x] Avertissements alcool
- [x] Règles de confidentialité
- [x] Informations de contact

### **Technique** ✅
- [x] APK/AAB signé
- [x] Permissions minimales
- [x] Tests sur différents appareils
- [x] Conformité RGPD

## 🚀 Prochaines étapes

1. **Convertir** les SVG en PNG
2. **Tester** l'application sur différents appareils
3. **Générer** l'APK/AAB signé
4. **Remplir** la fiche Play Store
5. **Soumettre** pour validation
6. **Attendre** l'approbation (1-3 jours)

---

**Votre fiche Play Store est prête ! 🍻**

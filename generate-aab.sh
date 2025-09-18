#!/bin/bash

# Script pour générer l'AAB (Android App Bundle) pour le Google Play Store
echo "🚀 Génération de l'AAB pour Moustachio v1.0.0"

# Vérifier que nous sommes dans le bon répertoire
if [ ! -f "package.json" ]; then
    echo "❌ Erreur : Exécutez ce script depuis la racine du projet"
    exit 1
fi

# Build de production Angular
echo "📦 Build de production Angular..."
npm run build:prod

if [ $? -ne 0 ]; then
    echo "❌ Erreur lors du build Angular"
    exit 1
fi

# Synchronisation avec Capacitor
echo "🔄 Synchronisation avec Capacitor..."
npx cap sync android

if [ $? -ne 0 ]; then
    echo "❌ Erreur lors de la synchronisation Capacitor"
    exit 1
fi

# Vérification des fichiers
echo "🔍 Vérification des fichiers..."
if [ ! -d "android" ]; then
    echo "❌ Erreur : Dossier android non trouvé"
    exit 1
fi

if [ ! -d "dist/moustachio" ]; then
    echo "❌ Erreur : Dossier dist/moustachio non trouvé"
    exit 1
fi

# Instructions pour générer l'AAB
echo "📱 Instructions pour générer l'AAB :"
echo ""
echo "1. Ouvrez Android Studio"
echo "2. Ouvrez le projet : android/"
echo "3. Build > Generate Signed Bundle/APK"
echo "4. Sélectionnez 'Android App Bundle'"
echo "5. Choisissez votre clé de signature"
echo "6. Configurez :"
echo "   - Key store path: [votre-keystore.jks]"
echo "   - Key alias: [votre-alias]"
echo "   - Passwords: [vos-mots-de-passe]"
echo "7. Build variant: release"
echo "8. Destination: android/app/build/outputs/bundle/release/"
echo "9. Cliquez sur 'Create'"
echo ""
echo "📁 L'AAB sera généré dans :"
echo "   android/app/build/outputs/bundle/release/app-release.aab"
echo ""
echo "✅ Prêt pour l'upload sur Google Play Console !"
echo ""
echo "🔗 Liens utiles :"
echo "   - Google Play Console: https://play.google.com/console"
echo "   - Documentation: https://moustachio.vercel.app"
echo "   - Confidentialité: https://moustachio.vercel.app/privacy.html"

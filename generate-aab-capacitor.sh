#!/bin/bash

# Script alternatif pour générer l'AAB avec Capacitor
echo "🚀 Génération de l'AAB avec Capacitor pour Moustachio v1.0.0"

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

# Génération de l'AAB avec Capacitor
echo "📱 Génération de l'AAB avec Capacitor..."
npx cap build android --prod

if [ $? -ne 0 ]; then
    echo "❌ Erreur lors de la génération de l'AAB"
    echo "💡 Tentative alternative avec Gradle..."
    
    # Configuration Java 17
    export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
    export GRADLE_OPTS="-Dorg.gradle.java.home=/usr/lib/jvm/java-17-openjdk-amd64"
    
    cd android
    ./gradlew clean
    ./gradlew bundleRelease
    
    if [ $? -eq 0 ]; then
        echo "✅ AAB généré avec succès via Gradle !"
        echo "📁 Fichier AAB : android/app/build/outputs/bundle/release/app-release.aab"
    else
        echo "❌ Échec de la génération de l'AAB"
        echo "💡 Solutions alternatives :"
        echo "   1. Installer Java 21 : sudo apt install openjdk-21-jdk"
        echo "   2. Utiliser Android Studio pour générer l'AAB"
        echo "   3. Utiliser un service CI/CD comme GitHub Actions"
        exit 1
    fi
else
    echo "✅ AAB généré avec succès via Capacitor !"
    echo "📁 Vérifiez le dossier android/app/build/outputs/bundle/release/"
fi

echo ""
echo "🎉 Génération terminée !"
echo "📋 Prochaines étapes :"
echo "   1. Localiser le fichier AAB"
echo "   2. Uploader sur Google Play Console"
echo "   3. Remplir les informations de release"
echo "   4. Publier en test fermé"

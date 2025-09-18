#!/bin/bash

# Script final pour générer l'AAB avec la clé existante
echo "🚀 Génération de l'AAB Moustachio avec la clé existante"

# Vérifier que nous sommes dans le bon répertoire
if [ ! -f "package.json" ]; then
    echo "❌ Erreur : Exécutez ce script depuis la racine du projet"
    exit 1
fi

# Vérifier que keystore.properties est configuré
if ! grep -q "YOUR_ACTUAL_PASSWORD" android/keystore.properties; then
    echo "✅ Configuration des mots de passe détectée"
else
    echo "⚠️  ATTENTION : Vous devez d'abord configurer les mots de passe !"
    echo "📝 Éditez android/keystore.properties et remplacez :"
    echo "   storePassword=YOUR_ACTUAL_PASSWORD"
    echo "   keyPassword=YOUR_ACTUAL_PASSWORD"
    echo "   Par vos vrais mots de passe de la clé poprank-release-key.keystore"
    echo ""
    echo "💡 Pour continuer, appuyez sur Entrée après avoir configuré les mots de passe..."
    read -p "Appuyez sur Entrée pour continuer..."
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

# Génération de l'AAB
echo "📱 Génération de l'AAB avec la clé existante..."
cd android

# Nettoyage
echo "🧹 Nettoyage du build précédent..."
./gradlew clean

# Génération de l'AAB
echo "🔨 Génération de l'AAB..."
./gradlew bundleRelease

if [ $? -eq 0 ]; then
    echo "✅ AAB généré avec succès !"
    
    # Recherche de l'AAB
    AAB_FILE=$(find . -name "*.aab" -type f | head -1)
    
    if [ -n "$AAB_FILE" ]; then
        echo "📁 AAB généré : $AAB_FILE"
        
        # Copie vers la racine du projet
        cp "$AAB_FILE" ../moustachio-v1.0.0-release.aab
        echo "✅ AAB copié : moustachio-v1.0.0-release.aab"
        
        # Informations sur le fichier
        echo "📊 Informations sur l'AAB :"
        ls -lh ../moustachio-v1.0.0-release.aab
        
        echo ""
        echo "🎉 SUCCÈS ! Votre AAB est prêt pour le Google Play Store !"
        echo "📱 Prochaines étapes :"
        echo "   1. Uploader moustachio-v1.0.0-release.aab sur Google Play Console"
        echo "   2. Remplir les informations de release (voir GOOGLE_PLAY_RELEASE.md)"
        echo "   3. Publier en test fermé"
        
    else
        echo "❌ AAB non trouvé après génération"
        exit 1
    fi
else
    echo "❌ Erreur lors de la génération de l'AAB"
    echo "💡 Vérifiez que les mots de passe dans keystore.properties sont corrects"
    exit 1
fi

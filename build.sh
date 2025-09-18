#!/bin/bash

# Script de build pour Vercel
echo "🚀 Démarrage du build Moustachio..."

# Installation des dépendances
echo "📦 Installation des dépendances..."
npm install

# Vérification de l'installation d'Angular CLI
echo "🔍 Vérification d'Angular CLI..."
if ! command -v ng &> /dev/null; then
    echo "⚠️  Angular CLI non trouvé, installation via npx..."
    npx @angular/cli@latest --version
fi

# Build de production
echo "🏗️  Build de production..."
npx ng build --configuration production

# Vérification du build
if [ -d "dist/moustachio/browser" ]; then
    echo "✅ Build réussi ! Fichiers générés dans dist/moustachio/browser"
    ls -la dist/moustachio/browser/
    
    # Copier les fichiers pour Vercel
    echo "📁 Copie des fichiers pour Vercel..."
    cp -r dist/moustachio/browser/* dist/moustachio/
    echo "✅ Fichiers copiés dans dist/moustachio/"
else
    echo "❌ Erreur : Le dossier dist/moustachio/browser n'existe pas"
    exit 1
fi

echo "🎉 Build terminé avec succès !"

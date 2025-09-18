# 🚀 Guide de Génération de l'AAB - Moustachio

## ❌ Problème Identifié

Le projet Capacitor nécessite **Java 21** pour la compilation, mais votre système utilise **Java 17**.

```
error: invalid source release: 21
```

## 🔧 Solutions Disponibles

### **Solution 1 : Installation de Java 21 (Recommandée)**

```bash
# Mettre à jour les paquets
sudo apt update

# Installer Java 21
sudo apt install openjdk-21-jdk

# Vérifier l'installation
java -version
javac -version

# Configurer JAVA_HOME
export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH

# Ajouter à ~/.bashrc pour persistance
echo 'export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64' >> ~/.bashrc
echo 'export PATH=$JAVA_HOME/bin:$PATH' >> ~/.bashrc
```

### **Solution 2 : Utilisation d'Android Studio**

1. **Ouvrir Android Studio**
2. **Ouvrir le projet** : `android/`
3. **Build > Generate Signed Bundle/APK**
4. **Sélectionner** : "Android App Bundle"
5. **Configurer la signature** (créer une nouvelle clé si nécessaire)
6. **Générer l'AAB**

### **Solution 3 : Docker (Alternative)**

```bash
# Créer un Dockerfile
cat > Dockerfile << 'EOF'
FROM openjdk:21-jdk-slim

# Installer Node.js
RUN apt-get update && apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

# Installer Android SDK
RUN apt-get install -y wget unzip && \
    wget https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip && \
    unzip commandlinetools-linux-11076708_latest.zip -d /opt/android-sdk && \
    rm commandlinetools-linux-11076708_latest.zip

# Variables d'environnement
ENV ANDROID_HOME=/opt/android-sdk
ENV PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools

# Copier le projet
COPY . /app
WORKDIR /app

# Installer les dépendances et build
RUN npm install && npm run build:prod && npx cap sync android

# Générer l'AAB
RUN cd android && ./gradlew bundleRelease
EOF

# Construire et exécuter
docker build -t moustachio-builder .
docker run -v $(pwd)/android/app/build/outputs:/output moustachio-builder
```

### **Solution 4 : GitHub Actions (CI/CD)**

```yaml
# .github/workflows/build-aab.yml
name: Build AAB

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    
    - name: Setup Java 21
      uses: actions/setup-java@v4
      with:
        java-version: '21'
        distribution: 'temurin'
    
    - name: Install dependencies
      run: npm install
    
    - name: Build Angular
      run: npm run build:prod
    
    - name: Sync Capacitor
      run: npx cap sync android
    
    - name: Generate AAB
      run: |
        cd android
        ./gradlew bundleRelease
    
    - name: Upload AAB
      uses: actions/upload-artifact@v4
      with:
        name: app-release.aab
        path: android/app/build/outputs/bundle/release/app-release.aab
```

## 🎯 Instructions Détaillées

### **Après Installation de Java 21**

```bash
# 1. Vérifier Java 21
java -version

# 2. Nettoyer le projet
cd android
./gradlew clean

# 3. Générer l'AAB
./gradlew bundleRelease

# 4. Vérifier le fichier généré
ls -la app/build/outputs/bundle/release/
```

### **Fichier AAB Généré**

```
android/app/build/outputs/bundle/release/app-release.aab
```

## 📱 Upload sur Google Play Console

1. **Aller** sur [Google Play Console](https://play.google.com/console)
2. **Sélectionner** votre application
3. **Production** > **Créer une release**
4. **Test fermé** > **Créer une release**
5. **Uploader** le fichier AAB
6. **Remplir** les informations :
   - **Nom de la version** : `Moustachio v1.0.0 - Release Initiale`
   - **Notes de version** : Voir `GOOGLE_PLAY_RELEASE.md`

## 🔗 Liens Utiles

- **Google Play Console** : https://play.google.com/console
- **Documentation Capacitor** : https://capacitorjs.com/docs
- **Guide Android** : https://developer.android.com/studio/build/building-cmdline
- **App Moustachio** : https://moustachio.vercel.app

## ⚠️ Notes Importantes

- **Java 21** est requis pour Capacitor 7.4+
- **Android Studio** peut gérer automatiquement les versions Java
- **Docker** est une solution portable et isolée
- **GitHub Actions** permet l'automatisation complète

---

**Votre AAB sera prêt une fois Java 21 installé ! 🍻**

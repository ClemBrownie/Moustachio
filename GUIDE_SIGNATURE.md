# 🔑 Guide de Signature Android - Moustachio

## ❓ **Une signature par application ?**

**NON** - Vous pouvez utiliser la **même clé de signature** pour toutes vos applications Android. C'est même **recommandé** !

### ✅ **Avantages d'une clé unique**
- **Gestion simplifiée** des mises à jour
- **Évite les conflits** de signature
- **Maintenir la continuité** des versions
- **Facilite la maintenance** à long terme

## 📁 **Emplacements typiques des clés**

### **1. Dossier personnel (Recommandé)**
```bash
~/.android/keystore/
├── moustachio-release-key.jks
├── moustachio-release-key.keystore
└── keystore.properties
```

### **2. Dossier du projet**
```bash
android/
├── moustachio-release-key.jks
└── keystore.properties
```

### **3. Dossier sécurisé**
```bash
~/Documents/AndroidKeystores/
├── moustachio-release-key.jks
└── backup-keys/
```

## 🔧 **Configuration automatique**

J'ai configuré votre projet pour utiliser automatiquement la signature :

### **Fichier `keystore.properties`**
```properties
storeFile=../moustachio-release-key.jks
keyAlias=moustachio-key
storePassword=your_keystore_password
keyPassword=your_key_password
```

### **Configuration dans `build.gradle`**
```gradle
signingConfigs {
    release {
        def keystorePropertiesFile = rootProject.file("keystore.properties")
        def keystoreProperties = new Properties()
        if (keystorePropertiesFile.exists()) {
            keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
            storeFile file(keystoreProperties['storeFile'])
            keyAlias keystoreProperties['keyAlias']
            storePassword keystoreProperties['storePassword']
            keyPassword keystoreProperties['keyPassword']
        }
    }
}
```

## 🚀 **Création de la clé de signature**

### **Méthode 1 : Android Studio (Recommandée)**
1. **Build** > **Generate Signed Bundle/APK**
2. **Sélectionner** "Android App Bundle"
3. **Créer une nouvelle clé** :
   - **Key store path** : `android/moustachio-release-key.jks`
   - **Password** : [votre mot de passe]
   - **Key alias** : `moustachio-key`
   - **Key password** : [votre mot de passe]
   - **Validity** : 25 ans (recommandé)
4. **Générer** l'AAB

### **Méthode 2 : Ligne de commande**
```bash
# Créer le dossier
mkdir -p ~/.android/keystore

# Générer la clé
keytool -genkey -v -keystore ~/.android/keystore/moustachio-release-key.jks \
  -keyalg RSA -keysize 2048 -validity 9125 -alias moustachio-key

# Copier dans le projet
cp ~/.android/keystore/moustachio-release-key.jks android/

# Mettre à jour keystore.properties
echo "storeFile=../moustachio-release-key.jks" > android/keystore.properties
echo "keyAlias=moustachio-key" >> android/keystore.properties
echo "storePassword=YOUR_PASSWORD" >> android/keystore.properties
echo "keyPassword=YOUR_PASSWORD" >> android/keystore.properties
```

## 🔒 **Sécurité des clés**

### **⚠️ IMPORTANT - Sauvegardez votre clé !**
- **Perdre la clé = Impossible de mettre à jour l'app**
- **Sauvegardez** dans un endroit sûr
- **Ne partagez jamais** la clé privée
- **Gardez** les mots de passe en sécurité

### **Sauvegarde recommandée**
```bash
# Créer un dossier de sauvegarde
mkdir -p ~/Documents/AndroidKeystores/backup

# Copier la clé
cp android/moustachio-release-key.jks ~/Documents/AndroidKeystores/backup/

# Créer un fichier d'information
cat > ~/Documents/AndroidKeystores/backup/README.txt << EOF
Clé de signature Moustachio
Créée le: $(date)
Alias: moustachio-key
Valide jusqu'à: 2049-12-31
Mot de passe: [GARDÉ EN SÉCURITÉ]
EOF
```

## 📱 **Génération automatique de l'AAB**

Avec la configuration automatique, vous pouvez maintenant générer l'AAB directement :

```bash
# Build automatique avec signature
cd android
./gradlew bundleRelease
```

## 🔄 **Réutilisation de la clé**

### **Pour d'autres applications**
1. **Copiez** `moustachio-release-key.jks` dans le nouveau projet
2. **Adaptez** `keystore.properties` si nécessaire
3. **Utilisez** la même configuration `build.gradle`

### **Avantages**
- ✅ **Même signature** pour toutes vos apps
- ✅ **Gestion centralisée** des clés
- ✅ **Mises à jour** sans problème
- ✅ **Continuité** des versions

## 🎯 **Prochaines étapes**

1. **Créer** la clé de signature (Android Studio)
2. **Configurer** `keystore.properties` avec vos mots de passe
3. **Générer** l'AAB automatiquement
4. **Sauvegarder** la clé en sécurité
5. **Uploader** sur Google Play Console

---

**Votre clé de signature sera réutilisable pour tous vos futurs projets ! 🔑**

# 📚 Guide de Configuration Git pour Moustachio

## ✅ Repository Local Créé

Le repository Git local a été initialisé avec succès :
- **Branche principale** : `main`
- **Commit initial** : `c9c26b4`
- **76 fichiers** ajoutés
- **Fichier .gitignore** configuré pour Angular/Ionic

## 🚀 Connexion à GitHub

### Option 1 : Via GitHub Web Interface (Recommandée)

1. **Aller sur [GitHub.com](https://github.com)**
2. **Cliquer sur "New repository"** (bouton vert)
3. **Nom du repository** : `moustachio` ou `moustachio-game`
4. **Description** : `Jeu d'alcool avec cartes - Angular 20 + Ionic 8`
5. **Visibilité** : Public ou Private (selon votre choix)
6. **NE PAS** cocher "Initialize with README" (déjà fait)
7. **Cliquer "Create repository"**

### Option 2 : Via GitHub CLI (si installé)

```bash
# Installer GitHub CLI (optionnel)
sudo apt install gh

# Se connecter à GitHub
gh auth login

# Créer le repository
gh repo create moustachio --public --description "Jeu d'alcool avec cartes - Angular 20 + Ionic 8"

# Ajouter le remote
git remote add origin https://github.com/VOTRE_USERNAME/moustachio.git
```

## 🔗 Commandes pour Connecter le Repository

### Après avoir créé le repository sur GitHub :

```bash
# Aller dans le dossier du projet
cd /home/etud/Documents/Perso/Moustachio/moustachio

# Ajouter le remote origin (remplacer VOTRE_USERNAME)
git remote add origin https://github.com/VOTRE_USERNAME/moustachio.git

# Vérifier la configuration
git remote -v

# Pousser le code vers GitHub
git push -u origin main
```

## 📝 Commandes Git Utiles

### Configuration Git (si pas encore fait)
```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre@email.com"
```

### Workflow de développement
```bash
# Voir l'état des fichiers
git status

# Ajouter des fichiers
git add .

# Faire un commit
git commit -m "Description des modifications"

# Pousser vers GitHub
git push

# Récupérer les dernières modifications
git pull
```

### Gestion des branches
```bash
# Créer une nouvelle branche
git checkout -b feature/nouvelle-fonctionnalite

# Changer de branche
git checkout main

# Fusionner une branche
git merge feature/nouvelle-fonctionnalite

# Supprimer une branche
git branch -d feature/nouvelle-fonctionnalite
```

## 📁 Structure du Repository

```
moustachio/
├── .git/                    # Dossier Git (caché)
├── .gitignore              # Fichiers à ignorer
├── android/                # Projet Android (Capacitor)
├── src/                    # Code source Angular
│   └── app/
│       ├── game/           # Composant principal du jeu
│       └── ...
├── dist/                   # Build Angular (ignoré)
├── node_modules/           # Dépendances (ignoré)
├── package.json            # Configuration npm
├── README.md              # Documentation principale
├── DEPLOY_ANDROID.md      # Guide de déploiement
└── GIT_SETUP.md           # Ce fichier
```

## 🎯 Prochaines Étapes

1. **Créer le repository sur GitHub**
2. **Connecter le repository local**
3. **Pousser le code initial**
4. **Partager le lien GitHub**

## 🔧 Résolution de Problèmes

### Erreur "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/VOTRE_USERNAME/moustachio.git
```

### Erreur d'authentification
```bash
# Utiliser un token d'accès personnel
git remote set-url origin https://TOKEN@github.com/VOTRE_USERNAME/moustachio.git
```

### Annuler le dernier commit
```bash
git reset --soft HEAD~1
```

## 📋 Checklist de Déploiement

- [x] Repository Git initialisé
- [x] Fichier .gitignore configuré
- [x] Commit initial créé
- [ ] Repository GitHub créé
- [ ] Remote origin ajouté
- [ ] Code poussé vers GitHub
- [ ] Documentation mise à jour

---
**Projet :** Moustachio - Jeu d'alcool avec cartes  
**Technologies :** Angular 20 + Ionic 8 + Capacitor 7.4  
**Créé le :** $(date)

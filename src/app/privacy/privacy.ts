import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { arrowBackOutline, homeOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy',
  imports: [CommonModule, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardTitle],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Règles de Confidentialité</ion-title>
        <ion-buttons slot="start">
          <ion-button (click)="goBack()">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button (click)="goHome()">
            <ion-icon name="home-outline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="privacy-content">
      <div class="privacy-container">
        <!-- Header avec logo -->
        <div class="privacy-header">
          <img src="logo-moustachio-simple.svg" alt="Moustachio" class="privacy-logo">
          <h1>Règles de Confidentialité</h1>
          <p class="last-updated">Dernière mise à jour : {{ lastUpdated }}</p>
        </div>

        <!-- Introduction -->
        <ion-card class="privacy-card">
          <ion-card-header>
            <ion-card-title>Introduction</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>
              Bienvenue dans Moustachio ! Nous nous engageons à protéger votre vie privée et vos données personnelles. 
              Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations 
              lorsque vous utilisez notre application de jeu d'alcool.
            </p>
            <p>
              En utilisant Moustachio, vous acceptez les pratiques décrites dans cette politique de confidentialité.
            </p>
          </ion-card-content>
        </ion-card>

        <!-- Collecte de données -->
        <ion-card class="privacy-card">
          <ion-card-header>
            <ion-card-title>Collecte de Données</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <h3>Données que nous collectons :</h3>
            <ul>
              <li><strong>Aucune donnée personnelle</strong> n'est collectée par notre application</li>
              <li><strong>Aucune information d'identification</strong> n'est requise pour jouer</li>
              <li><strong>Données de jeu locales</strong> : progression du jeu stockée uniquement sur votre appareil</li>
              <li><strong>Données techniques anonymes</strong> : informations sur l'utilisation de l'application (si vous acceptez)</li>
            </ul>
            
            <h3>Données que nous ne collectons PAS :</h3>
            <ul>
              <li>Nom, adresse e-mail ou informations de contact</li>
              <li>Informations de paiement</li>
              <li>Données de localisation</li>
              <li>Photos ou vidéos</li>
              <li>Données de tiers</li>
            </ul>
          </ion-card-content>
        </ion-card>

        <!-- Utilisation des données -->
        <ion-card class="privacy-card">
          <ion-card-header>
            <ion-card-title>Utilisation des Données</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>Les données collectées sont utilisées uniquement pour :</p>
            <ul>
              <li>Fournir et améliorer l'expérience de jeu</li>
              <li>Maintenir les fonctionnalités de l'application</li>
              <li>Résoudre les problèmes techniques</li>
              <li>Analyser l'utilisation de l'application (données anonymisées uniquement)</li>
            </ul>
          </ion-card-content>
        </ion-card>

        <!-- Stockage des données -->
        <ion-card class="privacy-card">
          <ion-card-header>
            <ion-card-title>Stockage et Sécurité</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <h3>Stockage local :</h3>
            <p>
              Toutes les données de jeu sont stockées localement sur votre appareil. 
              Aucune donnée n'est transmise à nos serveurs.
            </p>
            
            <h3>Sécurité :</h3>
            <ul>
              <li>Chiffrement des données locales</li>
              <li>Protection contre l'accès non autorisé</li>
              <li>Mise à jour régulière des mesures de sécurité</li>
            </ul>
          </ion-card-content>
        </ion-card>

        <!-- Partage de données -->
        <ion-card class="privacy-card">
          <ion-card-header>
            <ion-card-title>Partage de Données</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p><strong>Nous ne vendons, ne louons, ni ne partageons vos données personnelles avec des tiers.</strong></p>
            
            <h3>Exceptions légales :</h3>
            <ul>
              <li>Obligation légale de divulgation</li>
              <li>Protection de nos droits légaux</li>
              <li>Prévention de la fraude ou d'activités illégales</li>
            </ul>
          </ion-card-content>
        </ion-card>

        <!-- Droits des utilisateurs -->
        <ion-card class="privacy-card">
          <ion-card-header>
            <ion-card-title>Vos Droits</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>Conformément au RGPD et aux lois sur la protection des données, vous avez le droit de :</p>
            <ul>
              <li><strong>Accès</strong> : Demander quelles données nous avons sur vous</li>
              <li><strong>Rectification</strong> : Corriger des données inexactes</li>
              <li><strong>Suppression</strong> : Demander la suppression de vos données</li>
              <li><strong>Portabilité</strong> : Recevoir vos données dans un format lisible</li>
              <li><strong>Opposition</strong> : Vous opposer au traitement de vos données</li>
            </ul>
            
            <p class="contact-info">
              Pour exercer ces droits, contactez-nous à : 
              <a href="mailto:privacy@moustachio.app">privacy@moustachio.app</a>
            </p>
          </ion-card-content>
        </ion-card>

        <!-- Cookies et technologies similaires -->
        <ion-card class="privacy-card">
          <ion-card-header>
            <ion-card-title>Cookies et Technologies Similaires</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>Moustachio n'utilise pas de cookies ou de technologies de suivi.</p>
            <p>L'application fonctionne entièrement hors ligne après l'installation.</p>
          </ion-card-content>
        </ion-card>

        <!-- Modifications -->
        <ion-card class="privacy-card">
          <ion-card-header>
            <ion-card-title>Modifications de cette Politique</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>
              Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. 
              Toute modification sera publiée dans cette section avec une nouvelle date de mise à jour.
            </p>
            <p>
              Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques.
            </p>
          </ion-card-content>
        </ion-card>

        <!-- Contact -->
        <ion-card class="privacy-card contact-card">
          <ion-card-header>
            <ion-card-title>Contact</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>Si vous avez des questions concernant cette politique de confidentialité, contactez-nous :</p>
            <ul>
              <li><strong>E-mail :</strong> <a href="mailto:privacy@moustachio.app">privacy@moustachio.app</a></li>
              <li><strong>Support :</strong> <a href="mailto:support@moustachio.app">support@moustachio.app</a></li>
            </ul>
          </ion-card-content>
        </ion-card>

        <!-- Boutons d'action -->
        <div class="privacy-actions">
          <ion-button (click)="goHome()" expand="block" class="home-button">
            <ion-icon name="home-outline" slot="start"></ion-icon>
            Retour au Jeu
          </ion-button>
        </div>
      </div>
    </ion-content>
  `,
  styleUrl: './privacy.scss',
  standalone: true
})
export class PrivacyComponent {
  lastUpdated = '15 Janvier 2025';

  constructor(private router: Router) {
    addIcons({ arrowBackOutline, homeOutline });
  }

  goBack(): void {
    window.history.back();
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}

import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon } from '@ionic/angular/standalone';
import { playOutline, refreshOutline, trophyOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

export interface Card {
  id: number;
  suit: 'hearts' | 'diamonds' | 'clubs' | 'spades';
  value: string;
  rule: string;
}

@Component({
  selector: 'app-game',
  imports: [CommonModule, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon],
  templateUrl: './game.html',
  styleUrl: './game.scss',
  standalone: true,
  animations: [
    trigger('cardFlip', [
      state('in', style({
        transform: 'rotateY(0deg) scale(1)',
        opacity: 1
      })),
      transition('void => in', [
        style({
          transform: 'rotateY(90deg) scale(0.8)',
          opacity: 0
        }),
        animate('0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)')
      ])
    ])
  ]
})
export class Game {
  private readonly suits = ['hearts', 'diamonds', 'clubs', 'spades'] as const;
  private readonly values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  
  private readonly cardRules: Record<string, string> = {
    'A': 'As : Tout le monde boit 1 gorgée !',
    '2': '2 : Le joueur donne 2 gorgées à qui il veut.',
    '3': '3 : Le joueur donne 3 gorgées à qui il veut.',
    '4': '4 : Le joueur donne 4 gorgées à qui il veut.',
    '5': '5 : Le joueur donne 5 gorgées à qui il veut.',
    '6': '6 : Le joueur donne 6 gorgées à qui il veut.',
    '7': '7 : "Dans ma valise" ! Le joueur commence la phrase "Dans ma valise j\'ai..." et ajoute un mot. Chaque joueur doit répéter la liste et ajouter un mot. Celui qui se trompe boit une gorgée.',
    '8': '8 : "J\'ai déjà" ou "Je n\'ai jamais". Le joueur annonce une phrase commençant par "J\'ai déjà..." ou "Je n\'ai jamais...". Ceux qui sont concernés boivent une gorgée.',
    '9': '9 : La lettre ! Le joueur dit une lettre, le suivant aussi, pour former un mot. Celui qui bloque ou ne suit pas la logique boit une gorgée.',
    '10': '10 : Thème ! Le joueur choisit un thème (ex : marques de voiture). Chacun doit donner une réponse dans ce thème, celui qui sèche boit une gorgée.',
    'J': 'Valet : Roi des pouces ! Le joueur devient le roi des pouces. Quand il pose son pouce sur son menton, le dernier à l\'imiter boit une gorgée.',
    'Q': 'Dame : Toutes les filles boivent une gorgée !',
    'K': 'Roi : Roi ! Tout les garçons boivent une gorgée !'
  };

  private deck = signal<Card[]>([]);
  private drawnCards = signal<Card[]>([]);
  private currentCard = signal<Card | null>(null);
  private gameStarted = signal(false);

  constructor() {
    addIcons({ playOutline, refreshOutline, trophyOutline });
    this.initializeDeck();
  }

  private initializeDeck(): void {
    const newDeck: Card[] = [];
    let id = 1;
    
    for (const suit of this.suits) {
      for (const value of this.values) {
        newDeck.push({
          id: id++,
          suit,
          value,
          rule: this.cardRules[value]
        });
      }
    }
    
    this.deck.set(this.shuffleDeck(newDeck));
    this.drawnCards.set([]);
    this.currentCard.set(null);
    this.gameStarted.set(false);
  }

  private shuffleDeck(deck: Card[]): Card[] {
    const shuffled = [...deck];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  drawCard(): void {
    const currentDeck = this.deck();
    if (currentDeck.length === 0) {
      return;
    }

    const drawnCard = currentDeck[0];
    const remainingDeck = currentDeck.slice(1);
    
    this.deck.set(remainingDeck);
    this.drawnCards.update(cards => [...cards, drawnCard]);
    this.currentCard.set(drawnCard);
    this.gameStarted.set(true);
  }

  resetGame(): void {
    this.initializeDeck();
  }

  get remainingCards(): number {
    return this.deck().length;
  }

  get hasCardsLeft(): boolean {
    return this.deck().length > 0;
  }

  get currentCardValue(): Card | null {
    return this.currentCard();
  }

  get isGameStarted(): boolean {
    return this.gameStarted();
  }

  getSuitSymbol(suit: string): string {
    const symbols: Record<string, string> = {
      'hearts': '♥️',
      'diamonds': '♦️',
      'clubs': '♣️',
      'spades': '♠️'
    };
    return symbols[suit] || '';
  }
}

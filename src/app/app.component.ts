import { Component, OnInit } from '@angular/core';
import CardInterface from './interfaces/card.interface';
import { CardService } from './services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Anota aí - Front-end';
  cards: CardInterface[] = [];
  showCards: CardInterface[] = [];

  constructor(public cardService: CardService) {}

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this.cardService.getCards().subscribe({
      next: (cards) => {
        this.cards = this.showCards = cards;
      },
    });
  }

  fillSearch(textSearch: string) {
    this.showCards = this.cards.filter((card) => {
      return (
        card.title.includes(textSearch) || card.description.includes(textSearch)
      );
    });
  }

  removeCard(cardId: number) {
    this.cards = this.cards.filter((card) => card.id != cardId);
    this.showCards = this.showCards.filter((card) => card.id != cardId);
  }
}

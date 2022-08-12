import { Component, OnInit } from '@angular/core';
import CardInterface from './interfaces/card.interface';
import { CardService } from './services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'anota-ai-front-end';
  cards: CardInterface[] = [];

  constructor(public cardService: CardService) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this.cardService.getCards().subscribe({
      next: (cards) => {
        console.log(cards);

        this.cards = cards;
      }
    })
  }

}

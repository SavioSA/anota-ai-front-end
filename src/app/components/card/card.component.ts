import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import CardInterface from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Output() cardDeletion = new EventEmitter<number>();
  @Input() card!: CardInterface;
  constructor() { }

  ngOnInit(): void {
  }

  emitCardDeletion(cardNumber: number) {
    this.cardDeletion.emit(cardNumber);
  }

}

import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import CardInterface from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('delete', [
      state(
        'deleted',
        style({
          opacity: '1',
        })
      ),
      state(
        'non-deleted',
        style({
          opacity: '0',
        })
      ),
      transition('non-deleted => deleted', [animate('1s')]),
    ]),
  ],
})
export class CardComponent implements OnInit {
  @Output() cardDeletion = new EventEmitter<number>();
  @Input() card!: CardInterface;
  deleted = false;
  constructor() {}

  ngOnInit(): void {}

  emitCardDeletion(cardNumber: number) {
    this.deleted = true;
    setTimeout(() => {
      this.cardDeletion.emit(cardNumber);
    }, 300);
  }
}

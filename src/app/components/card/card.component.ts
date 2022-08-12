import { Component, Input, OnInit } from '@angular/core';
import CardInterface from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card!: CardInterface;
  constructor() { }

  ngOnInit(): void {
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import CardInterface from '../interfaces/card.interface';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  getCards(): Observable<CardInterface[]> {
    return this.http.get<CardInterface[]>("http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/cardlist.json")
      .pipe(
        map(cards => {
          cards.map(card => {
            card.type
            switch (card.type) {
            case "1":
                card.type = "Paisagem";
              break;
            case "2":
                card.type = "Flor";
              break;
            case "3":
                card.type = "Pizza";
              break;
            }
          })
          return cards
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

}

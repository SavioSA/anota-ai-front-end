import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CardService } from './card.service';

describe('CardService', () => {
  let service: CardService;
  const card = {
    id: 1,
    title: 'teste',
    description: 'teste',
    img: 'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaw.com/teste/Test-front-anota-ai.webm',
  };
  let controller: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CardService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should get cars', () => {
    expect(service).toBeTruthy();
  });

  it('should return error to get cards type Paisagem', () => {
    service.getCards().subscribe({
      next: (val) => {
        expect(val).toEqual([
          { type: 'Paisagem', ...card },
          { type: 'Flor', ...card },
          { type: 'Pizza', ...card },
        ]);
      },
      error: () => {},
    });

    const req = controller.expectOne(
      'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/cardlist.json'
    );
    req.flush(
      [
        {
          type: '1',
          ...card,
        },
        {
          type: '2',
          ...card,
        },
        {
          type: '3',
          ...card,
        },
      ],
      { status: 200, statusText: 'Ok' }
    );
  });

  it('should return error to get cards with error', () => {
    service.getCards().subscribe({
      next: () => {},
      error: (error) => {
        expect(error).toBeTruthy();
      },
    });

    const req = controller.expectOne(
      'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/cardlist.json'
    );
    req.flush('error', { status: 500, statusText: 'Broken Service' });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

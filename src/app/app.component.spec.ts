import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { CardService } from './services/card.service';

describe('AppComponent', () => {
  const mockService = jasmine.createSpyObj('CardService', ['getCards']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: CardService,
          useValue: mockService,
        },
      ],
    }).compileComponents();
  });

  it('should call get cards', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const spy = spyOn(app, 'getCards');
    app.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should get cards', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    mockService.getCards.and.returnValue(
      of([
        {
          id: 1,
          title: 'test',
          description: 'test',
          type: '1',
          img: 'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaw.com/test/Test-front-anota-ai.webm',
        },
      ])
    );
    app.ngOnInit();
    expect(app.cards).toEqual([
      {
        id: 1,
        title: 'test',
        description: 'test',
        type: '1',
        img: 'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaw.com/test/Test-front-anota-ai.webm',
      },
    ]);
  });

  it('should fill search', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.cards = [
      {
        id: 1,
        title: 'test',
        description: 'test',
        type: '1',
        img: 'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaw.com/test/Test-front-anota-ai.webm',
      },
      {
        id: 2,
        title: 'test2',
        description: 'test2',
        type: '1',
        img: 'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaw.com/test/Test-front-anota-ai.webm',
      },
    ];
    app.fillSearch('test2');
    expect(app.showCards).toEqual([
      {
        id: 2,
        title: 'test2',
        description: 'test2',
        type: '1',
        img: 'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaw.com/test/Test-front-anota-ai.webm',
      },
    ]);
  });

  it('should remove card', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.cards = app.showCards = [
      {
        id: 1,
        title: 'test',
        description: 'test',
        type: '1',
        img: 'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaw.com/test/Test-front-anota-ai.webm',
      },
      {
        id: 2,
        title: 'test2',
        description: 'test2',
        type: '1',
        img: 'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaw.com/test/Test-front-anota-ai.webm',
      },
    ];

    app.removeCard(1);

    expect(app.cards).toEqual([
      {
        id: 2,
        title: 'test2',
        description: 'test2',
        type: '1',
        img: 'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaw.com/test/Test-front-anota-ai.webm',
      },
    ]);
    expect(app.showCards).toEqual([
      {
        id: 2,
        title: 'test2',
        description: 'test2',
        type: '1',
        img: 'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaw.com/test/Test-front-anota-ai.webm',
      },
    ]);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

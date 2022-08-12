import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card.component';


describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports:[BrowserAnimationsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.card = {
      id: 1,
      title: 'teste',
      description: 'teste',
      type: '1',
      img: 'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaw.com/teste/Test-front-anota-ai.webm',
    }
    fixture.detectChanges();
  });

  it('should emit card to delete', fakeAsync(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    const spy = spyOn(component.cardDeletion, 'emit');
    component.emitCardDeletion(1);
    expect(component.deleted).toEqual(true);
    tick(400)
    expect(spy).toHaveBeenCalledWith(1);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

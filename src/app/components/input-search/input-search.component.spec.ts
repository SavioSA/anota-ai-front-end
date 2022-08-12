import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputSearchComponent } from './input-search.component';


describe('InputSearchComponent', () => {
  let component: InputSearchComponent;
  let fixture: ComponentFixture<InputSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputSearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit text search', () => {
    fixture = TestBed.createComponent(InputSearchComponent);
    component = fixture.componentInstance;
    component.emitSearch('text')
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

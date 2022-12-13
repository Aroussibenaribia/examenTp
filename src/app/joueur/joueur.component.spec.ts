import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoueursComponent } from './joueur.component';

describe('ProduitsComponent', () => {
  let component: JoueursComponent;
  let fixture: ComponentFixture<JoueursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoueursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoueursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

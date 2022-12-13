import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParEquipeComponent } from './recherche-par-equipe.component';

describe('RechercheParEquipeComponent', () => {
  let component: RechercheParEquipeComponent;
  let fixture: ComponentFixture<RechercheParEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheParEquipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheParEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

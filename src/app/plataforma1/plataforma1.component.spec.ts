import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plataforma1Component } from './plataforma1.component';

describe('PlataformaComponent', () => {
  let component: Plataforma1Component;
  let fixture: ComponentFixture<Plataforma1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Plataforma1Component]
    });
    fixture = TestBed.createComponent(Plataforma1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

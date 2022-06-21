import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contenedor1Component } from './contenedor1.component';

describe('Contenedor1Component', () => {
  let component: Contenedor1Component;
  let fixture: ComponentFixture<Contenedor1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Contenedor1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contenedor1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

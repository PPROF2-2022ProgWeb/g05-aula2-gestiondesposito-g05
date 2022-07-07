import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuerpo1Component } from './cuerpo1.component';

describe('Cuerpo1Component', () => {
  let component: Cuerpo1Component;
  let fixture: ComponentFixture<Cuerpo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cuerpo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cuerpo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

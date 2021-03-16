import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PangramasolucionComponent } from './pangramasolucion.component';

describe('PangramasolucionComponent', () => {
  let component: PangramasolucionComponent;
  let fixture: ComponentFixture<PangramasolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PangramasolucionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PangramasolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

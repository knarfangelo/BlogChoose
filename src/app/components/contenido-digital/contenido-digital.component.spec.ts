import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoDigitalComponent } from './contenido-digital.component';

describe('ContenidoDigitalComponent', () => {
  let component: ContenidoDigitalComponent;
  let fixture: ComponentFixture<ContenidoDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenidoDigitalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

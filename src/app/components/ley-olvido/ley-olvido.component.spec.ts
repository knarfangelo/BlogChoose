import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyOlvidoComponent } from './ley-olvido.component';

describe('LeyOlvidoComponent', () => {
  let component: LeyOlvidoComponent;
  let fixture: ComponentFixture<LeyOlvidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeyOlvidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeyOlvidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

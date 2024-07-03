import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebProgramacionComponent } from './web-programacion.component';


describe('WebProgramacionComponent', () => {
  let component: WebProgramacionComponent;
  let fixture: ComponentFixture<WebProgramacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebProgramacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebProgramacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

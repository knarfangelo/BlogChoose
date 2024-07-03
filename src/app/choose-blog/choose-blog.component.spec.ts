import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseBlogComponent } from './choose-blog.component';

describe('ChooseBlogComponent', () => {
  let component: ChooseBlogComponent;
  let fixture: ComponentFixture<ChooseBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

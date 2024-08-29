import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitFooterComponent } from './fit-footer.component';

describe('FitFooterComponent', () => {
  let component: FitFooterComponent;
  let fixture: ComponentFixture<FitFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FitFooterComponent]
    });
    fixture = TestBed.createComponent(FitFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

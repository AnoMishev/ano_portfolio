import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitMainComponent } from './fit-main.component';

describe('FitMainComponent', () => {
  let component: FitMainComponent;
  let fixture: ComponentFixture<FitMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FitMainComponent]
    });
    fixture = TestBed.createComponent(FitMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

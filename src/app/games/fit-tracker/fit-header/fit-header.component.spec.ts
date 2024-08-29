import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitHeaderComponent } from './fit-header.component';

describe('FitHeaderComponent', () => {
  let component: FitHeaderComponent;
  let fixture: ComponentFixture<FitHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FitHeaderComponent]
    });
    fixture = TestBed.createComponent(FitHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

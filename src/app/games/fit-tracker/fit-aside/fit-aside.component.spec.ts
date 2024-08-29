import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitAsideComponent } from './fit-aside.component';

describe('FitAsideComponent', () => {
  let component: FitAsideComponent;
  let fixture: ComponentFixture<FitAsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FitAsideComponent]
    });
    fixture = TestBed.createComponent(FitAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

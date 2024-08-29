import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCtrComponent } from './modal-ctr.component';

describe('ModalCtrComponent', () => {
  let component: ModalCtrComponent;
  let fixture: ComponentFixture<ModalCtrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCtrComponent]
    });
    fixture = TestBed.createComponent(ModalCtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

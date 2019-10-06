import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuenMatKhauComponent } from './quen-mat-khau.component';

describe('QuenMatKhauComponent', () => {
  let component: QuenMatKhauComponent;
  let fixture: ComponentFixture<QuenMatKhauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuenMatKhauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuenMatKhauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

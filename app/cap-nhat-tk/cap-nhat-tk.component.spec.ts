import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapNhatTKComponent } from './cap-nhat-tk.component';

describe('CapNhatTKComponent', () => {
  let component: CapNhatTKComponent;
  let fixture: ComponentFixture<CapNhatTKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapNhatTKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapNhatTKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThiTracNghiemComponent } from './thi-trac-nghiem.component';

describe('ThiTracNghiemComponent', () => {
  let component: ThiTracNghiemComponent;
  let fixture: ComponentFixture<ThiTracNghiemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThiTracNghiemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThiTracNghiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsisomosComponent } from './asisomos.component';

describe('AsisomosComponent', () => {
  let component: AsisomosComponent;
  let fixture: ComponentFixture<AsisomosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsisomosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsisomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

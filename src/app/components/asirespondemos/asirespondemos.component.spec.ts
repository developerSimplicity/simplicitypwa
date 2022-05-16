import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsirespondemosComponent } from './asirespondemos.component';

describe('AsirespondemosComponent', () => {
  let component: AsirespondemosComponent;
  let fixture: ComponentFixture<AsirespondemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsirespondemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsirespondemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AquiestamosComponent } from './aquiestamos.component';

describe('AquiestamosComponent', () => {
  let component: AquiestamosComponent;
  let fixture: ComponentFixture<AquiestamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AquiestamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AquiestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

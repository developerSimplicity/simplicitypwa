import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuequipoComponent } from './tuequipo.component';

describe('TuequipoComponent', () => {
  let component: TuequipoComponent;
  let fixture: ComponentFixture<TuequipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuequipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

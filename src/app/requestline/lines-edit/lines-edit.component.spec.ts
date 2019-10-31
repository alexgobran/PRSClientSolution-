import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineEditComponent } from './lines-edit.component';

describe('LinesEditComponent', () => {
  let component: LineEditComponent;
  let fixture: ComponentFixture<LineEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

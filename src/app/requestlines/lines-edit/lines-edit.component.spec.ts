import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinesEditComponent } from './lines-edit.component';

describe('LinesEditComponent', () => {
  let component: LinesEditComponent;
  let fixture: ComponentFixture<LinesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

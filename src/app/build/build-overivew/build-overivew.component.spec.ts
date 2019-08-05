import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildOverivewComponent } from './build-overivew.component';

describe('BuildOverivewComponent', () => {
  let component: BuildOverivewComponent;
  let fixture: ComponentFixture<BuildOverivewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildOverivewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildOverivewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

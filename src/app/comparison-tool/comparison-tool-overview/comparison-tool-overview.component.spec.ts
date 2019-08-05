import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonToolOverviewComponent } from './comparison-tool-overview.component';

describe('ComparisonToolOverviewComponent', () => {
  let component: ComparisonToolOverviewComponent;
  let fixture: ComponentFixture<ComparisonToolOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparisonToolOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonToolOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

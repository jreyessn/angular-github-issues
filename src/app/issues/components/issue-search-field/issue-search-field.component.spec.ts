import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueSearchFieldComponent } from './issue-search-field.component';

describe('IssueSearchFieldComponent', () => {
  let component: IssueSearchFieldComponent;
  let fixture: ComponentFixture<IssueSearchFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueSearchFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueSearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

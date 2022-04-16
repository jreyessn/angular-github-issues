import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IssueSearchFieldComponent } from '../../../../app/issues/components/issue-search-field/issue-search-field.component';

describe('IssueSearchFieldComponent', () => {
  let component: IssueSearchFieldComponent;
  let fixture: ComponentFixture<IssueSearchFieldComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueSearchFieldComponent ],
      imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueSearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('Debe hacer el match con el snapshot', () => {
    expect(compiled).toMatchSnapshot()
  });

  // it()

});

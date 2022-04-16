import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MapRepoPipe } from '../../../../app/issues/pipes/map-repo.pipe';

import { IssueCardComponent } from '../../../../app/issues/components/issue-card/issue-card.component';

describe('IssueCardComponent', () => {
  let component: IssueCardComponent;
  let fixture: ComponentFixture<IssueCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueCardComponent, MapRepoPipe ],
      imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatSelectModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

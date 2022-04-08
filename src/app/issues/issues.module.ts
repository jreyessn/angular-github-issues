import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesListComponent } from './page/issues-list/issues-list.component';
import { RouterModule } from '@angular/router';
import { issuesRoutes } from './issues.routing';
import { IssueCardComponent } from './components/issue-card/issue-card.component';
import { IssueSearchFieldComponent } from './components/issue-search-field/issue-search-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IssuesService } from './services/issues.service';
import { HttpClientModule } from '@angular/common/http';
import { MapRepoPipe } from './pipes/map-repo.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    IssuesListComponent,
    IssueCardComponent,
    IssueSearchFieldComponent,
    MapRepoPipe,
  ],
  imports: [
    // Core Modules
    CommonModule,
    RouterModule.forChild(issuesRoutes),
    FormsModule,
    ReactiveFormsModule,
    
    // Angular Material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    
    // Http
    HttpClientModule
  ],
  providers: [
    IssuesService
  ]
})
export class IssuesModule { }

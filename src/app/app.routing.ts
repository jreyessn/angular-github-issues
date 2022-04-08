import { Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout.component';

export const appRoutes: Routes = [

      // Redirect empty path to '/issues'
      { path: '', pathMatch : 'full', redirectTo: 'issues' },

      // Landing routes
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: 'issues',
            loadChildren: () => import('./issues/issues.module').then(m => m.IssuesModule)
          }
        ]
      }

];
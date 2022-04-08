import { Route } from "@angular/router";
import { IssuesListComponent } from "./page/issues-list/issues-list.component";

export const issuesRoutes: Route[] = [
    {
        path     : '',
        component: IssuesListComponent
    }
];
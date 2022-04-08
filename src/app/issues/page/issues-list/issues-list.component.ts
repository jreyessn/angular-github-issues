import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';
import { Issue, IssueResponse } from '../../issues.type';
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.scss']
})
export class IssuesListComponent {

  /**
   * Limit records
   */
  limitRecords: number = 12;

  /**
   * Data api
   */
  data$: Observable<Issue[]> = of([])

  /**
   * Total count
   */
  total$: BehaviorSubject<number> = new BehaviorSubject(0)

  constructor(
    private _issueServices: IssuesService
  ) { }

  /**
   * Realiza busqueda
   * @param text Término de busqueda
   */
  search(text: string): void {
    this.data$ = this._issueServices.list(text).pipe(
      tap((res: IssueResponse) => this.total$.next(res.total_count)),
      map((res: IssueResponse) => res.items)
    )
  }

}

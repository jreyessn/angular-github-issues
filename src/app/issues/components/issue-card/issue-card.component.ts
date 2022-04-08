import { Component, Input, OnInit } from '@angular/core';
import { Issue } from '../../issues.type';

@Component({
  selector: 'app-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.scss']
})
export class IssueCardComponent {

  @Input() item!: Issue;

  constructor() { }

}

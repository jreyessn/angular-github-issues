import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-issue-search-field',
  templateUrl: './issue-search-field.component.html',
  styleUrls: ['./issue-search-field.component.scss']
})
export class IssueSearchFieldComponent implements OnInit {

  @Output() search: EventEmitter<string> = new EventEmitter()

  /**
   * Search form control
   */
   searchInputControl: FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.searchInputControl.valueChanges.pipe(
          debounceTime(500)
        )
        .subscribe((value) => 
          this.search.emit(value)
        )
  }

}

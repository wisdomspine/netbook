import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ntb-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  standalone: true,
  imports: [FontAwesomeModule],
})
export class SearchInputComponent implements OnInit {
  readonly search = faSearch;
  constructor() {}

  ngOnInit(): void {}
}

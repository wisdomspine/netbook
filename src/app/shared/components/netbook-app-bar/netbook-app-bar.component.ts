import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchInputComponent } from '../search-input/search-input.component';

@Component({
  selector: 'ntb-app-bar',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchInputComponent],
  templateUrl: './netbook-app-bar.component.html',
  styleUrls: ['./netbook-app-bar.component.scss'],
})
export class NetbookAppBarComponent implements OnInit {
  readonly links: { url: string; name: string; fragment?: string }[] = [
    {
      url: '/',
      name: 'Home',
    },
    {
      url: '/community',
      name: 'Community',
    },
    {
      url: '/',
      name: 'Blog',
      fragment: 'blog',
    },
    {
      url: '/',
      name: 'Events',
      fragment: 'events',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

import { Filter } from '../model/filter';
import { AppService } from '../app.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filter: Filter[] = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.loadFilter()?.subscribe((f: Filter[]) => this.filter = f);
    console.log(this.filter);
  }

  getSelectClass(selected: boolean | undefined): string {
    return selected ? 'filter-pressed' : 'filter-unpressed';
  }
}

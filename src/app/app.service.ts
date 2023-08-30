import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './model/hero';
import { Filter } from './model/filter';
import { config } from './data/config';

@Injectable()
export class AppService {

  constructor() { }

  loadHeroes(): Observable<Hero[]> | undefined {
    let heroes: Hero[] = [];
    config.heroes.forEach(h => heroes.push(new Hero(h)));
    return of(heroes);
  }

  loadFilter(): Observable<Filter[]> | undefined {
    let filter: Filter[] = [];
    config.filter.forEach(f => filter.push(new Filter(f)));
    return of(filter);
  }
}
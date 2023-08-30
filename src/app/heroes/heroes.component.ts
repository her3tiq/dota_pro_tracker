import { Component, OnInit } from '@angular/core';

import { Hero } from '../model/hero';
import { AppService } from '../app.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes_str: Hero[] = [];
  heroes_agi: Hero[] = [];
  heroes_int: Hero[] = [];
  heroes_uni: Hero[] = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.loadHeroes()?.subscribe((h: Hero[]) => this.filterHeroes(h));
  }

  filterHeroes(heroes: Hero[]): any {
    this.heroes_str = heroes.filter(hero => hero.stat == 'strength').sort((a, b) => a.name > b.name ? 1 : -1);
    this.heroes_agi = heroes.filter(hero => hero.stat == 'agility').sort((a, b) => a.name > b.name ? 1 : -1);
    this.heroes_int = heroes.filter(hero => hero.stat == 'intelligence').sort((a, b) => a.name > b.name ? 1 : -1);
    this.heroes_uni = heroes.filter(hero => hero.stat == 'universal').sort((a, b) => a.name > b.name ? 1 : -1);
  }
}

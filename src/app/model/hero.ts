export class Hero {
  name: string;
  stat: string;
  image: string;
  url: string;

  constructor(hero: any) {
    this.name = hero.name;
    this.stat = hero.stat;
    this.image = hero.image;
    this.url = hero.url;
  }
}
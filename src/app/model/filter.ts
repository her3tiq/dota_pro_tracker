export class Filter {
  name: string;
  label: string;
  order: number;
  group: string;
  selected?: boolean;

  constructor(filter: any) {
    this.name = filter.name;
    this.label = filter.label;
    this.order = filter.order;
    this.group = filter.group;
    this.selected = filter.default ? true : false;
  }
}

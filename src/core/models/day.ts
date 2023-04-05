import { getDate, getMonth } from 'date-fns';

export class Day {
  constructor(public readonly date: Date) {}

  isInChristmasPeriod(): boolean {
    return this.isInChristmasMonth() && this.isDayBetween(24, 31);
  }

  private isInChristmasMonth() {
    return getMonth(this.date) === 11;
  }

  private isDayBetween(start: number, end: number) {
    return getDate(this.date) >= start && getDate(this.date) <= end;
  }
}

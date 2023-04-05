import { addDays } from 'date-fns';

import { UserId } from '../user-id/user-id';
import { Period } from '../period/period';
import { Day } from '../day';

export class Ticket {
  public readonly type = 'Ticket' as const;
  private readonly pricePerDay = 45;
  private readonly christmasExtra = 30;

  constructor(public readonly userId: UserId, public readonly period: Period) {}

  get price(): number {
    let price = 0;
    for (let index = 0; index < this.period.duration; index++) {
      const day = new Day(addDays(this.period.startDate, index));

      if (day.isInChristmasPeriod()) {
        price += this.christmasExtra;
      }

      price += this.pricePerDay;
    }

    return price;
  }
}

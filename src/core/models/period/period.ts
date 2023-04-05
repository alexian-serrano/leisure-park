import { differenceInDays } from 'date-fns';

import { InvalidPeriodError } from './errors/invalid-period.error';

export class Period {
  public readonly type = 'Period' as const;

  constructor(public readonly startDate: Date, public readonly endDate: Date) {
    if (startDate > endDate) {
      throw new InvalidPeriodError(startDate, endDate);
    }
  }

  get duration(): number {
    return differenceInDays(this.endDate, this.startDate) + 1;
  }
}

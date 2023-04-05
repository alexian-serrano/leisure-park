import { InvalidPeriodError } from './errors/invalid-period.error';
import { Period } from './period';

describe('Period', () => {
  it('creates a period with a start date and an end date', () => {
    const from = new Date('2020-01-01');
    const to = new Date('2020-01-31');

    const period = new Period(from, to);

    expect(period.startDate).toEqual(from);
    expect(period.endDate).toEqual(to);
  });

  it('throws an error if the start date is after the end date', () => {
    const from = new Date('2020-01-02');
    const to = new Date('2020-01-01');

    expect(() => new Period(from, to)).toThrow(new InvalidPeriodError(from, to));
  });
});

import { UserId } from '../user-id/user-id';
import { Period } from '../period/period';
import { Ticket } from './ticket';

describe('Ticket', () => {
  const userId = new UserId('084f48e8-332f-4a86-a6a3-3d7977d3116a');

  it('computes a price of 45 for 1 day', () => {
    const startDate = new Date('2020-01-01');
    const endDate = new Date('2020-01-01');

    const ticket = new Ticket(userId, new Period(startDate, endDate));

    expect(ticket.price).toEqual(45);
  });

  it('computes a price of 45 per day', () => {
    const startDate = new Date('2020-01-01');
    const endDate = new Date('2020-01-05');

    const ticket = new Ticket(userId, new Period(startDate, endDate));

    expect(ticket.price).toEqual(45 * 5);
  });

  it('computes an extra 30 per day in the christmas period (12/24 to 12/31)', () => {
    const startDate = new Date('2021-12-22');
    const endDate = new Date('2021-12-30');

    const ticket = new Ticket(userId, new Period(startDate, endDate));

    expect(ticket.price).toEqual(2 * 45 + 7 * 75);
  });
});

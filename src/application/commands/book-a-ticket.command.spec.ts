import { UserNotFoundError } from '../../core/errors/user-not-found.error';
import { UserId } from '../../core/models/user-id/user-id';
import { BookATicketCommandHandler, BookATicketCommand } from './book-a-ticket.command';
import { Period } from '../../core/models/period/period';
import { Ticket } from '../../core/models/ticket/ticket';
import { FakeTicketRepository } from '../ticket-repository/fake-ticket-repository';
import { FakeUserRepository } from '../user-repository/fake-user-repository';

describe('BookATicketCommand', () => {
  let handler: BookATicketCommandHandler;
  let userRepository: FakeUserRepository;
  let ticketRepository: FakeTicketRepository;

  beforeEach(() => {
    userRepository = new FakeUserRepository();
    ticketRepository = new FakeTicketRepository();
    handler = new BookATicketCommandHandler(userRepository, ticketRepository);
  });

  it('throws a specific error if the user does not exist', async () => {
    const userId = '2f3fc017-71fc-4196-996f-3e128665bb54';

    await expect(
      handler.execute(new BookATicketCommand(userId, new Date('2022-01-01'), new Date('2022-01-01')))
    ).rejects.toThrow(new UserNotFoundError(new UserId(userId)));
  });

  describe('With an existing account', () => {
    const userId = '21ae391d-839f-4754-bceb-bb4fc61b4da8';

    beforeEach(() => {
      userRepository.feedWith([userId]);
    });

    it('books a ticket on a given period', async () => {
      const startDate = new Date('2020-01-01');
      const endDate = new Date('2020-01-31');

      await handler.execute(new BookATicketCommand(userId, startDate, endDate));

      expect(ticketRepository.tickets).toEqual([
        expect.objectContaining(new Ticket(new UserId(userId), new Period(startDate, endDate))),
      ]);
    });
  });
});

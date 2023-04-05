import { UserRepository } from '../user-repository/user-repository.interface';
import { UserNotFoundError } from '../../core/errors/user-not-found.error';
import { UserId } from '../../core/models/user-id/user-id';
import { Period } from '../../core/models/period/period';
import { Ticket } from '../../core/models/ticket/ticket';
import { TicketRepository } from '../ticket-repository/ticket-repository.interface';

export class BookATicketCommand {
  public readonly userId: UserId;

  constructor(userId: string, public readonly from: Date, public readonly to: Date) {
    /**
     * Is this the right place to instanciate the value objects ?
     * I pretty sure that creating my entities (like Period) here is a bad idea, but what about value objects ?
     */
    this.userId = new UserId(userId);
  }
}

export class BookATicketCommandHandler {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly ticketRepository: TicketRepository
  ) {}

  async execute({ userId: userId, from, to }: BookATicketCommand) {
    const period = new Period(from, to);

    const userExists = await this.userRepository.exists(userId);
    if (!userExists) {
      throw new UserNotFoundError(userId);
    }

    const ticket = new Ticket(userId, period);
    await this.ticketRepository.save(ticket);
  }
}

import { Ticket } from '../../core/models/ticket/ticket';
import { TicketRepository } from './ticket-repository.interface';

export class FakeTicketRepository implements TicketRepository {
  tickets: Ticket[] = [];

  public async save(ticket: Ticket): Promise<void> {
    this.tickets.push(ticket);
  }
}

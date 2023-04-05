import { Ticket } from '../../core/models/ticket/ticket';

export interface TicketRepository {
  save(ticket: Ticket): Promise<void>;
}
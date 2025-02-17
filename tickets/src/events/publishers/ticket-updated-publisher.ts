import { Publisher, Subjects, TicketUpdatedEvent } from "@mlgittix/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}

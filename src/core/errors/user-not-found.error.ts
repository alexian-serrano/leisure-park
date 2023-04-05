import { UserId } from '../models/user-id/user-id';

export class UserNotFoundError extends Error {
  constructor(public readonly userId: UserId) {
    super(`User with id ${userId} not found`);
  }
}

import { validate } from 'uuid';
import { InvalidUserIdError } from './errors/invalid-user-id.error';

export class UserId {
  public readonly type = 'UserId' as const;

  constructor(public readonly value: string) {
    if (!validate(value)) {
      throw new InvalidUserIdError(value);
    }
  }
}

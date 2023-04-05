import { InvalidUserIdError } from './errors/invalid-user-id.error';
import { UserId } from './user-id';

describe('UserId', () => {
  it('creates a UserId with a value', () => {
    const validValue = '9b77943d-955c-472f-a461-32a2190ccf61';
    const userId = new UserId(validValue);

    expect(userId.value).toEqual(validValue);
  });

  it('throws an error if the value is not a valid UUID', () => {
    const invalidValue = 'not-a-valid-uuid';

    expect(() => new UserId(invalidValue)).toThrowError(new InvalidUserIdError(invalidValue));
  });
});

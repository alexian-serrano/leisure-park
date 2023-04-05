export class InvalidUserIdError extends Error {
  constructor(public readonly userId: string) {
    super(`Invalid user id: ${userId}`);
  }
}

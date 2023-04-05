export class InvalidPeriodError extends Error {
  constructor(public readonly from: Date, public readonly to: Date) {
    super(`Invalid period: ${from} - ${to}`);
  }
}

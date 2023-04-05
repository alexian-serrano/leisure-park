import { UserId } from '../../core/models/user-id/user-id';
import { UserRepository } from './user-repository.interface';

export class FakeUserRepository implements UserRepository {
  private userIds: string[] = [];

  async exists(userId: UserId): Promise<boolean> {
    return this.userIds.includes(userId.value);
  }

  feedWith(userIds: string[]) {
    this.userIds = userIds;
  }
}

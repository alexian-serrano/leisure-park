import { UserId } from '../../core/models/user-id/user-id';

export interface UserRepository {
  exists(userId: UserId): Promise<boolean>;
}

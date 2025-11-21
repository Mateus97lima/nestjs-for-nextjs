import type { Request } from 'express';
import type { User } from 'src/user/entities/user.entity';

export interface AuthenticatedRequest extends Request {
  user: User;
}

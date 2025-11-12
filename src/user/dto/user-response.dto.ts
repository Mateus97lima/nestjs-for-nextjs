import { User } from 'src/user/entities/user.entity';

export class UserResponseDto {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly createdAt: Date;
  readonly uptadeAt: Date;

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.createdAt = user.createdAt;
    this.uptadeAt = user.updatedAt;
  }
}

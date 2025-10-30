import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  dologin() {
    return 'ola do authService';
  }
}

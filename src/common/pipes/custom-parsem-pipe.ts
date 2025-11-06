import { BadRequestException, ParseIntPipe } from '@nestjs/common';

export class CustomParsemPipe extends ParseIntPipe {
  constructor() {
    super({
      exceptionFactory: () =>
        new BadRequestException('Parãmetro precisa ser numero'),
    });
  }
}

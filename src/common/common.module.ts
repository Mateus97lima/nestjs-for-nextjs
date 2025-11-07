import { Module } from '@nestjs/common';
import { HashingService } from './hashing/hashing.service';
import { BrcyptHashingService } from './hashing/bcrypt-hashing.service';

@Module({
  providers: [
    {
      provide: HashingService,
      useClass: BrcyptHashingService,
    },
  ],
  exports: [HashingService],
})
export class commonModule {}

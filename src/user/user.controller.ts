import { Controller, Get, Param } from '@nestjs/common';
import { CustomParsemPipe } from 'src/common/pipes/custom-parsem-pipe';

@Controller('user')
export class UserController {
  @Get(':id')
  findOne(@Param('id', CustomParsemPipe) id: number) {
    console.log(id, typeof id);
    return `ola raabe ${id}`;
  }
}

import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CustomParsemPipe } from 'src/common/pipes/custom-parsem-pipe';
import { CreateUserDto } from './dto/create-user-dto';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

import type { AuthenticatedRequest } from 'src/auth/types/authenticated-request';

@Controller('user')
export class UserController {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(
    @Req() req: AuthenticatedRequest,
    @Param('id', CustomParsemPipe) id: number,
  ) {
    console.log(req.user);
    return `ola raabe ${id}`;
  }
  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }
}

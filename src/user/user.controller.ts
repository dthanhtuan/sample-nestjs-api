import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator';

@Controller('users')
export class UserController {
  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  me(@GetUser() user: User) {
    // @GetUser extra user object from request
    // Request data come from JwtS
    // @GetUser extra user object from requesttrategy#validate
    return user;
  }
}

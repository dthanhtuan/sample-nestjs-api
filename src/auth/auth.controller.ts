import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto';

@Controller('auth')
export class AuthController {
  // Create authService instance by using Dependency Injection
  constructor(private authService: AuthService) {}

  // handle requests from clients
  @Post('register')
  register(@Body() authDTO: AuthDTO) {
    // body type must be a "Data Transfer object" - DTO, same as params permit on Rails
    // Can parse the body directly with:
    // @Body('email') email: string, @Body('password') password: string
    return this.authService.register(authDTO);
  }

  @Post('login')
  login(@Body() authDTO: AuthDTO) {
    return this.authService.login(authDTO);
  }
}

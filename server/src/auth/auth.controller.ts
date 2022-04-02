import { Body, Controller, Post, Session } from '@nestjs/common';
import { SignupDTO, SigninDTO } from 'src/dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  signup(@Body() dto: SignupDTO, @Session() session: Record<string, any>) {
    console.log({
      dto,
    });
    return this.authService.signup(dto, session);
  }
  @Post('signin')
  signin(@Body() dto: SigninDTO, @Session() session: Record<string, any>) {
    return this.authService.signin(dto, session);
  }
}

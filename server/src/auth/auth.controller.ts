import { Body, Controller, Post, Session, UseGuards } from '@nestjs/common';
import { SignupDTO, SigninDTO } from 'src/auth/dto';
import { AuthService } from './auth.service';
import { Roles } from './decorators/roles.decorators';
import { RolesGuard } from './guards/local.guards';
import { PasswordValidation } from './pipes/signupValidation.pipe';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  signup(
    @Body(PasswordValidation) dto: SignupDTO,
    @Session() session: Record<string, any>,
  ) {
    return this.authService.signup(dto, session, false);
  }
  @UseGuards(RolesGuard)
  @Post('signup/manager')
  @Roles('admin')
  signupManager(
    @Body(PasswordValidation) dto: SignupDTO,
    @Session() session: Record<string, any>,
  ) {
    return this.authService.signup(dto, session, true);
  }

  @Post('signin')
  signin(@Body() dto: SigninDTO, @Session() session: Record<string, any>) {
    return this.authService.signin(dto, session);
  }
  @Post('logout')
  logout(@Session() session: Record<string, any>) {
    return this.authService.logout(session);
  }
}

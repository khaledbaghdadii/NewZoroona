import {
  Controller,
  Get,
  ParseIntPipe,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';

import { UserGuard } from './guards/user.guards';
import { UserService } from './user.service';

@Controller('users')
export class userController {
  constructor(private userService: UserService) {}
  @UseGuards(UserGuard)
  @Get('me')
  getCurrentUser(@Req() req) {
    return this.userService.getCurrentUser(req);
  }
  @Get('/user')
  getSpecificUser(@Query('userId', ParseIntPipe) userId: number) {
    return this.userService.getSpecifcUser(userId);
  }
}

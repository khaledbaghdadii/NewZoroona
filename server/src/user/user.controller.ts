import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Roles } from 'src/auth/decorators/roles.decorators';
import { UpdateCurrentDTO, UpdateDTO } from './dto';
import { RolesGuard } from './guards/role.guards';
import { UserGuard } from './guards/user.guards';

import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @UseGuards(UserGuard)
  @Get('me')
  getCurrentUser(@Req() req) {
    return this.userService.getCurrentUser(req);
  }
  @UseGuards(UserGuard)
  @Get('user')
  getSpecificUser(@Query('userId', ParseIntPipe) userId: number) {
    return this.userService.getSpecifcUser(userId);
  }
  @UseGuards(UserGuard)
  @Post('delete/me')
  deleteMe(@Req() req) {
    return this.userService.deleteMe(req);
  }

  @UseGuards(RolesGuard)
  @Post('delete')
  @Roles('admin')
  deleteUser(@Body('userId', ParseIntPipe) userId: number) {
    return this.userService.deleteUser(userId);
  }
  @UseGuards(UserGuard)
  @Post('update/me')
  updateMe(@Body() dto: UpdateCurrentDTO, @Req() req) {
    return this.userService.updateMe(dto, req);
  }
  @UseGuards(RolesGuard)
  @Post('update')
  @Roles('admin')
  updateUser(@Body() dto: UpdateDTO) {
    return this.userService.updateUser(dto);
  }
}

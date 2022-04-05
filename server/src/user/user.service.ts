import {
  HttpException,
  HttpStatus,
  Injectable,
  ParseIntPipe,
  Query,
  Req,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { IsInt } from 'class-validator';

import { PrismaService } from '../prisma/prisma.service';
class UserIdQuery {
  @IsInt()
  userId: number;
}

@Injectable({})
export class UserService {
  constructor(private prisma: PrismaService) {}
  async getCurrentUser(@Req() req) {
    const user = await this.prisma.user.findFirst({
      where: {
        id: req.session.userId,
      },
    });
    return user;
  }
  async getSpecifcUser(userId: number): Promise<User | HttpException> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }
}

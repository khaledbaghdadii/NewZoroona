import {
  Body,
  HttpException,
  HttpStatus,
  Injectable,
  Req,
} from '@nestjs/common';
import { User } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';
interface DeleteUserBody {
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
  async deleteUser(userId: number): Promise<string | HttpException> {
    try {
      await this.prisma.user.delete({
        where: {
          id: userId,
        },
      });
    } catch (error) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return 'Deleted successfully';
  }
}

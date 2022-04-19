import {
  Body,
  HttpException,
  HttpStatus,
  Injectable,
  Req,
} from '@nestjs/common';
import { User } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';
import { UpdateCurrentDTO, UpdateDTO } from './dto';

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
  async getSpecificUser(userId: number): Promise<User | HttpException> {
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
  async deleteMe(@Req() req): Promise<string | HttpException> {
    try {
      await this.prisma.user.delete({
        where: {
          id: req.session.userId,
        },
      });
    } catch (error) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return 'Deleted successfully';
  }
  async updateMe(
    @Body() dto: UpdateCurrentDTO,
    @Req() req,
  ): Promise<User | HttpException> {
    const userId = req.session.userId;
    const user = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        email: dto.email,
        gender: dto.gender,
        name: dto.name,
        phoneNumber: dto.phoneNumber,
      },
    });
    return user;
  }
  async updateUser(@Body() dto: UpdateDTO): Promise<User | HttpException> {
    const userId = dto.userId;
    try {
      const user = await this.prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          email: dto.email,
          gender: dto.gender,
          name: dto.name,
          phoneNumber: dto.phoneNumber,
        },
      });
      return user;
    } catch (err) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }
}

import {
  Body,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  Req,
} from '@nestjs/common';
import { User } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';
import { ChangePasswordDTO, UpdateCurrentDTO, UpdateDTO } from './dto';
import * as argon from 'argon2';
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
  async changePassword(dto: ChangePasswordDTO, session: Record<string, any>) {
    const oldPassword = dto.oldPassword;
    const userID = session.userId;
    const hash = await argon.hash(dto.newPassword);
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id: userID,
        },
      });
      const pwMatches = await argon.verify(user.hash, oldPassword);
      //if passwird not correct throw exception
      if (!pwMatches)
        return new ForbiddenException('Current password is incorrect');
      this.prisma.user.update({
        where: {
          id: userID,
        },
        data: {
          hash,
        },
      });
      delete user.hash;
      return user;
    } catch (e) {
      console.log(e);
    }
  }
}

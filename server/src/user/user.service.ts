import { Injectable, Req } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

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
}

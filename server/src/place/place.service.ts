import { Injectable, Req } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable({})
export class PlaceService {
  constructor(private prisma: PrismaService) {}
  async getPlace(@Req() req) {
    // const place = await this.prisma.place;
    const id = req.place.id;
    return id;
  }
}

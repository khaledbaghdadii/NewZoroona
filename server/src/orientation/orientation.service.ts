import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class OrientationService {
  constructor(private prisma: PrismaService) {}
  async getAll() {
    try {
      const orientations = await this.prisma.orientation.findMany({});
      return orientations;
    } catch (e) {
      return [];
    }
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  async getAll() {
    try {
      const categories = await this.prisma.category.findMany({});
      return categories;
    } catch (e) {
      return [];
    }
  }
}

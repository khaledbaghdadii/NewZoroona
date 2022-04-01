import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgres://utbbnmzcslnoui:6fe7aa9d99fa7a1870e5667705f2865a420536eb695313bc2a7f8dd91c62e227@ec2-3-229-161-70.compute-1.amazonaws.com:5432/d3dev2isfsdfrb',
        },
      },
    });
  }
}

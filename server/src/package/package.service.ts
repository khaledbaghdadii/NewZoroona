import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { Package } from '@prisma/client';
import { AddDTO } from '../package/dto';

@Injectable({})
export class PackageService {
  constructor(private prisma: PrismaService) {}
  async getPackagesForPlace(
    placeId: number,
  ): Promise<Package[] | HttpException> {
    const packages = await this.prisma.package.findMany({
      where: {
        placeId: placeId,
      },
    });
    if (!packages) {
      console.log('Error here');
      return new HttpException('Packages not found', HttpStatus.NOT_FOUND);
    }
    return packages;
  }
  async deletePackage(packageId: number) {
    try {
      await this.prisma.package.delete({
        where: {
          id: packageId,
        },
      });
    } catch (error) {
      return new HttpException('Package not found', HttpStatus.NOT_FOUND);
    }
    return 'Deleted successfully';
  }
  async addPackage(@Body() dto: AddDTO): Promise<Package | HttpException> {
    try {
      const placePackage = await this.prisma.package.create({
        data: {
          placeId: dto.placeId,
          description: dto.description,
          cost: dto.cost,
          name: dto.name,
        },
      });
      return placePackage;
    } catch (err) {
      return new HttpException('Error Adding Package', HttpStatus.BAD_REQUEST);
    }
  }
}

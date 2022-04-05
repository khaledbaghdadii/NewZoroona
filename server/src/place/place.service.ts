import {
  Body,
  HttpException,
  HttpStatus,
  Injectable,
  Req,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { Place } from '@prisma/client';
import { UpdateDTO, AddDTO } from '../place/dto';

@Injectable({})
export class PlaceService {
  constructor(private prisma: PrismaService) {}
  async getPlace(placeId: number): Promise<Place | HttpException> {
    const place = await this.prisma.place.findUnique({
      where: {
        id: placeId,
      },
    });
    if (!place) {
      return new HttpException('Place not found', HttpStatus.NOT_FOUND);
    }
    return place;
  }
  async deletePlace(placeId: number) {
    try {
      await this.prisma.place.delete({
        where: {
          id: placeId,
        },
      });
    } catch (error) {
      return new HttpException('Place not found', HttpStatus.NOT_FOUND);
    }
    return 'Deleted successfully';
  }
  async updatePlace(@Body() dto: UpdateDTO): Promise<Place | HttpException> {
    const placeId = dto.placeId;
    try {
      const place = await this.prisma.place.update({
        where: {
          id: placeId,
        },
        data: {
          email: dto.email,
          name: dto.name,
          phoneNumber: dto.phoneNumber,
          city: dto.city,
          district: dto.district,
          address: dto.address,
          location: dto.location,
          website: dto.website,
          sector: dto.sector,
          description: dto.description,
          image: dto.image,
        },
      });
      return place;
    } catch (err) {
      return new HttpException('Place not found', HttpStatus.NOT_FOUND);
    }
  }
  async addPlace(@Body() dto: AddDTO): Promise<Place | HttpException> {
    try {
      const place = await this.prisma.place.create({
        data: {
          email: dto.email,
          name: dto.name,
          phoneNumber: dto.phoneNumber,
          city: dto.city,
          district: dto.district,
          address: dto.address,
          location: dto.location,
          website: dto.website,
          sector: dto.sector,
          description: dto.description,
          image: dto.image,
          categoryId: dto.categoryId,
          managerId: dto.managerId,
          hasReservation: dto.hasReservation,
          orientationId: dto.orientationId,
        },
      });
      return place;
    } catch (err) {
      return new HttpException('Place not found', HttpStatus.NOT_FOUND);
    }
  }
}

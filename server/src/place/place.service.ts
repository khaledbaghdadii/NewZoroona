import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { Place } from '@prisma/client';
import { UpdateDTO, AddDTO, FilterDTO, FeatureDTO } from '../place/dto';

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
  async getFeaturedPlaces(): Promise<Place[] | HttpException> {
    const places = await this.prisma.place.findMany({
      where: {
        isFeatured: true,
      },
      include:{
        Category: true
      }
    });
    if (!places) {
      return new HttpException(
        'Featured Places not found',
        HttpStatus.NOT_FOUND,
      );
    }
    return places;
  }
  async searchPlaceByTitle(text: string): Promise<Place[]> {
    try {
      const places = await this.prisma.place.findMany({
        where: {
          name: {
            contains: text,
            mode: 'insensitive',
          },
          valid: true,
        },
        take: 9,
      });
      return places;
    } catch (e) {
      return [];
    }
  }

  async getPlacesByFilter(@Body() dto: FilterDTO): Promise<Place[]> {
    try {
      let places = [];
      if (dto.hasReservation == 2) {
        places = await this.prisma.place.findMany({
          where: {
            orientationId: {
              in: dto.orientation,
            },
            categoryId: {
              in: dto.category,
            },
            district: {
              in: dto.district,
            },
            valid: true,
            averagePricePerPerson: {
              gte: dto.minPrice ? dto.minPrice : Number.MIN_SAFE_INTEGER,
              lte: dto.maxPrice ? dto.maxPrice : Number.MAX_SAFE_INTEGER,
            },
          },
          take: 9,
        });
      } else {
        places = await this.prisma.place.findMany({
          where: {
            orientationId:{
              in: dto.orientation,
            },
            categoryId: {
              in: dto.category,
            },
            district: {
              in: dto.district,
            },
            hasReservation: dto.hasReservation != 0,
            valid:true
          },
          take: 9,
        });
      }
      return places;
    } catch (e) {
      return [];
    }
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
          averagePricePerPerson: dto.averagePricePerPerson,
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
          valid: !dto.fromRequest,
          averagePricePerPerson: dto.averagePricePerPerson,
        },
      });
      return place;
    } catch (err) {
      return new HttpException('Error Adding Place', HttpStatus.BAD_REQUEST);
    }
  }
  async featurePlace(@Body() dto: FeatureDTO): Promise<Place | HttpException> {
    try {
      if (dto.feature) {
        const places = await this.prisma.place.findMany({
          where: {
            isFeatured: true,
          },
        });
        if (places.length < 5) {
          const place = await this.prisma.place.update({
            where: {
              id: dto.placeId,
            },
            data: {
              isFeatured: dto.feature,
            },
          });
        }
      } else {
        const place = await this.prisma.place.update({
          where: {
            id: dto.placeId,
          },
          data: {
            isFeatured: dto.feature,
          },
        });
      }

      return;
    } catch (err) {
      return new HttpException('Error Featuring Place', HttpStatus.BAD_REQUEST);
    }
  }
  async getAllDistricts() {
    const districts = await this.prisma.place.groupBy({
      by: ['district'],
    });
    return districts;
  }
  async getAllPlaces() {
    const places = await this.prisma.place.findMany({
      where:{
        valid: true
      }
    });
    return places;
  }
}

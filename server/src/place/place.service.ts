import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';

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
  async getFeaturedPlaces(): Promise<Place[] | HttpException> {
    const places = await this.prisma.place.findMany({
      where: {
        isFeatured: true,
      },
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
          valid:true
        },
        take: 9,
      });
      return places;
    } catch (e) {
      return [];
    }
  }
  async getPlacesByFilter(
    orientation: number[],
    category: number[],
    district: string[],
    hasReservation: number,
  ): Promise<Place[]> {
    try {
      // const orientationList = await this.prisma.orientation.findMany();
      // const orientationIds = orientationList.map((o) => {
      //   return o.id;
      // });
      // const categoryList = await this.prisma.category.findMany();
      // const categoryIds = categoryList.map((c) => {
      //   return c.id;
      // });
      // const districtList = await this.prisma.place.findMany();
      // const districtNames = districtList.map((d) => {
      //   return d.district;
      // });
      let places = [];
      if (hasReservation == 2) {
        places = await this.prisma.place.findMany({
          where: {
            orientationId: {
              in: orientation,
            },
            categoryId: {
              in: category,
            },
            district: {
              in: district,
            },
            valid:true
          },
          take: 9,
        });
      } else {
        places = await this.prisma.place.findMany({
          where: {
            orientationId: {
              in: orientation,
            },
            categoryId: {
              in: category,
            },
            district: {
              in: district,
            },
            hasReservation: hasReservation != 0,
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
  async featurePlace(
    placeId: number,
    feature: boolean,
  ): Promise<Place | HttpException> {
    try {
      if (feature) {
        const places = await this.prisma.place.findMany({
          where: {
            isFeatured: true,
          },
        });
        if (places.length < 5) {
          const place = await this.prisma.place.update({
            where: {
              id: placeId,
            },
            data: {
              isFeatured: feature,
            },
          });
        }
      } else {
        const place = await this.prisma.place.update({
          where: {
            id: placeId,
          },
          data: {
            isFeatured: feature,
          },
        });
      }

      return;
    } catch (err) {
      return new HttpException('Error Featuring Place', HttpStatus.BAD_REQUEST);
    }
  }
}

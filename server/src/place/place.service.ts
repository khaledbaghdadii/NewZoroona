import {
  Body,
  HttpException,
  HttpStatus,
  Injectable,
  UploadedFiles,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { Place } from '@prisma/client';
import { UpdateDTO, AddDTO, FilterDTO, FeatureDTO } from '../place/dto';
<<<<<<< HEAD
import { IncomingMessage } from 'http';

=======
const cloudinary = require('cloudinary');
const fs = require('fs');
>>>>>>> 4160a8a9e3e03964282cf2b681cc4601512709fb
@Injectable({})
export class PlaceService {
  constructor(private prisma: PrismaService) {}
  async getPlace(placeId: number): Promise<Place | HttpException> {
    const place = await this.prisma.place.findUnique({
      where: {
        id: placeId,
      },
      include:{
        Category:true,
        Orientation:true,
      }
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
        valid: true,
      },
      include: {
        Category: true,
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
          valid: true,
        },
        include: {
          Category: true,
          Orientation: true,
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
      console.log("Has res" + dto.hasReservation)
      console.log("Categories passed: "+dto.category)
      console.log("Orientations passed: "+dto.orientation)
      console.log(dto)
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
          include: {
            Category: true,
            Orientation: true,
          },
          take: 9,
        });
      } else {
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
            hasReservation: dto.hasReservation != 0,
            valid: true,
          },
          include: {
            Category: true,
            Orientation: true,
          },
          take: 9,
        });
      }
      return places;
    } catch (e) {
      console.log(e)
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
  async addPlace(
    @Body() dto: AddDTO,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ): Promise<Place | HttpException> {
    try {
      this.base64_decode(files[0].buffer, files[0].originalname);
      const imageName = files[0].originalname;
      const imageMetadata = {
        public_id: files[0].originalname.slice(
          0,
          files[0].originalname.indexOf('.'),
        ),
      };
      const url = (await this.uploadToCloudinary(
        imageName,
        imageMetadata,
      )) as string;
      console.log(url);
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
          image: url,
          categoryId: dto.categoryId,
          managerId: dto.managerId,
          hasReservation: dto.hasReservation,
          orientationId: dto.orientationId,
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
      where: {
        valid: true,
      },
      include: {
        Category: true,
        Orientation: true,
      },
    });
    return places;
  }
  async uploadFile(
    @UploadedFiles() files: Array<Express.Multer.File>,
    placeId: number,
  ) {
    console.log(placeId);
    this.base64_decode(files[0].buffer, files[0].originalname);
    const imageName = files[0].originalname;
    const imageMetadata = {
      public_id: files[0].originalname.slice(
        0,
        files[0].originalname.indexOf('.'),
      ),
    };
    const url = await this.uploadToCloudinary(imageName, imageMetadata);
    await this.prisma.place.update({
      where: { id: placeId },
      data: { image: url },
    });
    return 'Added successfully';
  }
  // function to create file from base64 encoded string
  base64_decode(base64str, file) {
    // create buffer object from base64 encoded string,
    // it is important to tell the constructor
    // that the string is base64 encoded
    const bitmap = new Buffer(base64str, 'base64');
    // write buffer to file
    fs.writeFileSync(file, bitmap);
  }
  async uploadToCloudinary(imageName, imageMetadata) {
    return new Promise((resolve, reject) => {
      cloudinary.config({
        cloud_name: 'dhpaajfal',
        api_key: '128848466179765',
        api_secret: '8c_s3HVV6j-RvG8oQ1uYRtMlWAg',
      });
      cloudinary.v2.uploader.upload(
        imageName,
        imageMetadata,
        (err, response) => {
          if (err) return reject(err);
          return resolve(response.url);
        },
      );
    });
  }
}

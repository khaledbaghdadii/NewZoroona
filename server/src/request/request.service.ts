import {
  Body,
  HttpException,
  HttpStatus,
  Injectable,
  Req,
  UploadedFiles,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { Place, Request, Reservation, User } from '@prisma/client';
import { AcceptReservationRequestDTO, ManagerDTO, ReservationDTO } from './dto';
import * as argon from 'argon2';
import { AddDTO } from '../reservation/dto';

const cloudinary = require('cloudinary');
const fs = require('fs');
@Injectable({})
export class RequestService {
  constructor(private prisma: PrismaService) {}
  async getAllRequests(): Promise<Request[] | HttpException> {
    const requests = await this.prisma.request.findMany({
      where:{
        requestTypeId:{
          in: [1,2,3]
        },
        processed: false
      },
      include:
          {
            RequestType:true,
            User: true
          }
    });
    if (!requests) {
      return new HttpException('Reqests not found', HttpStatus.NOT_FOUND);
    }
    return requests;
  }
  async getRequestsPerType(
    requestTypeId: number,
  ): Promise<Request[] | HttpException> {
    const requests = await this.prisma.request.findMany({
      where: {
        requestTypeId: requestTypeId,
      },
    });
    if (!requests) {
      return new HttpException('Requests not found', HttpStatus.NOT_FOUND);
    }
    return requests;
  }
  async rejectRequest(requestId: number) {
    try {
      const request = await this.prisma.request.update({
        where: {
          id: requestId,
        },
        data: {
          processed: true,
        },
      });
      return request;
    } catch (err) {
      return new HttpException('Request not found', HttpStatus.NOT_FOUND);
    }
    return 'Processed successfully';
  }
  async acceptRequest(requestId: number) {
    try {
      //set processed to true
      const request = await this.prisma.request.update({
        where: {
          id: requestId,
        },
        data: {
          processed: true,
        },
      });
      //set flags of according to what we have
      if (request.placeId != null) {
        const place = await this.prisma.place.update({
          where: {
            id: request.placeId,
          },
          data: {
            valid: true,
          },
        });
      }
      if (request.managerId != null) {
        const user = await this.prisma.user.update({
          where: {
            id: request.managerId,
          },
          data: {
            valid: true,
          },
        });
      }
      if (request.reviewId != null) {
        const review = await this.prisma.review.update({
          where: {
            id: request.reviewId,
          },
          data: {
            valid: false,
          },
        });
      }
      return request;
    } catch (err) {
      return new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return 'Processed successfully';
  }
  async addManagerRequest(
    @Body() dto: ManagerDTO,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ): Promise<Request | HttpException> {
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
      //create user
      const hash = await argon.hash(dto.password);

      //save the user in the db
      const user = await this.prisma.user.create({
        data: {
          email: dto.userEmail,
          hash: hash,
          gender: dto.gender,
          name: dto.userName,
          phoneNumber: dto.userPhoneNumber,
          roleTypeId: 2,
          dateOfBirth: dto.dateOfBirth,
          valid: false,
        },
      });
      delete user.hash;
      //create place
      const place = await this.prisma.place.create({
        data: {
          email: dto.placeEmail,
          name: dto.placeName,
          phoneNumber: dto.placePhoneNumber,
          city: dto.city,
          district: dto.district,
          address: dto.address,
          location: dto.location,
          website: dto.website,
          sector: dto.sector,
          description: dto.description,
          image: url,
          categoryId: dto.categoryId,
          managerId: user.id,
          hasReservation: dto.hasReservation,
          orientationId: dto.orientationId,
          valid: false,
          averagePricePerPerson: dto.averagePricePerPerson,
        },
      });

      //create request
      const request = await this.prisma.request.create({
        data: {
          managerId: user.id,
          requestTypeId: 1,
          placeId: place.id,
          processed: false,
        },
      });
      return request;
    } catch (err) {
      console.log(err.message);
      return new HttpException('Error Adding Place', HttpStatus.BAD_REQUEST);
    }
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

  async addReservationRequest(
    @Body() dto: ReservationDTO,
  ): Promise<Request | HttpException> {
    try {
      const packages = await this.prisma.package.findMany({
        where: {
          id: {
            in: dto.packagesIds,
          },
        },
      });
      const idsArray = packages.map((obj) => {
        return { id: obj.id };
      });
      const reservation = await this.prisma.reservation.create({
        data: {
          placeId: dto.placeId,
          cost: dto.cost,
          userId: dto.userId,
          endDate: dto.enddate,
          numberofpeople: dto.numberofpeople,
          startDate: dto.startdate,
          packages: {
            connect: idsArray,
          },
        },
        include: {
          packages: true,
        },
      });
      const request = await this.prisma.request.create({
        data: {
          requestTypeId: 4,
          reservationId: reservation.id,
          processed: false,
        },
      });
      return request;
    } catch (err) {
      return new HttpException(
        'Error Adding Reservation',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async acceptReservationRequest(dto: AcceptReservationRequestDTO) {
    await this.prisma.reservation.update({
      where: {
        id: dto.reservationId,
      },
      data: {
        pending: false,
        accepted: true,
      },
    });
  }
  async rejectReservationRequest(dto: AcceptReservationRequestDTO) {
    await this.prisma.reservation.update({
      where: {
        id: dto.reservationId,
      },
      data: {
        pending: false,
        accepted: false,
      },
    });
  }
}

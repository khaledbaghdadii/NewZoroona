import {
    Body,
    HttpException,
    HttpStatus,
    Injectable,
    Req,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import {Place, Request, User} from '@prisma/client';
import { ManagerDTO } from './dto';
import * as argon from "argon2";

@Injectable({})
export class RequestService {
    constructor(private prisma: PrismaService) {}
    async getAllRequests(): Promise<Request[] | HttpException> {
        const requests = await this.prisma.request.findMany();
        if (!requests) {
            return new HttpException(
                'Reqests not found',
                HttpStatus.NOT_FOUND,
            );
        }
        return requests;
    }
    async getRequestsPerType(requestTypeId: number): Promise<Request[] | HttpException> {
        const requests = await this.prisma.request.findMany({
            where:{
               requestTypeId: requestTypeId
            }
        });
        if (!requests) {
            return new HttpException(
                'Requests not found',
                HttpStatus.NOT_FOUND,
            );
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
                    processed: true
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
                    processed: true
                },
            });
            //set flags of according to what we have
            if(request.placeId!=null){
                const place = await this.prisma.place.update({
                    where: {
                        id: request.placeId,
                    },
                    data:{
                        valid: true
                    }
                });
            }
            if(request.managerId!=null){
                const user = await this.prisma.user.update({
                    where: {
                        id: request.managerId,
                    },
                    data:{
                        valid: true
                    }
                });
            }
            if(request.reviewId!=null){
                const review = await this.prisma.review.update({
                    where: {
                        id: request.reviewId,
                    },
                    data:{
                        valid: false
                    }
                });
            }
            return request;
        } catch (err) {
            return new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
        return 'Processed successfully';
    }
    async addManagerRequest(@Body() dto: ManagerDTO): Promise<Request | HttpException> {
        try {

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
                    valid:false,
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
                    image: dto.image,
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
                    processed:false
                },
            });
            return request;
        } catch (err) {
            return new HttpException('Error Adding Place', HttpStatus.BAD_REQUEST);
        }
    }
}

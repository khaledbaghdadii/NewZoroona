import {
    Body,
    HttpException,
    HttpStatus,
    Injectable,
    Req,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import {Request} from '@prisma/client';
import { AddDTO } from './dto';

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
}

import {
    Body,
    HttpException,
    HttpStatus,
    Injectable,
    Req,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { Review } from '@prisma/client';
import { AddDTO } from './dto';

@Injectable({})
export class ReviewService {
    constructor(private prisma: PrismaService) {}
    async getReviewsForPlace(placeId: number): Promise<Review[] | HttpException> {
        const reviews = await this.prisma.review.findMany({
            where: {
                placeId: placeId,
                valid: true
            },
            include:{
                User:true
            }
        });
        if (!reviews) {
            return new HttpException('Reviews not found', HttpStatus.NOT_FOUND);
        }
        return reviews;
    }
    async deleteReview(reviewId: number) {
        try {
            await this.prisma.review.delete({
                where: {
                    id: reviewId,
                },
            });
        } catch (error) {
            return new HttpException('Review not found', HttpStatus.NOT_FOUND);
        }
        return 'Deleted successfully';
    }
    async addReview(@Body() dto: AddDTO): Promise<Review | HttpException> {
        try {
            const review = await this.prisma.review.create({
                data: {
                    placeId: dto.placeId,
                    feedback: dto.feedback,
                    rating: dto.rating,
                    userId: dto.userId,
                    valid: true
                },
            });
            return review;
        } catch (err) {
            return new HttpException('Error Adding Review', HttpStatus.BAD_REQUEST);
        }
    }
}

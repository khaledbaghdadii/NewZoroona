import {Body, Controller, Get, ParseIntPipe, Post, Query, Req} from '@nestjs/common';
import {  AddDTO } from './dto';
import { ReviewService } from './review.service';
import {Review} from "@prisma/client";

@Controller('reviews')
export class ReviewController {
    constructor(private reviewService: ReviewService) {}
    @Get('reviews')
    getReviews(@Query('placeId', ParseIntPipe) placeId: number) {
        return this.reviewService.getReviewsForPlace(placeId);
    }
    @Post('delete')
    deleteReview(@Body('reviewId', ParseIntPipe) reviewId: number) {
        return this.reviewService.deleteReview(reviewId);
    }
    @Post('add')
    addReview(@Body() dto: AddDTO) {
        return this.reviewService.addReview(dto);
    }
}

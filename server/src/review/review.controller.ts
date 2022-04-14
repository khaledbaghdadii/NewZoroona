import {Body, Controller, Get, ParseIntPipe, Post, Query, Req, UseGuards} from '@nestjs/common';
import {  AddDTO } from './dto';
import { ReviewService } from './review.service';
import {Review} from "@prisma/client";
import {RolesGuard} from "./guards/local.guard";
import {Roles} from "../auth/decorators/roles.decorators";

@Controller('reviews')
export class ReviewController {
    constructor(private reviewService: ReviewService) {}
    @Get('reviews')
    getReviews(@Query('placeId', ParseIntPipe) placeId: number) {
        return this.reviewService.getReviewsForPlace(placeId);
    }
    @UseGuards(RolesGuard)
    @Roles('admin')
    @Post('delete')
    deleteReview(@Body('reviewId', ParseIntPipe) reviewId: number) {
        return this.reviewService.deleteReview(reviewId);
    }
    @UseGuards(RolesGuard)
    @Roles('user')
    @Post('add')
    addReview(@Body() dto: AddDTO) {
        return this.reviewService.addReview(dto);
    }
}

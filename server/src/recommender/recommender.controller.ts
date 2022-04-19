import {
    Body,
    Controller,
    Get,
    ParseIntPipe,
    Post,
    Query,
    UseGuards,
} from '@nestjs/common';
import { Roles } from 'src/auth/decorators/roles.decorators';
import {RecommenderService} from "../recommender/recommender.service";

@Controller('recommender')
export class RecommenderController {
    constructor(private recommenderService: RecommenderService) {}
    @Get('/place')
    getReports(@Query('placeId', ParseIntPipe) placeId: number) {
        return this.recommenderService.getRecommendationsPerPlace(placeId);
    }
}
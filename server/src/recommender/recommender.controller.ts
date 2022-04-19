import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';

import { RecommenderService } from '../recommender/recommender.service';

@Controller('recommender')
export class RecommenderController {
  constructor(private recommenderService: RecommenderService) {}
  @Get('/place')
  getReports(@Query('placeId', ParseIntPipe) placeId: number) {
    return this.recommenderService.getRecommendationsPerPlace(placeId);
  }
}

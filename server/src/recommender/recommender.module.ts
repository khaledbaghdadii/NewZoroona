import { Module } from '@nestjs/common';

import { RecommenderController } from './recommender.controller';
import { RecommenderService } from './recommender.service';

@Module({
  imports: [],
  controllers: [RecommenderController],
  providers: [RecommenderService],
})
export class RecommenderModule {}

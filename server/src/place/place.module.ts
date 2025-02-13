import { Module } from '@nestjs/common';

import { PlaceController } from './place.controller';
import { PlaceService } from './place.service';

@Module({
  imports: [],
  controllers: [PlaceController],
  providers: [PlaceService],
})
export class PlaceModule {}

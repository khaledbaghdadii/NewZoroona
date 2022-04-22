import { Module } from '@nestjs/common';
import { OrientationCategory } from './orientation.controller';
import { OrientationService } from './orientation.service';

@Module({
  imports: [],
  controllers: [OrientationCategory],
  providers: [OrientationService],
})
export class OrientationModule {}

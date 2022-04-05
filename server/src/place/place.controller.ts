import { Controller, Get, Req } from '@nestjs/common';

import { PlaceService } from './place.service';

@Controller('places')
export class PlaceController {
  constructor(private placeService: PlaceService) {}
  @Get('me')
  getCurrentUser(@Req() req) {
    return this.placeService.getPlace(req);
  }
}

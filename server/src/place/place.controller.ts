import {Body, Controller, Get, ParseIntPipe, Post, Query, Req} from '@nestjs/common';
import { UpdateDTO, AddDTO } from './dto';
import { PlaceService } from './place.service';
import {Roles} from "../auth/decorators/roles.decorators";

@Controller('places')
export class PlaceController {
  constructor(private placeService: PlaceService) {}
  @Get('place')
  getPlace(@Query('placeId', ParseIntPipe) placeId: number) {
    return this.placeService.getPlace(placeId);
  }
  @Post('delete')
  deletePlace(@Body('placeId', ParseIntPipe) placeId: number) {
    return this.placeService.deletePlace(placeId);
  }
  @Post('update')
  updatePlace(@Body() dto: UpdateDTO) {
    return this.placeService.updatePlace(dto);
  }
  @Post('add')
  addPlace(@Body() dto: AddDTO) {
    return this.placeService.addPlace(dto);
  }
}

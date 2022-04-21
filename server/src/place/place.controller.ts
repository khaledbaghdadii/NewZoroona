import {
  Body,
  Controller,
  Get, ParseArrayPipe, ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UpdateDTO, AddDTO } from './dto';
import { PlaceService } from './place.service';
import { Roles } from '../auth/decorators/roles.decorators';
import { RolesGuard } from '../place/guards/local.guard';

@Controller('places')
export class PlaceController {
  constructor(private placeService: PlaceService) {}
  @Get('place')
  getPlace(@Query('placeId', ParseIntPipe) placeId: number) {
    return this.placeService.getPlace(placeId);
  }
  @Get('search')
  searchPlaceByTitle(@Query('text') text: string) {
    return this.placeService.searchPlaceByTitle(text);
  }
  @UseGuards(RolesGuard)
  @Post('delete')
  @Roles('admin')
  deletePlace(@Body('placeId', ParseIntPipe) placeId: number) {
    return this.placeService.deletePlace(placeId);
  }
  @UseGuards(RolesGuard)
  @Post('update')
  @Roles('admin', 'manager')
  updatePlace(@Body() dto: UpdateDTO) {
    return this.placeService.updatePlace(dto);
  }
  @UseGuards(RolesGuard)
  @Post('add')
  @Roles('admin')
  addPlace(@Body() dto: AddDTO) {
    return this.placeService.addPlace(dto);
  }
  @UseGuards(RolesGuard)
  @Post('feature')
  @Roles('admin')
  featurePlace(@Body('placeId', ParseIntPipe) placeId: number, @Body('feature',ParseBoolPipe) feature: boolean) {
    return this.placeService.featurePlace(placeId,feature);
  }
  @Get('filter')
  getPlaceByFilters(@Query('orientation',ParseArrayPipe) orientation: number[],
                    @Query('category',ParseArrayPipe) category: number[],
                    @Query('district',ParseArrayPipe) district: string[],
                    @Query('hasReservation',ParseIntPipe) hasReservation: number) {

    category= category.map(Number);
    console.log(category);
    orientation= orientation.map(Number);
    console.log(orientation);
    console.log(hasReservation);
    return this.placeService.getPlacesByFilter(orientation,category,district,hasReservation);
  }
}

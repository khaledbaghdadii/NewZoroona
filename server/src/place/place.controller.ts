import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UpdateDTO, AddDTO, FeatureDTO, FilterDTO } from './dto';
import { PlaceService } from './place.service';
import { Roles } from '../auth/decorators/roles.decorators';
import { RolesGuard } from '../place/guards/local.guard';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('places')
export class PlaceController {
  constructor(private placeService: PlaceService) {}
  @Get('place')
  getPlace(@Query('placeId', ParseIntPipe) placeId: number) {
    return this.placeService.getPlace(placeId);
  }
  @Get('featured')
  getFeaturedPlaces() {
    return this.placeService.getFeaturedPlaces();
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
  @UseInterceptors(FilesInterceptor('image'))
  addPlace(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() dto: AddDTO,
  ) {
    return this.placeService.addPlace(dto, files);
  }
  @UseGuards(RolesGuard)
  @Post('feature')
  @Roles('admin')
  featurePlace(@Body() dto: FeatureDTO) {
    return this.placeService.featurePlace(dto);
  }
  @Post('filter')
  getPlaceByFilters(@Body() dto: FilterDTO) {
    return this.placeService.getPlacesByFilter(dto);
  }
  @Get('district')
  getDistricts() {
    return this.placeService.getAllDistricts();
  }
  @Get('all')
  getAllPlaces() {
    return this.placeService.getAllPlaces();
  }
  @Post('uploadImage')
  @UseInterceptors(FilesInterceptor('image'))
  uploadFile(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body('placeId', ParseIntPipe) placeId: number,
  ) {
    return this.placeService.uploadFile(files, placeId);
  }
}

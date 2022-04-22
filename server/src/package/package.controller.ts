import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';

import { PackageService } from './package.service';
// import { Package } from '@prisma/client';
import { RolesGuard } from '../package/guards/local.guard';
import { Roles } from '../auth/decorators/roles.decorators';
import { AddDTO } from '../package/dto';

@Controller('packages')
export class PackageController {
  constructor(private packageService: PackageService) {}
  @Get('packages')
  getPackagesForPlace(@Query('placeId', ParseIntPipe) placeId: number) {
    return this.packageService.getPackagesForPlace(placeId);
  }
  @UseGuards(RolesGuard)
  @Roles('admin', 'manager')
  @Post('delete')
  deletePackage(@Body('packageId', ParseIntPipe) packageId: number) {
    return this.packageService.deletePackage(packageId);
  }
  @UseGuards(RolesGuard)
  @Roles('admin', 'manager')
  @Post('add')
  addPackage(@Body() dto: AddDTO) {
    return this.packageService.addPackage(dto);
  }
}

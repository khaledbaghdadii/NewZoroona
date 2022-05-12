import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';

import { ReservationService } from './reservation.service';
import { Package } from '@prisma/client';
import { RolesGuard } from '../reservation/guards/local.guard';
import { Roles } from '../auth/decorators/roles.decorators';
import { AddDTO } from '../reservation/dto';

@Controller('reservations')
export class ReservationController {
  constructor(private reservationService: ReservationService) {}
  @Get('reservations')
  getReservationsForPlace(@Query('placeId', ParseIntPipe) placeId: number) {
    return this.reservationService.getReservationsForPlace(placeId);
  }

  @Post('delete')
  deleteReservation(
    @Body('reservationId', ParseIntPipe) reservationId: number,
  ) {
    return this.reservationService.deleteReservation(reservationId);
  }
  @Post('add')
  addReservation(@Body() dto: AddDTO) {
    return this.reservationService.addReservation(dto);
  }
}

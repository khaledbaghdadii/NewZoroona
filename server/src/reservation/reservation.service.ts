import {
  Body,
  HttpException,
  HttpStatus,
  Injectable,
  Req,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { Reservation, Package } from '@prisma/client';
import { AddDTO } from '../reservation/dto';

@Injectable({})
export class ReservationService {
  constructor(private prisma: PrismaService) {}
  async getReservationsForPlace(
    placeId: number,
  ): Promise<Reservation[] | HttpException> {
    const reservations = await this.prisma.reservation.findMany({
      where: {
        placeId: placeId,
        pending: true,
      },
      include:{
        User: true
      }
    });
    if (!reservations) {
      console.log('Error here');
      return new HttpException('Reservations not found', HttpStatus.NOT_FOUND);
    }
    return reservations;
  }
  async deleteReservation(reservationId: number) {
    try {
      await this.prisma.reservation.delete({
        where: {
          id: reservationId,
        },
      });
    } catch (error) {
      return new HttpException('Reservation not found', HttpStatus.NOT_FOUND);
    }
    return 'Deleted successfully';
  }
  async addReservation(
    @Body() dto: AddDTO,
  ): Promise<Reservation | HttpException> {
    try {
      const packages = await this.prisma.package.findMany({
        where: {
          id: {
            in: dto.packagesIds,
          },
        },
      });
      const idsArray = packages.map((obj) => {
        return { id: obj.id };
      });
      const reservation = await this.prisma.reservation.create({
        data: {
          placeId: dto.placeId,
          cost: dto.cost,
          userId: dto.userId,
          endDate: dto.enddate,
          numberofpeople: dto.numberofpeople,
          startDate: dto.startdate,
          packages: {
            connect: idsArray,
          },
        },
        include: {
          packages: true,
        },
      });
      return reservation;
    } catch (err) {
      return new HttpException(
        'Error Adding Reservation',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

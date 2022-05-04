import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Report } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddDTO } from '../report/dto';

@Injectable({})
export class ReportService {
  constructor(private prisma: PrismaService) {}
  async getReports(): Promise<Report[] | HttpException> {
    try {
      const reports = await this.prisma.report.findMany({});
      return reports;
    } catch (e) {
      return new HttpException('an error occured', HttpStatus.NOT_FOUND);
    }
  }
  async getReportsForReview(
    reviewId: number,
  ): Promise<Report[] | HttpException> {
    try {
      const reports = await this.prisma.report.findMany({
        where: {
          reviewId: reviewId,
        },
      });
      return reports;
    } catch (e) {
      return new HttpException('an error occured', HttpStatus.NOT_FOUND);
    }
  }
  async deleteReport(reportId: number): Promise<boolean | HttpException> {
    try {
      await this.prisma.report.delete({
        where: {
          id: reportId,
        },
      });
      return true;
    } catch (e) {
      return new HttpException(
        "Can't delete report since it is not found",
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async createReport(@Body() dto: AddDTO): Promise<Report | HttpException> {
    try {
      const report = await this.prisma.report.create({
        data: {
          reviewId: dto.reviewId,
          description: dto.description,
          reporterId: dto.reporterId,
        },
      });
      return report;
    } catch (err) {
      return new HttpException('Error Adding Report', HttpStatus.BAD_REQUEST);
    }
  }
}

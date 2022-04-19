import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Report } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

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
}

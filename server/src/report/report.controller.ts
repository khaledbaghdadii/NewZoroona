import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Roles } from 'src/auth/decorators/roles.decorators';
import { ReportService } from './report.service';
import { RolesGuard } from './guards/role.guards';
import {AddDTO} from "./dto";

@Controller('report')
export class ReportController {
  constructor(private reportService: ReportService) {}
  @UseGuards(RolesGuard)
  @Roles('admin')
  @Get('/')
  getReports() {
    return this.reportService.getReports();
  }
  @UseGuards(RolesGuard)
  @Roles('admin')
  @Post('/delete')
  deleteReport(@Body('reportId', ParseIntPipe) reportId: number) {
    return this.reportService.deleteReport(reportId);
  }

  @UseGuards(RolesGuard)
  @Roles('admin')
  @Get('/review')
  getReportsForReview(@Query('reviewId', ParseIntPipe) reviewId: number) {
    return this.reportService.getReportsForReview(reviewId);
  }

  @UseGuards(RolesGuard)
  @Roles('user')
  @Post('report')
  createReport(@Body() dto: AddDTO) {
    return this.reportService.createReport(dto);
  }

}

import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Roles } from 'src/auth/decorators/roles.decorators';
import { ReportService } from './report.service';
import { RolesGuard } from './guards/role.guards';
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
    return this.reportService.getReports();
  }
}

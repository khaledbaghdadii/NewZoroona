import {Body, Controller, Get, ParseIntPipe, Post, Query, Req, UseGuards} from '@nestjs/common';
import {  AddDTO } from './dto';
import { RequestService } from './request.service';
import {Review} from "@prisma/client";
import {RolesGuard} from "./guards/local.guard";
import {Roles} from "../auth/decorators/roles.decorators";

@Controller('requests')
export class RequestController {
    constructor(private requestService: RequestService) {}
    @Get('requests')
    getAllRequests() {
        return this.requestService.getAllRequests();
    }
    @Get('requestType')
    getRequestsPerType(@Query('requestTypeId', ParseIntPipe) requestTypeId: number) {
        return this.requestService.getRequestsPerType(requestTypeId);
    }
    @UseGuards(RolesGuard)
    @Roles('admin')
    @Post('accept')
    acceptRequest(@Body('requestId', ParseIntPipe) requestId: number) {
        return this.requestService.acceptRequest(requestId);
    }
    @UseGuards(RolesGuard)
    @Roles('admin')
    @Post('reject')
    rejectRequest(@Body('requestId', ParseIntPipe) requestId: number) {
        return this.requestService.rejectRequest(requestId);
    }
}

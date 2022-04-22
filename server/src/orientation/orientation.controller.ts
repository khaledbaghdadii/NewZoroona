import { Controller, Get } from '@nestjs/common';

import { OrientationService } from './orientation.service';

@Controller('orientation')
export class OrientationCategory {
  constructor(private orientationService: OrientationService) {}
  @Get('')
  getAll() {
    return this.orientationService.getAll();
  }
}

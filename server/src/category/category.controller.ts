import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private categortService: CategoryService) {}
  @Get('')
  getAll() {
    return this.categortService.getAll();
  }
}

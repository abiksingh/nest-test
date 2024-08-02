import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('rides')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRideData() {
    return this.appService.getRideData();
  }
}
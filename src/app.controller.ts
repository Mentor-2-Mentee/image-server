import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  sayHi(): string {
    return 'Hi';
  }

  @Get('/health')
  checkHealth(): string {
    return 'OK';
  }
}

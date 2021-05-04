import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { EntityPostDTO, EntityPutDTO } from './dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({
    status: 200,
    type: EntityPutDTO,
  })
  getPut(): EntityPutDTO {
    return this.appService.getPut();
  }

  @Get()
  @ApiResponse({
    status: 200,
    type: EntityPostDTO,
  })
  getPost(): EntityPostDTO {
    return this.appService.getPost();
  }
}

import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { InfoService } from './info.service';

@Controller('info')
export class InfoController {
  constructor(private readonly service: InfoService) {}

  @Get('/general')
  async getGeneralInfo(@Res() response: Response) {
    const result = await this.service.getGeneralInfo();
    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }

  @Get('/states')
  async getStatesInfo(@Res() response: Response) {
    const result = await this.service.getStatesInfo();
    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }

  @Get('/cultures')
  async getCulturesInfo(@Res() response: Response) {
    const result = await this.service.getCulturesInfo();
    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }

  @Get('/ground')
  async getGroundInfo(@Res() response: Response) {
    const result = await this.service.getGroundInfo();
    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}

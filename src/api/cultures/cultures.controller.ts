import { Controller, Get, Post, Delete, Put, Res, Body, Param } from '@nestjs/common';
import { Response } from 'express';
import { CulturesService } from './cultures.service';

@Controller('cultures')
export class CulturesController {
  constructor(private readonly service: CulturesService) {}

  @Post('/')
  async create(@Body() culture, @Res() response: Response) {
    const result = await this.service.create(culture);

    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }

  @Get('/')
  async getAll(@Res() response: Response) {
    const result = await this.service.getAll();

    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }

  @Delete('/:id')
  async delete(@Param() params, @Res() response: Response) {
    const { id } = params
    const result = await this.service.delete(id);

    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).json({ result: 'success' }).end();
  }

  @Put('/')
  async update(@Body() producer, @Res() response: Response) {
    const result = await this.service.update(producer);

    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}

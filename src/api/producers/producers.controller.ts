import { Controller, Get, Post, Delete, Put, Res, Body, Param } from '@nestjs/common';
import { Response } from 'express';
import { ProducersService } from './producers.service';

@Controller('producers')
export class ProducersController {
  constructor(private producersService: ProducersService) {}

  @Post('/')
  async create(@Body() producer, @Res() response: Response) {
    const result = await this.producersService.create(producer);

    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
  @Get('/')
  async getAll(@Res() response: Response) {
    const result = await this.producersService.getAll();

    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
  @Delete('/:id')
  async delete(@Param() params, @Res() response: Response) {
    const { id } = params
    const result = await this.producersService.delete(id);

    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).json({ result: 'success' }).end();
  }
  @Put('/')
  async update(@Body() producer, @Res() response: Response) {
    const result = await this.producersService.update(producer);

    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
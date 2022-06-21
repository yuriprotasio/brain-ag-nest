import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { connectionSource } from '../../database/index';
import { Culture } from '../../models/culture.model';
import { Producer } from '../../models/producer.model';
import { producers } from './seed/producers';
import { cultures } from './seed/cultures';

@Controller('internals')
export class InitialSeed {
  constructor() {}

  @Get('/initial-seed')
  async seed(@Res() response: Response) {
    const producerRepository = await connectionSource.getRepository(Producer);
    const cultureRepository = await connectionSource.getRepository(Culture);
    await producerRepository.save(producers);
    await cultureRepository.save(cultures);

    return response.json({ result: 'Database seed finished.' })
  }
}

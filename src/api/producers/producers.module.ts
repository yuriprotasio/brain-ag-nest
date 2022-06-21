import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducersController } from './producers.controller';
import { ProducersService } from './producers.service';
import { Producer } from '../../models/producer.model';
import { ProducersRepository } from './producers.repository';
import { CulturesModule } from '../cultures/cultures.module';

@Module({
  imports: [TypeOrmModule.forFeature([Producer]), forwardRef(() => CulturesModule)],
  controllers: [ProducersController],
  providers: [ProducersService, ProducersRepository],
  exports: [ProducersRepository]
})
export class ProducersModule {}

import { Module } from '@nestjs/common';
import { InfoController } from './info.controller';
import { InfoService } from './info.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Culture } from '../../models/culture.model';
import { Producer } from '../../models/producer.model';
import { CulturesModule } from '../cultures/cultures.module';
import { ProducersModule } from '../producers/producers.module';

@Module({
  imports: [TypeOrmModule.forFeature([Culture, Producer]), CulturesModule, ProducersModule],
  controllers: [InfoController],
  providers: [InfoService],
})
export class InfoModule {}

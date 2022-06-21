import { Module, forwardRef } from '@nestjs/common';
import { CulturesController } from './cultures.controller';
import { CulturesService } from './cultures.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Culture } from '../../models/culture.model';
import { CulturesRepository } from './cultures.repository';
import { ProducersModule } from '../producers/producers.module';

@Module({
  imports: [TypeOrmModule.forFeature([Culture]), forwardRef(() => ProducersModule)],
  controllers: [CulturesController],
  providers: [CulturesService, CulturesRepository],
})
export class CulturesModule {}

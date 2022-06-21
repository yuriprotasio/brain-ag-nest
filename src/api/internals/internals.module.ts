import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Culture } from '../../models/culture.model';
import { Producer } from '../../models/producer.model';
import { InitialSeed } from './initial-seed';

@Module({
  imports: [TypeOrmModule.forFeature([Culture, Producer])],
  controllers: [InitialSeed],
  providers: [],
})
export class InternalsModule {}

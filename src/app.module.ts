import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CulturesModule } from './api/cultures/cultures.module';
import { InfoModule } from './api/info/info.module';
import { InternalsModule } from './api/internals/internals.module';
import { ProducersModule } from './api/producers/producers.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Culture } from './models/culture.model';
import { Producer } from './models/producer.model';
import { connectionSource } from './database/index';

@Module({
  imports: [
    Culture,
    Producer,
    TypeOrmModule.forRoot(connectionSource.options),
    CulturesModule,
    InfoModule,
    ProducersModule,
    InternalsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

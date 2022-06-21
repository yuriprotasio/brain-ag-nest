import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CulturesModule } from './api/cultures/cultures.module';
import { InfoModule } from './api/info/info.module';
import { ProducersModule } from './api/producers/producers.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Culture } from './models/culture.model';
import { Producer } from './models/producer.model';

@Module({
  imports: [
    Culture,
    Producer,
    TypeOrmModule.forRoot({
      "type": "postgres",
      "host": "localhost",
      "port": 5432,
      "username": "postgres",
      "password": "123",
      "database": "brain_ag",
      "logging": false,
      "entities": [
        "src/models/**/*.ts"
      ],
      "migrations": [
        "src/database/migrations/**/*.ts"
      ]
    }),
    CulturesModule,
    InfoModule,
    ProducersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { TypeOrmModule } from '@nestjs/typeorm';
import { Culture } from '../src/models/culture.model';
import { Producer } from '../src/models/producer.model';

export const TypeOrmPostgresTestingModule = () => [
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'brain_ag_test',
    logging: false,
    synchronize: true,
    entities: [
      'src/models/**/*.ts'
    ],
    migrations: [
      'src/database/migrations/**/*.ts'
    ]
  }),
  TypeOrmModule.forFeature([Culture, Producer]),
];
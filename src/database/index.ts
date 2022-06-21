import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123',
  database: 'brain_ag',
  logging: false,
  entities: [
    'src/models/**/*.ts'
  ],
  migrations: [
    'src/database/migrations/**/*.ts'
  ]
})
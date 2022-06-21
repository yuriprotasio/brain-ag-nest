import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProducers1655438840109 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

    await queryRunner.createTable(new Table({
      name: 'producers',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()'
        },
        {
          name: 'cpf',
          type: 'varchar'
        },
        {
          name: 'cnpj',
          type: 'varchar'
        },
        {
          name: 'producer_name',
          type: 'varchar'
        },
        {
          name: 'farm_name',
          type: 'varchar'
        },
        {
          name: 'city',
          type: 'varchar'
        },
        {
          name: 'state',
          type: 'varchar'
        },
        {
          name: 'total_farm_hectare',
          type: 'decimal(10,2)'
        },
        {
          name: 'arable_hectare',
          type: 'decimal(10,2)'
        },
        {
          name: 'vegetation_hectare',
          type: 'decimal(10,2)'
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('producers');
    await queryRunner.query('DROP EXTENSION "uuid-ossp"');
  }

}

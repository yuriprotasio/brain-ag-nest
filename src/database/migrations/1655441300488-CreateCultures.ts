import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCultures1655441300488 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'cultures',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()'
        },
        {
          name: 'producer_id',
          type: 'uuid'
        },
        {
          name: 'culture_name',
          type: 'varchar'
        }
      ],
      foreignKeys: [
        {
          name: 'fk_culture_producer_id',
          columnNames: ['producer_id'],
          referencedTableName: 'producers',
          referencedColumnNames: ['id'],
          onDelete: 'CASCADE'
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cultures');
  }

}

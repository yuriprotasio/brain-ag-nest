import 'reflect-metadata';
import { forwardRef, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ProducersController } from './producers.controller';
import { ProducersService } from './producers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Culture } from '../../models/culture.model';
import { ProducersModule } from '../producers/producers.module';
import { TypeOrmPostgresTestingModule } from '../../../test/typeorm-testing.module';
import * as sinon from 'sinon';
import { ProducersRepository } from '../producers/producers.repository';
import { CulturesRepository } from '../cultures/cultures.repository';
import { farmOne, farmTwo, farmThree } from '../../../test/fixtures/producers/fixture';

jest.mock('typeorm', () => jest.requireActual('typeorm'));

describe('producers.service.spec tests', () => {
  let app: INestApplication;
  let sandbox = sinon.createSandbox();
  let producersRepository, culturesRepository, service;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forFeature([Culture]),
        forwardRef(() => ProducersModule),
        ...TypeOrmPostgresTestingModule()
      ],
      controllers: [ProducersController],
      providers: [ProducersService, ProducersRepository]
    }).compile();

    app = moduleRef.createNestApplication();
    service = moduleRef.get<ProducersService>(ProducersService);
    producersRepository = moduleRef.get<ProducersRepository>(ProducersRepository);
    culturesRepository = moduleRef.get<CulturesRepository>(CulturesRepository);
    await app.init();
  })

  beforeEach(async () => {
    await culturesRepository.delete({});
    await producersRepository.delete({});
  });

  afterEach(() => sandbox.restore());

  describe('.create', () => {
    it('should return error when cpf is invalid', async () => {
      const response = await service.create({ ...farmOne, cpf: '1234567890' });
      expect(response.message).toEqual('CPF is invalid!');
    });

    it('should return error when cnpj is invalid', async () => {
      const response = await service.create({ ...farmOne, cnpj: '1234567890' });
      expect(response.message).toEqual('CNPJ is invalid!');
    });

    it('should return error when arable area plus vegetable area is greater than total area', async () => {
      const response = await service.create({ ...farmThree });
      expect(response.message).toEqual('Arable and Vegetation area cannot be greater than total farm area!');
    });

    it('should return producer saved and formated', async () => {
      const response = await service.create({ ...farmOne, cpf: '33966350009', cnpj: '59461763000182' });
      expect(response).toEqual({ ...farmOne, created_at: response.created_at });
    });
  });

  describe('.getAll', () => {
    it('should return all producers saved when everything is fine', async () => {
      await producersRepository.save([farmOne, farmTwo]);
      const response = await service.getAll();
      expect(response).toEqual([farmOne, farmTwo]);
    });
  });

  describe('.delete', () => {
    it('should return error when has not found producer to delete', async () => {
      const response = await service.delete('123');
      expect(response.message).toEqual('Producer does not exists!');
    });

    it('should return affected 1 when find culture to delete', async () => {
      await producersRepository.save(farmOne);
      const response = await service.delete(farmOne.id);
      expect(response.affected).toEqual(1);
    });
  });

  describe('.update', () => {
    it('should return error when has not found producer to update', async () => {
      const response = await service.update({});
      expect(response.message).toEqual('Producer does not exists!');
    });

    it('should return affected 1 when find producer to delete', async () => {
      await producersRepository.save(farmOne);
      const response = await service.update({ ...farmOne, producer_name: 'producer name update' });
      expect(response).toEqual({ ...farmOne, producer_name: 'producer name update' });
    });
  });
});
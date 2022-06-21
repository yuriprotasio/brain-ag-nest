import 'reflect-metadata';
import { forwardRef, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CulturesController } from './cultures.controller';
import { CulturesService } from './cultures.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Culture } from '../../models/culture.model';
import { ProducersModule } from '../producers/producers.module';
import { TypeOrmPostgresTestingModule } from '../../test-utils/typeorm-testing.module';
import * as sinon from 'sinon';
import { ProducersRepository } from '../producers/producers.repository';
import { CulturesRepository } from '../cultures/cultures.repository';
import { farmOne } from '../../../test/fixtures/producers/fixture';
import { cultureOne, cultureTwo, cultureThree } from '../../../test/fixtures/cultures/fixture';

jest.mock('typeorm', () => jest.requireActual('typeorm'));

describe('cultures.service.spec tests', () => {
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
      controllers: [CulturesController],
      providers: [CulturesService, CulturesRepository]
    }).compile();

    app = moduleRef.createNestApplication();
    service = moduleRef.get<CulturesService>(CulturesService);
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
    it('should return error when culture already exists for the producer', async () => {
      await producersRepository.save([farmOne]);
      await culturesRepository.save([cultureOne]);
      const response = await service.create(cultureOne);
      expect(response.message).toEqual('Culture already exists!');
    });

    it('should return error when producer does not exists', async () => {
      const response = await service.create(cultureOne);
      expect(response.message).toEqual('Producer does not exists!');
    });

    it('should return culture saved when everything is fine', async () => {
      await producersRepository.save(farmOne);
      const response = await service.create(cultureOne);
      expect(response).toEqual(cultureOne);
    });
  });

  describe('.getAll', () => {
    it('should return all cultures saved when everything is fine', async () => {
      await producersRepository.save(farmOne);
      await culturesRepository.save([cultureOne, cultureTwo, cultureThree]);
      const response = await service.getAll(cultureOne);
      expect(response).toEqual([
        { ...cultureOne, producer: farmOne },
        { ...cultureTwo, producer: farmOne },
        { ...cultureThree, producer: farmOne }
      ]);
    });
  });

  describe('.delete', () => {
    it('should return error when has not found culture to delete', async () => {
      const response = await service.delete('123');
      expect(response.message).toEqual('Culture does not exists!');
    });

    it('should return affected 1 when find culture to delete', async () => {
      await producersRepository.save(farmOne);
      await culturesRepository.save(cultureOne);
      const response = await service.delete(cultureOne.id);
      expect(response.affected).toEqual(1);
    });
  });

  describe('.update', () => {
    it('should return error when has not found culture to update', async () => {
      const response = await service.update({});
      expect(response.message).toEqual('Culture does not exists!');
    });

    it('should return affected 1 when find culture to delete', async () => {
      await producersRepository.save(farmOne);
      await culturesRepository.save(cultureOne);
      const response = await service.update({ ...cultureOne, culture_name: 'culture name update' });
      expect(response).toEqual({ ...cultureOne, culture_name: 'culture name update' });
    });
  });
});
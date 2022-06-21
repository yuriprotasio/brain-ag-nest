import { forwardRef, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { InfoController } from './info.controller';
import { InfoService } from './info.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Culture } from '../../models/culture.model';
import { ProducersModule } from '../producers/producers.module';
import { TypeOrmPostgresTestingModule } from '../../../test/typeorm-testing.module';
import * as sinon from 'sinon';
import { ProducersRepository } from '../producers/producers.repository';
import { CulturesRepository } from '../cultures/cultures.repository';
import { farmOne, farmTwo } from '../../../test/fixtures/producers/fixture';
import { cultureOne, cultureTwo, cultureThree, cultureFour } from '../../../test/fixtures/cultures/fixture';

jest.mock('typeorm', () => jest.requireActual('typeorm'));

describe('info.controller.spec tests', () => {
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
      controllers: [InfoController],
      providers: [InfoService]
    }).compile();

    app = moduleRef.createNestApplication();
    service = moduleRef.get<InfoService>(InfoService);
    producersRepository = moduleRef.get<ProducersRepository>(ProducersRepository);
    culturesRepository = moduleRef.get<CulturesRepository>(CulturesRepository);
    await app.init();
  })

  beforeEach(async () => {
    await culturesRepository.delete({});
    await producersRepository.delete({});
  });

  afterEach(() => sandbox.restore());

  describe('.getGeneralInfo', () => {
    it('should return general info', async () => {
      await producersRepository.save([farmOne, farmTwo]);
      await culturesRepository.save([cultureOne, cultureTwo, cultureThree]);
      const generalInfo = await service.getGeneralInfo();
      expect(generalInfo).toEqual({
        total_farm: '2',
        total_farm_hectare: '1000',
        total_arable_hectare: '160',
        total_vegetation_hectare: '24'
      })
    })
  })

  describe('.getStatesInfo', () => {
    it('should return states info', async () => {
      await producersRepository.save([farmOne, farmTwo]);
      await culturesRepository.save([cultureOne, cultureTwo, cultureThree]);
      const statesInfo = await service.getStatesInfo();
      expect(statesInfo).toEqual([{
        producer_state: 'São Paulo',
        total_farm_hectare: '1000',
        arable_hectare: '160',
        vegetation_hectare: '24',
        total_farm: '2'
      }])
    })
  })

  describe('.getCulturesInfo', () => {
    it('should return cultures info', async () => {
      await producersRepository.save([farmOne, farmTwo]);
      await culturesRepository.save([cultureOne, cultureTwo, cultureThree, cultureFour]);
      const culturesInfo = await service.getCulturesInfo();
      expect(culturesInfo).toEqual([
        { culture_culture_name: 'Algodão', total_culture: '2' },
        { culture_culture_name: 'Milho', total_culture: '1' },
        { culture_culture_name: 'Soja', total_culture: '1' }
      ]);
    })
  })

  describe('.getGroundInfo', () => {
    it('should return ground info', async () => {
      await producersRepository.save([farmOne, farmTwo]);
      await culturesRepository.save([cultureOne, cultureTwo, cultureThree, cultureFour]);
      const groundInfo = await service.getGroundInfo();
      expect(groundInfo).toEqual({
        total_farm: '2',
        total_farm_hectare: '1000',
        total_arable_hectare: '160',
        total_vegetation_hectare: '24'
      });
    })
  })
})
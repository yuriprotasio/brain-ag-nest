import 'reflect-metadata';
import { forwardRef, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CulturesController } from './cultures.controller';
import { CulturesService } from './cultures.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Culture } from '../../models/culture.model';
import { ProducersModule } from '../producers/producers.module';
import { TypeOrmPostgresTestingModule } from '../../../test/typeorm-testing.module';
import * as sinon from 'sinon';
import { ProducersRepository } from '../producers/producers.repository';
import { CulturesRepository } from '../cultures/cultures.repository';
import { Repository } from 'typeorm';
import { cultureOne } from '../../../test/fixtures/cultures/fixture';

jest.mock('typeorm', () => jest.requireActual('typeorm'));

describe('cultures.repository.spec tests', () => {
  let app: INestApplication;
  let sandbox = sinon.createSandbox();
  let producersRepository, culturesRepository;

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
    producersRepository = moduleRef.get<ProducersRepository>(ProducersRepository);
    culturesRepository = moduleRef.get<CulturesRepository>(CulturesRepository);
    await app.init();
  })

  afterEach(() => sandbox.restore());

  describe('.save', () => {
    it('should call create with exact params', async () => {
      const saveStub = sandbox.stub(Repository.prototype, 'save').resolves();
      await culturesRepository.save(cultureOne);
      sinon.assert.calledWithMatch(saveStub, cultureOne);
    });
  });

  describe('.getAll', () => {
    it('should call get all with exact params', async () => {
      const findStub = sandbox.stub(Repository.prototype, 'find').resolves();
      await culturesRepository.getAll();
      sinon.assert.calledWithMatch(findStub, { relations: ['producer'] });
    });
  });

  describe('.findOne', () => {
    it('should call find one with exact params', async () => {
      const findOneStub = sandbox.stub(Repository.prototype, 'findOne').resolves();
      await culturesRepository.findOne({ id: '123' });
      sinon.assert.calledWithMatch(findOneStub, { where: { id: '123' } });
    });
  });

  describe('.delete', () => {
    it('should call delete with exact params', async () => {
      const deleteStub = sandbox.stub(Repository.prototype, 'delete').resolves();
      await culturesRepository.delete({ id: '123' });
      sinon.assert.calledWithMatch(deleteStub, { id: '123' });
    });
  });
});
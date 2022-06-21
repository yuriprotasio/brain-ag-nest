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
import { farmOne } from '../../../test/fixtures/producers/fixture';
import { Repository } from 'typeorm';

jest.mock('typeorm', () => jest.requireActual('typeorm'));

describe('producers.repository.spec tests', () => {
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
      controllers: [ProducersController],
      providers: [ProducersService, CulturesRepository]
    }).compile();

    app = moduleRef.createNestApplication();
    producersRepository = moduleRef.get<ProducersRepository>(ProducersRepository);
    culturesRepository = moduleRef.get<CulturesRepository>(CulturesRepository);
    await app.init();
  })

  afterEach(() => sandbox.restore());

  describe('.save', () => {
    it('should call save with exact params', async () => {
      const saveStub = sandbox.stub(Repository.prototype, 'save').resolves();
      await producersRepository.save(farmOne);
      sinon.assert.calledWithMatch(saveStub, farmOne);
    });
  });

  describe('.getAll', () => {
    it('should call get all with exact params', async () => {
      const findStub = sandbox.stub(Repository.prototype, 'find').resolves();
      await producersRepository.getAll();
      sinon.assert.calledWithMatch(findStub);
    });
  });

  describe('.findOne', () => {
    it('should call find one with exact params', async () => {
      const findOneStub = sandbox.stub(Repository.prototype, 'findOne').resolves();
      await producersRepository.findOne({ id: '123' });
      sinon.assert.calledWithMatch(findOneStub, { where: { id: '123' } });
    });
  });

  describe('.delete', () => {
    it('should call delete with exact params', async () => {
      const deleteStub = sandbox.stub(Repository.prototype, 'delete').resolves();
      await producersRepository.delete({ id: '123' });
      sinon.assert.calledWithMatch(deleteStub, { id: '123' });
    });
  });
});
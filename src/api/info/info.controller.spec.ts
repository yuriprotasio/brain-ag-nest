import 'reflect-metadata';
import { forwardRef, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { InfoController } from './info.controller';
import { InfoService } from './info.service';
import * as request from 'supertest';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Culture } from '../../models/culture.model';
import { ProducersModule } from '../producers/producers.module';
import { TypeOrmPostgresTestingModule } from '../../../test/typeorm-testing.module';
import * as sinon from 'sinon';

jest.mock('typeorm', () => jest.requireActual('typeorm'));

describe('info.controller.spec tests', () => {
  let app: INestApplication;
  let sandbox = sinon.createSandbox();

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
    await app.init();
  })

  afterEach(() => sandbox.restore());

  describe('GET /info/general', () => {
    it('should return 200 when request runs everything fine', async () => {
      sandbox.stub(InfoService.prototype, 'getGeneralInfo').resolves();
      await request(app.getHttpServer()).get('/info/general').send({}).expect(200);
    })

    it('should return 400 when request does not run fine', async () => {
      sandbox.stub(InfoService.prototype, 'getGeneralInfo').resolves(new Error());
      await request(app.getHttpServer()).get('/info/general').send({}).expect(400);
    })
  })

  describe('GET /info/states', () => {
    it('should return 200 when request runs everything fine', async () => {
      sandbox.stub(InfoService.prototype, 'getStatesInfo').resolves();
      await request(app.getHttpServer()).get('/info/states').expect(200);
    })

    it('should return 400 when request does not run fine', async () => {
      sandbox.stub(InfoService.prototype, 'getStatesInfo').resolves(new Error());
      await request(app.getHttpServer()).get('/info/states').expect(400);
    })
  })

  describe('GET /info/cultures', () => {
    it('should return 200 when request runs everything fine', async () => {
      sandbox.stub(InfoService.prototype, 'getCulturesInfo').resolves();
      await request(app.getHttpServer()).get('/info/cultures').expect(200);
    })

    it('should return 400 when request does not run fine', async () => {
      sandbox.stub(InfoService.prototype, 'getCulturesInfo').resolves(new Error());
      await request(app.getHttpServer()).get('/info/cultures').expect(400);
    })
  })

  describe('GET /info/ground', () => {
    it('should return 200 when request runs everything fine', async () => {
      sandbox.stub(InfoService.prototype, 'getGroundInfo').resolves();
      await request(app.getHttpServer()).get('/info/ground').expect(200);
    })

    it('should return 400 when request does not run fine', async () => {
      sandbox.stub(InfoService.prototype, 'getGroundInfo').resolves(new Error());
      await request(app.getHttpServer()).get('/info/ground').expect(400);
    })
  })
})
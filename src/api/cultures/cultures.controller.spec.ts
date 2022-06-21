import 'reflect-metadata';
import { forwardRef, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CulturesController } from './cultures.controller';
import { CulturesService } from './cultures.service';
import * as request from 'supertest';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Culture } from '../../models/culture.model';
import { ProducersModule } from '../producers/producers.module';
import { TypeOrmPostgresTestingModule } from '../../../test/typeorm-testing.module';
import { CulturesRepository } from './cultures.repository';
import * as sinon from 'sinon';

jest.mock('typeorm', () => jest.requireActual('typeorm'));

describe('cultures.controller.spec tests', () => {
  let app: INestApplication;
  let sandbox = sinon.createSandbox();

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forFeature([Culture]),
        forwardRef(() => ProducersModule),
        ...TypeOrmPostgresTestingModule()
      ],
      controllers: [CulturesController],
      providers: [CulturesService, CulturesRepository]
    }).compile()

    app = moduleRef.createNestApplication();
    await app.init();
  })

  afterEach(async () => sandbox.restore());

  describe('POST /cultures', () => {
    it('should return 201 when request for create runs everything fine', async () => {
      sandbox.stub(CulturesService.prototype, 'create').resolves();
      await request(app.getHttpServer()).post('/cultures').send({}).expect(201);
    })

    it('should return 400 when request for create does not run fine', async () => {
      sandbox.stub(CulturesService.prototype, 'create').resolves(new Error());
      await request(app.getHttpServer()).post('/cultures').send({}).expect(400);
    })
  })

  describe('GET /cultures', () => {
    it('should return 200 when request for get all runs everything fine', async () => {
      sandbox.stub(CulturesService.prototype, 'getAll').resolves();
      await request(app.getHttpServer()).get('/cultures').expect(200);
    })

    it('should return 400 when request for get all does not run fine', async () => {
      sandbox.stub(CulturesService.prototype, 'getAll').resolves(new Error());
      await request(app.getHttpServer()).get('/cultures').expect(400);
    })
  })

  describe('DELETE /cultures/:id', () => {
    it('should return 200 when request for delete runs everything fine', async () => {
      sandbox.stub(CulturesService.prototype, 'delete').resolves();
      await request(app.getHttpServer()).delete('/cultures/123').expect(200);
    })

    it('should return 400 when request for delete does not run fine', async () => {
      sandbox.stub(CulturesService.prototype, 'delete').resolves(new Error());
      await request(app.getHttpServer()).delete('/cultures/123').expect(400);
    })
  })

  describe('PUT /cultures/:id', () => {
    it('should return 200 when request for update runs everything fine', async () => {
      sandbox.stub(CulturesService.prototype, 'update').resolves();
      await request(app.getHttpServer()).put('/cultures').send({}).expect(200);
    })

    it('should return 400 when request for update does not run fine', async () => {
      sandbox.stub(CulturesService.prototype, 'update').resolves(new Error());
      await request(app.getHttpServer()).put('/cultures').send({}).expect(400);
    })
  })
})
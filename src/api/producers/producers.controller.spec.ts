import 'reflect-metadata';
import { forwardRef, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ProducersController } from './producers.controller';
import { ProducersService } from './producers.service';
import * as request from 'supertest';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Culture } from '../../models/culture.model';
import { ProducersModule } from '../producers/producers.module';
import { TypeOrmPostgresTestingModule } from '../../../test/typeorm-testing.module';
import * as sinon from 'sinon';

jest.mock('typeorm', () => jest.requireActual('typeorm'));

describe('producers.controller.spec tests', () => {
  let app: INestApplication;
  let sandbox = sinon.createSandbox();

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forFeature([Culture]),
        forwardRef(() => ProducersModule),
        ...TypeOrmPostgresTestingModule()
      ],
      controllers: [ProducersController],
      providers: [ProducersService]
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  })

  afterEach(() => sandbox.restore());

  describe('POST /producers', () => {
    it('should return 201 when request runs everything fine', async () => {
      sandbox.stub(ProducersService.prototype, 'create').resolves();
      await request(app.getHttpServer()).post('/producers').send({}).expect(201);
    })

    it('should return 400 when request does not run fine', async () => {
      sandbox.stub(ProducersService.prototype, 'create').resolves(new Error());
      await request(app.getHttpServer()).post('/producers').send({}).expect(400);
    })
  })

  describe('GET /producers', () => {
    it('should return 200 when request runs everything fine', async () => {
      sandbox.stub(ProducersService.prototype, 'getAll').resolves();
      await request(app.getHttpServer()).get('/producers').expect(200);
    })

    it('should return 400 when request does not run fine', async () => {
      sandbox.stub(ProducersService.prototype, 'getAll').resolves(new Error());
      await request(app.getHttpServer()).get('/producers').expect(400);
    })
  })

  describe('DELETE /producers/:id', () => {
    it('should return 200 when request runs everything fine', async () => {
      sandbox.stub(ProducersService.prototype, 'delete').resolves();
      await request(app.getHttpServer()).delete('/producers/123').expect(200);
    })

    it('should return 400 when request does not run fine', async () => {
      sandbox.stub(ProducersService.prototype, 'delete').resolves(new Error());
      await request(app.getHttpServer()).delete('/producers/123').expect(400);
    })
  })

  describe('PUT /producers', () => {
    it('should return 200 when request runs everything fine', async () => {
      sandbox.stub(ProducersService.prototype, 'update').resolves();
      await request(app.getHttpServer()).put('/producers').send({}).expect(200);
    })

    it('should return 400 when request does not run fine', async () => {
      sandbox.stub(ProducersService.prototype, 'update').resolves(new Error());
      await request(app.getHttpServer()).put('/producers').send({}).expect(400);
    })
  })
})
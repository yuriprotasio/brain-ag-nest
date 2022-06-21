import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producer } from '../../models/producer.model';

@Injectable()
export class ProducersRepository {
  constructor(@InjectRepository(Producer) private model: Repository<Producer>) {}

  async save (producer) {
    return this.model.save(producer);
  }

  async getAll () {
    return this.model.find();
  }

  async findOne (params) {
    return this.model.findOne({ where: params });
  }

  async delete (params) {
    return this.model.delete(params);
  }
}

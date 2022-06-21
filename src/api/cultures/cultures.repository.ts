import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Culture } from '../../models/culture.model';

@Injectable()
export class CulturesRepository {
  constructor(@InjectRepository(Culture) private model: Repository<Culture>) {}

  async save (culture) {
    return this.model.save(culture);
  }

  async getAll () {
    return this.model.find({ relations: ['producer'] });
  }

  async findOne (params) {
    return this.model.findOne({ where: params });
  }

  async delete (params) {
    return this.model.delete(params);
  }
}

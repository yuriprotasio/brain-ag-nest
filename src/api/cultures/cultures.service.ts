import { Injectable } from '@nestjs/common';
import { Culture } from '../../models/culture.model';
import { CultureCreateRequest, CultureUpdateRequest } from './dto';
import { CulturesRepository } from './cultures.repository';
import { ProducersRepository } from '../producers/producers.repository';

@Injectable()
export class CulturesService {
  constructor(private culturesRepository: CulturesRepository, private producersRepository: ProducersRepository) {}

  async create(culture: CultureCreateRequest): Promise<Culture | Error> {
    const { producer_id, culture_name } = culture
    const foundCulture = await this.culturesRepository.findOne({ producer_id, culture_name });

    if(foundCulture) { return new Error('Culture already exists!'); }
    const producerExists = await this.producersRepository.findOne({ id: producer_id });
    if (!producerExists) { return new Error('Producer does not exists!'); }

    return this.culturesRepository.save(culture);
  }

  async getAll() {
    return this.culturesRepository.getAll();
  }

  async delete(id: string) {
    const culture = await this.culturesRepository.findOne({ id });
    if(!culture) { return new Error('Culture does not exists!'); }

    return this.culturesRepository.delete({ id });
  }

  async update(cultureToUpdate: CultureUpdateRequest) {
    const culture = await this.culturesRepository.findOne({ id: cultureToUpdate.id });
    if(!culture) { return new Error('Culture does not exists!'); }

    return this.culturesRepository.save({ ...culture, ...cultureToUpdate });
  }
}
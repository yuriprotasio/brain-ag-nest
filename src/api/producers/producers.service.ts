import { Producer } from '../../models/producer.model';
import { ProducerCreateRequest, ProducerUpdateRequest } from './dto';
import { cpf as cpfValidator, cnpj as cnpjValidator } from 'cpf-cnpj-validator'; 
import { ProducersRepository } from './producers.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProducersService {
  constructor(private producersRepository: ProducersRepository) {}

  async create(producer: ProducerCreateRequest): Promise<Producer | Error> {
    const { cpf, cnpj, arable_hectare, vegetation_hectare, total_farm_hectare } = producer
    
    if(!cpfValidator.isValid(cpf)) { return new Error('CPF is invalid!'); }
    if(!cnpjValidator.isValid(cnpj)) { return new Error('CNPJ is invalid!'); }

    if((arable_hectare + vegetation_hectare) > total_farm_hectare) {
      return new Error('Arable and Vegetation area cannot be greater than total farm area!');
    }

    producer.cpf = cpfValidator.format(cpf);
    producer.cnpj = cnpjValidator.format(cnpj);
    return this.producersRepository.save(producer);
  }

  async getAll() {
    return this.producersRepository.getAll();
  }

  async delete(id: string) {
    const producer = await this.producersRepository.findOne({ id })

    if(!producer) {
      return new Error('Producer does not exists!');
    }

    return this.producersRepository.delete({ id });
  }

  async update(producerToUpdate: ProducerUpdateRequest) {
    const { id } = producerToUpdate
    let producer = await this.producersRepository.findOne({ id });
    if(!producer) { return new Error('Producer does not exists!'); }

    return this.producersRepository.save({ ...producer, ...producerToUpdate });
  }
}
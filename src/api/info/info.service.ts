import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Culture } from '../../models/culture.model';
import { Producer } from '../../models/producer.model';

@Injectable()
export class InfoService {
  constructor(@InjectRepository(Culture) private cultureModel: Repository<Culture>,
  @InjectRepository(Producer) private producerModel: Repository<Producer>) {}

  async getGeneralInfo() {
    return this.producerModel
      .createQueryBuilder('producer')
      .select('COUNT(producer)', 'total_farm')
      .addSelect('SUM(producer.total_farm_hectare)', 'total_farm_hectare')
      .addSelect('SUM(producer.arable_hectare)', 'total_arable_hectare')
      .addSelect('SUM(producer.vegetation_hectare)', 'total_vegetation_hectare')
      .getRawOne();
  }

  async getStatesInfo() {
    return this.producerModel
      .createQueryBuilder('producer')
      .select('producer.state')
      .addSelect('SUM(producer.total_farm_hectare) AS total_farm_hectare')
      .addSelect('SUM(producer.arable_hectare) AS arable_hectare')
      .addSelect('SUM(producer.vegetation_hectare) AS vegetation_hectare')
      .addSelect('COUNT(producer)', 'total_farm')
      .groupBy('producer.state')
      .distinctOn(['producer.state'])
      .getRawMany();
  }

  async getCulturesInfo() {
    return this.cultureModel
      .createQueryBuilder('culture')
      .select('culture.culture_name')
      .distinctOn(['culture.culture_name'])
      .addSelect('COUNT(culture)', 'total_culture')
      .groupBy('culture.culture_name')
      .getRawMany();
  }

  async getGroundInfo() {
    return this.producerModel
      .createQueryBuilder('producer')
      .select('COUNT(producer)', 'total_farm')
      .addSelect('SUM(producer.total_farm_hectare)', 'total_farm_hectare')
      .addSelect('SUM(producer.arable_hectare)', 'total_arable_hectare')
      .addSelect('SUM(producer.vegetation_hectare)', 'total_vegetation_hectare')
      .getRawOne();
  }
}

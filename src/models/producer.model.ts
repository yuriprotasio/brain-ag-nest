import { Entity, Column, CreateDateColumn, PrimaryColumn } from 'typeorm';

@Entity('producers')
export class Producer {
  @PrimaryColumn()
  id: string;

  @Column()
  cpf: string;
  @Column()
  cnpj: string;
  @Column()
  producer_name: string;
  @Column()
  farm_name: string;
  @Column()
  city: string;
  @Column()
  state: string;
  @Column()
  total_farm_hectare: number;
  @Column()
  arable_hectare: number;
  @Column()
  vegetation_hectare: number;
  @CreateDateColumn()
  created_at: Date;
}
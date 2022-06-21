import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Producer } from './producer.model';

@Entity('cultures')
export class Culture {
  @PrimaryColumn()
  id: string;

  @Column()
  producer_id: string;

  @ManyToOne(() => Producer)
  @JoinColumn({ name: 'producer_id' })
  producer: Producer;

  @Column()
  culture_name: string;
}
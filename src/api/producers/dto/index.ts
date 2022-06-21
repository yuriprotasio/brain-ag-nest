export type ProducerCreateRequest = {
  cpf: string;
  cnpj: string;
  producer_name: string;
  farm_name: string;
  city: string;
  state: string;
  total_farm_hectare: number;
  arable_hectare: number;
  vegetation_hectare: number;
}

export type ProducerUpdateRequest = {
  id: string;
  cpf: string;
  cnpj: string;
  producer_name: string;
  farm_name: string;
  city: string;
  state: string;
  total_farm_hectare: number;
  arable_hectare: number;
  vegetation_hectare: number;
}
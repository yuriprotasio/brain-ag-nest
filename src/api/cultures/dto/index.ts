export type CultureCreateRequest = {
  producer_id: string;
  culture_name: string;
}

export type CultureUpdateRequest = {
  id: string;
  producer_id: string;
  culture_name: string;
}
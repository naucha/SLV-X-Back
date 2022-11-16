export interface Mobile {
  id: number;
  brand: string;
  model: string;
  rate: number;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: number;
  mobile_id: number;
  created_at: string;
  updated_at: string;
}

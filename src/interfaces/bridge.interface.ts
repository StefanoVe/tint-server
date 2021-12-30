export interface discoveryResponse {
  id: string;
  internalipaddress: string;
  port: number;
}

export interface authResponse {
  error?: {
    type: number;
    address: string;
    description: string;
  };
  success?: {
    username: string;
  };
}

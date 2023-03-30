export type CryptoOrderStatus = 'completed' | 'pending' | 'failed';

export interface CryptoOrder {
  id: string;
  status:string;
  title: string;
  description: string;
  // orderDate: number;
  // orderID: string;
  sourceName: string;
  sourceDesc: string;
  amountCrypto: number;
  // amount: number;
  // cryptoCurrency: string;
  // currency: string;
}

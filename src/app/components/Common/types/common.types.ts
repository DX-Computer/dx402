export interface SuccessData {
  message: string;
  txHash?: string;
}

export interface ErrorData {
  message: string;
}

export interface Dictionary {
  common: {
    ready: string;
    supermarket: string;
  };
}

export interface Product {
  id: bigint;
  uri: string;
  likes: bigint;
  dislikes: bigint;
  exists: boolean;
}

export interface Comment {
  author: `0x${string}`;
  productId: bigint;
  uri: string;
  timestamp: bigint;
  exists: boolean;
}

export interface ProductMetadata {
  name: string;
  description: string;
  front: string;
  back: string;
}
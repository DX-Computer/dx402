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

import { useEffect, useState } from "react";
import { INFURA_GATEWAY } from "@/app/lib/constants";
import { ProductMetadata } from "../types/common.types";


export function useProductMetadata(uri: string) {
  const [metadata, setMetadata] = useState<ProductMetadata | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!uri) {
      setIsLoading(false);
      return;
    }

    const fetchMetadata = async () => {
      try {
        setIsLoading(true);
        const ipfsHash = uri.replace("ipfs://", "");
        const url = `${INFURA_GATEWAY}/ipfs/${ipfsHash}`;

        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch metadata");

        const data = await response.json();
        setMetadata(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMetadata();
  }, [uri]);

  return { metadata, isLoading, error };
}

export function getIPFSUrl(ipfsUri: string): string {
  if (!ipfsUri) return "";
  const hash = ipfsUri.replace("ipfs://", "");
  return `${INFURA_GATEWAY}/ipfs/${hash}`;
}
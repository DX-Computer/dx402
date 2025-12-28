import { SUPERMERCADO } from "@/app/lib/constants";
import { useReadContract } from "wagmi";
import SuperABI from "./../../../abis/dx402Supermarket.json";

export function useProductCount() {
  const result = useReadContract({
    address: SUPERMERCADO,
    abi: SuperABI,
    functionName: "productCount",
  });

  return result;
}

export function useProduct(productId: bigint) {
  return useReadContract({
    address: SUPERMERCADO,
    abi: SuperABI,
    functionName: "products",
    args: [productId],
  }) as {
    data: readonly [bigint, bigint, bigint, boolean, string] | undefined;
    isLoading: boolean;
    error: Error | null;
  };
}

export function useProductComments(productId: bigint) {
  return useReadContract({
    address: SUPERMERCADO,
    abi: SuperABI,
    functionName: "getProductComments",
    args: [productId],
  }) as {
    data: readonly bigint[] | undefined;
    isLoading: boolean;
    error: Error | null;
  };
}

export function useComment(commentId: bigint) {
  return useReadContract({
    address: SUPERMERCADO,
    abi: SuperABI,
    functionName: "getComment",
    args: [commentId],
  });
}

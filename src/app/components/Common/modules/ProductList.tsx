"use client";
import { FunctionComponent, JSX } from "react";
import Image from "next/image";
import { useProductCount, useProduct, useProductComments } from "../hooks/useSupermarket";
import { useProductMetadata, getIPFSUrl } from "../hooks/useIPFS";
import { SUPERMERCADO } from "@/app/lib/constants";

const ProductCard: FunctionComponent<{ productId: bigint }> = ({
  productId,
}) => {
  const {
    data: product,
    isLoading: productLoading,
    error: productError,
  } = useProduct(productId);

  const {
    metadata,
    isLoading: metadataLoading,
    error: metadataError,
  } = useProductMetadata(product?.[4] || "");

  const { data: commentIds } = useProductComments(productId);

  if (productLoading || metadataLoading) {
    return (
      <div className="flex relative flex-col w-full p-3 bg-win-gray border-2 border-win-dark">
        <span className="text-xs text-black">Carregando...</span>
      </div>
    );
  }

  if (productError) {
    return (
      <div className="flex relative flex-col w-full p-3 bg-win-gray border-2 border-win-dark">
        <span className="text-xs text-red-600">
          Erro produto: {productError.message}
        </span>
      </div>
    );
  }

  if (metadataError) {
    return (
      <div className="flex relative flex-col w-full p-3 bg-win-gray border-2 border-win-dark">
        <span className="text-xs text-red-600">
          Erro metadata: {metadataError.message}
        </span>
      </div>
    );
  }

  if (!product || !product[4] || !metadata) return null;

  return (
    <div className="flex relative flex-col w-full p-3 bg-win-gray border-t-2 border-l-2 border-win-light border-r-2 border-b-2 border-r-win-dark border-b-win-dark gap-3 hover:bg-win-hover">
      <div className="flex relative flex-row items-center justify-between">
        <span className="text-sm font-bold text-black">{metadata.name}</span>
        <div className="flex relative flex-row gap-2">
          <span className="text-xs text-black">👍 {product[1].toString()}</span>
          <span className="text-xs text-black">👎 {product[2].toString()}</span>
        </div>
      </div>

      <div className="flex relative flex-row gap-4 w-full">
        <div className="flex relative flex-col gap-1">
          <span className="text-xs text-black font-bold">Frente</span>
          <Image
            draggable={false}
            src={getIPFSUrl(metadata.front)}
            alt={`${metadata.name} front`}
            width={192}
            height={225}
            className="object-cover border border-win-dark"
          />
        </div>
        <div className="flex relative flex-col gap-1">
          <span className="text-xs text-black font-bold">Trás</span>
          <Image
            src={getIPFSUrl(metadata.back)}
            alt={`${metadata.name} back`}
            width={192}
            draggable={false}
            height={225}
            className="object-cover border border-win-dark"
          />
        </div>
      </div>

      <p className="text-xs text-black">{metadata.description}</p>

      <div className="flex relative flex-col gap-2 mt-2 pt-2 border-t border-win-dark">
        <span className="text-xs font-bold text-black">
          Comentários ({commentIds?.length || 0})
        </span>
        {!commentIds || commentIds.length === 0 ? (
          <span className="text-xs text-black italic">
            Nenhum comentário disponível
          </span>
        ) : (
          <span className="text-xs text-black">
            {commentIds.length} comentário{commentIds.length > 1 ? "s" : ""}
          </span>
        )}
      </div>
    </div>
  );
};

const ProductList: FunctionComponent = (): JSX.Element => {
  const { data: count, isLoading, error } = useProductCount();

  if (isLoading) {
    return (
      <div className="flex relative flex-col w-full h-full items-center justify-center">
        <span className="text-black">Carregando produtos...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex relative flex-col w-full h-full items-center justify-center">
        <span className="text-black">Erro: {error.message}</span>
      </div>
    );
  }

  if (!count || count === 0n) {
    return (
      <div className="flex relative flex-col w-full h-full items-center justify-center">
        <span className="text-black">Nenhum produto disponível</span>
      </div>
    );
  }

  const productIds = Array.from({ length: Number(count) }, (_, i) =>
    BigInt(i + 1)
  );

  return (
    <div className="flex relative flex-col w-full h-full overflow-y-auto">
      <div className="flex relative flex-col p-4 gap-3">
        <div className="flex relative flex-col gap-2 mb-3 p-3 bg-win-light border-2 border-win-dark">
          <h2 className="text-xl font-bold text-black">SUPERMERCADO</h2>
          <div className="flex relative flex-col gap-1 text-xs text-black">
            <p className="font-bold">Como usar:</p>
            <p>• Agentes podem comentar, gostar e desgostar de produtos</p>
            <p>• Pagamentos são processados automaticamente via X402</p>
            <p>• Cada ação tem um custo em tokens que é debitado automaticamente</p>
            <p>• Produtos com gostos/comentários suficientes se convertem em NFTs para comprar e vestir</p>
            <p className="italic mt-1">Apenas agentes com X402 configurado podem interagir</p>
          </div>
          <div className="flex relative flex-col gap-1 mt-2 pt-2 border-t border-win-dark">
            <p className="font-bold text-xs text-black">Instruções para agentes:</p>
            <div className="flex relative flex-col p-2 bg-white border border-win-dark text-xs text-black break-all font-mono">
              <p>Contrato: {SUPERMERCADO}</p>
              <p>Rede: Lens Network (Chain ID: 232)</p>
              <p className="mt-1">Funções disponíveis:</p>
              <p>• createComment(productId, content) - 0.002 tokens</p>
              <p>• likeProduct(productId) - 0.001 tokens</p>
              <p>• dislikeProduct(productId) - 0.001 tokens</p>
              <p className="mt-1 italic">Copie e cole para uma máquina</p>
            </div>
          </div>
        </div>
        {productIds.map((id) => (
          <ProductCard key={id.toString()} productId={id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

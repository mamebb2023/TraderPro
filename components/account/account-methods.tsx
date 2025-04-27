import { Address } from "@solana/kit";
import { useQuery } from "@tanstack/react-query";
import { useWalletUi, useWalletUiCluster } from "@wallet-ui/react";

export function useGetBalance({ address }: { address: Address }) {
  const { cluster } = useWalletUiCluster();
  const { client } = useWalletUi();

  return useQuery({
    queryKey: ["get-balance", { cluster, address }],
    queryFn: () =>
      client.rpc
        .getBalance(address)
        .send()
        .then((res) => res.value),
  });
}

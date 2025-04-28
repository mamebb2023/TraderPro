import { Address, isAddress } from "@solana/kit";
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

export function useGetTokenAccounts({ address }: { address: Address }) {
  const { cluster } = useWalletUiCluster();
  const { client } = useWalletUi();

  const TOKEN_PROGRAM_ADDRESS =
    "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA" as Address<string>;
  const TOKEN_2022_PROGRAM_ADDRESS =
    "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb" as Address<string>;

  return useQuery({
    queryKey: ["get-token-accounts", { cluster, address }],
    queryFn: async () =>
      Promise.all([
        client.rpc
          .getTokenAccountsByOwner(
            address,
            { programId: TOKEN_PROGRAM_ADDRESS },
            { commitment: "confirmed", encoding: "jsonParsed" }
          )
          .send()
          .then((res) => res.value ?? []),
        client.rpc
          .getTokenAccountsByOwner(
            address,
            { programId: TOKEN_2022_PROGRAM_ADDRESS },
            { commitment: "confirmed", encoding: "jsonParsed" }
          )
          .send()
          .then((res) => res.value ?? []),
      ]).then(([tokenAccounts, token2022Accounts]) => [
        ...tokenAccounts,
        ...token2022Accounts,
      ]),
  });
}

export function useGetSignatures({ address }: { address: Address }) {
  const { cluster } = useWalletUiCluster();
  const { client } = useWalletUi();

  return useQuery({
    queryKey: ["get-signatures", { cluster, address }],
    queryFn: () => client.rpc.getSignaturesForAddress(address).send(),
  });
}

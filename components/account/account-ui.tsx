"use client";

import { ellipsify, lamportsToSol } from "@/lib/utils";
import { Address } from "@solana/kit";
import {
  useGetBalance,
  useGetSignatures,
  useGetTokenAccounts,
} from "./account-methods";
import { useMemo, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Button from "../shared/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Loading from "../shared/Loading";
import Copy from "../shared/Copy";
// https://nd-326-444-187.p2pify.com/9de47db917d4f69168e3fed02217d15b/

export function AccountBalance({ address }: { address: Address }) {
  const query = useGetBalance({ address });

  return query.data ? lamportsToSol(Number(query.data)) : "...";
}

export function AccountTokens({ address }: { address: Address }) {
  const [showAll, setShowAll] = useState(false);
  const query = useGetTokenAccounts({ address });
  const client = useQueryClient();
  const items = useMemo(() => {
    if (showAll) return query.data;
    return query.data?.slice(0, 5);
  }, [query.data, showAll]);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Token Accounts</h2>
        <div className="space-x-2">
          {query.isLoading ? (
            <Loading />
          ) : (
            <Button
              variant="outline"
              onClick={async () => {
                await query.refetch();
                await client.invalidateQueries({
                  queryKey: ["getTokenAccountBalance"],
                });
              }}
              customStyles="flex-center p-1 rounded-full hover:bg-white/10 transition-all border cursor-pointer text-sm"
            >
              <i className="bx bx-refresh"></i>
            </Button>
          )}
        </div>
      </div>
      {query.isError && (
        <pre className="alert alert-error">
          Error: {query.error?.message.toString()}
        </pre>
      )}
      {query.isSuccess && (
        <div>
          {query.data.length === 0 ? (
            <div>No token accounts found.</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Public Key</TableHead>
                  <TableHead>Mint</TableHead>
                  <TableHead className="text-right">Balance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items?.map(({ account, pubkey }) => (
                  <TableRow key={pubkey.toString()}>
                    <TableCell>
                      <div className="flex space-x-2">
                        <span className="font-mono">
                          {ellipsify(pubkey.toString())}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <span className="font-mono">
                          {ellipsify(account.data.parsed.info.mint)}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <span className="font-mono">
                        {account.data.parsed.info.tokenAmount.uiAmount}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}

                {(query.data?.length ?? 0) > 5 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center">
                      <Button
                        variant="outline"
                        onClick={() => setShowAll(!showAll)}
                      >
                        {showAll ? "Show Less" : "Show All"}
                      </Button>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </div>
      )}
    </div>
  );
}

export function AccountTransactions({ address }: { address: Address }) {
  const query = useGetSignatures({ address });
  const [showAll, setShowAll] = useState(false);

  const items = useMemo(() => {
    if (showAll) return query.data;
    return query.data?.slice(0, 5);
  }, [query.data, showAll]);

  return (
    <div className="space-y-2 text-white">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Transaction History</h2>
        <div className="space-x-2">
          {query.isLoading ? (
            <Loading />
          ) : (
            <Button
              variant="outline"
              onClick={() => query.refetch()}
              customStyles="flex-center p-1 rounded-full hover:bg-white/10 transition-all border cursor-pointer text-sm"
            >
              <i className="bx bx-refresh"></i>
            </Button>
          )}
        </div>
      </div>
      {query.isError && (
        <pre className="alert alert-error">
          Error: {query.error?.message.toString()}
        </pre>
      )}
      {query.isSuccess && (
        <div>
          {query.data.length === 0 ? (
            <div>No transactions found.</div>
          ) : (
            <Table className="bg-glass border-none">
              <TableHeader>
                <TableRow>
                  <TableHead>Signature</TableHead>
                  <TableHead className="text-right">Slot</TableHead>
                  <TableHead>Block Time</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items?.map((item) => (
                  <TableRow key={item.signature}>
                    <TableHead className="font-mono flex items-center gap-2">
                      {ellipsify(item.signature, 8)}{" "}
                      <Copy address={item.signature} />
                    </TableHead>
                    <TableCell className="font-mono text-right">
                      {item.slot.toString()}{" "}
                    </TableCell>
                    <TableCell>
                      {new Date(
                        (Number(item.blockTime) ?? 0) * 1000
                      ).toISOString()}
                    </TableCell>
                    <TableCell className="text-right">
                      {item.err ? (
                        <span
                          className="text-red-500"
                          title={item.err.toString()}
                        >
                          Failed
                        </span>
                      ) : (
                        <span className="text-green-500">Success</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
                {(query.data?.length ?? 0) > 5 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center">
                      <Button
                        variant="outline"
                        onClick={() => setShowAll(!showAll)}
                      >
                        {showAll ? "Show Less" : "Show All"}
                      </Button>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </div>
      )}
    </div>
  );
}

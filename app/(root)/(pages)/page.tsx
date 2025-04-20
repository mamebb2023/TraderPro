"use client";

import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>You are not signed in.</p>;

  return (
    <div>
      <p>Wallet Address: {session.user.wallet}</p>
      <p>User ID: {session.user.id}</p>
    </div>
  );
}

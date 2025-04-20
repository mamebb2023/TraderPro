import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      wallet: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    wallet: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    wallet: string;
  }
}

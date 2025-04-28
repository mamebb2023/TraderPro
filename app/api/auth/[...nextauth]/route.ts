// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import type { AuthOptions } from "next-auth";
import dbConnect from "@/lib/dbConnect";

// Initialize mongoose models
async function initModels() {
  await dbConnect();
}

// Call this once when the server starts
initModels().catch(console.error);

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Wallet",
      credentials: {
        wallet: { label: "Wallet Address", type: "text" },
      },
      async authorize(credentials) {
        try {
          const { wallet } = credentials ?? {};
          if (!wallet) {
            throw new Error("Wallet address is required");
          }

          // Verify the signature would go here
          const isValid = true; // await verifyWalletSignature(wallet, message, signature);

          if (!isValid) {
            throw new Error("Invalid signature");
          }

          // Ensure connection is active
          await dbConnect();

          let user = await User.findOne({ wallet }).exec();

          if (!user) {
            user = await User.create({ 
              wallet,
              createdAt: new Date(),
            });
          }

          return {
            id: user._id.toString(),
            wallet: user.wallet,
          };
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.wallet = user.wallet;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.wallet = token.wallet as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
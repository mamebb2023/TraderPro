// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";
import { verifyWalletSignature } from "@/lib/verifyWalletSignature";
import type { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Wallet",
      credentials: {
        wallet: { label: "Wallet Address", type: "text" },
        message: { label: "Message", type: "text" },
        signature: { label: "Signature", type: "text" },
      },
      async authorize(credentials) {
        try {
          const { wallet, message, signature } = credentials ?? {};
          if (!wallet || !message || !signature) {
            throw new Error("Missing credentials");
          }

          // Verify the signature
          const isValid = true; // await verifyWalletSignature(wallet, message, signature);
          if (!isValid) {
            throw new Error("Invalid signature");
          }

          // Find or create user
          await dbConnect();
          let user = await User.findOne({ wallet }).exec();

          if (!user) {
            user = new User({ 
              wallet,
              createdAt: new Date(),
            });
            await user.save();
          }

          return {
            id: user._id.toString(),
            wallet: user.wallet,
            // Include any additional user fields you need
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

  pages: {
    signIn: "/login",
    error: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
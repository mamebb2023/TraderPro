"use client";

import Button from "@/components/shared/Button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Input from "@/components/shared/Input";

const Page = () => {
  const [wallet, setWallet] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      wallet,
      password,
    });

    if (res?.error) {
      setError(res.error);
    } else if (res?.ok) {
      router.push("/dashboard");
    }

    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-md bg-glass backdrop-blur-sm rounded-xl shadow-lg p-8 border border-indigo-100/20">
      <div className="flex-center flex-col mb-6">
        <h1 className="text-3xl font-bold mb-2 gradient-underline">
          Welcome back
        </h1>
        <p className="text-indigo-200">Sign in to your account</p>
      </div>

      {error && (
        <div className="bg-rose-500/10 border-l-4 border-rose-400 text-rose-200 p-4 mb-4 rounded">
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          label="Wallet Address"
          htmlFor="wallet"
          required
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
          placeholder="BTCBZ6hrc..."
        />

        <Input
          type="password"
          label="Password"
          htmlFor="password"
          required
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="*********"
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-indigo-400 focus:ring-indigo-500 border-indigo-300 rounded bg-indigo-900/20"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-indigo-100"
            >
              Remember me
            </label>
          </div>

          <Link
            href="/forgot-password"
            className="text-sm font-medium text-indigo-300 hover:text-indigo-200 transition"
          >
            Forgot password?
          </Link>
        </div>

        <Button disabled={isLoading} type="submit" className="w-full">
          Log In
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-indigo-200">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-indigo-300 hover:text-indigo-200 transition"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Page;

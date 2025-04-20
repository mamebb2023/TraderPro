"use client";

import Button from "@/components/shared/Button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/shared/Input";

const Page = () => {
  const [wallet, setWallet] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Validate passwords match
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      // Validate wallet address format (basic check) if 32 bytes

      // API call to register
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ wallet, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Registration failed");
      }

      // Redirect to login after successful registration
      router.push("/login");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-glass rounded-xl shadow-lg p-8 border border-indigo-100/20">
      <div className="flex-center flex-col mb-4">
        <h1 className="text-3xl font-bold mb-2 text-white gradient-underline">
          Create Account
        </h1>
        <p className="text-indigo-200 mb-2">Join our platform</p>
        <div className="text-xs bg-indigo-900/60 text-white p-3 rounded-lg w-full text-center mb-4">
          <i className="bx bx-info-circle"></i> Please register with the{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-dino via-ocean-blue to-surge-green">
            SOLANA
          </span>{" "}
          wallet you can make purchases on, payments are verified based on your
          wallet address
        </div>
      </div>

      {error && (
        <div className="bg-rose-500/10 border-l-4 border-rose-400 text-rose-200 p-4 mb-4 rounded">
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          id="wallet"
          name="wallet"
          label="Wallet Address"
          type="text"
          required
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
          placeholder="BTCBZ6hrc..."
        />

        <Input
          id="password"
          name="password"
          label="Password"
          type="password"
          required
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
        />

        <Input
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          required
          minLength={8}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="••••••••"
        />

        <Button disabled={isLoading} type="submit" className="w-full">
          Register
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-indigo-200">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-indigo-300 hover:text-indigo-200 transition"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Page;

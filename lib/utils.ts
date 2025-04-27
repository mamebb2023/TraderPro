import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function ellipsify(str = "", len = 4, delimiter = "..") {
  const strLen = str.length;
  const limit = len * 2 + delimiter.length;

  return strLen >= limit
    ? str.substring(0, len) + delimiter + str.substring(strLen - len, strLen)
    : str;
}

export const formatAddress = (address: string) => {
  if (address.length <= 9) return address;
  return `${address.slice(0, 5)}...${address.slice(-4)}`;
};

export const lamportsToSol = (lamports: number) => {
  return lamports / 1_000_000_000;
};

export const copy = (text: string) => {
  if (text) {
    navigator.clipboard.writeText(text);
  }
}
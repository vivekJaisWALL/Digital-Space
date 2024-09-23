import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: "USD" | "EUR" | "INR" | "GBP" | "AUD" | "JPY",
    notation?: Intl.NumberFormatOptions["notation"]
  } = {}
){
  const {currency = "INR", notation = "compact"} = options; //setting the default values
  const numericPrice= typeof price === "string" ? parseFloat(price) : price;

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 2
  }).format(numericPrice);
}
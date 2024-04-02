"use client"

import { CartProvider } from "use-shopping-cart"
import { Toaster } from "@/components/ui/toaster"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

// interface Props {
//   children: React.ReactNode
// }

export function Providers({ children }) {

  return <CartProvider cartMode="checkout-session" shouldPersist><ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <Toaster /> {children}<TailwindIndicator /></ThemeProvider></CartProvider>
}

import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Static Export",
  description: "Here is how we can supply a static website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col h-screen w-screen justify-center items-center">
          {children}
        </main>
      </body>
    </html>
  )
}

"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Weather App",
  description: "Generated live weather forecast by weather app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <link rel="icon" href="/img/favicon.ico" sizes="any" />
        <body className={inter.className}>{children}</body>
      </QueryClientProvider>
    </html>
  );
}

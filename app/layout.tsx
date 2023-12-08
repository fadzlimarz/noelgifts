import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/components/twemoji/twemoji.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noel Gifts",
  description: `'Tis the season`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}, p-6 container mx-auto`}>
        <ThemeProvider attribute="class" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

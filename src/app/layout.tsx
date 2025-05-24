import type { Metadata } from "next";
import { Karla, Montserrat } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";
import { Header } from "@/components/app-shell/Header";
import { Footer } from "@/components/app-shell/Footer";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Front-End Test Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${karla.variable} ${montserrat.variable} antialiased`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

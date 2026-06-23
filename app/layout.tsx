import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lonextech — Full-Stack Web Developer",
  description:
    "Dike Precious — Full-Stack Web Developer building premium digital products with Next.js, Laravel, and modern web technologies. Based in Nigeria, available worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${jakarta.variable}`}>
      <body className="min-h-[100dvh] bg-bg text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

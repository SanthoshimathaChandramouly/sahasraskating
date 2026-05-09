import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sahasra Ramasamy | Figure Skater",
  description: "A journey built on hard work, passion, resilience, and artistry — from first steps on ice at age 5 to competitive excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

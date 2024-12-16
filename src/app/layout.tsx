import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "./ui/nav";
import { montserrat } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}>
        <div className="mx-auto w-11/12 md:w-3/4 lg:w-2/3 xl:w-2/3">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
